// Spuštění: node --test web-automation/system/
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, copyFileSync, writeFileSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'
import {
  loadRegistry, decide, audit, stale, addClaim, addSuppression, normIco, normDomain,
} from './guard.mjs'

const here = dirname(fileURLToPath(import.meta.url))

function sandbox(configPatch = {}) {
  const root = mkdtempSync(join(tmpdir(), 'registry-'))
  const registry = join(root, 'registry')
  mkdirSync(registry)
  copyFileSync(join(here, 'campaigns.json'), join(root, 'campaigns.json'))
  const config = { ...JSON.parse(readFileSync(join(here, 'config.json'), 'utf8')), ...configPatch }
  writeFileSync(join(root, 'config.json'), JSON.stringify(config))
  return { root, registry, cleanup: () => rmSync(root, { recursive: true, force: true }) }
}

const claim = (over) => ({
  ico: '12345678', domena: 'firma.cz', email: '', firma: 'Firma', kampan: 'eshopy', vlastnik: 'max',
  stav: 'aktivni', pravni_zaklad: '', zalozeno: '2026-10-01', posledni_kontakt: '', odstup_do: '', ...over,
})
const ctx = (over) => ({ campaign: 'velkoobchody', owner: 'oliver', mode: 'claim', today: '2026-10-10', ...over })

test('normalizace klíčů', () => {
  assert.equal(normIco('123 456 78'), '12345678')
  assert.equal(normIco('1234567'), '01234567')
  assert.equal(normIco('abc'), null)
  assert.equal(normDomain('https://www.Firma.cz/kontakt?x=1'), 'firma.cz')
  assert.equal(normDomain('jan@firma.cz'), 'firma.cz')
  assert.equal(normDomain('jan@gmail.com'), null)
})

test('nová firma projde', () => {
  const s = sandbox()
  const r = decide(loadRegistry(s.registry), { ico: '11111111', domena: 'nova.cz' }, ctx())
  assert.equal(r.ok, true)
  s.cleanup()
})

test('firma bez IČO i domény se odmítne', () => {
  const s = sandbox()
  assert.equal(decide(loadRegistry(s.registry), { email: 'jan@gmail.com' }, ctx()).code, 'bez_klice')
  s.cleanup()
})

test('stejné IČO v e-shopech a ve velkoobchodech: odmítnuto do konce odstupu', () => {
  const s = sandbox()
  addClaim(s.registry, claim({ stav: 'uzavreno', odstup_do: '2026-12-01' }))
  const reg = loadRegistry(s.registry)
  const r = decide(reg, { ico: '12345678' }, ctx())
  assert.equal(r.ok, false)
  assert.equal(r.code, 'cizi_odstup')
  assert.match(r.reason, /do 2026-12-01/)
  assert.equal(decide(reg, { ico: '12345678' }, ctx({ today: '2026-12-02' })).ok, true)
  s.cleanup()
})

test('aktivní firma v cizí kampani se nesmí oslovit podle IČO ani podle domény', () => {
  const s = sandbox()
  addClaim(s.registry, claim())
  const reg = loadRegistry(s.registry)
  assert.equal(decide(reg, { ico: '12345678' }, ctx()).code, 'cizi_aktivni')
  assert.equal(decide(reg, { domena: 'www.firma.cz' }, ctx()).code, 'cizi_aktivni')
  s.cleanup()
})

test('zájemce nebo zákazník je zablokovaný trvale', () => {
  const s = sandbox()
  addClaim(s.registry, claim({ stav: 'zajemce' }))
  const r = decide(loadRegistry(s.registry), { ico: '12345678' }, ctx({ today: '2030-01-01' }))
  assert.equal(r.code, 'cizi_zajemce')
  s.cleanup()
})

test('odhlášení podle domény zablokuje všechny kampaně a všechny adresy na doméně', () => {
  const s = sandbox()
  addSuppression(s.registry, { typ: 'domena', hodnota: 'odhlaseno.cz', duvod: 'STOP z e-shopů', kanal: 'email', datum: '2026-10-01' })
  const reg = loadRegistry(s.registry)
  for (const campaign of ['eshopy', 'velkoobchody', 'chemie', 'servisni_firmy']) {
    const r = decide(reg, { email: 'nekdo@odhlaseno.cz', ico: '99999999' }, ctx({ campaign }))
    assert.equal(r.code, 'odhlaseno', campaign)
  }
  s.cleanup()
})

test('odhlášení podle IČO a e-mailu', () => {
  const s = sandbox()
  addSuppression(s.registry, { typ: 'ico', hodnota: '22222222', duvod: '', kanal: '', datum: '2026-10-01' })
  addSuppression(s.registry, { typ: 'email', hodnota: 'Jan@Firma.cz', duvod: '', kanal: '', datum: '2026-10-01' })
  const reg = loadRegistry(s.registry)
  assert.equal(decide(reg, { ico: '22222222' }, ctx()).code, 'odhlaseno')
  assert.equal(decide(reg, { ico: '33333333', email: 'jan@firma.cz' }, ctx()).code, 'odhlaseno')
  s.cleanup()
})

