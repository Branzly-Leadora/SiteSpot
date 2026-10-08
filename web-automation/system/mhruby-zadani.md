# Zadání pro repo mhruby: napojení e-shop outreach na rejstřík kampaní

Toto zadání se vkládá do chatu s Claude Code v repu `MaxHruby/mhruby`. Je samostatné. Společně s ním se vloží soubor `vectors.json` (testovací vektory) z repa SiteSpot, cesta `web-automation/system/vectors.json` na větvi `claude/fervent-wozniak-2je7a8`. Mhruby ho uloží jako `tests/outreach/fixtures/registry-vectors.json`.

Následující blok je zadání. Vložte vše od `ZADÁNÍ` po `KONEC ZADÁNÍ`.

```
ZADÁNÍ

Cíl
Napoj e-shop outreach v tomto repu na sdílený "rejstřík kampaní", aby jedna firma neměla dvě kampaně SiteSpot současně a aby odhlášení platilo pro všechny kampaně. Rejstřík je složka s obyčejnými soubory (formát níže). Vlastní rejstřík spravuje jiné repo, tady ho jen čteš a doplňuješ řádky.

Pravidla práce
- Přečti nejdřív CLAUDE.md tohoto repa, docs/outreach/README.md a docs/outreach/DECISIONS.md a drž se jich. Změna nesmí rozporovat schválená rozhodnutí.
- Všechno za příznakem prostředí. Když OUTREACH_REGISTRY_DIR není nastavená, program se chová přesně jako dnes a celá stávající sada testů musí projít beze změny.
- Nic neodesílej, nic nepublikuj, nezapínej rozesílání, nevytvářej předplatná, neměň Pozice, neměň logiku schvalování balíčků, limity, pracovní dobu, šablony ani vzhled auditů. Neměň ConfigSchema (je strict a synchronizuje se do cloudu), nová nastavení jdou přes proměnné prostředí.
- Žádná síť v rejstříku. Většina volání běží uvnitř BEGIN IMMEDIATE transakcí, takže rejstřík smí jen synchronně číst a doplňovat soubory (fs.readFileSync, fs.appendFileSync).
- Pracuj na nové větvi. Nepushuj do hlavní větve a nevytvářej PR, dokud o to nepožádám.
- Před začátkem: npm ci (node_modules chybí), pak npm run outreach:typecheck a npm run outreach:test, a výsledek si zapiš jako výchozí stav. Lokálně může být Node 22.x (node:sqlite), CI má Node 24.

Prostředí
- OUTREACH_REGISTRY_DIR: cesta ke složce registry (viz rozložení). Nenastaveno = rejstřík vypnutý.
- OUTREACH_REGISTRY_OWNER: kdo je vlastník kampaně eshopy v rejstříku (povolené hodnoty jsou v config.json, klíč owners). Výchozí "max".
- Kampaň je napevno "eshopy".

Rozložení rejstříku
<root>/config.json                  vypínač, vlastníci, odstupy, limity
<root>/campaigns.json               kampaně (priority, vyloučené obory, příznaky)
<root>/registry/claims-<vlastnik>.csv
<root>/registry/contacts-<vlastnik>.csv
<root>/registry/suppression.csv
<root>/registry/excluded-chemie.csv
OUTREACH_REGISTRY_DIR ukazuje na <root>/registry. config.json a campaigns.json se čtou z o úroveň výš.

Soubory (CSV, UTF-8, první řádek hlavička, hodnoty v uvozovkách když obsahují čárku, uvozovku nebo zalomení, uvozovka se zdvojuje, BOM se ignoruje)
- claims-<vlastnik>.csv: ico,domena,email,firma,kampan,vlastnik,stav,pravni_zaklad,zalozeno,posledni_kontakt,odstup_do,zmeneno
  stav je aktivni, zajemce, zakaznik, uzavreno nebo odmitnuto. Data jsou RRRR-MM-DD, zmeneno je ISO čas.
- contacts-<vlastnik>.csv: datum,ico,domena,kampan,vlastnik,kanal
- suppression.csv: typ,hodnota,duvod,kanal,datum   (typ je email, domena nebo ico)
- excluded-chemie.csv: ico,firma,poznamka
Soubory se jen doplňují o nové řádky, nikdy se nepřepisují. Zapisuj jen do souborů svého vlastníka (claims-<owner>.csv, contacts-<owner>.csv) a do suppression.csv. Když soubor neexistuje, vytvoř ho s hlavičkou.

Normalizace klíčů (musí být přesně takto, jinak se rozejdou výsledky)
- normIco: ze vstupu ponech jen číslice. Prázdné nebo delší než 8 číslic = null. Jinak doplň zleva nulami na 8.
- normEmail: trim, malá písmena, musí obsahovat @, jinak null.
- normDomain: trim, malá písmena. Odstraň protokol (^[a-z]+://) a vše do posledního @ včetně. Vezmi text do prvního znaku z / ? # :. Odstraň úvodní "www." a koncovou tečku. Musí obsahovat tečku. Domény bezplatných schránek vrací null: gmail.com, googlemail.com, seznam.cz, email.cz, centrum.cz, volny.cz, post.cz, atlas.cz, outlook.com, outlook.cz, hotmail.com, live.com, icloud.com, yahoo.com, tiscali.cz, quick.cz.
- Klíče firmy kandidáta: ico = normIco(ico); domena = normDomain(domena) ?? normDomain(email); email = normEmail(email).
- naceMatches(nace, prefix): nace po trimu není prázdné a (nace === prefix, nebo nace začíná prefix + ".", nebo prefix obsahuje tečku a nace začíná prefixem).

Sloučení řádků přidělení (funkce resolveClaims)
Vstup jsou všechny řádky ze všech souborů claims-*.csv (soubory podle abecedy, řádky v pořadí v souboru). Seřaď stabilně podle zmeneno (řetězcové porovnání, chybějící = prázdný řetězec = nejstarší), při shodě podle původního pořadí. Pak v každé dvojici (kampan, vlastnik) pro každou firmu nech jen nejnovější řádek. Řádky patří k jedné firmě, pokud sdílejí normIco nebo normDomain (transitivně: řádek, který spojí dvě dosud oddělené skupiny, je spojí). Nejnovější řádek skupiny zdědí ico, domena, email a firma z dřívějších řádků skupiny, jen když je má sám prázdné. Žádné další pole se nedědí (nový řádek tak může smazat odstup_do). Sloučení se nikdy nedělá přes různé kampaně nebo vlastníky.

Rozhodnutí decide(registr, kandidat, ctx)
kandidat: { ico, domena, email, nace }. ctx: { campaign, owner, mode: "claim" nebo "contact", channel, today (RRRR-MM-DD) }.
Vrací { ok, code, reason }. Kontroly v tomto pořadí, první zásah rozhoduje:
1. kampaň není v campaigns.json (klíč campaigns) = code neznama_kampan.
2. config.paused = true = pozastaveno.
3. kandidát nemá ani normIco, ani doménu = bez_klice.
4. odhlášení: normEmail v suppression typ email, doména v typ domena, IČO v typ ico = odhlaseno. Platí pro všechny kampaně.
5. chemie: pokud kampaň nemá respectsChemistryExclusion = false: IČO v excluded-chemie.csv = chemie, nebo nace odpovídá některému prefixu z excludeNace kampaně (naceMatches) = chemie.
6. najdi přidělení jiných kampaní nebo vlastníků, která sdílejí ico, doménu nebo e-mail s kandidátem (po resolveClaims). "Moje" je přidělení se stejnou kampaní a vlastníkem. Pro každé cizí v pořadí řádků:
   - stav zajemce nebo zakaznik = cizi_zajemce
   - odstup_do vyplněné a >= today = cizi_odstup
   - stav aktivni = cizi_aktivni
   (uzavreno nebo odmitnuto bez odstupu_do ani odmitnuto s uplynulým odstupem neblokuje).
7. mode "claim": pokud moje přidělení už existuje = uz_moje, jinak ok.
8. mode "contact":
   - žádné moje přidělení = bez_claimu
   - jeho stav odmitnuto nebo uzavreno = code je přímo ten stav (odmitnuto, uzavreno)
   - chybí channel = bez_kanalu
   - channel "email", config.mailRegimeB není true a kampaň nemá legalBasisCheck = false: pravni_zaklad přidělení musí být v config.mailAllowedBases, jinak pravni_zaklad
   - denní limit: cap = campaigns[kampaň].dailyCaps (pokud je definováno, i prázdný objekt) jinak config.dailyCaps, pro daný channel. Je-li cap definován a počet kontaktů s datum = today, vlastnik = owner, kanal = channel a kampan = campaign je >= cap = limit.
   - jinak ok.
Kampaň eshopy má legalBasisCheck = false a prázdné dailyCaps: e-shop systém má vlastní schvalování mailu (pole basis) a vlastní denní limit, rejstřík je nesmí duplikovat.

Testovací vektory
Přiložený soubor vectors.json (ulož jako tests/outreach/fixtures/registry-vectors.json) obsahuje config, campaigns a 35 případů. Případ má registry (claims jako surové řádky, contactsBulk, suppression, excludedIco, config), candidate, ctx a expect. V claims chybějící pole znamenají prázdný řetězec, kromě kampan (eshopy), vlastnik (max) a stav (aktivni). contactsBulk {n,datum,kampan,vlastnik,kanal} rozbal na n kontaktů s různými IČO. Surové claims nejdřív pošli přes resolveClaims, pak do decide. Napiš test, který projde všechny případy a porovná code a ok. Při neshodě oprav implementaci, ne vektory. Vektory ani config/campaigns neměň.

Co implementovat

1. tools/outreach/registry.ts (nový modul, pojmenování bez srážek s existujícími owner, suppress, check, state)
   - typy, parseCsv/csvLine, normalizace, resolveClaims, decide, loadRegistry(dir) (čte config.json, campaigns.json a soubory výše; při chybě čtení nebo poškozeném JSON vyhodí RegistryUnavailable).
   - zápisy: appendClaim, appendContact, appendSuppression (jen přidávání řádků, hlavička pro nový soubor).
   - třída CampaignRegistry s metodami: enabled, claimByDomain(lead), attachIco(lead), canSend(lead), recordSent(lead), recordState(lead, stav, opts), recordSuppression(email, reason, opts). Statická fromEnv(env) vrací null, když OUTREACH_REGISTRY_DIR není nastavená.
   - chyba RegistryRejection { code, reason }.
   - fail-closed: pokud je OUTREACH_REGISTRY_DIR nastavená a načtení selže, claim i odeslání se zamítnou s důvodem "rejstřík nedostupný: ..." (code nedostupny). Nenastavená proměnná nic neblokuje.

2. Háčky (místa podle průzkumu repa, čísla řádků ověř, mohou se lišit)
   a) Claim podle domény a e-mailu: Store.import (store.ts, těsně před INSERT, po deduplikaci). Zamítnutí vyhodí RegistryRejection a lead nevznikne. Volající musí chybu zachytit, vypsat důvod a počítat jako přeskočeného: cli.ts (import, kolem 306-313, je v jedné transakci, zachytávej po řádcích), discovery.ts (kolem 456), workflow.ts (příkaz import, kolem 859), server.ts (POST /import, kolem 206). Zapsaný řádek přidělení: ico prázdné, domena = domain(url) leadu, email, firma = shopName, kampan eshopy, vlastnik z OUTREACH_REGISTRY_OWNER, stav aktivni, pravni_zaklad prázdný, zalozeno dnes, zmeneno teď.
   b) Claim s IČO: Pipeline.prepareLeadMeasured, mezi enrichLead a sizeLead (kolem pipeline.ts:513-514). IČO je v lead.research.company.ico. Znovu rozhodni v režimu claim s IČO. Při zamítnutí (cizí aktivní, chemie, odhlášeno) nastav status "excluded" s důvodem stejným způsobem, jako to dělá sizeLead, a zapiš stažení: nový řádek přidělení stejné firmy se stavem uzavreno a PRÁZDNÝM odstup_do (poražený nesmí blokovat vítěze). Při úspěchu zapiš nový řádek se stejnou doménou a doplněným IČO.
   c) Kontrola před odesláním: Pipeline.validate (kolem pipeline.ts:880 vedle store.suppressed) a znovu v transakci rezervace v sendOne (kolem pipeline.ts:1135). decide v režimu contact, channel "email". Zamítnutí musí skončit stejnou cestou jako dnešní store.suppressed (lead se neodešle, důvod je vidět v historii a v detailu). Netýká se sendTest (workflow.ts:~753), ten rejstřík nekontroluje.
   d) Zápis kontaktu: po úspěšném odeslání v Pipeline.complete (kolem pipeline.ts:1057), appendContact (datum, ico, domena, kampan eshopy, vlastnik, kanal email).
   e) Stavy při odpovědích: Pipeline.sync (kolem pipeline.ts:983-991): odpověď = zajemce, STOP = odmitnuto, nedoručení = uzavreno. Nový řádek přidělení zkopíruj z posledního řádku firmy, změň stav, posledni_kontakt a zmeneno, a odstup_do nastav podle config.json rejstříku: refusedCooldownDays pro odmitnuto a cooldownDays pro uzavreno (od dnešního data). Pro zajemce odstup_do prázdné.
   f) Odhlášení: Store.suppress (store.ts:~171). Po zápisu do SQLite doplň do suppression.csv řádek typ email (hodnota normalizovaný e-mail, duvod, kanal email). Když jde o STOP (ne o nedoručení) a doména e-mailu není bezplatná schránka (normDomain vrátí hodnotu), doplň i řádek typ domena. Zápis do souboru je synchronní, aby šel volat z transakce v sync.
   g) Konec sekvence: nová funkce closeFinishedSequences volaná z Pipeline.run. Lead v kampani, který má sentAt, nemá replyAt a má vyplněné followupSentAt, nebo je sentAt starší než followupDays + 7 dnů, se uzavře (stav uzavreno, odstup_do podle cooldownDays). Idempotentní: už uzavřené přeskoč.
   h) Zpětné doplnění: nový příkaz "outreach registry-backfill [--dry-run]". Pro všechny existující leady zapíše přidělení (ico z research.company.ico pokud je). Mapování: sent a approved, sending, uncertain = aktivni; replied = zajemce; suppressed = odmitnuto s odstup_do podle refusedCooldownDays od data replyAt (nebo dnešního); bounced a excluded = uzavreno bez odstupu; ostatní rozpracované stavy (imported, classified, selected, evidence_review, verified, draft) = aktivni. Přeskoč leady, které už v rejstříku jsou. Tabulku suppression přenes do suppression.csv (typ email). Při dry-run nic nezapisuj, jen vypiš počty.
   i) Diagnostika: příkaz "outreach registry-status" (vypnuto/zapnuto, složka, vlastník, počty řádků, počet zamítnutí dnes z událostí) a řádek v "doctor".

3. adopt.ts (adoptLeadsFromCloud) nech beze změny. Přebírá už přidělené leady z cloudu. Ale odeslání na notebooku musí rejstřík stejně zkontrolovat (hák c).

4. Události: každé zamítnutí zapiš přes store.event (kind "registry_rejected", detail code a reason), ať je v Historii vidět proč.

Testy
- tests/outreach/registry.test.ts: vektory (parity), normalizace, resolveClaims, fail-closed, parsování CSV s uvozovkami.
- Integrační testy (vzor tests/outreach/pipeline.test.ts: setup, prepared, gmail stub): Store.import zamítne cizí aktivní firmu, nezamítne při vypnutém rejstříku; Pipeline.validate zamítne odesílání odhlášené domény; sync při STOP zapíše odhlášení e-mailu i domény (a nezapíše doménu pro gmail.com); odeslání zapíše kontakt; kolize po zjištění IČO stáhne e-shop bez blokování vítěze; closeFinishedSequences; registry-backfill dry-run.
- Test: bez OUTREACH_REGISTRY_DIR se vše chová jako dnes.
- Spusť npm run outreach:typecheck a npm run outreach:test, musí projít celé.

Dokumentace
- docs/outreach/registry.md: nastavení proměnných, formát, příkazy registry-status a registry-backfill, co dělat při zamítnutí, jak vypnout. Jeden odstavec do docs/outreach/README.md.

Co záměrně NEDĚLAT
- Neřeš přenos složky rejstříku do cloudu (GitHub Actions) a na notebook, ani synchronizaci přes git. Počítej jen s cestou v OUTREACH_REGISTRY_DIR. Neměň .github/workflows/outreach-batch.yml ani batch.ts. Na konci práce shrň, co by bylo potřeba pro cloudový běh (druhý checkout, token, zápis).
- Nezapínej rozesílání, neposílej žádné zprávy, nevolej Gmail.

Hotovo když
- npm run outreach:typecheck bez chyb, npm run outreach:test zelené včetně nových testů a vektorů.
- Bez OUTREACH_REGISTRY_DIR je chování nezměněné.
- registry-backfill --dry-run na prázdné databázi i na databázi s několika testovacími leady proběhne bez chyby a vypíše počty.
- Na konci shrň: změněné soubory, co je za příznakem, co zůstává otevřené, a které řádky kódu jsi musel posunout oproti číslům v tomto zadání.

KONEC ZADÁNÍ
```

