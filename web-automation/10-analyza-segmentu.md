# Analýza segmentů: kde je největší potřeba a nejmenší konkurence

Cíl: vybrat tři segmenty, které nejvíc potřebují weby a automatizaci a zároveň je dnes nehoní desítky agentur s chatbotem. Vybírá se podle pravidla "hladový dav": silná bolest, schopnost platit, snadné dosažení rozhodovatele.

## Jak číst důvěryhodnost údajů

Každé tvrzení má štítek:
* **[zdroj]** údaj z veřejného zdroje, který jsem viděl ve výsledcích vyhledávání. Celé články se mi nepodařilo otevřít (přístup odepřen), takže beru jen to, co stálo ve výsledcích.
* **[odhad]** můj úsudek bez měření.
* **[ověřit]** musí se zjistit před investicí. Postup je v sekci 6.

Hodnoty skóre jsou odhad. Rozhodnutí z nich je rozumné, ale není to měření.

## 1. Co víme z veřejných zdrojů

* Podle ČSÚ mělo v roce 2025 vlastní web 83 % firem s 10 a více zaměstnanci, průměr EU je 79 %. [zdroj] Web tedy v tomto segmentu většinou je. Problém většinou není "nemají web", ale "web nepřináší poptávky a za ním je ruční práce". Proto neprodáváme samotný web, ale web spojený s procesem za ním.
* Podle ČSÚ používalo umělou inteligenci 17 až 19 % firem s 10 a více zaměstnanci, hlavně velké firmy. [zdroj] Většina středních a malých firem nemá s automatizací zkušenost, takže nás neporovnává s jinou agenturou, ale s tím, že se nic nezmění.
* Většina českých firem v oboru umělé inteligence jsou malé firmy do 10 zaměstnanců a mnohé mají zákazníky hlavně v zahraničí. [zdroj, tvrzení z přehledu dodavatelů] Domácí střední firmy tedy nemají u koho koupit hotové řešení.
* Samostatné chatboty bez napojení na systémy se stávají běžným zbožím. [zdroj, ale píší to prodejci chatbotů] Proto dodáváme napojení, ne chatbot.
* Nové domácí fotovoltaiky v první polovině roku 2026 meziročně klesly zhruba o polovinu, firemní instalace rostou. [zdroj, údaj ze shrnutí hledání, článek jsem neotevřel] Segment instalačních firem pro domácnosti proto nevybírám: poptávka klesá a v oboru je nedůvěra.
* Autoservisy a pneuservisy už mají na trhu hotový systém s online objednáváním (PneuB2B SmartServis). [zdroj, tvrzení výrobce] Segment je částečně obsazený.

## 2. Hodnocení deseti segmentů

Kritéria a váhy (součet 100): bolest z ruční práce 25, schopnost platit 15, dosažitelnost rozhodovatele 15, nenasycenost trhu dodavateli webů a AI 15, opakovatelnost produktu mezi firmami 15, opakující se příjem 10, rychlost rozhodnutí 5. Škála 1 až 5, 5 je nejlepší. Všechna skóre jsou [odhad].

| Segment | Bolest | Platit | Dosah | Nenasycení | Opakování | Opak. příjem | Rychlost | Skóre z 5 |
|---|---|---|---|---|---|---|---|---|
| Velkoobchody a výrobci se stálými odběrateli | 5 | 4 | 4 | 4 | 5 | 4 | 3 | 4,35 |
| Revizní a servisní firmy (pravidelné kontroly) | 4 | 3 | 4 | 5 | 5 | 5 | 4 | 4,25 |
| Zakázkoví výrobci a dílny | 4 | 4 | 4 | 5 | 4 | 3 | 4 | 4,05 |
| Malé dopravní a spediční firmy | 4 | 3 | 3 | 4 | 3 | 3 | 3 | 3,40 |
| Autoservisy a pneuservisy | 3 | 3 | 4 | 2 | 4 | 4 | 4 | 3,30 |
| Zubaři a soukromé ordinace | 3 | 4 | 4 | 1 | 4 | 4 | 4 | 3,30 |
| Instalační firmy FVE a tepelná čerpadla pro domácnosti | 4 | 2 | 4 | 3 | 4 | 2 | 3 | 3,30 |
| Účetní kanceláře | 3 | 3 | 4 | 3 | 3 | 4 | 3 | 3,25 |
| Realitní kanceláře | 3 | 3 | 4 | 1 | 3 | 2 | 4 | 2,80 |
| Restaurace a ubytování | 3 | 2 | 3 | 2 | 3 | 3 | 5 | 2,80 |