test('chemie: IČO ze seznamu a obory CZ NACE 20 a 46.75 jsou pro weby zakázané, chemie samotná smí', () => {
  const s = sandbox()
  writeFileSync(join(s.registry, 'excluded-chemie.csv'), 'ico,firma,poznamka\n44444444,Chemik,\n')
  const reg = loadRegistry(s.registry)
  for (const campaign of ['eshopy', 'velkoobchody', 'zakazkovi_vyrobci', 'servisni_firmy']) {
    assert.equal(decide(reg, { ico: '44444444' }, ctx({ campaign })).code, 'chemie', campaign)
  }
  assert.equal(decide(reg, { ico: '55555555', nace: '20.13' }, ctx()).code, 'chemie')
  assert.equal(decide(reg, { ico: '55555555', nace: '46.75' }, ctx()).code, 'chemie')
  assert.equal(decide(reg, { ico: '55555555', nace: '46.76' }, ctx()).ok, true)
  assert.equal(decide(reg, { ico: '55555555', nace: '25.62' }, ctx()).ok, true)
  assert.equal(decide(reg, { ico: '44444444', nace: '20.13' }, ctx({ campaign: 'chemie', owner: 'david' })).ok, true)
  s.cleanup()
})

test('kontakt: jen vlastník přidělení, jen s právním základem pro mail', () => {
  const s = sandbox()
  addClaim(s.registry, claim({ kampan: 'velkoobchody', vlastnik: 'oliver', pravni_zaklad: 'opravneny_zajem_overit_pravnikem' }))
  const reg = loadRegistry(s.registry)
  const base = { campaign: 'velkoobchody', mode: 'contact', today: '2026-10-10' }
  assert.equal(decide(reg, { ico: '12345678' }, { ...base, owner: 'oliver', channel: 'linkedin' }).ok, true)
  assert.equal(decide(reg, { ico: '12345678' }, { ...base, owner: 'oliver', channel: 'email' }).code, 'pravni_zaklad')
  assert.equal(decide(reg, { ico: '12345678' }, { ...base, owner: 'david', channel: 'linkedin' }).code, 'cizi_aktivni')
  s.cleanup()
})

test('kontakt: mail po žádosti projde, v režimu B i bez ní', () => {
  const s = sandbox()
  addClaim(s.registry, claim({ kampan: 'velkoobchody', vlastnik: 'oliver', pravni_zaklad: 'zadost_o_email' }))
  const c = { campaign: 'velkoobchody', owner: 'oliver', channel: 'email', mode: 'contact', today: '2026-10-10' }
  assert.equal(decide(loadRegistry(s.registry), { ico: '12345678' }, c).ok, true)
  s.cleanup()
  const t = sandbox({ mailRegimeB: true })
  addClaim(t.registry, claim({ kampan: 'velkoobchody', vlastnik: 'oliver', pravni_zaklad: '' }))
  assert.equal(decide(loadRegistry(t.registry), { ico: '12345678' }, c).ok, true)
  t.cleanup()
})

test('kontakt: denní limit a vypínač', () => {
  const s = sandbox({ dailyCaps: { linkedin: 1, email: 20, post: 10, phone: 15 } })
  addClaim(s.registry, claim({ kampan: 'velkoobchody', vlastnik: 'oliver' }))
  const c = { campaign: 'velkoobchody', owner: 'oliver', channel: 'linkedin', mode: 'contact', today: '2026-10-10' }
  assert.equal(decide(loadRegistry(s.registry), { ico: '12345678' }, c).ok, true)
  writeFileSync(join(s.registry, 'contacts-oliver.csv'), 'datum,ico,domena,kampan,vlastnik,kanal\n2026-10-10,99999999,x.cz,velkoobchody,oliver,linkedin\n')
  assert.equal(decide(loadRegistry(s.registry), { ico: '12345678' }, c).code, 'limit')
  s.cleanup()

  const p = sandbox({ paused: true })
  assert.equal(decide(loadRegistry(p.registry), { ico: '11111111' }, ctx()).code, 'pozastaveno')
  p.cleanup()
})

test('změna stavu platí podle posledního řádku', () => {
  const s = sandbox()
  addClaim(s.registry, claim({ stav: 'aktivni' }))
  addClaim(s.registry, claim({ stav: 'uzavreno', odstup_do: '2026-12-01' }))
  const reg = loadRegistry(s.registry)
  assert.equal(reg.claims.length, 1)
  assert.equal(reg.claims[0].stav, 'uzavreno')
  s.cleanup()
})

