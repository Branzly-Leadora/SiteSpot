// Společný rejstřík kampaní: kdo smí koho oslovit. Čisté funkce bez závislostí.
// Pravidla vynucuje tento kód, ne jazykový model. Popis: web-automation/14-automatizace.md
import { readFileSync, readdirSync, existsSync, appendFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

// ---------- normalizace klíčů ----------

export function normIco(v) {
  const d = String(v ?? '').replace(/\D/g, '')
  if (!d || d.length > 8) return null
  return d.padStart(8, '0')
}

// Schránky zdarma. Doména z nich nic neříká o firmě, takže se podle ní nikdy nepáruje.
const FREEMAIL = new Set([
  'gmail.com', 'googlemail.com', 'seznam.cz', 'email.cz', 'centrum.cz', 'volny.cz', 'post.cz', 'atlas.cz',
  'outlook.com', 'outlook.cz', 'hotmail.com', 'live.com', 'icloud.com', 'yahoo.com', 'tiscali.cz', 'quick.cz',
])

export function normDomain(v) {
  const s = String(v ?? '').trim().toLowerCase()
  if (!s) return null
  const noProto = s.replace(/^[a-z]+:\/\//, '').replace(/^.*@/, '')
  const host = noProto.split(/[/?#:]/)[0].replace(/^www\./, '').replace(/\.$/, '')
  if (!host.includes('.') || FREEMAIL.has(host)) return null
  return host
}

export function normEmail(v) {
  const s = String(v ?? '').trim().toLowerCase()
  return s.includes('@') ? s : null
}

function naceMatches(nace, prefix) {
  const n = String(nace ?? '').trim()
  if (!n) return false
  return n === prefix || n.startsWith(prefix + '.') || (prefix.includes('.') && n.startsWith(prefix))
}

// ---------- CSV ----------

export function parseCsv(text) {
  const rows = []
  let row = []
  let cell = ''
  let quoted = false
  const s = text.replace(/^﻿/, '')
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (quoted) {
      if (c === '"' && s[i + 1] === '"') { cell += '"'; i++ }
      else if (c === '"') quoted = false
      else cell += c
    } else if (c === '"') quoted = true
    else if (c === ',') { row.push(cell); cell = '' }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && s[i + 1] === '\n') i++
      row.push(cell); cell = ''
      if (row.some((x) => x !== '')) rows.push(row)
      row = []
    } else cell += c
  }
  if (cell !== '' || row.length) { row.push(cell); if (row.some((x) => x !== '')) rows.push(row) }
  if (!rows.length) return []
  const [header, ...body] = rows
  return body.map((r) => Object.fromEntries(header.map((h, i) => [h.trim(), (r[i] ?? '').trim()])))
}

export function csvLine(values) {
  return values.map((v) => {
    const s = String(v ?? '')
    return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
  }).join(',')
}

// ---------- načtení rejstříku ----------

export const CLAIM_FIELDS = ['ico', 'domena', 'email', 'firma', 'kampan', 'vlastnik', 'stav', 'pravni_zaklad', 'zalozeno', 'posledni_kontakt', 'odstup_do']
export const CONTACT_FIELDS = ['datum', 'ico', 'domena', 'kampan', 'vlastnik', 'kanal']
export const SUPPRESSION_FIELDS = ['typ', 'hodnota', 'duvod', 'kanal', 'datum']

const readCsv = (file) => (existsSync(file) ? parseCsv(readFileSync(file, 'utf8')) : [])

export function loadRegistry(dir) {
  const config = JSON.parse(readFileSync(join(dir, '..', 'config.json'), 'utf8'))
  const campaigns = JSON.parse(readFileSync(join(dir, '..', 'campaigns.json'), 'utf8'))
  const files = existsSync(dir) ? readdirSync(dir) : []
  // změny stavu se jen přidávají jako nové řádky, platí poslední řádek pro dvojici kampaň a vlastník a firmu
  const latest = new Map()
  for (const f of files.filter((x) => /^claims-.+\.csv$/.test(x)).sort()) {
    for (const r of readCsv(join(dir, f))) latest.set(`${r.kampan}|${r.vlastnik}|${normIco(r.ico) ?? ''}|${normDomain(r.domena) ?? ''}`, r)
  }
  const claims = [...latest.values()]
  const contacts = files.filter((f) => /^contacts-.+\.csv$/.test(f)).flatMap((f) => readCsv(join(dir, f)))

  const suppression = { email: new Set(), domena: new Set(), ico: new Set() }
  for (const r of readCsv(join(dir, 'suppression.csv'))) {
    const set = suppression[r.typ]
    const norm = r.typ === 'email' ? normEmail(r.hodnota) : r.typ === 'domena' ? normDomain(r.hodnota) : normIco(r.hodnota)
    if (set && norm) set.add(norm)
  }
  const excludedIco = new Set(readCsv(join(dir, 'excluded-chemie.csv')).map((r) => normIco(r.ico)).filter(Boolean))
  return { dir, config, campaigns, claims, contacts, suppression, excludedIco }
}

// ---------- rozhodnutí ----------

const reject = (code, reason) => ({ ok: false, code, reason })
const accept = (extra = {}) => ({ ok: true, code: 'ok', reason: 'povoleno', ...extra })

function keysOf(c) {
  return { ico: normIco(c.ico), domena: normDomain(c.domena) ?? normDomain(c.email), email: normEmail(c.email) }
}

function findClaims(reg, keys) {
  return reg.claims.filter((cl) =>
    (keys.ico && normIco(cl.ico) === keys.ico) ||
    (keys.domena && normDomain(cl.domena) === keys.domena) ||
    (keys.email && normEmail(cl.email) === keys.email))
}

function suppressed(reg, keys) {
  if (keys.email && reg.suppression.email.has(keys.email)) return 'e-mail'
  if (keys.domena && reg.suppression.domena.has(keys.domena)) return 'doména'
  if (keys.ico && reg.suppression.ico.has(keys.ico)) return 'IČO'
  return null
}

function excludedByChemistry(reg, keys, candidate, campaign) {
  const def = reg.campaigns.campaigns[campaign]
  if (!def) return null
  const prefixes = def.excludeNace ?? []
  if (def.respectsChemistryExclusion === false) return null
  if (keys.ico && reg.excludedIco.has(keys.ico)) return 'IČO je na uzavřeném seznamu chemie'
  const hit = prefixes.find((p) => naceMatches(candidate.nace, p))
  return hit ? `obor CZ NACE ${candidate.nace} patří do vyloučeného oboru ${hit}` : null
}

const today = (ctx) => (ctx.today ?? new Date().toISOString().slice(0, 10))

function dailyCount(reg, ctx) {
  return reg.contacts.filter((c) => c.datum === today(ctx) && c.vlastnik === ctx.owner && c.kanal === ctx.channel).length
}

/**
 * Rozhodne, zda smí kampaň firmu oslovit.
 *  candidate: { ico, domena, email, nace }
 *  ctx: { campaign, owner, channel?, mode: 'claim' | 'contact', today? }
 * Vrací { ok, code, reason }.
 */
export function decide(reg, candidate, ctx) {
  const { campaign, owner, mode } = ctx
  const def = reg.campaigns.campaigns[campaign]
  if (!def) return reject('neznama_kampan', `kampaň ${campaign} není v campaigns.json`)
  if (reg.config.paused) return reject('pozastaveno', 'vypínač v config.json je zapnutý')

  const keys = keysOf(candidate)
  if (!keys.ico && !keys.domena) return reject('bez_klice', 'chybí IČO i doména, firmu nelze porovnat s ostatními kampaněmi')

  const sup = suppressed(reg, keys)
  if (sup) return reject('odhlaseno', `odhlášeno (${sup}), platí pro všechny kampaně`)

  const chem = excludedByChemistry(reg, keys, candidate, campaign)
  if (chem) return reject('chemie', chem)

  const others = findClaims(reg, keys)
  const mine = others.filter((cl) => cl.kampan === campaign && cl.vlastnik === owner)
  const foreign = others.filter((cl) => !(cl.kampan === campaign && cl.vlastnik === owner))
  const now = today(ctx)

  for (const cl of foreign) {
    if (['zajemce', 'zakaznik'].includes(cl.stav)) {
      return reject('cizi_zajemce', `firma je ${cl.stav} v kampani ${cl.kampan} (${cl.vlastnik}), nikdo jiný ji neosloví`)
    }
    if (cl.odstup_do && cl.odstup_do >= now) {
      return reject('cizi_odstup', `firmu má kampaň ${cl.kampan} (${cl.vlastnik}) do ${cl.odstup_do}`)
    }
    if (cl.stav === 'aktivni') {
      return reject('cizi_aktivni', `firma je aktivní v kampani ${cl.kampan} (${cl.vlastnik})`)
    }
  }

  if (mode === 'claim') {
    if (mine.length) return reject('uz_moje', 'firma už je ve vaší kampani')
    return accept()
  }

  // mode === 'contact'
  const claim = mine[0]
  if (!claim) return reject('bez_claimu', 'firma nebyla nejdřív přidělena této kampani a vlastníkovi')
  if (['odmitnuto', 'uzavreno'].includes(claim.stav)) return reject(claim.stav, `kampaň u této firmy skončila (stav ${claim.stav})`)
  const channel = ctx.channel
  if (!channel) return reject('bez_kanalu', 'chybí kanál')
  if (channel === 'email' && !reg.config.mailRegimeB) {
    const allowed = reg.config.mailAllowedBases ?? []
    if (!allowed.includes(claim.pravni_zaklad)) {
      return reject('pravni_zaklad', `mail vyžaduje právní základ ${allowed.join(', ')}, firma má "${claim.pravni_zaklad || 'žádný'}"`)
    }
  }
  const cap = reg.config.dailyCaps?.[channel]
  if (cap != null && dailyCount(reg, { ...ctx, today: now }) >= cap) {
    return reject('limit', `denní limit ${cap} pro kanál ${channel} u vlastníka ${owner} je vyčerpán`)
  }
  return accept()
}

// ---------- audit souběhu ----------

/**
 * Najde firmy přidělené více kampaním najednou (souběh dvou rutin). Vrací seznam konfliktů
 * s navrženým vítězem podle priority kampaně a pak podle času založení.
 */
export function audit(reg) {
  const groups = new Map()
  for (const cl of reg.claims) {
    const keys = [normIco(cl.ico) && `ico:${normIco(cl.ico)}`, normDomain(cl.domena) && `dom:${normDomain(cl.domena)}`].filter(Boolean)
    for (const k of keys) groups.set(k, [...(groups.get(k) ?? []), cl])
  }
  const seen = new Set()
  const conflicts = []
  for (const [key, list] of groups) {
    const distinct = new Map(list.map((cl) => [`${cl.kampan}|${cl.vlastnik}`, cl]))
    if (distinct.size < 2) continue
    const sig = [...distinct.keys()].sort().join('#')
    if (seen.has(sig + key.slice(0, 3))) continue
    seen.add(sig + key.slice(0, 3))
    const prio = (cl) => reg.campaigns.campaigns[cl.kampan]?.priority ?? 99
    const ranked = [...distinct.values()].sort((a, b) => prio(a) - prio(b) || String(a.zalozeno).localeCompare(String(b.zalozeno)))
    conflicts.push({
      klic: key,
      vitez: `${ranked[0].kampan}/${ranked[0].vlastnik}`,
      ostatni: ranked.slice(1).map((cl) => `${cl.kampan}/${cl.vlastnik}`),
    })
  }
  return conflicts
}

// ---------- zápisy (jen přidávání, kvůli sloučení v gitu) ----------

function appendRow(file, fields, row) {
  const exists = existsSync(file)
  mkdirSync(join(file, '..'), { recursive: true })
  const line = csvLine(fields.map((f) => row[f] ?? ''))
  appendFileSync(file, (exists ? '' : csvLine(fields) + '\n') + line + '\n')
}

export function addClaim(dir, claim) {
  appendRow(join(dir, `claims-${claim.vlastnik}.csv`), CLAIM_FIELDS, claim)
}
export function addContact(dir, contact) {
  appendRow(join(dir, `contacts-${contact.vlastnik}.csv`), CONTACT_FIELDS, contact)
}
export function addSuppression(dir, row) {
  appendRow(join(dir, 'suppression.csv'), SUPPRESSION_FIELDS, row)
}

export function addDays(dateStr, days) {
  const d = new Date(dateStr + 'T00:00:00Z')
  d.setUTCDate(d.getUTCDate() + days)
  return d.toISOString().slice(0, 10)
}

/** Aktivní přidělení starší než povolená doba. Takové firmy blokují ostatní, dokud je někdo nezavře. */
export function stale(reg, todayStr = new Date().toISOString().slice(0, 10)) {
  const limit = reg.config.maxActiveDays ?? 45
  return reg.claims.filter((cl) => cl.stav === 'aktivni' && cl.zalozeno && addDays(cl.zalozeno, limit) < todayStr)
}
