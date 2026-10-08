# Obchodní systém: od prvního kontaktu po zakázku a opakující se příjem

Všechna čísla jsou odhady, dokud se nepotvrdí měřením v testu na 100 firem. Cílem tohoto dokumentu je, aby šlo každý týden říct, kde přesně se zasekává a co s tím udělat.

## 1. Přehled systému

```
Segment (3) → Seznam firem → Outreach (13) → Rozhovor 15 minut → Audit na 30 minut
→ Report → Nabídka se třemi úrovněmi → Zakázka → Dodání 4 až 6 týdnů
→ Měření hodin → Správa → Reference a doporučení → zpět do outreach
```

Čtyři části, které musí fungovat každá zvlášť: **zdroj leadů** (13), **prodejní rozhovor** (sekce 3), **dodání** (sekce 4), **zpětná vazba z čísel** (sekce 6).

## 2. Role (tři lidé)

Role vycházejí z toho, co je v repu uvedené o týmu. Potvrdit s týmem.

| Osoba | Role | Hlavní odpovědnost |
|---|---|---|
| Oliver Žaigla | strategie a akvizice | outreach, rozhovory, nabídky, uzavření |
| David Sak | design | náhledy pro audity, vzhled portálů a webů |
| Max Hrubý | vývoj a AI | dodání, moduly, napojení, měření |

Pravidlo: nikdo nedělá víc než dvě zakázky souběžně. Akvizice má pevný čas v týdnu (viz sekce 5).

## 3. Prodejní proces

### Fáze 0: rozhovor 15 minut (výzkum, ne prodej)

Používá se v prvních 30 dnech u každého segmentu, aby se potvrdila bolest. Žádná nabídka.

Otázky:
1. Jak dnes přijde zakázka, poptávka nebo objednávka a kdo ji vyřídí jako první?
2. Kolik jich měsíčně přijde a kolik času to jednomu člověku zabere?
3. Kdy naposledy jste kvůli tomu něco ztratili (zákazníka, zakázku, den)?
4. Čím to dnes řešíte a co vás na tom nejvíc obtěžuje?
5. Kdybyste to jednou rukou vyřešili, kolik byste za to byli ochotní zaplatit? (Neptat se přímo na cenu, ptát se na řád: do 50 tisíc, do 150 tisíc, výš.)

Výstup do tabulky: segment, počet jednotek měsíčně, minut na jednotku, ztráty, budget v řádu.

### Fáze 1: audit 30 minut

Struktura hovoru:
1. 3 minuty: co chceme zjistit a co z toho dostanou (report do 2 dnů).
2. 15 minut: průchod jednou skutečnou zakázkou od vstupu po fakturu. Zapisuji čas každého kroku.
3. 7 minut: čísla (objednávky měsíčně, minut na jednu, cena hodiny, ztráty).
4. 5 minut: další krok. Pokud čísla vychází, domluvit termín na představení reportu.

Pravidla:
* Ptát se, neprodávat.
* Pokud čísla nevychází, říct to a hovor ukončit s reportem. Důvěra stojí víc než jedna zakázka.
* Do 2 pracovních dnů odeslat jednostránkový report (`03-audit-sablona.md`).

### Fáze 2: představení reportu a nabídky

Nabídka má tři úrovně (kotva). Formát: 20 minut hovoru nebo schůzky, ne mail. Struktura:
1. Shrnutí čísel zákazníka, ne naše.
2. Ukázka náhledu (David připraví z jejich loga a produktů).
3. Tři úrovně s odlišným rozsahem. Doporučit jednu a zdůvodnit ji jejich čísly.
4. Záruka (po schválení majitelem, viz `11`).
5. Další krok: podpis, platba první třetiny, termín zahájení. Pokud nepodepíšou, domluvit konkrétní termín dalšího hovoru.

### Fáze 3: uzavření

* Smlouva (vzor připraví právník), jasný rozsah, termín od dodání podkladů, platební milníky 40, 40, 20 procent.
* Seznam podkladů, které firma dodá, s termínem. Bez podkladů se termín posouvá, ne zakázka.

### Doporučování

Po prvním měření (60 dnů po spuštění) požádat o tři konkrétní kontakty ze stejného oboru. Za doporučení platí 10 % z první zakázky, pokud se uskuteční (po právním posouzení).

## 4. Dodání

Pravidla pro udržení cen a marží:

* Moduly, ne zakázkový vývoj. Každý segment má vlastní sadu modulů, výchozí šablona se jen nastaví. Kdo chce něco mimo, dostane cenu za hodinu (1 200 Kč).
* První funkční verze do 14 dnů od dodání podkladů. Zákazník ji vidí na svých datech.
* Týdenní krátká zpráva zákazníkovi: hotovo, jde se dělat, co od něj potřebujeme.
* Přejímka se zákazníkem: podpis, že rozsah je splněn.
* Měření: zapsané hodiny před (z auditu) a po 60 dnech. Výsledek jde do reportu a k reference.

