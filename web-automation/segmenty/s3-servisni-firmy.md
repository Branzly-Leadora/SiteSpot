# Segment 3: revizní a servisní firmy

Kdo: firmy s pravidelnými kontrolami, revizemi a servisem u stálých zákazníků. Elektrorevize, plynová zařízení a kotle, klimatizace a tepelná čerpadla, požární ochrana a BOZP, servis zvedacích zařízení. 5 až 50 zaměstnanců.
Rozhodovatel: majitel, vedoucí servisu.
Důležité: které kontroly jsou povinné a v jakých lhůtách, se liší podle oboru. V textech pro zákazníky se lhůty neuvádějí, dokud nejsou ověřené pro konkrétní obor.
Analýza a skóre: `10-analyza-segmentu.md`. Obecná pravidla: `07-pravidla-outreach.md`.

## 1. Nabídka

Produkt: servisní autopilot. Zákazníci a jejich zařízení na jednom místě, termíny se hlídají samy, protokol vzniká na místě z mobilu.

| | Základ | Standard | Pro |
|---|---|---|---|
| Cena jednorázově, bez DPH | 45 000 Kč | 89 000 Kč | 149 000 Kč |
| Termín od dodání podkladů | 4 týdny | 5 týdnů | 6 týdnů |
| Správa měsíčně | 3 500 Kč | 7 500 Kč | 12 900 Kč |
| Hodiny úprav ve správě | 1 | 3 | 6 |
| Hodiny dodání (interní odhad) | 40 | 80 | 130 |
| Příjem na hodinu dodání | 1 125 Kč | 1 113 Kč | 1 146 Kč |

Základ:
* Web s online poptávkou a objednáním termínu.
* Evidence zákazníků a zařízení s importem z Excelu.
* Automatické připomínky blížícího se termínu zákazníkovi mailem.
* Přehled termínů pro firmu.

Standard (vše ze Základu plus):
* Plán techniků v kalendáři.
* Protokol z mobilu: šablona, fotky, podpis zákazníka, PDF zákazníkovi.
* Podklad pro fakturu po dokončení, napojení na jeden fakturační systém (Pohoda, Money S3, ABRA Flexi nebo Fakturoid).

Pro (vše ze Standardu plus):
* Zákaznický přehled zařízení a termínů s přihlášením.
* Opakující se smlouvy a automatické vytváření dalších zakázek.
* Připomínky SMS, export pro kontrolu nebo audit.

Co není v ceně: bezplatné SMS (účtují se u poskytovatele), cizí licence, vlastní design nad rámec loga a barev, aplikace pro mobil do obchodu s aplikacemi (webová aplikace v mobilu je v ceně).

### Kalkulace návratnosti (příklad, k přepočtu)

Hodiny:
* 120 úkonů měsíčně (revize, kontroly, servisy), 45 minut administrativy na úkon (domlouvání termínu, přepis protokolu, fakturace) = 90 hodin
* automatizace odbaví 50 % = 45 hodin ušetřeno
* cena hodiny administrativy 450 Kč (předpoklad) = 20 250 Kč měsíčně

Obnovené zakázky (scénář, ne slib):
* 1 200 zákazníků s pravidelnou kontrolou, průměrná roční hodnota zákazníka 2 500 Kč
* připomínky pomohou udržet 3 % z nich, kteří by jinak termín propásli: 36 zákazníků, 90 000 Kč ročně, 7 500 Kč měsíčně

Součet: 27 750 Kč měsíčně. Standard stojí 89 000 Kč a správa 7 500 Kč, čistá úspora 20 250 Kč měsíčně, návratnost zhruba 4,4 měsíce. Druhá část je odhad. Jen z hodin: 20 250 minus 7 500 je 12 750 Kč měsíčně a návratnost 7 měsíců.

## 2. Audit

Šablona je v `03-audit-sablona.md`. U tohoto segmentu se ověřuje:
* Jde na webu objednat termín online, nebo jen zavolat.
* Je na webu uvedený postup po zadání poptávky.
* Jaké služby firma nabízí a jestli jsou vypsány po oborech.
* Jestli jsou zveřejněné reference a rozsah působnosti.
Tři návrhy bývají: online objednání termínu, připomínky termínů zákazníkům, protokol z mobilu. Hodiny se počítají podle kalkulace výše.

## 3. Mailová sekvence

Strojová verze: `sequences/servisni-firmy.json`. Pravidla: max 90 slov, jedna otázka, bez pomlčky, odkaz na Cal.com, zastavení po odpovědi.

### Mail 1, den 0

Předměty:
* A: Termíny kontrol u {{firma}} bez Excelu
* B: Tři minuty o termínech u {{firma}}
* C: Zákazník, kterému propadl termín

```
Dobrý den, {{osloveni}},

{{pozorovani}}. U firem s pravidelnými kontrolami bývá největší ztráta ta, že zákazníkovi propadne termín a nikdo se neozve, a že protokoly se píšou dvakrát.

Ukážu vám za 3 minuty, co byste u sebe zautomatizovali a kolik hodin měsíčně to ušetří. Připravím to ze zveřejněných informací o vaší firmě, bez závazku.

Mám vám video poslat? Termín na rozhovor najdete na {{cal_link}}.

{{odesilatel}}
```

### Mail 2, den 3

Předměty:
* A: Příklad: 120 úkonů měsíčně, 90 hodin administrativy
* B: Kolik stojí domlouvání termínů
* C: Výpočet hodin pro {{firma}}

