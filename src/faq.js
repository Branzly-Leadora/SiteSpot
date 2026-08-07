// Jediný zdroj pravdy pro sekci s nejčastějšími dotazy.
//
// Čte se ze dvou míst: App.jsx to vykresluje na stránce a vite.config.js z toho
// při buildu generuje strukturovaná data typu FAQPage přímo do index.html.
// Díky tomu nemůže značkování utéct od textu, který návštěvník doopravdy vidí.
// Statický zápis v HTML je tu podstatný: roboti jazykových modelů většinou
// nespouštějí JavaScript, takže co vloží až React, to nikdy neuvidí.
export const FAQ = [
  { q: 'Za jak dlouho bude web hotový?', a: 'Web v tarifu Starter spouštíme do 3 týdnů, rozsáhlejší weby na míru do 4 až 8 týdnů. Přesný harmonogram dostanete po úvodní analýze. A platí to, co si domluvíme.' },
  { q: 'Kolik spolupráce stojí?', a: 'Menší web (Starter) pořídíte od 16 000 Kč, web na míru s automatizacemi (Business) od 29 000 Kč, obojí jednorázově. Průběžná spolupráce Full Stack začíná na 19 000 Kč měsíčně, bez závazku.' },
  { q: 'Proč jsou ceny uvedené „od“?', a: 'Uvedené částky jsou startovní ceny pro malé firmy, každý projekt má jiný rozsah. Finální pevnou cenu dostanete po krátkém briefu, písemně a bez skrytých položek. A ta pak platí, žádné vícepráce navíc.' },
  { q: 'Co je v ceně a co se děje po spuštění?', a: 'U Starteru texty, SEO základ, analytika a 30 dní podpory zdarma. Business přidává napojení na CRM či rezervace, jednu AI automatizaci a zaškolení. Kdo chce průběžnou péči, kampaně a optimalizaci, přechází na Full Stack.' },
  { q: 'Už web mám. Má smysl se ozvat?', a: 'Určitě. Uděláme vám audit zdarma. Často stačí stávající web optimalizovat a napojit na automatizace, místo stavění od nuly.' },
  { q: 'Jak vypadají AI automatizace v praxi?', a: 'Propojíme nástroje, které už používáte: poštu, CRM, fakturaci, tabulky. Poptávky se samy třídí, faktury odesílají, reporty generují. Klientům běžně šetříme 30 a více hodin měsíčně.' },
  { q: 'Musím podepsat dlouhodobý závazek?', a: 'Ne. Starter a Business zaplatíte jednorázově a web je váš. Full Stack běží po měsících s měsíční výpovědní lhůtou. Klienty si držíme výsledky, ne smlouvami.' },
  { q: 'Jak poznám, že to funguje?', a: 'V tarifu Full Stack dostanete každý měsíc srozumitelný report a konzultaci: kolik přišlo poptávek, co stály a kolik hodin ušetřily automatizace. Žádná hausnumera.' },
  { q: 'Pracujete i s menšími firmami?', a: 'Ano. Většina našich klientů má 2 až 50 zaměstnanců. Řešení stavíme tak, aby dávalo smysl vašemu rozpočtu, ne našemu portfoliu.' },
]