## Poznámky pro vás (nejsou součástí zadání)

* Jména vlastníků `max`, `oliver`, `david` jsou můj odhad podle týmu na webu. Opravte je v `config.json` rejstříku, `OUTREACH_REGISTRY_OWNER` musí mít hodnotu z tohoto seznamu.
* Odpověď e-shopu se zapíše jako `zajemce`, což ostatní kampaně blokuje trvale, i když šlo o neutrální nebo záporné "ne, díky". Uvolnit se dá ručně: `node web-automation/system/claim.mjs state --campaign eshopy --owner max --ico <ICO> --stav uzavreno`. Pokud to chcete méně přísně, upravte v zadání bod 2e (odpověď = `uzavreno` s odstupem).
* Rozhodnutí, která zadání obsahuje a která jsou na vás: STOP se zapisuje i na doménu firmy (kromě bezplatných schránek), odpověď se bere jako `zajemce` (blokuje ostatní kampaně), odstupy jsou 90 a 180 dní.
* Zadání nechává otevřené, jak se rejstřík dostane do cloudu a na notebook. Dokud to není vyřešené, rejstřík pojede jen tam, kde je složka dostupná. Doporučuji nezapínat `OUTREACH_REGISTRY_DIR` v produkci, dokud nebude jasné, kudy se bude synchronizovat.
* Souběh: dokud rejstřík není dostupný ze všech míst, kde kampaně běží, se kolize nemusí zachytit hned. Příkaz `claim.mjs audit` v SiteSpotu je najde dodatečně.
