#!/usr/bin/env node
// Příkazový řádek rejstříku kampaní. Volá ho routine před přípravou a před oslovením.
//   node claim.mjs claim    --campaign K --owner V --in kandidati.csv [--dry-run] [--json]
//   node claim.mjs check    --campaign K --owner V --channel C --ico I --domena D --email E [--nace N]
//   node claim.mjs log      --campaign K --owner V --channel C --ico I --domena D   (zapíše kontakt, jen když projde)
//   node claim.mjs state    --campaign K --owner V --ico I --domena D --stav aktivni|zajemce|zakaznik|uzavreno|odmitnuto
//   node claim.mjs suppress --typ email|domena|ico --hodnota H --duvod "..." [--kanal C]
//   node claim.mjs audit    [--json]
// Společné volby: --registry <složka> (výchozí system/registry), --today YYYY-MM-DD
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  loadRegistry, decide, audit, stale, parseCsv, addClaim, addContact, addSuppression, addDays,
  normIco, normDomain, normEmail,
} from './guard.mjs'

const here = dirname(fileURLToPath(import.meta.url))

function parseArgs(argv) {
  const [cmd, ...rest] = argv
  const opts = {}
  for (let i = 0; i < rest.length; i++) {
    if (!rest[i].startsWith('--')) continue
    const key = rest[i].slice(2)
    const next = rest[i + 1]
    if (next === undefined || next.startsWith('--')) opts[key] = true
    else { opts[key] = next; i++ }
  }
  return { cmd, opts }
}

const { cmd, opts } = parseArgs(process.argv.slice(2))
const dir = opts.registry ? String(opts.registry) : join(here, 'registry')
const today = opts.today ? String(opts.today) : new Date().toISOString().slice(0, 10)
const json = Boolean(opts.json)
const die = (msg, code = 2) => { console.error(msg); process.exit(code) }

if (!cmd || cmd === 'help') die(readFileSync(new URL(import.meta.url), 'utf8').split('\n').slice(1, 11).join('\n'), cmd ? 0 : 2)

const reg = loadRegistry(dir)

function needOwner() {
  if (!opts.campaign || !opts.owner) die('Chybí --campaign a --owner')
  if (!reg.campaigns.campaigns[opts.campaign]) die(`Neznámá kampaň ${opts.campaign}`)
  if (!reg.config.owners.includes(opts.owner)) die(`Neznámý vlastník ${opts.owner}, povolení: ${reg.config.owners.join(', ')}`)
}

const candidateOf = (o) => ({ ico: o.ico, domena: o.domena, email: o.email, nace: o.nace, firma: o.firma })

