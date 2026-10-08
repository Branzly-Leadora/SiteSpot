# Outreach systém: nejvyšší konverze v mezích, které nás nepoškodí

Zadání bylo "nejvyšší konverzní" a dřív "nejméně kontroverzní". Tyto dva cíle se střetávají jen u hromadného studeného mailu. Proto je systém postavený tak, aby konverze pocházela z **relevance, konkrétnosti a rychlosti**, ne z objemu. Menší počet firem, ke každé skutečné pozorování a hotová práce předem.

Čísla v tomto dokumentu jsou cíle k ověření testem na 100 firem, nejde o naměřené výsledky.

## 1. Co zvyšuje konverzi (a co ne)

Z rámce Alexe Hormoziho (kniha $100M Leads, vycházím z paměti, ne z ověřeného zdroje) používáme čtyři myšlenky:

1. **Nejdřív dát hodnotu.** Nabízet užitečnou věc zdarma, než se prodává. Naše verze: hotový jednostránkový audit a náhled jejich řešení.
2. **Čtyři způsoby získávání zákazníků:** oslovení lidí, které už znáte, studené oslovení, obsah a placená reklama. My začínáme prvními dvěma, obsah přidáváme postupně a reklama přijde až po prokázaném výsledku.
3. **Opakování a doptání.** Většina zájemců neodpoví hned. Rozhoduje, kolikrát se slušně vrátíme.
4. **Doporučení.** Nejlevnější a nejdůvěryhodnější zdroj.

Tam, kde Hormoziho metody míří na hromadný objem a agresivní opakování, je u nás strop daný zákonem a pověstí (`07-pravidla-outreach.md`): po čtvrté zprávě bez odpovědi ticho, žádný nákup databází, žádný nátlak.

Co zvyšuje konverzi víc než objem:
* **Konkrétnost.** Mail s jedním ověřeným pozorováním o jejich firmě je jiná kategorie než šablona.
* **Rychlost.** Kdo odpoví za 5 minut, vyhrává častěji než ten, kdo odpoví druhý den. Platí pro příchozí zájem.
* **Nízká překážka.** Odpověď jedním řádkem, termín jedním kliknutím.
* **Důvěra.** Jasně napsané, kdo jsme, odkud máme kontakt a jak se odhlásit.

## 2. Třídění firem

Pracovat se stovkou firem najednou, ale každou jinak důkladně.

| Třída | Podíl | Kritérium | Příprava | Kanály |
|---|---|---|---|---|
| A | zhruba 20 % | přesná shoda s ICP, viditelný signál (růst, nábor, zastaralý web, ruční objednávky) | audit a náhled 30 až 45 minut | dopis, LinkedIn, telefon, mail na žádost |
| B | zhruba 50 % | shoda s ICP, bez signálu | jednostránkový audit 15 minut | LinkedIn, dopis |
| C | zhruba 30 % | částečná shoda | jen pozorování 5 minut | LinkedIn |

Zápis: třída, signál a zdroj do `leads-template.csv`.

## 3. Hotový náhled

Pro třídu A a B vznikne předem:
* jednostránkový audit (`03-audit-sablona.md`) s ověřenými pozorováními,
* u třídy A obrázkový náhled, jak by vypadal jejich formulář, portál nebo objednávka, s jejich logem a několika jejich produkty nebo službami z veřejného webu.

Pravidla:
* Na náhledu je napsáno: "Náhled vytvořený z veřejných informací. Nejde o váš skutečný systém."
* Nepoužívat nic, co je za přihlášením, ani cizí fotografie a loga mimo jejich vlastní web.
* Obrázek je bez sledování, bez registrace, odkaz není veřejně dohledatelný a po 30 dnech se maže.

Proč: přijetí nabídky je mnohem snazší, když zákazník vidí svoji firmu, ne vzor.

## 4. Vícekanálový postup pro třídu A (14 dnů)

| Den | Kanál | Co |
|---|---|---|
| 0 | LinkedIn | pozvánka (max 300 znaků) |
| 1 | pošta | dopis A5 s auditem a QR kódem na Cal.com, odesláno na sídlo firmy |
| 4 | LinkedIn | zpráva po přijetí, pokud pozvánka přijata |
| 5 až 6 | telefon | jeden pokus na veřejné číslo pro obchodní dotazy, v pracovní době |
| 8 | LinkedIn | připomenutí, bez dalších |
| 10 až 14 | mail | jen těm, kdo o něj požádali nebo v režimu B (viz `07`), sekvence čtyř mailů |
| 14 | konec | zapsat výsledek, vrátit nejdřív za 6 měsíců |

