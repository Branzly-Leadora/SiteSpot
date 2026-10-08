# Segment 2: zakázkoví výrobci a dílny

Kdo: kovovýroba, obrábění, truhlárny, plasty, sklo, reklamní výroba, 8 až 60 zaměstnanců, prodávají zakázku podle zadání zákazníka.
Rozhodovatel: majitel, jednatel, vedoucí výroby.
Analýza a skóre: `10-analyza-segmentu.md`. Obecná pravidla: `07-pravidla-outreach.md`.

Proměnné v textech: `{{osloveni}}`, `{{firma}}`, `{{pozorovani}}`, `{{cal_link}}`, `{{odesilatel}}`, `{{odesilatel_firma}}`, `{{odesilatel_adresa}}`, `{{zdroj_kontaktu}}`, `{{odhlasit_link}}`.

## 1. Nabídka

Produkt: poptávkový a nabídkový systém. Zákazník pošle poptávku se vším potřebným, firma odpoví rychle a srozumitelně, nabídky se nepíšou od nuly.

| | Start | Standard | Pro |
|---|---|---|---|
| Cena jednorázově, bez DPH | 39 000 Kč | 79 000 Kč | 139 000 Kč |
| Termín od dodání podkladů | 3 týdny | 4 týdny | 6 týdnů |
| Správa měsíčně | 2 900 Kč | 5 900 Kč | 11 900 Kč |
| Hodiny úprav ve správě | 1 | 3 | 6 |
| Hodiny dodání (interní odhad) | 35 | 70 | 120 |
| Příjem na hodinu dodání | 1 114 Kč | 1 129 Kč | 1 158 Kč |

Start:
* Nový web zaměřený na poptávky: technologie, materiály, reference, kontakt.
* Poptávkový formulář, který si vyžádá materiál, množství, termín a výkres. Přílohy se ukládají.
* Okamžité potvrzení zákazníkovi a upozornění firmě.
* Interní seznam poptávek se stavy (nová, v kalkulaci, nabídnuto, vyhráno, ztraceno).

Standard (vše ze Startu plus):
* Šablony nabídek v PDF s vlastními pravidly ceny (materiál, množství, příplatky) pro rychlý návrh ceny.
* Automatické upomínky nabídek bez odpovědi (po 3 a 7 dnech).
* Stavy zakázek, které vidí zákazník.

Pro (vše ze Standardu plus):
* Napojení na fakturaci nebo ERP (Pohoda, Money S3, ABRA Flexi nebo Fakturoid, jedno z nich).
* Zákaznický účet s historií a tlačítkem "zadat znovu".
* Základní plán kapacit a termínů.

Bonusy jsou v `11-diferenciace-a-nabidka.md`. Co není v ceně: vlastní design nad rámec loga a barev, napojení na systém bez použitelného rozhraní, cizí licence, nahrání dat nad jeden import.

### Kalkulace návratnosti (příklad, k přepočtu na číslech zákazníka)

Hodiny:
* 80 poptávek měsíčně, 45 minut na přípravu nabídky = 60 hodin
* automatizace odbaví 40 % práce = 24 hodin ušetřeno
* cena kvalifikované hodiny 500 Kč (předpoklad, upravit) = 12 000 Kč měsíčně

Zakázky (scénář, ne slib):
* 80 poptávek, úspěšnost nabídek 20 %, průměrná zakázka 40 000 Kč, marže 25 %
* rychlejší odpověď zvýší úspěšnost o 2 body: 1,6 zakázky navíc, 16 000 Kč hrubého zisku měsíčně

Součet: 28 000 Kč měsíčně. Standard stojí 79 000 Kč a správa 5 900 Kč, čistá úspora 22 100 Kč měsíčně, návratnost zhruba 3,6 měsíce. Druhá část (zvýšení úspěšnosti) je odhad. Kdo ho nechce počítat, počítá jen hodiny: 12 000 minus 5 900 je 6 100 Kč měsíčně a návratnost 13 měsíců.

## 2. Audit

Šablona je stejná jako v `03-audit-sablona.md`. V části "co jsem zjistil" se u tohoto segmentu ověřuje:
* Jak se dá na webu zadat poptávka (formulář, jen mail, telefon).
* Jestli formulář umí přílohy.
* Jestli web uvádí, do kdy firma odpovídá.
* Jestli jsou na webu technologie, materiály a reference.
Tři návrhy bývají: poptávkový formulář s přílohami, potvrzení do minuty, šablona nabídky. Hodiny se počítají podle kalkulace výše.

## 3. Mailová sekvence

Strojová verze: `sequences/zakazkovi-vyrobci.json`. Pravidla jako u prvního segmentu: max 90 slov, jedna otázka, bez pomlčky, odkaz na Cal.com, zastavení po odpovědi.

### Mail 1, den 0

Předměty:
* A: Hodiny nad poptávkami u {{firma}}
* B: Tři minuty o nabídkách u {{firma}}
* C: Rychlejší odpověď na poptávku bez nového člověka

```
Dobrý den, {{osloveni}},

{{pozorovani}}. U zakázkových výrobců často platí, že kdo odpoví první a srozumitelně, dostane zakázku, a že nabídky zabírají hodiny, které se těžko hlídají.

Ukážu vám za 3 minuty, co byste u sebe zautomatizovali a kolik hodin měsíčně to ušetří. Připravím to ze zveřejněných informací o vaší firmě, bez závazku.

Mám vám video poslat? Termín na rozhovor najdete na {{cal_link}}.

{{odesilatel}}
```

### Mail 2, den 3

