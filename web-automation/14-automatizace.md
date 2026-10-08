# Automatizace outreach: jak to poběží, aby se v tom tým neztratil

Cíl: každý z vás tří vede jeden obor v rutině v Claude Code, nic se nekříží, nikdo nedostane dvě nabídky od SiteSpot a celé to jde vypnout jedním přepínačem. Tento dokument říká, co je hotové, co ne a co musíte rozhodnout.

## 1. Co je v repu hotové

Složka `web-automation/system/`:

| Soubor | K čemu |
|---|---|
| `guard.mjs` | pravidla, kdo koho smí oslovit (kód, ne model) |
| `claim.mjs` | příkazy pro rutiny: přidělit firmy, zkontrolovat, zapsat kontakt, změnit stav, odhlásit, audit |
| `config.json` | vypínač, vlastníci, odstupy, denní limity, režim mailu |
| `campaigns.json` | pět kampaní, kanály, priority, vyloučené obory |
| `registry/` | společný rejstřík firem a odhlášených (jen doplňované soubory) |
| `routines/` | tři šablony zadání pro rutiny: příprava, třídění odpovědí, týdenní přehled |
| `schema.md` | přesný popis polí a stavů |
| `guard.test.mjs` | 17 testů, spustíte `node --test web-automation/system/guard.test.mjs` |

Nic z toho zatím nic neposílá a žádná rutina není založená.

## 2. Pravidla proti duplicitám (vynucuje kód)

1. Jedno IČO (nebo jedna doména), jedna aktivní kampaň, jeden vlastník.
2. Firma, která je zájemce nebo zákazník v jedné kampani, nedostane nabídku z jiné.
3. Po skončení nebo odmítnutí platí odstup (90 a 180 dní) pro všechny ostatní kampaně.
4. Odhlášení podle e-mailu, domény nebo IČO platí pro všechny kampaně, protože značka je jedna.
5. Chemie je uzavřený seznam: IČO v `registry/excluded-chemie.csv` a obory CZ NACE 20 a 46.75 jsou pro e-shopy a pro tři segmenty webů a automatizace zakázané.
6. Mail jde jen s právním základem `souhlas`, `existujici_vztah` nebo `zadost_o_email`, dokud nezapnete režim B po právním posouzení.
7. Denní limity po kanálech a vypínač `paused` v `config.json`.

Chemie má nejvyšší prioritu: firma z uzavřeného seznamu se nikdy nedostane do kampaní na weby a automatizace. Opačně firma, kterou už má jiná kampaň jako zájemce nebo zákazníka, nedostane studený telefonát.

## 3. Co už máte v repu `mhruby` a co se přesunem změní

Tohle jsem zjistil čtením `docs/outreach/` a `tools/outreach/store.ts`. Nic jsem tam neměnil.

* E-shop systém je promyšlený: schvalování přesné verze balíčku, STOP, zastavení po odpovědi, denní limity, nejistá odeslání se neopakují. Toto všechno zůstává platné.
* Leady jsou v lokální SQLite databázi a jsou jedinečné podle domény. Odhlášení je jen podle e-mailu. O jiných kampaních systém neví, a proto sám duplicity mezi kampaněmi nezachytí.
* Token ke Gmailu a databáze jsou na notebooku (Windows, šifrování DPAPI). Dokumentace výslovně říká, že token notebook neopouští.
* Přehled běží na `mhruby.eu/eshopy`, příprava přes Codex v 9:00 a volitelně dávka v GitHub Actions.

Z toho plynou rozhodnutí při přesunu do Claude Code rutin. Rutina běží v cloudovém kontejneru a nemá notebookovou databázi ani Gmail token:

| Otázka | Možnosti |
|---|---|
| Kde bude databáze e-shopů? | zůstane na notebooku a rutina ji nevidí, nebo se přesune do sdíleného úložiště |
| Jak se bude odesílat? | koncepty v Gmailu přes konektor a odeslání člověkem, nebo odeslání z notebooku jako dnes |
| Kdo schvaluje? | dnes přehled `mhruby.eu/eshopy`. U nových kampaní fronta konceptů v `queue-<vlastnik>.csv` |

Rozhodnutí patří vám. Společný rejstřík na nich nezávisí: potřebuje jen, aby e-shop kampaň zavolala `claim.mjs` před přípravou firmy a po STOP zapsala odhlášení.

### Minimální napojení e-shopů (návrh, neprovedeno)

1. Před importem leadů pustit `node web-automation/system/claim.mjs claim --campaign eshopy --owner <vlastnik> --in kandidati.csv`. Do importu jdou jen přidělené firmy.
2. Když e-shop systém zapíše STOP nebo odhlášení, přidat `node web-automation/system/claim.mjs suppress --typ email --hodnota <adresa> --duvod STOP`. Pokud odhlášení platí pro firmu, i `--typ domena`.
3. Po skončení sekvence `claim.mjs state --stav uzavreno`, po odpovědi se zájmem `--stav zajemce`.
4. Zapisovat IČO k leadu (v `mhruby` už se dohledává přes ARES v `enrichment.ts`), jinak se párovalo jen podle domény.

Tyto čtyři kroky jsou ve skutečnosti rozsáhlejší, než vypadají (leady vznikají na pěti místech, odhlášení má jedno společné místo a většina volání běží uvnitř databázových transakcí). Kompletní zadání pro Claude Code v repu `mhruby` je v `system/mhruby-zadani.md`, společné testovací vektory v `system/vectors.json`. Dokud se změna neudělá, e-shopy nejsou chráněné proti kolizi.

