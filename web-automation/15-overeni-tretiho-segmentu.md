# Ověření třetího segmentu: co je spočítané, co ne a co doporučuji

Zadání: místo velkoobchodů najít třetí segment, který nejvíc potřebuje web a automatizaci a má nejmenší konkurenci. Eshopy se vedou samostatně a tady se neřeší.

Dva obory jsou už zvolené: zakázkoví výrobci a revizní a servisní firmy (`10-analyza-segmentu.md`). Všechny údaje v tomto dokumentu mají štítek:
* **[spočítáno]** z oficiálních dat, postup jde zopakovat.
* **[pozorováno]** z vyhledávání nebo webů, které jsem viděl. Je to slabší důkaz.
* **[odhad]** můj úsudek.

## 1. Co se spočítalo (oficiální data)

Zdroj: úplný registr ekonomických subjektů ČSÚ, soubor res_data.csv ze 30. 9. 2026 (3 534 793 řádků) z adresy https://opendata.czso.cz/data/od_org03/res_data.csv . Do repa jsem ho nedával (544 MB). Skripty `analyza/count_res.py` a `analyza/sample_res.py` ho zpracují, výsledek je v `analyza/pocty-res-2026-09-30.json`. Spouští se `python3 -I analyza/count_res.py res_data.csv vysledek.json`.

Pravidla výpočtu: aktivní subjekt je ten bez data zániku. Obor je převažující činnost podle CZ NACE 2008 (sloupec `NACE`; sloupec `NACE2025` má jinou strukturu a se starými předponami nesedí). Velikost je kategorie počtu zaměstnanců.

Celek [spočítáno]: aktivních subjektů s oborem je 2 950 895. Velikost 10 až 99 zaměstnanců má známou u 79 676 z nich. **U 1 496 130 subjektů (51 %) velikost v registru není.** Všechny počty firem s 10 až 99 zaměstnanci níže jsou proto spodní odhad.

### Velikost kandidátních oborů (firmy se známou velikostí 10 až 99 zaměstnanců)

| Obor (CZ NACE) | Firem | Poznámka |
|---|---|---|
| Stavební firmy (41, 42, 43.3, 43.9) | 4 022 | |
| Doprava a spedice (49.41, 49.42, 52.29) | 3 044 | |
| Projekce a inženýring (71.1) | 1 292 | |
| Autoservisy (45.2) | 1 262 | |
| Facility služby (81.2, 80.1 až 80.3) | 719 | úklid a ostraha |
| Zubní lékaři (86.23) | 644 | kontrolní obor, předpoklad nasycení |
| Odpady (38, 39) | 581 | |
| Pro srovnání, už zvolené: zakázková kovovýroba (24, 25, 28) | 4 006 | |
| Truhlářství a nábytek (16.2, 31) | 521 | |
| Revizní a servisní (33.1, 43.21, 43.22) | 1 275 | součet tří skupin |

Velikost oboru je podle registru, ne podle skutečné činnosti: ve vzorcích (sekce 3) byla značná část firem v oboru jen formálně. Počty jsou tedy zároveň příliš nízké (chybí velikost u poloviny firem) a příliš vysoké (část firem do oboru nepatří). Řád je ale použitelný.

## 2. Konkurence (hledání)

Pro každý obor jsem provedl 6 českých hledání (software, tvorba webu, automatizace, objednávkový nebo rezervační systém, AI, informační systém s cenou). Nástroj pro hledání je zaměřený na USA a vrací shrnutí, ne pořadí výsledků. České dodavatele zachytil slabě a některé se našly až doplňujícím dotazem.

| Obor | Hodnocení | Co se objevilo [pozorováno] |
|---|---|---|
| Doprava a spedice | střední | tři čeští dodavatelé dispečinku (fireTMS, TruckManager, TruckAgenda), jedna AI nabídka (virtualworkforce.ai). Agentura se zaměřením na dopravce ne, jen obecné agentury |
| Stavební firmy | střední | silné řízení zakázek a rozpočtování (Callida, RTS), katalog uvádí zhruba 279 softwarových firem. Specializovaná agentura na weby pro stavebníky ne |
| Projekce a inženýring | nízké | žádný český dodavatel webů ani automatizace pro obor, jen zahraniční nástroje a CAD software |
| Autoservisy | střední (software spíš vysoké) | nejméně 12 českých programů a rezervačních systémů (AutoERP kolem 3 450 Kč měsíčně, KARDAN kolem 3 000 Kč, Trialexa přes 200 servisů, ServisDesk a další). Agentura jen jeden freelancer |
| Facility služby | střední | Anolla s plánem zdarma, levné šablonové weby od 799 Kč ročně, Dayswaps pro směny. Agentura pro obor ne |
| Odpady | nízké pro web a objednávky | evidenční software ENVITA od Inisoftu (podle výrobce přes 3 600 zákazníků), ProBaze, T Mapy. Dodavatel webů a objednávek pro svozové firmy ne |
| Zubní lékaři (kontrola) | střední | rezervace XDENT na 2 z 8 viděných webů, Anolla, české ordinační systémy |

### Co z kontrolního oboru plyne

Zubaře jsem vzal jako obor, o kterém předpokládám, že je nasycený. Metoda je přesto ohodnotila stejně jako čtyři další obory („střední“). **Metoda tedy dobře nerozlišuje nasycený a nenasycený obor.** Hodnocení v tabulce nejde brát jako měření, jen jako obrázek toho, jestli se v hledání objevil specializovaný dodavatel webů a automatizace pro daný obor. U autoservisů se objevil jen software, ne webová agentura, a přesto je obor zjevně obsazený.

## 3. Potřeba (weby firem)

