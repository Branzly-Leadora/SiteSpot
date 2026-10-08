# Pravidla outreach: jak oslovovat bez sporných míst

Cíl: oslovit jen lidi, kterým to dává smysl, otevřeně říct, kdo píšeme a proč, a přestat při prvním "ne". Tento dokument je provozní pravidlo, ne právní stanovisko.

## Co nemohu posoudit

Nejsem právník. Dvě otázky je před ostrým startem nutné nechat potvrdit právníkem:

1. Zda je studený mail na firemní adresu v ČR dovolen a za jakých podmínek. Zákon č. 480/2004 Sb., § 7, upravuje obchodní sdělení šířená elektronickou poštou a vychází ze souhlasu příjemce. Výklad pro firemní adresy (zejména s osobním jménem, např. jan.novak@firma.cz) je sporný a mohu ho jen označit, ne rozhodnout.
2. Zda je právním základem zpracování osobních údajů (jméno, firemní mail, funkce) oprávněný zájem podle čl. 6 odst. 1 písm. f GDPR a jak ho doložit (test proporcionality).

Dokud nebude odpověď, platí konzervativní režim.

## Dva režimy

Režim A, konzervativní (výchozí):
* LinkedIn ručně.
* Mail jen těm, kdo: dali souhlas, jsou naši zákazníci, nebo o mail výslovně požádali (například odpovědí "pošlete mail" na LinkedIn).
* Sekvence čtyř mailů se spouští jen na takové kontakty.

Režim B, po písemném potvrzení právníkem:
* Mail na veřejně uvedenou firemní adresu, pokud právník potvrdí podmínky.
* Platí všechna pravidla níže, plus podmínky, které právník doplní.

Do souboru s leady se u každého kontaktu zapisuje `pravni_zaklad`: `souhlas`, `existujici_vztah`, `zadost_o_email` nebo `opravneny_zajem_overit_pravnikem`. Poslední hodnota se smí použít jen v režimu B.

## Pořadí kanálů

1. LinkedIn: ručně, z osobního účtu odesílatele, 15 až 20 pozvánek denně, bez automatizačních nástrojů.
2. Mail na žádost nebo v režimu B.
3. Telefon: jen na číslo uvedené firmou pro obchodní dotazy, v pracovní dny v pracovní době, jeden pokus. Hovory nenahrávat.

## Zdroje kontaktů

Povolené:
* Veřejný web firmy (stránka Kontakt, tým).
* Obchodní rejstřík a ARES.
* Veřejný profil na LinkedIn.

Zakázané:
* Nakoupené nebo půjčené databáze.
* Kontakty získané pro jiný účel (například z účastnických listin, z poptávky jiné firmy).
* Hádání adres (jmeno@firma.cz bez ověření).
* Osobní soukromé adresy a čísla.
* Cokoli za přihlášením.

U každého kontaktu se zapisuje: odkud (adresa stránky), kdy, právní základ, kdo zápis provedl.

## Informování osob (čl. 14 GDPR)

Při prvním kontaktu, nejpozději do jednoho měsíce od získání údajů, musí příjemce vědět:
* kdo jsme (Leadora Technologies s.r.o., SiteSpot) a jak nás kontaktovat,
* odkud máme jeho údaje (patička mailu uvádí zdroj),
* proč je zpracováváme (nabídka služby),
* že může namítat a odhlásit se jedním kliknutím,
* kde jsou zásady zpracování (stránka s ochranou soukromí na sitespot.cz).

Pozn.: jestli je potřeba pro každou zprávu i delší text, rozhodne právník. Minimum je patička z `sequences/velkoobchody-vyrobci.json`.

## Odhlášení a seznam odhlášených

* Každý mail má odkaz pro odhlášení jedním kliknutím, bez přihlašování a bez vysvětlování.
* Odpověď "nepište mi" kdekoli (LinkedIn, mail, telefon) se zapisuje do `system/registry/suppression.csv` do 24 hodin, aby se k tomu nemuselo vracet.
* Před každým odesláním se kontroluje seznam odhlášených, a to podle mailu i podle domény firmy. Pokud někdo z firmy napíše "nepište", nepíšeme ani jeho kolegům bez zvláštního důvodu.
* Seznam odhlášených se nemaže, aby se nikdo, kdo odmítl, nedostal omylem zpět do kampaně. Po odhlášení o osobě uchováváme jen to, co k tomu stačí (adresa, doména, datum), a v zásadách zpracování to uvedeme.
* Žádost o výmaz údajů se vyřizuje do 30 dnů a zapíše se do seznamu odhlášených jen to, co je nutné (adresa).

## Limity a zdvořilost

* Maximálně čtyři maily v sekvenci, potom ticho nejméně 6 měsíců.
* Při rozjezdu nejvýše 20 až 30 mailů denně z jedné schránky. Objem zvyšovat jen když nejsou stížnosti ani bounce.
* Odesílat z domény, která jasně patří SiteSpot (podomény nebo doména s názvem firmy), ne z cizího jména. Mít nastavené SPF, DKIM a DMARC.
* Odesílat v pracovní dny v pracovní době.
* Nikdy neposílat mimo seznam, nikdy nepřidávat firmu zpět po odhlášení.

## Co nikdy neděláme

* Žádné sledovací pixely a sledování otevření mailu.
* Žádné klamavé předměty (falešné "Re:" a "Fwd:", falešná naléhavost).
* Žádná falešná personalizace. Pokud nemáme ověřené pozorování, mail se neposílá.
* Žádná tvrzení o webu nebo firmě, která jsme neověřili.
* Žádné vymyšlené reference ani případové studie.
* Žádné slibování výsledků ("garantujeme úsporu").
* Žádné nátlakové taktiky (omezený čas, falešný nedostatek).
* Žádné další zprávy po odmítnutí.

## Kontrola provozu

* Týdně: počet odesláno, bounce, odhlášení, stížnosti. Zápis do tabulky z plánu testu.
* Při jakékoli stížnosti zastavit všechno a zjistit příčinu, viz plán testu.
* Čtvrtletně: projít seznam leadů a smazat údaje, které už nejsou potřeba (bez reakce déle než 12 měsíců a mimo seznam odhlášených).
