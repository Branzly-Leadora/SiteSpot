# Schéma společného rejstříku

Rejstřík je sada textových souborů ve složce `system/registry/`. Soubory se jen doplňují o nové řádky. Nic se nepřepisuje, aby se změny tří lidí v gitu slučovaly bez konfliktů. Čte je `guard.mjs`, zapisuje `claim.mjs`.

## Soubory

| Soubor | Kdo zapisuje | Obsah |
|---|---|---|
| `claims-<vlastnik>.csv` | vlastník, jen jeho soubor | které firmy patří které kampani |
| `contacts-<vlastnik>.csv` | vlastník, jen jeho soubor | každé skutečné oslovení (pro denní limity) |
| `suppression.csv` | kdokoli, přes `claim.mjs suppress` | odhlášení podle e-mailu, domény nebo IČO, platí pro všechny kampaně |
| `excluded-chemie.csv` | tým | IČO firem z cold callingu na chemii |

Konfigurace: `config.json` (vypínač, vlastníci, odstupy, denní limity, režim mailu) a `campaigns.json` (kampaně, kanály, priority, vyloučené obory).

## Klíče firmy

Firma se porovnává podle **IČO** (osm číslic, doplněné nulami), podle **domény** (bez `www`, bez cesty) a podle **e-mailu**. Stačí shoda v jednom. Domény bezplatných schránek (gmail.com, seznam.cz a podobně) se nikdy nepárují, protože o firmě nic neříkají.

## Pole přidělení (`claims-*.csv`)

| Pole | Význam |
|---|---|
| `ico`, `domena`, `email`, `firma` | identifikace firmy |
| `kampan` | klíč z `campaigns.json` |
| `vlastnik` | kdo kampaň vede (`max`, `oliver`, `david`) |
| `stav` | `aktivni`, `zajemce`, `zakaznik`, `uzavreno`, `odmitnuto` |
| `pravni_zaklad` | `souhlas`, `existujici_vztah`, `zadost_o_email` nebo `opravneny_zajem_overit_pravnikem` |
| `zalozeno`, `posledni_kontakt` | data ve tvaru RRRR-MM-DD |
| `odstup_do` | do kdy firmu nesmí oslovit jiná kampaň |
| `zmeneno` | čas změny řádku (ISO, například `2026-10-08T09:30:00Z`). Podle něj se určuje nejnovější řádek, i když se soubory slučují v gitu a řádky skončí v jiném pořadí |

Změna stavu je nový řádek pro stejnou kampaň, vlastníka a firmu. Platí nejnovější řádek podle `zmeneno` (při shodě nebo chybějícím čase pořadí v souboru). Řádky patří k jedné firmě, pokud sdílejí IČO nebo doménu, takže doplnění IČO či domény později nezanechá starý řádek aktivní. Chybějící identitní pole (IČO, doména, e-mail, firma) se dědí z dřívějších řádků, ostatní pole ne, takže nový řádek může smazat `odstup_do`. Sloučení se dělá jen v rámci jedné kampaně a jednoho vlastníka. Implementace: funkce `resolveClaims` v `guard.mjs`, společné vektory `vectors.json`.

### Stavy a co znamenají pro ostatní kampaně

| Stav | Ostatní kampaně |
|---|---|
| `aktivni` | firmu nesmí oslovit |
| `zajemce`, `zakaznik` | nesmí oslovit nikdy |
| `uzavreno` | nesmí oslovit do `odstup_do` (výchozí 90 dní od uzavření) |
| `odmitnuto` | nesmí oslovit do `odstup_do` (výchozí 180 dní). Pokud firma napsala "nepište", zapíše se navíc do `suppression.csv` |

Aktivní přidělení se musí po skončení sekvence zavřít (`state --stav uzavreno`). Starší než `maxActiveDays` (45) je hlášené příkazem `audit`.

## Pravidla rozhodování (`guard.mjs`, funkce `decide`)

Pořadí kontrol, první zásah rozhoduje:

1. Vypínač `paused` v `config.json`.
2. Odhlášení podle e-mailu, domény nebo IČO. Platí pro všechny kampaně.
3. Uzavřený seznam chemie: IČO v `excluded-chemie.csv` nebo obor CZ NACE 20 či 46.75. Platí pro všechny kampaně kromě `chemie`.
4. Cizí přidělení: zájemce či zákazník, odstup, nebo aktivní. Pak je firma vlastněná někým jiným.
5. Při přidělení: pokud už je firma ve vaší kampani, nepřidělí se znovu.
6. Při oslovení: musí existovat přidělení pro tuto kampaň a vlastníka, stav nesmí být `uzavreno` ani `odmitnuto`, mail vyžaduje právní základ z `mailAllowedBases` (pokud není zapnutý `mailRegimeB`) a nesmí být překročen denní limit kanálu.

Priorita kampaní při souběhu (dvě rutiny přidělí stejnou firmu ve stejnou chvíli): chemie 1, velkoobchody, zakázkoví výrobci a servisní firmy 2, e-shopy 3. Příkaz `audit` souběh najde a navrhne vítěze. Poražený musí svůj řádek zavřít.

## Fronta konceptů (`queue-<vlastnik>.csv`)

Zatím jen formát, kód ji nevynucuje. Jeden řádek je jeden koncept ke schválení.

| Pole | Význam |
|---|---|
| `id` | jednoznačné číslo konceptu |
| `datum`, `kampan`, `vlastnik`, `ico`, `domena`, `firma` | kdo, kdy, komu |
| `kanal` | `linkedin`, `post`, `phone`, `email` |
| `typ` | `audit`, `pozvanka`, `zprava`, `dopis`, `mail1` až `mail4`, `telefon` |
| `text_cesta` | kde je text konceptu |
| `validace` | `ok` nebo `chyba: důvod` (kontrola `validate.mjs`) |
| `stav` | `draft`, `approved`, `sent`, `skipped` |
| `poznamka` | volný text |
