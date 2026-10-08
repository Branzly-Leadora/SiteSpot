// Kontrola textů outreach sekvence. Spuštění: node web-automation/validate.mjs
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
])
// délky, kterými se v kontrole nahrazují proměnné
const FILL_LEN = { osloveni: 20, odesilatel: 20, firma: 30 }

const vars = (s) => [...s.matchAll(/\{\{(\w+)\}\}/g)].map((m) => m[1])

function checkVars(where, text) {
  for (const v of vars(text)) if (!ALLOWED.has(v)) fail(where, `neznámá proměnná {{${v}}}`)
}

// odstraní to, co pomlčky smí obsahovat: proměnné a adresy
function dashFree(text) {
  return text.replace(/\{\{\w+\}\}/g, '').replace(/https?:\/\/\S+/g, '')
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

// 1) sequence.json
let seq
try {
  seq = JSON.parse(read('sequence.json'))
} catch (e) {
  fail('sequence.json', `nelze načíst: ${e.message}`)
}

if (seq) {
  const days = seq.steps.map((s) => s.day)
  if (JSON.stringify(days) !== JSON.stringify([0, 3, 7, 14])) fail('sequence.json', `dny musí být 0, 3, 7, 14, jsou ${days}`)

  const md = read('02-email-sekvence.md')
  for (const step of seq.steps) {
    const w = `sequence.json/${step.id}`
    const keys = Object.keys(step.subjects)
    if (keys.join() !== 'A,B,C') fail(w, 'musí mít právě 3 předměty A, B, C')
    for (const [k, subj] of Object.entries(step.subjects)) {
      checkVars(`${w}/předmět ${k}`, subj)
      checkDashes(`${w}/předmět ${k}`, subj)
      if (/^\s*(re|fwd?)\s*:/i.test(subj)) fail(`${w}/předmět ${k}`, 'předmět nesmí začínat Re: ani Fwd:')
      if (filledLength(subj) > MAX_SUBJECT) fail(`${w}/předmět ${k}`, `delší než ${MAX_SUBJECT} znaků`)
      if (!md.includes(subj)) fail(`${w}/předmět ${k}`, 'není v 02-email-sekvence.md')
    }
    checkVars(w, step.body)
    checkDashes(w, step.body)
    const words = wordCount(step.body)
    if (words > MAX_WORDS) fail(w, `${words} slov, max ${MAX_WORDS}`)
    const q = (step.body.match(/\?/g) || []).length
    if (q !== 1) fail(w, `má ${q} otázek, musí být právě 1`)
    if (!step.body.includes('{{cal_link}}')) fail(w, 'chybí {{cal_link}}')
    if (!step.body.includes('{{osloveni}}')) fail(w, 'chybí {{osloveni}}')
    if (!md.includes(step.body)) fail(w, 'text není shodný s 02-email-sekvence.md')
  }

  const hook = 'Ukážu vám za 3 minuty, co byste u sebe zautomatizovali a kolik hodin měsíčně to ušetří.'
  if (!seq.steps[0].body.includes(hook)) fail('sequence.json/email1', 'chybí háček')

  checkVars('sequence.json/footer', seq.footer)
  checkDashes('sequence.json/footer', seq.footer)
  for (const v of ['odhlasit_link', 'odesilatel_firma', 'odesilatel_adresa', 'zdroj_kontaktu']) {
    if (!seq.footer.includes(`{{${v}}}`)) fail('sequence.json/footer', `chybí {{${v}}}`)
  }
  if (!md.includes(seq.footer)) fail('sequence.json/footer', 'není v 02-email-sekvence.md')
  if (seq.rules?.tracking_pixels !== false) fail('sequence.json/rules', 'tracking_pixels musí být false')
}

// 2) texty určené k odeslání nebo ke čtení zákazníkem: žádné pomlčky
for (const f of ['01-nabidka.md', '02-email-sekvence.md', '03-audit-sablona.md', '04-linkedin.md', '05-namitky.md']) {
  const text = read(f)
  checkVars(f, text)
  checkDashes(f, text)
}

// 3) LinkedIn: délka pozvánek a jedna otázka ve zprávě
{
  const text = read('04-linkedin.md')
  const lines = text.split('\n')
  let heading = ''
  let inBlock = false
  let block = []
  let invites = 0
  for (const line of lines) {
    if (line.startsWith('```')) {
      if (inBlock) {
        const body = block.join('\n').trim()
        if (/^Pozvánka/i.test(heading)) {
          invites++
          const len = filledLength(body)
          if (len > MAX_INVITE) fail(`04-linkedin.md/${heading}`, `${len} znaků, max ${MAX_INVITE}`)
        }
        if ((body.match(/\?/g) || []).length > 1) fail(`04-linkedin.md/${heading}`, 'více než jedna otázka')
        block = []
      }
      inBlock = !inBlock
      continue
    }
    if (inBlock) block.push(line)
    else if (line.startsWith('#')) heading = line.replace(/^#+\s*/, '')
  }
  if (invites < 2) fail('04-linkedin.md', 'čekám alespoň 2 varianty pozvánky')
}

// 4) soubory a hlavičky
const need = {
  'leads-template.csv': ['firma', 'osloveni', 'zdroj_kontaktu', 'pravni_zaklad', 'pozorovani'],
  'suppression-list.csv': ['email', 'domena', 'datum_zapisu'],
}
for (const [f, cols] of Object.entries(need)) {
  if (!existsSync(join(dir, f))) { fail(f, 'chybí soubor'); continue }
  const header = read(f).split('\n')[0].split(',')
  for (const c of cols) if (!header.includes(c)) fail(f, `chybí sloupec ${c}`)
}
for (const f of ['00-business-model.md', '06-test-100-firem.md', '07-pravidla-outreach.md', 'README.md']) {
  if (!existsSync(join(dir, f))) fail(f, 'chybí soubor')
}

if (errors.length) {
  console.error(`Nalezeno chyb: ${errors.length}`)
  for (const e of errors) console.error(' * ' + e)
  process.exit(1)
}
console.log('web-automation: vše v pořádku')
