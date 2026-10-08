// Kontrola textů outreach sekvencí. Spuštění: node web-automation/validate.mjs
// Bez závislostí. Končí kódem 1, pokud se najde chyba.
import { readFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const dir = dirname(fileURLToPath(import.meta.url))
const errors = []
const fail = (where, msg) => errors.push(`${where}: ${msg}`)
const read = (name) => readFileSync(join(dir, name), 'utf8')

const MAX_WORDS = 90
const MAX_INVITE = 300
const MAX_SUBJECT = 60
const POZOROVANI_WORDS = 15 // rezerva na doplněné {{pozorovani}}
const DASHES = /[—–-]/
const ALLOWED = new Set([
  'osloveni', 'firma', 'pozorovani', 'cal_link', 'odesilatel',
  'odesilatel_firma', 'odesilatel_adresa', 'zdroj_kontaktu', 'odhlasit_link',
  'obor', 'predmet_prace',
])
// délky, kterými se v kontrole nahrazují proměnné (znaky)
const FILL_LEN = { osloveni: 20, odesilatel: 20, firma: 30, pozorovani: 100 }

// sekvence a soubor, ve kterém je jejich čitelná verze
const SEQUENCES = [
  { json: 'sequences/velkoobchody-vyrobci.json', md: '02-email-sekvence.md' },
  { json: 'sequences/zakazkovi-vyrobci.json', md: 'segmenty/s2-zakazkovi-vyrobci.md' },
  { json: 'sequences/servisni-firmy.json', md: 'segmenty/s3-servisni-firmy.md' },
]
// soubory, ve kterých se nesmí objevit pomlčky (texty pro zákazníky i strategické dokumenty).
// Technické dokumenty (14-automatizace.md, system/schema.md) jsou vyňaté: píšou se v nich názvy jako e-shop a data RRRR-MM-DD.
const NO_DASH_FILES = [
  '01-nabidka.md', '02-email-sekvence.md', '03-audit-sablona.md', '04-linkedin.md', '05-namitky.md',
  '10-analyza-segmentu.md', '11-diferenciace-a-nabidka.md', '12-business-system.md', '13-outreach-system.md',
  'segmenty/s2-zakazkovi-vyrobci.md', 'segmenty/s3-servisni-firmy.md',
]
// soubory s texty k odeslání, kde se hlídají proměnné a krátké zprávy
const MESSAGE_FILES = [
  '04-linkedin.md', '13-outreach-system.md',
  'segmenty/s2-zakazkovi-vyrobci.md', 'segmenty/s3-servisni-firmy.md',
]

const vars = (s) => [...s.matchAll(/\{\{(\w+)\}\}/g)].map((m) => m[1])

function checkVars(where, text) {
  for (const v of vars(text)) if (!ALLOWED.has(v)) fail(where, `neznámá proměnná {{${v}}}`)
}

// odstraní to, co pomlčky smí obsahovat: proměnné, adresy a kód v zpětných apostrofech (názvy souborů)
function dashFree(text) {
  return text.replace(/\{\{\w+\}\}/g, '').replace(/https?:\/\/\S+/g, '').replace(/`[^`\n]*`/g, '')
}

function checkDashes(where, text) {
  dashFree(text).split('\n').forEach((line, i) => {
    if (/^\s*\|?[\s:|-]+\|?\s*$/.test(line)) return // oddělovač tabulky v markdownu
    if (DASHES.test(line)) fail(where, `pomlčka nebo spojovník na řádku ${i + 1}: "${line.trim()}"`)
  })
}

function wordCount(text) {
  const filled = text.replace(/\{\{(\w+)\}\}/g, (_, v) =>
    v === 'pozorovani' ? Array(POZOROVANI_WORDS).fill('slovo').join(' ') : 'slovo')
  return filled.split(/\s+/).filter(Boolean).length
}

function filledLength(text) {
  return text.replace(/\{\{(\w+)\}\}/g, (_, v) => 'x'.repeat(FILL_LEN[v] ?? 20)).length
}

const HOOK = 'Ukážu vám za 3 minuty, co byste u sebe zautomatizovali a kolik hodin měsíčně to ušetří.'
let baseFooter = null

// 1) sekvence
for (const { json, md: mdFile } of SEQUENCES) {
  let seq
  try {
    seq = JSON.parse(read(json))
  } catch (e) {
    fail(json, `nelze načíst: ${e.message}`)
    continue
  }
  const md = read(mdFile)

  const days = seq.steps.map((s) => s.day)
  if (JSON.stringify(days) !== JSON.stringify([0, 3, 7, 14])) fail(json, `dny musí být 0, 3, 7, 14, jsou ${days}`)

  for (const step of seq.steps) {
    const w = `${json}/${step.id}`
    if (Object.keys(step.subjects).join() !== 'A,B,C') fail(w, 'musí mít právě 3 předměty A, B, C')
    for (const [k, subj] of Object.entries(step.subjects)) {
      checkVars(`${w}/předmět ${k}`, subj)
      checkDashes(`${w}/předmět ${k}`, subj)
      if (/^\s*(re|fwd?)\s*:/i.test(subj)) fail(`${w}/předmět ${k}`, 'předmět nesmí začínat Re: ani Fwd:')
      if (filledLength(subj) > MAX_SUBJECT) fail(`${w}/předmět ${k}`, `delší než ${MAX_SUBJECT} znaků`)
      if (!md.includes(subj)) fail(`${w}/předmět ${k}`, `není v ${mdFile}`)
    }
    checkVars(w, step.body)
    checkDashes(w, step.body)
    const words = wordCount(step.body)
    if (words > MAX_WORDS) fail(w, `${words} slov, max ${MAX_WORDS}`)
    const q = (step.body.match(/\?/g) || []).length
    if (q !== 1) fail(w, `má ${q} otázek, musí být právě 1`)
    if (!step.body.includes('{{cal_link}}')) fail(w, 'chybí {{cal_link}}')
    if (!step.body.includes('{{osloveni}}')) fail(w, 'chybí {{osloveni}}')
    if (!md.includes(step.body)) fail(w, `text není shodný s ${mdFile}`)
  }

  if (!seq.steps[0].body.includes(HOOK)) fail(`${json}/email1`, 'chybí háček')

  checkVars(`${json}/footer`, seq.footer)
  checkDashes(`${json}/footer`, seq.footer)
  for (const v of ['odhlasit_link', 'odesilatel_firma', 'odesilatel_adresa', 'zdroj_kontaktu']) {
    if (!seq.footer.includes(`{{${v}}}`)) fail(`${json}/footer`, `chybí {{${v}}}`)
  }
  if (baseFooter === null) {
    baseFooter = seq.footer
    if (!md.includes(seq.footer)) fail(`${json}/footer`, `není v ${mdFile}`)
  } else if (seq.footer !== baseFooter) {
    fail(`${json}/footer`, 'patička se liší od první sekvence')
  }
  if (seq.rules?.tracking_pixels !== false) fail(`${json}/rules`, 'tracking_pixels musí být false')
  if (seq.rules?.check_suppression_before_send !== true) fail(`${json}/rules`, 'check_suppression_before_send musí být true')
}

// 2) žádné pomlčky v textech a jen známé proměnné
for (const f of NO_DASH_FILES) {
  if (!existsSync(join(dir, f))) { fail(f, 'chybí soubor'); continue }
  const text = read(f)
  checkVars(f, text)
  checkDashes(f, text)
}

// 3) krátké zprávy: délka pozvánek a jedna otázka
for (const f of MESSAGE_FILES) {
  if (!existsSync(join(dir, f))) continue
  const lines = read(f).split('\n')
  let label = ''
  let inBlock = false
  let block = []
  let invites = 0
  for (const line of lines) {
    if (line.startsWith('```')) {
      if (inBlock) {
        const body = block.join('\n').trim()
        const isInvite = /^Pozvánka/i.test(label)
        const isMessage = isInvite || /^(Zpráva|Připomenutí)/i.test(label)
        if (isInvite) {
          invites++
          const len = filledLength(body)
          if (len > MAX_INVITE) fail(`${f}/${label}`, `${len} znaků, max ${MAX_INVITE}`)
        }
        if (isMessage && (body.match(/\?/g) || []).length > 1) fail(`${f}/${label}`, 'více než jedna otázka')
        block = []
      }
      inBlock = !inBlock
      continue
    }
    if (inBlock) block.push(line)
    else if (line.trim()) label = line.replace(/^#+\s*/, '').trim()
  }
  if (f !== '13-outreach-system.md' && invites < 2) fail(f, 'čekám alespoň 2 varianty pozvánky')
}