Třída B: den 0 pozvánka, den 4 zpráva, den 8 připomenutí, dopis jen s auditem.
Třída C: pozvánka a zpráva po přijetí.

Při jakékoli odpovědi se zbytek postupu zastaví a pokračuje se v rozhovoru.

## 5. Dopis (vzor)

Odesílá se poštou. Formát A5, jedna strana, ručně podepsaný, osobně adresovaný jednateli podle veřejného rejstříku. Právní stránku (jméno z rejstříku jako osobní údaj) před odesláním potvrdit právníkem.

```
Dobrý den, {{osloveni}},

jmenuji se {{odesilatel}} a pracuji ve firmě SiteSpot. Pomáháme firmám v oboru {{obor}} omezit ruční práci s {{predmet_prace}}.

Prohlédl jsem si veřejné stránky firmy {{firma}} a zjistil jsem, že {{pozorovani}}. V příloze posílám jednostránkový audit s odhadem, kolik hodin měsíčně by se dalo ušetřit. Je váš, ať už se spolu domluvíme, nebo ne.

Pokud vás zajímají čísla s vašimi údaji, naskenujte QR kód a vyberte si 30 minut. Nic vám dál posílat nebudu.

{{odesilatel}}
{{odesilatel_firma}}, {{odesilatel_adresa}}
```

Proměnné `{{obor}}` a `{{predmet_prace}}` jsou u každého segmentu jiné: výrobci a velkoobchody "objednávkami", zakázkoví výrobci "poptávkami a nabídkami", servisní firmy "termíny kontrol a protokoly".

## 6. Telefon

Pravidla: jen na číslo, které firma veřejně uvádí pro obchodní dotazy, pracovní doba, jeden pokus, hovory se nenahrávají, po "ne" se hovor zdvořile končí a kontakt se zapíše do seznamu odhlášených.

Otevření (po dopise):

```
Dobrý den, tady {{odesilatel}} ze SiteSpot. Posílali jsme vám dopis s krátkým auditem. Mám jednu otázku, kdo u vás vyřizuje [objednávky / poptávky / termíny kontrol], a můžu mu na minutu říct, co jsme našli?
```

Větvení:
* **"To jsem já."** "Super. Zjistili jsme [pozorování]. Odhad úspory je [číslo] hodin měsíčně. Dává to smysl, nebo je to jinak?" Pokud ano, navrhnout 30 minut. Pokud ne, zeptat se, jak to je.
* **"Dám vám toho člověka."** Poděkovat, představit se znovu stručně, říct stejnou větu.
* **"Pošlete mail."** "Rád, jen mi řekněte adresu." Zapsat adresu a `zadost_o_email`.
* **"Nemám zájem."** "Rozumím, děkuji. Nebudu se ozývat." Zapsat.

## 7. Příchozí zájem: nejlevnější a nejméně sporné

Příchozí kontakt (formulář, kalkulačka, odpověď na dopis) má jiný právní základ, protože se ozval sám. Je to nejlevnější zdroj, proto stojí za to na něj stavět.

**Kalkulačka hodin pro každý segment** (samostatná stránka na sitespot.cz, ve stylu stávajícího webu, ještě není postavená):
* Vstup: počet objednávek, poptávek nebo kontrol měsíčně, minut na jednu, cena hodiny.
* Výstup: hodiny a koruny měsíčně, které stojí ruční práce, a odhad úspory.
* Přihlášení na výsledek: mail, souhlas se zasláním výsledku a nabídkou schůzky (zaškrtnutí, ne předzaškrtnuté).
* Další krok: tlačítko na Cal.com.
Je to doporučený druhý krok po ověření segmentu. Postavení je samostatná práce na webu (`src/`) a v tomto balíku se nedělá.

