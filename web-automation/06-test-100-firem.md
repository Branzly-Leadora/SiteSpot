# Krok 6: plán testu na 100 firem

Cíl: zjistit, jestli segment a nabídka přinášejí schůzky, a to bez rizika pro pověst odesílatele. Test není statistický důkaz. U 100 firem má například 10 % odpovědí interval zhruba od 5 do 17 %.

## Příprava

* 100 firem ze segmentu (viz business model), vybraných ručně z veřejných zdrojů. U každé zapsat zdroj kontaktu, datum a právní základ do souboru s leady.
* U každé firmy ověřit jednu věc na jejich webu pro pole `pozorovani`. Bez ověřeného pozorování se mail neposílá.
* Vyřadit firmy, které už jsou v seznamu odhlášených.
* Nastavit Cal.com, odesílací doménu s SPF, DKIM, DMARC a odhlášení jedním kliknutím.

## Postup a rozdělení

1. Všech 100 firem dostane ručně pozvánku na LinkedIn (rozděleně po 15 až 20 denně, tedy zhruba 5 až 7 pracovních dní). Varianty pozvánky se střídají A, B, A, B.
2. Kdo pozvánku přijme, dostane zprávu po přijetí. Kdo odpoví "pošlete mail", dostane mail na žádost. Kdo neodpoví, dostane za 5 až 7 dnů jeden follow-up.
3. Mailová sekvence se spouští jen na kontakty s právním základem (souhlas, existující vztah, žádost o mail) nebo po písemném potvrzení právníka, že můžeme oslovit i další. Viz pravidla outreach.
4. Kdo mailovou sekvenci dostává, má pevně přiřazenou variantu předmětu A, B nebo C po celou sekvenci.

Protože se mailová sekvence spouští jen na část firem, A/B test předmětů berte jako orientační. Smysl má až od zhruba 40 odeslaných mailů.

## Metriky

| Metrika | Jak se počítá | Cíl (hypotéza) |
|---|---|---|
| Pozvánka přijata | přijaté ÷ odeslané pozvánky | 20 až 35 % |
| Odpověď | věcné odpovědi ÷ osloveno firem | 8 až 12 z 100 |
| Pozitivní odpověď | zájem, dotaz na video nebo cenu | 4 až 6 z 100 |
| Schůzka | proběhl audit hovor | 3 až 5 z 100 |
| Nabídka | odeslaná písemná nabídka | 1 až 2 z 100 |
| Zakázka | podepsaná smlouva | 0 až 2 z 100, nejspíš 0 až 1 |
| Odhlášení a "nepište" | počet | cíl 0 |
| Bounce (nedoručeno) | nedoručeno ÷ odesláno | pod 3 % |
| Stížnost (spam, úřad, odesílatel) | počet | cíl 0 |

Zaznamenávat po firmách a po týdnech do tabulky: firma, datum pozvánky, varianta, přijato (ano/ne), datum odpovědi, typ odpovědi, datum schůzky, nabídka, výsledek, důvod ztráty. Pozorování k firmě je v souboru s leady.

## Kdy sekvenci upravit

Upravte vždy jen jednu věc najednou a počkejte na dalších 30 až 40 odeslání.

* Po 40 odeslaných pozvánkách je přijato pod 15 %: upravit pozvánku.
* Po 40 odeslaných mailech je odpovědí pod 2 %: upravit předmět nebo první větu, poté kvalitu `pozorovani`.
* Odpovědi jsou, ale schůzky vzniknou z méně než třetiny pozitivních odpovědí: zjednodušit výzvu k rezervaci termínu.
* Schůzek je dost, nabídek málo: upravit audit a jeho závěr.
* Pět nabídek a žádná zakázka: upravit cenu nebo rozsah, ne sekvenci.

## Kdy sekvenci vypnout

Okamžitě a pro všechny firmy:
* Jakákoli stížnost na spam, od příjemce, od poskytovatele pošty nebo od úřadu. Zjistit příčinu, než se něco znovu pošle.
* Bounce nad 3 % z prvních 30 odeslaných mailů. Vyčistit seznam.
* Dvě a více výslovných "nepište mi" z 50 odeslaných zpráv. Přehodnotit cílení a text.
* Odesílací doména začne padat do spamu (zkouška na vlastních schránkách).
* LinkedIn pošle varování nebo omezí účet. Pozastavit LinkedIn na dva týdny a nepokračovat automatizací.

Pro jednotlivou firmu: při odpovědi, při odhlášení a po čtvrtém mailu. Bez reakce se firma vrací do seznamu nejdřív za 6 měsíců.

## Rozhodnutí po 100 firmách

* 3 a více schůzek: zopakovat s dalšími 200 firmami za stejných podmínek.
* 1 až 2 schůzky: opravit nabídku nebo audit, potom dalších 100.
* 0 schůzek z 100: přehodnotit segment nebo nabídku, ne zvyšovat objem.
* Jakákoli stížnost: viz vypnutí, než se pokračuje.