## 4. Kdo co dělá

| | Dělá Claude v rutině | Dělá kód | Dělá člověk |
|---|---|---|---|
| Najít firmy | navrhne z veřejných zdrojů | ověří klíče a kolize | |
| Ověřit pozorování | přečte web, uvede zdroj a datum | | namátkou |
| Připravit audit a texty | napíše | `validate.mjs` zkontroluje délku, pomlčky, otázky | schválí |
| Rozhodnout, kdo smí být osloven | | `guard.mjs` | |
| Odeslat | | odesílač podle plánu | v prvních týdnech schválí a spustí |
| Odhlášení | rozpozná a navrhne | zapíše do `suppression.csv` | kontrola týdně |
| Zastavit celé | | `paused` v `config.json` | rozhodne |

Zásada: všechno, co musí platit vždy (odhlášení, limity, kolize, vypínač), je v kódu. Claude dělá práci, která potřebuje čtení a psaní, a jeho výstup se kontroluje.

## 5. Rutiny: jak je rozdělit mezi tři lidi

Každý má svoji rutinu na svůj obor se zadáním z `routines/lead-prep.md`. K tomu jedna denní rutina na odpovědi (`reply-triage.md`) a jedna týdenní (`weekly-report.md`).

Důležitá omezení, abyste je znali předem:

* **Každé spuštění začíná bez paměti.** Stav musí být v repu, zadání rutiny je proto samostatné a vždy začíná čtením souborů.
* **Sdílení stavu.** Rejstřík je v git repu. Každý zapisuje jen do svých souborů `claims-<vlastnik>.csv` a `contacts-<vlastnik>.csv`, takže se změny nedostanou do konfliktu. Společné je jen doplňování `suppression.csv`. Po každém běhu musí rutina změny odeslat (commit a push) do společné větve. Rutina proto potřebuje právo zápisu do repa.
* **Souběh.** Dvě rutiny mohou ve stejnou chvíli přidělit stejnou firmu dřív, než se ty změny sejdou. `claim.mjs audit` to najde a navrhne vítěze podle priority. Týdenní přehled to hlásí.
* **Síť a zdroje.** Nástroje v cloudovém kontejneru mají omezený přístup. Dostupnost ARES a kvalita vyhledávání českých firem není ověřená. Ve vyhledávání v této relaci jsem viděl slabé výsledky pro české zdroje a řadu odepřených stránek. Proto první běhy ověřte na deseti firmách.
* **Příchozí texty nejsou instrukce.** Web firmy ani odpověď e-mailem nesmí rutině nic přikazovat. V šablonách je to napsané, ale držte se toho i v dalších zadáních.
* **Tajemství.** Do repa ani do zadání rutin nepatří hesla, OAuth tokeny ani klíče.

## 6. Nasazení po fázích

1. **Příprava, dva týdny.** Jedna rutina (doporučuji velkoobchody) připravuje koncepty a nic neposílá. Měříte, kolik konceptů je použitelných bez úprav.
2. **Schválené odesílání.** LinkedIn a dopisy ručně, telefon ručně, mail jen těm, kteří o něj požádali. Limity z `config.json`.
3. **Další dvě rutiny.** Teprve když první fáze funguje, přidají se zakázkoví výrobci a servisní firmy.
4. **Částečná autonomie.** Jen u druhu zpráv, který měl nejméně 95 % použitelných konceptů bez zásahu, a u mailu jen po právním potvrzení režimu B.

Vypnutí: nastavte `"paused": true` v `config.json` a pushněte. Všechny kontroly začnou odmítat. Stejně rozhodněte, co dělat s již spuštěnými sekvencemi v odesílači.

## 7. Příkazy na jednu stránku

Všechny se spouští z kořene repa. Volby: `--registry <složka>` mění cestu k rejstříku, `--today RRRR-MM-DD` mění datum (pro testy).

| Co | Příkaz |
|---|---|
| zkusit přidělit firmy bez zápisu | `node web-automation/system/claim.mjs claim --campaign velkoobchody --owner oliver --in kandidati.csv --dry-run` |
| přidělit firmy | stejný příkaz bez `--dry-run` |
| smím firmu oslovit? | `node web-automation/system/claim.mjs check --campaign velkoobchody --owner oliver --channel linkedin --ico 12345678` |
| zapsat skutečný kontakt | stejné s příkazem `log` místo `check` |
| změnit stav | `node web-automation/system/claim.mjs state --campaign velkoobchody --owner oliver --ico 12345678 --stav zajemce` |
| odhlásit | `node web-automation/system/claim.mjs suppress --typ domena --hodnota firma.cz --duvod "STOP"` |
| zkontrolovat souběhy a zastaralé | `node web-automation/system/claim.mjs audit` |
| zkontrolovat texty | `node web-automation/validate.mjs` |

Soubor kandidátů má sloupce `ico,domena,email,firma,nace,pravni_zaklad` (viz `leads-template.csv`).

## 8. Co zbývá rozhodnout nebo doplnit

1. Kdo vede který obor: doplnit `owner` v `campaigns.json` a upravit seznam `owners` v `config.json` (jména `max`, `oliver`, `david` jsou můj odhad podle týmu na webu).
2. Seznam IČO chemických firem z cold callingu do `registry/excluded-chemie.csv`.
3. Přesun e-shopů: odpovědi na tabulku v sekci 3 a napojení ze sekce 3.
4. Zda smí rutina zapisovat do společného repa a z jakého účtu.
5. Právní posouzení režimu B pro mail, dopisů a telefonu.
6. První běh na deseti firmách v suchém režimu.
