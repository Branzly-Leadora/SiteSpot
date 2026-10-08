# web-automation: outreach pro velkoobchody a výrobce

Kompletní podklady pro oslovení segmentu: velkoobchody a výrobci s 15 až 80 zaměstnanci, kteří zpracovávají objednávky ručně (mail, Excel, telefon). Prodáváme objednávkový portál napojený na fakturaci, vstupem je audit zdarma.

## Stav

Nenapojeno na žádný odesílač. V repu není žádná odesílací infrastruktura (jediné odesílání je kontaktní formulář přes formsubmit.co a interní CRM drží leady jen v prohlížeči). Sekvence je proto dodaná strojově čitelně, aby šla nahrát do libovolného nástroje.

## Obsah

| Soubor | K čemu |
|---|---|
| `00-business-model.md` | Výběr segmentu, ideální zákazník, ekonomika, scénáře, rizika |
| `01-nabidka.md` | Nabídka s pevnou cenou a termínem, tři úrovně, návratnost |
| `02-email-sekvence.md` | Čtyři maily (den 0, 3, 7, 14), tři předměty na A/B test |
| `sequence.json` | Stejná sekvence strojově: kroky, zpoždění, předměty, patička, pravidla |
| `03-audit-sablona.md` | Šablona jednostránkového auditu a scénář 3 minutového videa |
| `04-linkedin.md` | Pozvánka, zpráva po přijetí, follow-up |
| `05-namitky.md` | Odpovědi na časté námitky |
| `06-test-100-firem.md` | Plán testu, metriky, kdy upravit a kdy vypnout |
| `07-pravidla-outreach.md` | Pravidla pro oslovování bez sporných míst |
| `leads-template.csv` | Hlavička pro seznam leadů |
| `suppression-list.csv` | Hlavička seznamu odhlášených |
| `validate.mjs` | Kontrola textů |

## Proměnné v textech

`{{osloveni}}` (5. pád, doplní člověk), `{{firma}}`, `{{pozorovani}}` (ověřená věc, bez ní se neposílá), `{{cal_link}}`, `{{odesilatel}}`, `{{odesilatel_firma}}`, `{{odesilatel_adresa}}`, `{{zdroj_kontaktu}}`, `{{odhlasit_link}}`.

## Co je potřeba doplnit před ostrým startem

1. Odkaz na Cal.com do `{{cal_link}}`, jméno odesílatele a údaje do patičky.
2. Odesílací nástroj nebo vlastní skript. Sekvence počítá s: zpožděním ve dnech, zastavením po odpovědi a po odhlášení, kontrolou seznamu odhlášených před odesláním, vypnutými sledovacími pixely.
3. Právní posouzení způsobu oslovení (viz pravidla outreach). Do té doby platí konzervativní režim.
4. Ceny a hodiny dodání v nabídce a business modelu jsou návrhy, potvrďte je.

## Kontrola

```
node web-automation/validate.mjs
```

Kontroluje: žádné pomlčky v textech, max 90 slov a právě jedna otázka v každém mailu, odkaz na Cal.com a patičku, 3 předměty na krok, délku LinkedIn pozvánek a shodu `sequence.json` s textem v `02-email-sekvence.md`.

## Pravidlo o pomlčkách

Texty pro zákazníky (nabídka, maily, LinkedIn, audit, námitky) nesmí obsahovat pomlčky ani spojovníky, viz `CLAUDE.md`. Proto se píše "mail" a "audit", ne "e-mail" a "mini-audit".