// 4) soubory a hlavičky
const need = {
  'leads-template.csv': ['firma', 'ico', 'domena', 'nace', 'osloveni', 'zdroj_kontaktu', 'pravni_zaklad', 'pozorovani'],
  'system/registry/suppression.csv': ['typ', 'hodnota', 'duvod', 'datum'],
  'system/registry/excluded-chemie.csv': ['ico'],
}
for (const [f, cols] of Object.entries(need)) {
  if (!existsSync(join(dir, f))) { fail(f, 'chybí soubor'); continue }
  const header = read(f).split('\n')[0].split(',')
  for (const c of cols) if (!header.includes(c)) fail(f, `chybí sloupec ${c}`)
}
for (const f of [
  '00-business-model.md', '06-test-100-firem.md', '07-pravidla-outreach.md', 'README.md',
  'system/guard.mjs', 'system/claim.mjs', 'system/config.json', 'system/campaigns.json',
  'system/routines/lead-prep.md', 'system/routines/reply-triage.md', 'system/routines/weekly-report.md',
  'system/vectors.json', 'system/vectors.test.mjs', 'system/mhruby-zadani.md',
]) {
  if (!existsSync(join(dir, f))) fail(f, 'chybí soubor')
}

// 5) konfigurace rejstříku: každá kampaň má kanály a prioritu, vlastníci jsou neprázdní
try {
  const campaigns = JSON.parse(read('system/campaigns.json')).campaigns
  const config = JSON.parse(read('system/config.json'))
  if (!Array.isArray(config.owners) || !config.owners.length) fail('system/config.json', 'owners musí být neprázdný seznam')
  for (const [key, c] of Object.entries(campaigns)) {
    if (!Array.isArray(c.channels) || !c.channels.length) fail('system/campaigns.json', `${key}: chybí channels`)
    if (!Number.isInteger(c.priority)) fail('system/campaigns.json', `${key}: priority musí být celé číslo`)
    if ('legalBasisCheck' in c && typeof c.legalBasisCheck !== 'boolean') fail('system/campaigns.json', `${key}: legalBasisCheck musí být boolean`)
    if (key !== 'chemie' && !(c.excludeNace ?? []).includes('20')) fail('system/campaigns.json', `${key}: musí vylučovat obor 20 (chemie)`)
  }
  if (!campaigns.chemie || campaigns.chemie.priority !== Math.min(...Object.values(campaigns).map((c) => c.priority))) {
    fail('system/campaigns.json', 'chemie musí existovat a mít nejvyšší prioritu')
  }
} catch (e) {
  fail('system', `konfigurace rejstříku: ${e.message}`)
}

if (errors.length) {
  console.error(`Nalezeno chyb: ${errors.length}`)
  for (const e of errors) console.error(' * ' + e)
  process.exit(1)
}
console.log('web-automation: vše v pořádku')
