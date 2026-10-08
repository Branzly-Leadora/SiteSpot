// Společné vektory pro guard.mjs a registry.ts v mhruby. Spuštění: node --test web-automation/system/vectors.test.mjs
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { decide, resolveClaims, normIco, normDomain, normEmail } from './guard.mjs'

const here = dirname(fileURLToPath(import.meta.url))
const vectors = JSON.parse(readFileSync(join(here, 'vectors.json'), 'utf8'))
const readJson = (f) => JSON.parse(readFileSync(join(here, f), 'utf8'))

test('config a campaigns ve vektorech se shodují se soubory (jinak se vektory a konfigurace rozešly)', () => {
  assert.deepEqual(vectors.config, readJson('config.json'))
  assert.deepEqual(vectors.campaigns, readJson('campaigns.json'))
})

function build(vec) {
  const r = vec.registry ?? {}
  const suppression = { email: new Set(), domena: new Set(), ico: new Set() }
  for (const s of r.suppression ?? []) {
    const norm = s.typ === 'email' ? normEmail(s.hodnota) : s.typ === 'domena' ? normDomain(s.hodnota) : normIco(s.hodnota)
    suppression[s.typ].add(norm)
  }
  return {
    config: { ...vectors.config, ...(r.config ?? {}) },
    campaigns: vectors.campaigns,
    claims: resolveClaims((r.claims ?? []).map((c) => ({
      ico: '', domena: '', email: '', firma: '', kampan: 'eshopy', vlastnik: 'max', stav: 'aktivni',
      pravni_zaklad: '', zalozeno: '', posledni_kontakt: '', odstup_do: '', zmeneno: '', ...c,
    }))),
    contacts: (r.contactsBulk ?? []).flatMap((b) =>
      Array.from({ length: b.n }, (_, i) => ({ datum: b.datum, ico: String(90000000 + i), domena: '', kampan: b.kampan, vlastnik: b.vlastnik, kanal: b.kanal }))),
    suppression,
    excludedIco: new Set((r.excludedIco ?? []).map(normIco)),
  }
}

for (const vec of vectors.cases) {
  test(`vektor: ${vec.name}`, () => {
    const res = decide(build(vec), vec.candidate, vec.ctx)
    assert.equal(res.code, vec.expect.code, `${vec.name}: ${res.reason}`)
    assert.equal(res.ok, vec.expect.ok)
  })
}

test('názvy vektorů jsou jedinečné', () => {
  const names = vectors.cases.map((c) => c.name)
  assert.equal(new Set(names).size, names.length)
})