Kapacita:
* Jedna osoba dodání = zhruba 60 až 80 hodin měsíčně pro dodání, zbytek je správa a akvizice. [odhad]
* Při průměrné zakázce 80 hodin to jsou zhruba 1 zakázka měsíčně na 1 osobu dodání. Při dvou lidech v dodání zhruba 2 zakázky měsíčně.
* Nad 2 souběžné zakázky nepřijímat.

## 5. Týdenní rytmus

Hormozi ve své knize $100M Leads klade důraz na pravidelný, každodenní čas věnovaný získávání zákazníků. To jsem do výsledků vyhledávání nenašel a vycházím z paměti, takže dohledat v knize. Přeloženo do našich limitů (ruční, ne hromadné):

| Den | Aktivita | Čas |
|---|---|---|
| Pondělí | příprava 10 firem: ověření kontaktu, pozorování, audit náhled | 3 hodiny |
| Úterý | LinkedIn pozvánky 15 až 20, dopisy odeslat | 1,5 hodiny |
| Středa | telefony 10 firem po dopisu, zprávy po přijetí | 2 hodiny |
| Čtvrtek | rozhovory a audity (cíl 2 týdně) | 3 hodiny |
| Pátek | nabídky, měření, zápis do tabulky, retrospektiva | 2 hodiny |

Celkem zhruba 11,5 hodiny týdně na akvizici. Odpovídá 40 až 50 firmám měsíčně na jednoho člověka.

## 6. Metriky a rozhodování

Každý týden se zapisuje:

| Fáze | Metrika | Cíl (hypotéza) |
|---|---|---|
| Osloveno | firmy | 10 až 12 týdně |
| Odpověď | věcné odpovědi | 15 až 20 ze 100 (vícekanálově) |
| Rozhovor | uskutečněné rozhovory 15 minut | 8 až 12 ze 100 |
| Audit | audity 30 minut | 5 až 8 ze 100 |
| Nabídka | předložené nabídky | 3 až 4 ze 100 |
| Zakázka | podepsané | 1 až 2 ze 100 |
| Hodiny | ušetřené hodiny proti auditu | 80 % a víc z dohodnutého čísla |
| Doporučení | získané kontakty | 3 na zakázku |

Rozhodovací pravidla:
* Nejslabší fáze trychtýře se opravuje první. Ostatní se mění až po ní.
* Jedna změna najednou, 30 až 40 firem na ověření.
* Segment se vypne, když po 100 firmách nepřinese 3 audity.
* Tarif se zvedá, když se 7 ze 10 zákazníků nepodívá na cenu.

## 7. Finanční plán (hrubý model)

Příjmy: průměr zakázky ve třech segmentech zhruba 80 až 100 tisíc korun bez DPH, správa 5 až 8 tisíc měsíčně.

Dvanáct měsíců, tři scénáře. Číslo zakázek je možnost, ne slib.

| | Pomalý | Základní | Rychlý |
|---|---|---|---|
| Zakázek za rok | 5 | 12 | 20 |
| Jednorázové tržby (průměr 90 000 Kč) | 450 000 Kč | 1 080 000 Kč | 1 800 000 Kč |
| Správa na konci roku, měsíčně (průměr 6 500 Kč) | 32 500 Kč | 78 000 Kč | 130 000 Kč |
| Hodin dodání (průměr 80) | 400 | 960 | 1 600 |

Poznámky:
* Rychlý scénář vyžaduje dvě osoby v dodání. Při jedné je horní hranice zhruba 12 zakázek ročně.
* Do ceny hodiny v nákladech patří také vlastní nabídky, audity, mzdy a režie. Tyto náklady zatím neznám a doplní je majitel.
* Náklady na akvizici: dopis a tisk zhruba 30 až 60 Kč na firmu, nástroj pro odesílání a doména podle zvoleného řešení. [odhad]

## 8. Plán prvních 90 dnů

| Týdny | Cíl | Výstup |
|---|---|---|
| 1 až 2 | ověření trhu | počty firem z ARES, 10 vyhledávání na konkurenci v každém segmentu, právní posouzení |
| 3 až 5 | 30 rozhovorů (10 na segment) | tabulka bolestí a hodin, úprava nabídky |
| 3 až 6 | postavit jádro modulů a ukázkový portál pro první segment | použitelná ukázka na vymyšlených datech |
| 6 až 10 | test na 100 firem v prvním segmentu | metriky podle `06` |
| 8 až 12 | první dvě pilotní zakázky | smlouva, měření před a po |
| 12 | rozhodnutí | pokračovat, upravit nabídku, změnit segment |

Pilotní zakázky: sleva nejvýš 20 % výměnou za měření a souhlas s referencí. Reference se používá jen po písemném souhlasu zákazníka.

## 9. Co může systém zabít

* Právní problém s oslovováním: viz `07`.
* Přetížení kapacity při dvou souběžných zakázkách: nepřijímat třetí.
* Zakázkový vývoj místo modulů: říkat ne.
* Zákazník, který nedodá podklady: termín se posouvá, platba druhé třetiny se váže na ukázku, ne na kalendář.
* Slib, který nejde splnit: záruka a tvrzení jen po ověření.