Předměty:
* A: Příklad: 80 poptávek měsíčně, 60 hodin práce
* B: Kolik stojí příprava jedné nabídky
* C: Výpočet hodin pro {{firma}}

```
Dobrý den, {{osloveni}},

jednoduchý příklad: 80 poptávek měsíčně, 45 minut na jednu nabídku, to je 60 hodin práce. Část jde zrychlit formulářem, který si vyžádá všechno potřebné, a šablonou nabídky.

Kalkulaci udělám s vašimi čísly a ukážu ji ve 3 minutách. Kolik poptávek měsíčně zhruba dostáváte? Stačí odpovědět jedním řádkem, nebo vybrat termín na {{cal_link}}.

{{odesilatel}}
```

### Mail 3, den 7

Předměty:
* A: Co se u vás nemusí měnit
* B: Poptávky bez změny ERP
* C: Zákazník dostane odpověď do minuty

```
Dobrý den, {{osloveni}},

obava bývá, že se musí měnit systém nebo způsob práce. Nemusí. Poptávky se začnou sbírat strukturovaně, zákazník hned dostane potvrzení a vy dostanete všechno, co potřebujete ke kalkulaci. Nabídku pak píšete z šablony.

Ve 3 minutách ukážu, jak by to u vás vypadalo. Co vás dnes zdrží nejvíc: doptávání chybějících údajů, kalkulace, nebo psaní nabídky? Termín je na {{cal_link}}.

{{odesilatel}}
```

### Mail 4, den 14

Předměty:
* A: Poslední zpráva k poptávkám
* B: Uzavírám téma, {{firma}}
* C: Naposledy k nabídkám u {{firma}}

```
Dobrý den, {{osloveni}},

víc vám psát nebudu. Pokud se téma poptávek teď nehodí, rozumím tomu.

Kdyby se to změnilo, ukázka na 3 minuty s odhadem hodin měsíčně pořád platí, termín je na {{cal_link}}. Mám vám za půl roku napsat znovu? Do té doby vám nic posílat nebudu.

{{odesilatel}}
```

Patička pod každým mailem je stejná jako u prvního segmentu (viz `sequences/velkoobchody-vyrobci.json`).

## 4. LinkedIn

Pozvánka A (max 300 znaků):

```
Dobrý den, {{osloveni}}, jsem {{odesilatel}} ze SiteSpot. Pomáháme zakázkovým výrobcům rychleji odpovídat na poptávky a méně času trávit nabídkami. {{pozorovani}}. Budu rád za spojení.
```

Pozvánka B (max 300 znaků):

```
Dobrý den, {{osloveni}}, jsem {{odesilatel}} ze SiteSpot. Stavíme poptávkové systémy pro dílny a výrobce. Hledám lidi z oboru, se kterými si můžu vyměnit zkušenosti. Budu rád za spojení.
```

Zpráva po přijetí:

```
Děkuji za přijetí, {{osloveni}}. Zajímá mě jedna věc: když vám přijde poptávka mailem s výkresem, kdo ji dnes zpracuje a za jak dlouho dostane zákazník odpověď?
```

Připomenutí po 5 až 7 dnech:

```
{{osloveni}}, jen krátce k mé zprávě. Pokud poptávky řešíte tak, jak to vyhovuje, stačí napsat a nebudu se ozývat. Pokud ne, pošlu vám 3 minutové video s odhadem, kolik hodin měsíčně by vám automatizace poptávek ušetřila. Mám ho poslat?
```

## 5. Dopis a telefon

Dopis posílaný poštou na sídlo firmy, formát A5, osobně adresovaný jednateli podle veřejného rejstříku. Obsah:
* jedna věta o tom, kdo píše a proč,
* jedno ověřené pozorování o jejich webu,
* jednostránkový audit v příloze (viz audit výše),
* jedna výzva: naskenovat QR kód s odkazem na Cal.com nebo zavolat.
Žádné prodejní fráze, žádné ceny. Podrobnosti o provozu dopisu jsou v `13-outreach-system.md`.

Telefon (hovor na veřejné firemní číslo uvedené pro obchodní dotazy, pracovní doba, jeden pokus):

```
Dobrý den, tady {{odesilatel}} ze SiteSpot. Posílali jsme vám dopis s krátkým auditem vašich poptávek. Mám jednu otázku: kdo u vás vyřizuje příchozí poptávky, a můžu mu na minutu říct, co jsme našli?
```

Když odmítnou: "Rozumím, děkuji. Nebudu se ozývat." a zapsat do seznamu odhlášených.

## 6. Námitky

Obecné odpovědi jsou v `05-namitky.md`. Specifické pro tento segment:

**"Poptávky máme zvládnuté."**

```
Rozumím. Zajímá mě jedna věc, ať nehádám: za jak dlouho dostane zákazník první odpověď? Pokud do hodiny, je to u zakázkových dílen výjimka a nemáte co řešit.
```

**"Každá zakázka je jiná, to se nedá automatizovat."**

```
Souhlasím a nic nesjednocujeme. Automatizujeme to, co se opakuje: sběr údajů, potvrzení, upomínky a šablonu nabídky. Samotnou kalkulaci děláte dál vy.
```

**"Nemáme na to čas."**

```
Rozumím. Podklady připravíme my z toho, co máte: ceník, ukázky nabídek, pár poptávek. Od vás to zabere zhruba dvě hodiny celkem.
```

## 7. Test na 100 firem

Postup, metriky a pravidla úpravy a vypnutí jsou v `06-test-100-firem.md` a platí stejně. Rozdíl: kanály v pořadí dopis, LinkedIn, telefon, mail (jen na žádost nebo v režimu B).