Citlivost: mezi třetím (4,05) a čtvrtým místem (3,40) je rozdíl 0,65. Posun jednoho skóre o jeden bod změní výsledek nejvýš o 0,25, takže na samotné pořadí první trojice vůči zbytku to nestačí. Pořadí uvnitř trojice se změnit může a při více změnách najednou může být výsledek jiný.

Segmenty s nízkým "nenasycením" (zubaři, realitky, autoservisy) jsou ty, které dnes oslovují agentury s chatboty a rezervacemi. To je [odhad] z toho, co se nabízí v reklamách. Ověřit v sekci 6.

## 3. Vybrané segmenty

### Segment 1: velkoobchody a výrobci se stálými odběrateli

Kdo: 15 až 80 zaměstnanců, prodávají firmám, objednávky chodí mailem, přes Excel a telefon.
Co dodáváme: objednávkový portál napojený na fakturaci.
Detail: soubory `00` až `07`, bez změny. Konkrétní nabídka v `01-nabidka.md`.
Rozhodovatel: majitel nebo jednatel, případně vedoucí obchodu.
Spouštěč nákupu: růst počtu objednávek, odchod člověka, který objednávky přepisoval, chyba ve fakturaci.
Co dnes používají místo nás: sdílenou tabulku, účetní systém s ručním zadáváním, drahé ERP s portálem navíc.

### Segment 2: zakázkoví výrobci a dílny

Kdo: kovovýroba, obrábění, truhlárny, plasty, sklo, reklamní výroba, 8 až 60 zaměstnanců. Prodávají zakázku, ne zboží ze skladu. [odhad: velikost segmentu spočítat z ARES, viz sekce 6]
Bolest: poptávka přijde mailem s přílohou, někdo ji ručně přečte, doptává se na chybějící údaje, počítá cenu a píše nabídku. Odpověď trvá dny a zákazník mezitím poptá tři další dílny. Kdo odpoví první a srozumitelně, má větší šanci. [odhad, ověřit rozhovory]
Co dodáváme: poptávkový a nabídkový systém. Nový web zaměřený na poptávky, formulář, který si vyžádá všechno potřebné (materiál, množství, termín, výkres), okamžité potvrzení, interní seznam poptávek se stavy, šablony nabídek, upomínky nabídek bez odpovědi.
Rozhodovatel: majitel nebo vedoucí výroby.
Spouštěč nákupu: ztracená velká zakázka, odchod kalkulanta, plná schránka poptávek.
Co dnes používají: Outlook a Excel, ERP, které se nepoužívá na nabídky.
Kde se liší od ostatních: poptávky jsou jejich nejdražší hodiny, ne obsah webu.

### Segment 3: revizní a servisní firmy

Kdo: firmy, které provádějí pravidelné povinné nebo smluvní kontroly a servis: elektrorevize, kontroly a servis plynových zařízení a kotlů, servis klimatizací a tepelných čerpadel, požární ochrana a BOZP, servis výtahů a zvedacích zařízení. 5 až 50 zaměstnanců. Které kontroly a v jakých lhůtách je povinné, se liší podle oboru a musí se ověřit u každého oboru zvlášť. [ověřit]
Bolest: stovky zákazníků s termíny, které si hlídá Excel nebo hlava. Zákazník se neozve, termín propadne, firma o zakázku přijde nebo ji musí honit telefonem. Technik pak na místě píše protokol ručně a doma ho přepisuje. Fakturace se dělá zvlášť. [odhad, ověřit rozhovory]
Co dodáváme: servisní autopilot. Evidence zařízení a zákazníků, automatické připomínky blížících se termínů, online objednání termínu, plán techniků, protokol z mobilu s fotkami, PDF zákazníkovi a podklad pro fakturu.
Rozhodovatel: majitel, vedoucí servisu.
Spouštěč nákupu: růst počtu zákazníků, ztráta pravidelných zákazníků, nový technik, kontrola.
Co dnes používají: Excel, papírové protokoly, obecný fakturační program, někdy drahý servisní software, který nemají důvod dokupovat.
Proč je to dobrý segment: příjem se opakuje (zákazník se vrací každý rok), takže hodnota automatizace je přímo v tržbách, ne jen v ušetřených hodinách.