**Rychlost odpovědi:**
* Každý příchozí kontakt dostane odpověď v pracovní době do 5 minut, mimo pracovní dobu první pracovní ráno.
* Potvrzení rezervace v Cal.com obsahuje jednu přípravnou otázku ("kolik objednávek měsíčně zhruba zpracováváte?"), aby hovor začal s čísly.
* Před hovorem připomínka (kdo se rezervoval, má souhlas na připomínku).
* Po nedostavení se jednou pošle nabídka nového termínu, ne víc.

## 8. Partneři a doporučení

Tohle je nejlevnější kanál s nejvyšší důvěrou. Dělá se ručně:

* **Účetní a účetní kanceláře**, které obsluhují firmy v našich segmentech a vidí, jak jejich klienti ručně přepisují objednávky. Doporučují nás, my jim posíláme odkazy na jejich služby tam, kde dávají smysl.
* **Dodavatelé a partneři účetních a ERP systémů** (Pohoda, Money, ABRA Flexi, Fakturoid), kteří jsou ve styku s firmami a nechtějí vyvíjet vlastní portál.
* **Oborová sdružení** a komory: příspěvek do bulletinu nebo krátká přednáška o tom, kolik hodin zabírá ruční zpracování. Bez prodeje.
* **Zákazníci po 60 dnech:** tři konkrétní kontakty ze stejného oboru, výměnou za doporučení zdarma audit pro jejich kontakt.

Odměna za doporučení: do 10 % z první zakázky, písemně, až po právním posouzení. Doporučující nesmí vystupovat jako náš zástupce.

## 9. Obsah

Pravidelné krátké obsahy, které se dají ukázat v dopise, na LinkedIn a v rozhovoru:

* Měsíčně jeden jednostránkový "Rozbor" bez jmen: jak vypadá ruční proces v oboru a kolik stojí. Jedna strana, čísla s výpočtem.
* Po prvním pilotu jeden případ s čísly před a po a souhlasem zákazníka.
* Žádný obsah vycházející z vymyšlených výsledků. Do první zakázky se případová studie nepíše.

Pravidla pro Instagram a jiné sociální sítě z `CLAUDE.md` (první řádek, bez pomlček, max 5 hashtagů) platí pro každý příspěvek.

## 10. Předpokládaný trychtýř a jak ho ověřit

Na 100 firem třídy A a B (30 A, 70 B) je cíl vícekanálového postupu:

| Krok | Jeden kanál (LinkedIn) | Vícekanálový postup |
|---|---|---|
| Věcná odpověď | 8 až 12 | 15 až 20 |
| Rozhovor 15 minut | 3 až 5 | 8 až 12 |
| Audit 30 minut | 3 až 4 | 5 až 8 |
| Nabídka | 1 až 2 | 3 až 4 |
| Zakázka | 0 až 1 | 1 až 2 |

Tyto hodnoty jsou hypotéza. Nemám žádný ověřený benchmark pro české B2B outreach těchto segmentů. Test na 100 firem ukáže, jestli vícekanálový postup opravdu přidá víc, než stojí práce navíc.

Pořadí experimentů (jeden po druhém, 30 až 40 firem):
1. Hotový náhled (třída A) proti jen auditu.
2. Dopis před LinkedIn proti LinkedIn před dopisem.
3. Varianty pozvánky A a B.
4. Telefon po dopisu proti bez telefonu.
5. Předmět mailu A, B, C (až poté, co je právně jasné, komu se mail smí posílat).

Vypnutí a úpravy: `06-test-100-firem.md`, doplněné pravidlem: pokud dopis nebo telefon vyvolá stížnost, daný kanál se zastaví na dva týdny a zjistí se příčina.

## 11. Co je potřeba rozhodnout nebo potvrdit

1. Právník: studený mail, dopis adresovaný jednateli podle rejstříku, telefon na firemní číslo.
2. Majitel: záruka (`11-diferenciace-a-nabidka.md`), pilotní slevy, odměna za doporučení.
3. Technické: kam se ukládají leady. Interní CRM (`private/interni.html`) drží data jen v prohlížeči, takže pro sdílení mezi třemi lidmi nestačí. Do rozhodnutí použít sdílenou tabulku se sloupci z `leads-template.csv`.
4. Odesílač mailů: nevybrán. Po výběru ověřit, že umí zastavení po odpovědi, odhlášení jedním kliknutím a kontrolu seznamu odhlášených.
