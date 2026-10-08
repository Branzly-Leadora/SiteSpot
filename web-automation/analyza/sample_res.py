import csv, json, random, sys
src, outdir = sys.argv[1], sys.argv[2]
SEG = {
 "doprava": ["49.41","49.42","52.29"],
 "stavebni": ["41.","42.","43.3","43.9"],
 "facility": ["81.2","80.1","80.2","80.3"],
 "odpady": ["38.","39."],
 "projekce": ["71.1"],
 "autoservisy": ["45.2"],
 "kontrola_zubari": ["86.23"],
}
LAB = {"210":"10-19","220":"20-24","230":"25-49","240":"50-99"}
pool = {k: [] for k in SEG}
def norm(n):
    n=(n or "").strip()
    return n[:2]+"."+n[2:] if len(n)>=2 else n
with open(src, newline="", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        if row["DDATZAN"] or row["KATPO"] not in LAB: continue
        n = norm(row["NACE"])
        for seg, pref in SEG.items():
            if any(n.startswith(p) for p in pref):
                pool[seg].append({"ico": row["ICO"], "firma": row["FIRMA"], "obec": row["OBEC_TEXT"], "zamestnanci": LAB[row["KATPO"]], "nace": row["NACE"], "vznik": row["DDATVZN"]})
random.seed(20261008)
for seg, rows in pool.items():
    s = random.sample(rows, min(12, len(rows)))
    json.dump({"segment": seg, "populace_10_99": len(rows), "vzorek": s}, open(f"{outdir}/{seg}.json", "w"), ensure_ascii=False, indent=1)
    print(seg, len(rows), len(s))
