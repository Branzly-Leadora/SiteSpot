# web-automation: obchodní a outreach systém pro tři segmenty

Podklady pro prodej webů a automatizace třem segmentům, ve kterých je podle analýzy největší potřeba a menší konkurence. Prodáváme výsledek (ušetřené hodiny, zachycené zakázky), ne nástroj.

| Segment | Produkt | Soubor |
|---|---|---|
| 1. Velkoobchody a výrobci se stálými odběrateli | objednávkový portál napojený na fakturaci | `segmenty/s1-velkoobchody-vyrobci.md` |
| 2. Zakázkoví výrobci a dílny | poptávkový a nabídkový systém | `segmenty/s2-zakazkovi-vyrobci.md` |
| 3. Revizní a servisní firmy | servisní autopilot (termíny, protokoly, fakturace) | `segmenty/s3-servisni-firmy.md` |

## Stav

Nenapojeno na žádný odesílač. V repu není žádná odesílací infrastruktura (jediné odesílání je kontaktní formulář přes formsubmit.co a interní CRM drží leady jen v prohlížeči). Sekvence jsou proto strojově čitelné (`sequences/*.json`), aby šly nahrát do libovolného nástroje.

Všechna čísla v analýze, nabídkách a ekonomice jsou odhady. Co je ze zdroje a co odhad, je značeno v `10-analyza-segmentu.md`.

## Doporučené pořadí čtení

1. `10-analyza-segmentu.md`: proč tyto tři segmenty a co před startem ověřit.
2. `11-diferenciace-a-nabidka.md`: čím se lišíme a jak je nabídka sestavená.
3. `12-business-system.md`: prodejní proces, dodání, týdenní rytmus, metriky, finanční plán, prvních 90 dnů.
4. `13-outreach-system.md`: kanály, postup na 14 dnů, dopis, telefon, kalkulačka, partneři.
5. `07-pravidla-outreach.md`: pravidla, která oslovování drží v bezpečných mezích. Platí pro všechno.
6. Soubory segmentů a `06-test-100-firem.md`.

## Obsah

| Soubor | K čemu |
|---|---|
| `00-business-model.md` | Model pro první segment: skóre, ICP, ekonomika, scénáře |
| `01-nabidka.md` | Nabídka a ceny prvního segmentu |
| `02-email-sekvence.md` | Čtyři maily prvního segmentu, 3 předměty na krok |
| `03-audit-sablona.md` | Šablona jednostránkového auditu a scénář videa na 3 minuty |
| `04-linkedin.md` | Pozvánka, zpráva po přijetí, připomenutí |
| `05-namitky.md` | Odpovědi na časté námitky |
| `06-test-100-firem.md` | Plán testu, metriky, kdy upravit a kdy vypnout |
| `07-pravidla-outreach.md` | Pravidla oslovování, odhlášení, seznam odhlášených |
| `10-analyza-segmentu.md` | Výběr tří segmentů z deseti kandidátů, ověření, rizika |
| `11-diferenciace-a-nabidka.md` | Odlišení od ostatních dodavatelů, rovnice hodnoty, balík, záruka |
| `12-business-system.md` | Celý obchodní systém |
| `13-outreach-system.md` | Vícekanálový outreach s nejvyšší konverzí v bezpečných mezích |
| `segmenty/` | Nabídka, sekvence, LinkedIn, dopis, telefon a námitky po segmentech |
| `sequences/` | Strojové verze mailových sekvencí |
| `leads-template.csv`, `suppression-list.csv` | Hlavičky seznamu leadů a odhlášených |
| `validate.mjs` | Kontrola textů |

## Proměnné v textech

`{{osloveni}}` (5. pád, doplní člověk), `{{firma}}`, `{{pozorovani}}` (ověřená věc, bez ní se neposílá), `{{cal_link}}`, `{{odesilatel}}`, `{{odesilatel_firma}}`, `{{odesilatel_adresa}}`, `{{zdroj_kontaktu}}`, `{{odhlasit_link}}`, v dopisu navíc `{{obor}}` a `{{predmet_prace}}`.

## Co je potřeba doplnit nebo rozhodnout před ostrým startem

1. Odkaz na Cal.com do `{{cal_link}}`, jméno odesílatele a údaje do patičky.
2. Odesílací nástroj nebo vlastní skript. Sekvence počítá se zpožděním ve dnech, zastavením po odpovědi a odhlášení, kontrolou seznamu odhlášených a vypnutými sledovacími pixely.
3. Právní posouzení způsobu oslovování. Do té doby platí konzervativní režim z `07-pravidla-outreach.md`.
4. Záruka, pilotní slevy a odměna za doporučení (rozhodnutí majitele, viz `11`).
5. Ověření trhu a rozhovory (viz `10` a `12`): počty firem z ARES, konkurence, 30 rozhovorů.
6. Ceny a hodiny dodání jsou návrhy, potvrdit.

## Kontrola

```
node web-automation/validate.mjs
```

Kontroluje: žádné pomlčky v textech, max 90 slov a právě jedna otázka v každém mailu, odkaz na Cal.com a patičku, 3 předměty na krok, délku LinkedIn pozvánek, shodu `sequences/*.json` s texty v dokumentech a jen povolené proměnné.

## Pravidlo o pomlčkách

Texty pro zákazníky i ostatní dokumenty tu nesmí obsahovat pomlčky ani spojovníky, viz `CLAUDE.md`. Proto se píše "mail" a "audit", ne "e-mail" a "mini-audit". Názvy souborů a kód ve zpětných apostrofech jsou z kontroly vyňaté.