if (cmd === 'claim') {
  needOwner()
  if (!opts.in) die('Chybí --in kandidati.csv')
  const rows = parseCsv(readFileSync(String(opts.in), 'utf8'))
  const claimed = []
  const rejected = []
  const seen = []
  for (const row of rows) {
    // kandidáti ve stejném souboru se mezi sebou kontrolují také, aby soubor neobsahoval duplicity
    const r = decide({ ...reg, claims: [...reg.claims, ...seen] }, candidateOf(row), { campaign: opts.campaign, owner: opts.owner, mode: 'claim', today })
    const label = row.firma || row.domena || row.ico
    if (r.ok) {
      const rec = {
        ico: normIco(row.ico) ?? '', domena: normDomain(row.domena) ?? normDomain(row.email) ?? '', email: normEmail(row.email) ?? '',
        firma: row.firma ?? '', kampan: opts.campaign, vlastnik: opts.owner, stav: 'aktivni',
        pravni_zaklad: row.pravni_zaklad ?? '', zalozeno: today, posledni_kontakt: '', odstup_do: '',
      }
      seen.push(rec)
      claimed.push({ firma: label, ico: rec.ico, domena: rec.domena })
      if (!opts['dry-run']) addClaim(dir, rec)
    } else rejected.push({ firma: label, kod: r.code, duvod: r.reason })
  }
  if (json) console.log(JSON.stringify({ dryRun: Boolean(opts['dry-run']), claimed, rejected }, null, 2))
  else {
    for (const c of claimed) console.log(`PŘIDĚLENO  ${c.firma}`)
    for (const r of rejected) console.log(`ODMÍTNUTO  ${r.firma}: ${r.duvod}`)
    console.log(`přiděleno: ${claimed.length}, odmítnuto: ${rejected.length}${opts['dry-run'] ? ' (nic nezapsáno)' : ''}`)
  }
} else if (cmd === 'check' || cmd === 'log') {
  needOwner()
  if (!opts.channel) die('Chybí --channel')
  const r = decide(reg, candidateOf(opts), { campaign: opts.campaign, owner: opts.owner, channel: opts.channel, mode: 'contact', today })
  if (r.ok && cmd === 'log') {
    addContact(dir, { datum: today, ico: normIco(opts.ico) ?? '', domena: normDomain(opts.domena) ?? '', kampan: opts.campaign, vlastnik: opts.owner, kanal: opts.channel })
  }
  if (json) console.log(JSON.stringify(r))
  else console.log(`${r.ok ? 'POVOLENO' : 'ZAMÍTNUTO'}: ${r.reason}`)
  process.exit(r.ok ? 0 : 1)
} else if (cmd === 'state') {
  needOwner()
  const allowed = ['aktivni', 'zajemce', 'zakaznik', 'uzavreno', 'odmitnuto']
  if (!allowed.includes(opts.stav)) die(`--stav musí být jedno z: ${allowed.join(', ')}`)
  const cur = reg.claims.find((c) => c.kampan === opts.campaign && c.vlastnik === opts.owner &&
    ((opts.ico && normIco(c.ico) === normIco(opts.ico)) || (opts.domena && normDomain(c.domena) === normDomain(opts.domena))))
  if (!cur) die('Firma není přidělena této kampani a vlastníkovi', 1)
  const odstup = opts.stav === 'uzavreno' ? addDays(today, reg.config.cooldownDays) : opts.stav === 'odmitnuto' ? addDays(today, reg.config.refusedCooldownDays) : ''
  addClaim(dir, { ...cur, stav: opts.stav, posledni_kontakt: today, odstup_do: odstup })
  console.log(`${cur.firma || cur.domena || cur.ico}: stav ${opts.stav}${odstup ? `, odstup do ${odstup}` : ''}`)
} else if (cmd === 'suppress') {
  if (!['email', 'domena', 'ico'].includes(opts.typ) || !opts.hodnota) die('Chybí --typ email|domena|ico a --hodnota')
  addSuppression(dir, { typ: opts.typ, hodnota: opts.hodnota, duvod: opts.duvod ?? '', kanal: opts.kanal ?? '', datum: today })
  console.log(`Odhlášeno (${opts.typ}): ${opts.hodnota}. Platí pro všechny kampaně.`)
} else if (cmd === 'audit') {
  const conflicts = audit(reg)
  const old = stale(reg, today).map((c) => ({ firma: c.firma || c.domena || c.ico, kampan: c.kampan, vlastnik: c.vlastnik, zalozeno: c.zalozeno }))
  if (json) console.log(JSON.stringify({ conflicts, stale: old }, null, 2))
  else {
    for (const c of conflicts) console.log(`KONFLIKT  ${c.klic}: vítěz ${c.vitez}, ostatní ${c.ostatni.join(', ')}`)
    for (const s of old) console.log(`ZASTARALÉ ${s.firma}: ${s.kampan}/${s.vlastnik} od ${s.zalozeno}, zavřít stavem uzavreno`)
    console.log(`konfliktů: ${conflicts.length}, zastaralých: ${old.length}`)
  }
  process.exit(conflicts.length ? 1 : 0)
} else die(`Neznámý příkaz ${cmd}`)