## 4. Mapa bolestí a hodnoty

| | Velkoobchody a výrobci | Zakázkoví výrobci | Servisní firmy |
|---|---|---|---|
| Nejdražší ruční činnost | přepisování objednávek | příprava nabídek | plánování a protokoly |
| Co se ztrácí | hodiny, chyby ve fakturaci | zakázky kvůli pomalé odpovědi | zákazníci, kterým propadl termín |
| Jak se hodnota měří | ušetřené hodiny | ušetřené hodiny a úspěšnost nabídek | hodiny a obnovené zakázky |
| Jednorázová cena (3 úrovně) | 59 000 až 159 000 Kč | 39 000 až 139 000 Kč | 45 000 až 149 000 Kč |
| Měsíční správa | 3 900 až 14 900 Kč | 2 900 až 11 900 Kč | 3 500 až 12 900 Kč |
| Opakující se příjem | střední | střední | vysoký |

## 5. Rizika výběru

* Všechny tři segmenty jsou postavené na odhadu bolesti. Dokud nemluvíme s 10 lidmi z každého segmentu, jde o hypotézu.
* Zakázkoví výrobci mívají velmi odlišné procesy. Hrozí, že se každý projekt stane zakázkovým vývojem. Řešení: pevný rozsah, produkt s moduly, odmítnout nezapadající požadavky.
* Servisní firmy jsou technici, ne kancelářští lidé. Aplikace musí fungovat na mobilu venku a bez školení. Řešení: pilot s jednou firmou.
* Konkurence z druhé strany: hotový servisní software existuje. [odhad] Naše výhoda je cena, rychlost a české napojení, ne počet funkcí.
* Všechny tři segmenty ovlivňuje konjunktura. Ve stagnaci se nákupy odkládají.

## 6. Co ověřit dřív, než se vloží větší peníze

Nic z toho jsem provést nemohl. Výsledek každého kroku se zapíše do tabulky segmentů.

1. **Velikost trhu.** Z Registru ekonomických subjektů (otevřená data ČSÚ, export z ARES) spočítat firmy s 5 až 80 zaměstnanci ve vybraných třídách CZ NACE. Pozor, od roku 2025 se používá nová verze klasifikace, ověřit, jaká platí pro stažená data.
2. **Nenasycení.** Pro každý segment projít 10 hledání (například "web pro kovovýrobu", "software pro revize", "objednávkový portál pro velkoobchod") a projít první dvě stránky Google a Sklik. Zapsat, kolik dodavatelů cílí přímo na segment.
3. **Rozhovory.** 10 rozhovorů po 15 minut v každém segmentu. Otázky jsou v `12-business-system.md`. Cíl: potvrdit, kolik hodin týdně zabírá hlavní ruční činnost.
4. **Cena.** Zeptat se na orientační rozpočet. Pokud 7 z 10 řekne, že to je pod tisíc korun hodina práce, ceny zvýšit.
5. **Právní stav oslovování.** Viz `07-pravidla-outreach.md`.

Pokud segment neprojde (například rozhovory neukážou hodiny, které by stály za automatizaci), nahradí se čtvrtým segmentem v pořadí, tedy malými dopravními a spedičními firmami.

## Zdroje

* [ČSÚ: V používání AI dohání podniky v Česku průměr EU](https://www.businessinfo.cz/clanky/csu-v-pouzivani-ai-dohani-podniky-v-cesku-prumer-eu/)
* [AMSP ČR: AI v Česku raketově roste](https://www.businessinfo.cz/clanky/amsp-cr-ai-v-cesku-raketove-roste/)
* [Třetina malých firem v Česku nemá internetové stránky](https://www.businessinfo.cz/clanky/tretina-malych-firem-v-cesku-nema-internetove-stranky-prichazeji-tim-o-zakazky/) (jen název, obsah jsem neotevřel)
* [Nový přehled AI dodavatelů](https://www.businessinfo.cz/clanky/novy-prehled-ai-dodavatelu-usnadni-firmam-orientaci-na-trhu/)
* [PneuB2B](https://kampan.pneub2b.eu/Company.aspx)
