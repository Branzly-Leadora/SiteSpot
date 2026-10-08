# Krok 2: emailová sekvence

Čtyři maily, dny 0, 3, 7 a 14. Strojová verze je v souboru `sequences/velkoobchody-vyrobci.json`, tenhle soubor je pro lidské čtení a kontrola `validate.mjs` hlídá, že se oba shodují.

Pravidla pro všechny maily: maximálně 90 slov (včetně doplněného `{{pozorovani}}`), právě jedna otázka, odkaz na Cal.com, žádné pomlčky, žádné sledovací pixely. Sekvence se zastaví při první odpovědi, při odhlášení a po čtvrtém mailu.

Proměnné:
* `{{osloveni}}` oslovení v 5. pádě, doplní člověk
* `{{firma}}` název firmy
* `{{pozorovani}}` jedna ověřená věc z veřejných zdrojů firmy, max 15 slov, bez ní se neodesílá
* `{{cal_link}}` odkaz na Cal.com
* `{{odesilatel}}` jméno odesílatele
* `{{odesilatel_firma}}`, `{{odesilatel_adresa}}`, `{{zdroj_kontaktu}}`, `{{odhlasit_link}}` patička

Příklady `{{pozorovani}}`, které se dají ověřit: "Na vašem webu je pro objednávky uvedený jen mail a telefon", "Ceník ke stažení máte jako PDF a objednává se mailem". Nikdy nepsat věci, které jsme nezkontrolovali.

## Mail 1, den 0

Předměty pro test:
* A: Objednávky v mailu a Excelu u {{firma}}
* B: Tři minuty o objednávkách u {{firma}}
* C: Krátká ukázka: objednávky bez přepisování

```
Dobrý den, {{osloveni}},

{{pozorovani}}. U firem vaší velikosti to často znamená, že někdo několik hodin týdně přepisuje objednávky z mailu a Excelu do systému.

Ukážu vám za 3 minuty, co byste u sebe zautomatizovali a kolik hodin měsíčně to ušetří. Připravím to ze zveřejněných informací o vaší firmě, bez závazku.

Mám vám video poslat? Pokud je jednodušší si o tom popovídat, termín si vyberete na {{cal_link}}.

{{odesilatel}}
```

## Mail 2, den 3

Předměty pro test:
* A: Příklad: 600 objednávek měsíčně, 60 hodin práce
* B: Kolik stojí přepisování objednávek
* C: Výpočet hodin pro {{firma}}

```
Dobrý den, {{osloveni}},

navazuji na minulý mail. Jednoduchý příklad z velkoobchodu: 600 objednávek měsíčně, 6 minut na zpracování jedné, to je 60 hodin práce. Část z nich může odbavit portál napojený na fakturaci, bez přepisování.

Tuhle kalkulaci udělám s vašimi čísly a ukážu ji ve 3 minutách. Kolik objednávek měsíčně zhruba zpracováváte? Stačí odpovědět jedním řádkem, nebo vybrat termín na {{cal_link}}.

{{odesilatel}}
```

## Mail 3, den 7

Předměty pro test:
* A: Co se u vás nemusí měnit
* B: Portál bez výměny účetního systému
* C: Odběratel objedná sám, vy jen schválíte

```
Dobrý den, {{osloveni}},

obava bývá, že automatizace znamená vyměnit účetní systém nebo učit odběratele něco nového. Nemusí. Portál se napojí na vaši fakturaci (Pohoda, Money, ABRA Flexi nebo Fakturoid), odběratel vybere zboží a odešle objednávku, vy ji schválíte.

Ve 3 minutách ukážu, jak by to u vás vypadalo a kolik hodin měsíčně to ušetří. Co je u vás dnes největší zdržení: mail, Excel, nebo telefon? Termín najdete na {{cal_link}}.

{{odesilatel}}
```

## Mail 4, den 14

Předměty pro test:
* A: Poslední zpráva k objednávkám
* B: Uzavírám téma, {{firma}}
* C: Naposledy k objednávkám u {{firma}}

```
Dobrý den, {{osloveni}},

víc vám psát nebudu. Pokud se téma objednávek teď nehodí, rozumím tomu.

Kdyby se to změnilo, ukázka na 3 minuty s odhadem hodin měsíčně pořád platí, termín je na {{cal_link}}. Mám vám za půl roku napsat znovu? Do té doby vám nic posílat nebudu.

{{odesilatel}}
```

## Patička pod každým mailem

```
Posílám vám to na firemní adresu uvedenou na {{zdroj_kontaktu}}. Pokud další zprávy nechcete, odhlásíte se tady: {{odhlasit_link}}
{{odesilatel_firma}}, {{odesilatel_adresa}}
```

## A/B test předmětů

Každý lead dostane po celou sekvenci stejnou variantu (A, B nebo C), přiřazenou v pořadí A, B, C, A, B, C. Neměnit tělo a předmět současně. Vyhodnocení a limity viz plán testu.

## Poznámky k textu

* Háček "Ukážu vám za 3 minuty..." je ve mailu 1 doslova. Ve mailech 2 a 3 se vrací v mírně jiné formě.
* Video ve mailu 1 vzniká až po odpovědi "ano", z veřejných informací o firmě. Postup je v šabloně auditu.
* Žádná reference ani případová studie se neuvádí, dokud nemáme skutečného zákazníka, který s tím souhlasí.
