import csv, sys, json, collections
src = sys.argv[1]
SEG = {
 "Velkoobchody (vyřazeno, pro srovnání)": ["46.1","46.2","46.3","46.4","46.5","46.6","46.7","46.9"],
 "Zakázkoví výrobci: kovovýroba a obrábění": ["25.","24.","28."],
 "Zakázkoví výrobci: truhlářství, nábytek": ["16.2","31."],
 "Revizní a servisní: opravy strojů": ["33.1"],
 "Revizní a servisní: elektroinstalace": ["43.21"],
 "Revizní a servisní: voda, plyn, topení, klimatizace": ["43.22"],
 "Správa nemovitostí za poplatek": ["68.32"],
 "Půjčovny strojů a zařízení": ["77.3"],
 "Úklidové služby": ["81.2"],
 "Bezpečnostní agentury": ["80.1","80.2","80.3"],
 "Silniční nákladní doprava a stěhování": ["49.41","49.42"],
 "Spedice a logistika": ["52.29","52.1","52.2"],
 "Autobusová a osobní doprava": ["49.31","49.32","49.39"],
 "Stavební dokončovací a specializované práce": ["43.29","43.3","43.9"],
 "Výstavba budov a inženýrské stavby": ["41.","42."],
 "Autoservisy a opravy vozidel": ["45.2"],
 "Údržba zeleně a krajinářství": ["81.3"],
 "Účetní kanceláře a daňové poradenství": ["69.2"],
 "Projekce a inženýrské činnosti": ["71.1"],
 "Odpady: sběr, zpracování, recyklace": ["38.","39."],
 "Výroba betonu a stavebních hmot": ["23.6","23.5"],
 "Potravinářská výroba (maso, pekárny, mléko, ostatní)": ["10."],
 "Polygrafie a reklama": ["18.1","73.1"],
 "Autoškoly a výuka řízení": ["85.53"],
 "Pojišťovací a finanční zprostředkování": ["66.2"],
 "Zemědělství (rostlinná a živočišná výroba)": ["01."],
 "Zemědělská technika: prodej a servis": ["46.61","28.3"],
 "Kontrola: zubní lékaři (nasycený trh)": ["86.23"],
 "Kontrola: realitní kanceláře (nasycený trh)": ["68.31"],
 "Kontrola: ubytování (nasycený trh)": ["55."],
 "Kontrola: restaurace (nasycený trh)": ["56."],
}
def norm(n):
    n = (n or "").strip()
    if len(n) >= 2:
        # 5místný kód 43210 -> 43.210 ; stačí prefix po dvojici čísel s tečkou
        return n[:2] + "." + n[2:]
    return n
BIN = {"130":"6-9","210":"10-19","220":"20-24","230":"25-49","240":"50-99"}
stats = {k: collections.Counter() for k in SEG}
total = 0
allsize = collections.Counter()
with open(src, newline="", encoding="utf-8") as f:
    r = csv.DictReader(f)
    for row in r:
        total += 1
        if row["DDATZAN"]:
            continue
        n = norm(row["NACE"])
        if not n: continue
        kat = row["KATPO"]
        allsize[kat] += 1
        for seg, pref in SEG.items():
            if any(n.startswith(p) for p in pref):
                s = stats[seg]
                s["aktivni"] += 1
                if kat == "000": s["neuvedeno"] += 1
                if kat in BIN: s[BIN[kat]] += 1
                if kat in ("210","220","230","240"): s["10-99"] += 1
                if kat in ("210","220","230"): s["10-49"] += 1
                if kat in ("220","230","240"): s["20-99"] += 1
                if row["DDATVZN"] >= "2021-01-01" and kat in ("210","220","230","240"): s["10-99_zalozeno_od_2021"] += 1
out = {"radku_celkem": total, "aktivni_kategorie_celkem": dict(allsize), "segmenty": {k: dict(v) for k, v in stats.items()}}
json.dump(out, open(sys.argv[2], "w"), ensure_ascii=False, indent=1)
print("done", total)