test('audit najde souběh dvou rutin a vybere vítěze podle priority', () => {
  const s = sandbox()
  addClaim(s.registry, claim({ kampan: 'eshopy', vlastnik: 'max', zalozeno: '2026-10-01' }))
  addClaim(s.registry, claim({ kampan: 'velkoobchody', vlastnik: 'oliver', zalozeno: '2026-10-02' }))
  const conflicts = audit(loadRegistry(s.registry))
  assert.ok(conflicts.length >= 1)
  assert.equal(conflicts[0].vitez, 'velkoobchody/oliver')
  assert.deepEqual(conflicts[0].ostatni, ['eshopy/max'])
  s.cleanup()
})

test('zastaralé aktivní přidělení se ohlásí', () => {
  const s = sandbox()
  addClaim(s.registry, claim({ zalozeno: '2026-01-01' }))
  assert.equal(stale(loadRegistry(s.registry), '2026-10-10').length, 1)
  s.cleanup()
})

test('příkazový řádek: z tří kandidátů jeden přidělen a dva odmítnuty', () => {
  const s = sandbox()
  addClaim(s.registry, claim({ ico: '77777777', domena: 'cizi.cz', kampan: 'eshopy', vlastnik: 'max' }))
  addSuppression(s.registry, { typ: 'domena', hodnota: 'odhlaseno.cz', duvod: '', kanal: '', datum: '2026-10-01' })
  const input = join(s.root, 'kandidati.csv')
  writeFileSync(input, 'ico,domena,email,firma,nace\n10101010,nova.cz,,Nová,25.62\n77777777,cizi.cz,,Cizí,\n88888888,odhlaseno.cz,,Odhlášená,\n')
  const run = spawnSync(process.execPath, [
    join(here, 'claim.mjs'), 'claim', '--campaign', 'velkoobchody', '--owner', 'oliver',
    '--in', input, '--registry', s.registry, '--today', '2026-10-10', '--json',
  ], { encoding: 'utf8' })
  assert.equal(run.status, 0, run.stderr)
  const out = JSON.parse(run.stdout)
  assert.equal(out.claimed.length, 1)
  assert.equal(out.rejected.length, 2)
  assert.deepEqual(out.rejected.map((r) => r.kod).sort(), ['cizi_aktivni', 'odhlaseno'])
  // zápis proběhl, druhé spuštění už nepřidělí totéž
  const again = spawnSync(process.execPath, [
    join(here, 'claim.mjs'), 'claim', '--campaign', 'velkoobchody', '--owner', 'oliver',
    '--in', input, '--registry', s.registry, '--today', '2026-10-10', '--json',
  ], { encoding: 'utf8' })
  assert.equal(JSON.parse(again.stdout).claimed.length, 0)
  s.cleanup()
})

test('příkazový řádek: neznámý vlastník se odmítne', () => {
  const s = sandbox()
  const run = spawnSync(process.execPath, [
    join(here, 'claim.mjs'), 'claim', '--campaign', 'velkoobchody', '--owner', 'nikdo', '--in', join(s.root, 'x.csv'), '--registry', s.registry,
  ], { encoding: 'utf8' })
  assert.notEqual(run.status, 0)
  assert.match(run.stderr, /Neznámý vlastník/)
  s.cleanup()
})

test('příkazový řádek: po uzavření bez odstupu může firmu převzít jiná kampaň, po odmítnutí ne', () => {
  const s = sandbox()
  const input = join(s.root, 'k.csv')
  writeFileSync(input, 'ico,domena,firma\n12345678,firma.cz,Firma\n')
  const run = (...args) => spawnSync(process.execPath, [join(here, 'claim.mjs'), ...args, '--registry', s.registry, '--today', '2026-10-10', '--json'], { encoding: 'utf8' })
  assert.equal(run('claim', '--campaign', 'eshopy', '--owner', 'max', '--in', input).status, 0)
  assert.equal(JSON.parse(run('claim', '--campaign', 'velkoobchody', '--owner', 'oliver', '--in', input, '--dry-run').stdout).claimed.length, 0)
  run('state', '--campaign', 'eshopy', '--owner', 'max', '--ico', '12345678', '--stav', 'odmitnuto')
  const blocked = JSON.parse(run('claim', '--campaign', 'velkoobchody', '--owner', 'oliver', '--in', input, '--dry-run').stdout)
  assert.equal(blocked.rejected[0].kod, 'cizi_odstup')
  const later = spawnSync(process.execPath, [join(here, 'claim.mjs'), 'claim', '--campaign', 'velkoobchody', '--owner', 'oliver', '--in', input, '--registry', s.registry, '--today', '2027-06-01', '--dry-run', '--json'], { encoding: 'utf8' })
  assert.equal(JSON.parse(later.stdout).claimed.length, 1)
  s.cleanup()
})