Z registru jsem u každého oboru vylosoval 12 firem se 10 až 99 zaměstnanci a zjišťoval jejich web: zda existuje, zda má poptávkový formulář nebo online objednání a zda je k dispozici jen telefon a mail.

| Obor | Web nalezen | Formulář nebo online objednání (z nalezených) |
|---|---|---|
| Zubní lékaři (kontrola) | 8 z 12 | 5 z 8 |
| Autoservisy | 5 z 12, ale jen 2 jsou skutečné autoservisy | 2 z 5 |
| Odpady | 4 z 12 | 1 z 4 |
| Facility služby | 3 z 12 | 0 z 3 potvrzeno |
| Projekce a inženýring | 2 z 12 | 0 z 2 potvrzeno |
| Stavební firmy | 1 z 12 | 0 z 1 |
| Doprava a spedice | 0 z 12 | nelze |

**Tato část nic nedokazuje o potřebě oboru.** Číslo „web nalezen“ říká, jak snadno ho tenhle vyhledávač najde, ne jestli firma web má. U stavebních firem a dopravců byly ve vzorku navíc firmy, které do oboru nepatří. Jediný použitelný signál: u zubařů, kteří jsou obsazeni rezervačními systémy, mělo online objednání 5 z 8 webů, u ostatních oborů téměř nikdo. To je v souladu s předpokladem, že tam jsou mezery, ale vzorek je 12 firem a nástroj slabý.

## 4. Co z toho plyne

Nenašel jsem segment, o kterém by se dalo říct, že je ověřeně nejlepší. Našel jsem, co se dá vyloučit a co zbývá:

* **Vyloučit: autoservisy.** Software i rezervace jsou obsazené desítkami českých produktů.
* **Spíš vyloučit: facility služby.** Malý obor, levné šablonové weby a plán zdarma od Anolly tlačí ceny dolů.
* **Spíš vyloučit: projekce a inženýring.** Nízká viditelná konkurence, ale z dat nevyplývá žádná opakující se ruční práce (objednávky, nabídky, termíny), na kterou se dá postavit nabídka. Potřeba je nejasná.
* **Kandidáti: doprava a spedice, odpady, stavební firmy.**

| | Doprava a spedice | Odpady | Stavební firmy |
|---|---|---|---|
| Počet firem (spodní odhad) | 3 044 | 581 | 4 022 |
| Konkurence pro náš typ nabídky | střední: dispečink obsazený, web a poptávky ne | nízká: evidence obsazená, web a objednávky ne | střední: řízení zakázek obsazené, silný trh obecných webů |
| Ruční práce | poptávky přeprav, nabídky ceny, dokumenty, komunikace s dispečerem | objednávky kontejnerů a svozů, trasy, vážní lístky | poptávky, rozpočty, nabídky |
| Využití hotového modulu z druhého segmentu | vysoké: poptávka, kalkulace a nabídka | střední | vysoké |
| Překryv s eshopy | žádný | žádný | žádný |

### Doporučení

**Třetí segment: doprava a spedice**, v nabídce zúžené na „poptávky, nabídky a objednávky přeprav + web“, ne na dispečink. Důvody:
1. **Dostatečný objem.** Nejméně 3 044 firem. Pro test na 100 firem a následné dvě až tři vlny je to nutné. U odpadů by to bylo na hraně.
2. **Společný modul s druhým segmentem.** Poptávkový a nabídkový systém pro zakázkové výrobce se dá použít i pro přepravní poptávky. Dva segmenty, jedna vývojová práce.
3. **Dispečink není náš cíl.** fireTMS a další jsou jiný produkt. Naše mezera je přijetí poptávky, nabídka a objednávka na straně zákazníka.

**Náhradník: odpady.** Nejnižší viditelná konkurence, ale nejmenší obor a evidenci už pokrývá zavedený software. Hodí se jako druhá vlna po ověření.

Důležité: **tohle doporučení je úsudek, ne výsledek měření.** Z dat jsem nemohl ověřit, kolik hodin měsíčně dopravci s poptávkami skutečně ztrácejí.

## 5. Co ověřit dřív, než se začne stavět (levně)

1. **10 rozhovorů po 15 minutách s vedením dopravních firem** (otázky v `12-business-system.md`). Cílová otázka: kolik poptávek měsíčně přijde mailem nebo telefonem, kolik času zabere nabídka a co už používají. Hranice pro pokračování: aspoň 6 z 10 uvede 20 a více hodin měsíčně a nemá nástroj, který to pokrývá.
2. **Skutečná konkurence ručně.** Prohledat Google a Seznam česky (ne tímto nástrojem) na 10 dotazů a zapsat, kdo si kupuje reklamu na weby a automatizaci pro dopravce.
3. **Skutečný vzorek webů.** 30 firem z `analyza/sample_res.py` projít ručně, nebo přes seznam adres firem z jiného zdroje, protože tenhle vyhledávač domény malých firem nenašel.
4. **Zpřesnit velikost.** Registr nezná velikost u poloviny firem. Pro cílení použít další zdroj (Firmy.cz, LinkedIn Sales), jinak se oslovuje vzorek, který se dá spočítat, ale ne vždy správně.

## 6. Omezení tohoto ověření

* Hledání běželo v nástroji zaměřeném na USA, který vrací shrnutí. Ceny dodavatelů a jejich počty zákazníků jsem neověřoval u zdroje.
* Weby jsem viděl jen jako text. Vzhled, mobilní zobrazení a zastaralost nešlo posoudit.
* Vzorek 12 firem na obor je příliš malý na závěr o oboru.
* Zařazení do oboru podle registru je hrubé a část firem do oboru nepatří.
* Nepočítal jsem poptávku zákazníků po automatizaci ani ochotu platit. To může ověřit jen rozhovor.