```
Dobrý den, {{osloveni}},

jednoduchý příklad: 120 kontrol a servisů měsíčně, 45 minut administrativy na jeden, to je 90 hodin. Termíny, protokoly i fakturaci lze z velké části propojit.

Kalkulaci udělám s vašimi čísly a ukážu ji ve 3 minutách. Kolik kontrol a servisů měsíčně zhruba provedete? Stačí odpovědět jedním řádkem, nebo vybrat termín na {{cal_link}}.

{{odesilatel}}
```

### Mail 3, den 7

Předměty:
* A: Co se u vás nemusí měnit
* B: Termíny zákazníkům bez telefonování
* C: Protokol z mobilu na místě

```
Dobrý den, {{osloveni}},

obava bývá, že technici nebudou nic nového používat. Používat budou jen mobil, který mají, a protokol se vyplní na místě z hotové šablony. Zákazník dostane PDF a vy podklad pro fakturu.

Ve 3 minutách ukážu, jak by to u vás vypadalo. Co vás dnes zdrží nejvíc: domlouvání termínů, protokoly, nebo fakturace? Termín je na {{cal_link}}.

{{odesilatel}}
```

### Mail 4, den 14

Předměty:
* A: Poslední zpráva k termínům kontrol
* B: Uzavírám téma, {{firma}}
* C: Naposledy k servisu u {{firma}}

```
Dobrý den, {{osloveni}},

víc vám psát nebudu. Pokud se téma termínů a protokolů teď nehodí, rozumím tomu.

Kdyby se to změnilo, ukázka na 3 minuty s odhadem hodin měsíčně pořád platí, termín je na {{cal_link}}. Mám vám za půl roku napsat znovu? Do té doby vám nic posílat nebudu.

{{odesilatel}}
```

Patička pod každým mailem je stejná jako u prvního segmentu (viz `sequences/velkoobchody-vyrobci.json`).

## 4. LinkedIn

Pozvánka A (max 300 znaků):

```
Dobrý den, {{osloveni}}, jsem {{odesilatel}} ze SiteSpot. Pomáháme servisním firmám hlídat termíny kontrol a omezit psaní protokolů dvakrát. {{pozorovani}}. Budu rád za spojení.
```

Pozvánka B (max 300 znaků):

```
Dobrý den, {{osloveni}}, jsem {{odesilatel}} ze SiteSpot. Stavíme systémy pro servisní a revizní firmy, od termínů po protokol z mobilu. Hledám lidi z oboru, se kterými si můžu vyměnit zkušenosti. Budu rád za spojení.
```

Zpráva po přijetí:

```
Děkuji za přijetí, {{osloveni}}. Zajímá mě jedna věc: jak dnes poznáte, že se blíží termín kontroly u zákazníka, a kdo se mu ozve?
```

Připomenutí po 5 až 7 dnech:

```
{{osloveni}}, jen krátce k mé zprávě. Pokud termíny řešíte tak, jak to vyhovuje, stačí napsat a nebudu se ozývat. Pokud ne, pošlu vám 3 minutové video s odhadem, kolik hodin měsíčně by vám automatizace termínů a protokolů ušetřila. Mám ho poslat?
```

## 5. Dopis a telefon

Dopis poštou na sídlo firmy, formát A5, osobně adresovaný jednateli podle veřejného rejstříku. Obsah:
* kdo píše a proč, jedna věta,
* jedno ověřené pozorování o jejich webu,
* jednostránkový audit v příloze,
* jedna výzva: QR kód s odkazem na Cal.com nebo zavolat.
Žádné ceny, žádné prodejní fráze. Provoz dopisu: `13-outreach-system.md`.

Telefon (na veřejné firemní číslo uvedené pro obchodní dotazy, pracovní doba, jeden pokus):

```
Dobrý den, tady {{odesilatel}} ze SiteSpot. Posílali jsme vám dopis s krátkým auditem, jak u vás funguje objednání termínu. Mám jednu otázku: kdo u vás hlídá termíny kontrol u zákazníků, a můžu mu na minutu říct, co jsme našli?
```

Když odmítnou: "Rozumím, děkuji. Nebudu se ozývat." a zapsat do seznamu odhlášených.

## 6. Námitky

Obecné odpovědi jsou v `05-namitky.md`. Specifické pro tento segment:

**"Termíny si hlídáme."**

```
Rozumím. Zajímá mě jedna věc, ať nehádám: kdo a jak to dělá, když je v sezóně víc kontrol, než se stihne? Pokud to funguje i tehdy, nemáte co řešit.
```

**"Technici na to nebudou mít čas ani chuť."**

```
Rozumím, proto je protokol jedna obrazovka v mobilu a fotky se nahrají na místě. Technik ho vyplní rychleji než papír a nepřepisuje ho večer. Mohu vám ukázat, jak by vypadal pro vaši kontrolu?
```

**"Už máme software."**

```
Dobře, to je dobrá výchozí situace. Zeptám se jednoduše: umí vašemu zákazníkovi sám připomenout termín a nechat ho objednat se online? Pokud ano, nemáte co řešit.
```

## 7. Test na 100 firem

Postup, metriky a pravidla úpravy a vypnutí jsou v `06-test-100-firem.md`. Rozdíl: kanály v pořadí dopis, LinkedIn, telefon, mail (jen na žádost nebo v režimu B). Protože je tento segment nejméně znám, před testem proběhne 10 rozhovorů (viz `12-business-system.md`).
