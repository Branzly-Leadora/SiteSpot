# Generate elegant word-highlight ASS captions for the SiteSpot reel (1080x1920).
# Two layers: soft dark glow behind, crisp text on top. Active word turns gold.

WHITE = r"\1c&HFFFFFF&"
GOLD = r"\1c&H7EBCDC&"   # BGR of #DCBC7E (site gold, slightly brightened)

# groups: list of (words); word = (text, start, end, style)
# style: None = normal, "kw" = permanent gold keyword (WEB)
GROUPS = [
    [("Tohle", 0.00, 0.20), ("je", 0.20, 0.28), ("web\\N", 0.28, 0.40),
     ("jedné", 0.40, 0.66), ("restaurace", 0.66, 1.16)],
    [("v", 1.16, 1.26), ("centru", 1.26, 1.58), ("Prahy.", 1.58, 1.96)],
    [("Skvělá", 1.96, 2.52), ("kuchyně,", 2.52, 3.04)],
    [("tankový", 3.04, 3.54), ("Pilsner,", 3.54, 4.10)],
    [("zvěřina.", 4.10, 4.66)],
    [("Ale", 4.70, 5.16), ("vypadá", 5.16, 5.66), ("jako", 5.66, 5.78)],
    [("z", 5.78, 5.92), ("roku", 5.92, 6.08), ("2008.", 6.08, 6.90)],
    [("Na", 7.04, 7.56), ("mobilu", 7.56, 7.94)],
    [("se", 7.94, 8.00), ("špatně", 8.00, 8.36), ("čte", 8.36, 8.60)],
    [("a", 8.60, 8.72), ("zarezervovat", 8.72, 9.40), ("stůl", 9.40, 9.64)],
    [("skoro", 9.64, 9.98), ("nejde.", 9.98, 10.55)],
    [("Tak", 10.84, 11.00), ("jsem", 11.00, 11.08), ("jim", 11.08, 11.32)],
    [("za", 11.32, 11.40), ("jeden", 11.40, 11.52), ("večer", 11.52, 11.74)],
    [("udělal", 11.74, 12.06), ("nový.", 12.06, 12.55)],
    [("Poctivé", 12.76, 13.26), ("fotky", 13.26, 13.54), ("jídla,", 13.54, 13.78)],
    [("menu", 13.78, 14.16), ("s", 14.16, 14.34), ("cenami,", 14.34, 14.70)],
    [("rezervace", 14.74, 15.40), ("na", 15.40, 15.52), ("jeden", 15.52, 15.78), ("klik", 15.78, 16.05)],
    [("a", 16.05, 16.24), ("na", 16.24, 16.40), ("mobilu", 16.40, 16.78),
     ("to", 16.78, 16.86), ("lítá.", 16.86, 17.40)],
    [("Máš", 17.54, 18.04), ("podnik", 18.04, 18.34)],
    [("s", 18.34, 18.42), ("podobným", 18.42, 18.74), ("webem?", 18.74, 19.22)],
    [("Napiš", 19.30, 19.76), ("mi", 19.76, 19.84), ("do", 19.84, 19.94), ("zprávy", 19.94, 20.30)],
    [("slovo", 20.30, 20.55), ("WEB", 20.55, 20.78, "kw")],
    [("a", 20.78, 20.90), ("udělám", 20.90, 21.22), ("ti", 21.22, 21.36)],
    [("ukázku", 21.36, 21.78), ("zdarma.", 21.78, 22.40)],
]

POS = r"\an5\pos(540,1180)"
GLOW = POS + r"\bord13\blur16\1a&HFF&\3c&H000000&\3a&H38&\shad0"
TEXT = POS + r"\bord3\3c&H141414&\3a&H78&\blur1\shad0\fsp1"


def ts(t):
    h = int(t // 3600); m = int(t % 3600 // 60); s = t % 60
    return f"{h}:{m:02d}:{s:05.2f}"


def join_words(parts, raws):
    out = ""
    for i, p in enumerate(parts):
        if i > 0 and not raws[i - 1].endswith("\\N"):
            out += " "
        out += p
    return out


def word_tag(word, active):
    kw = len(word) > 3 and word[3] == "kw"
    txt = word[0]
    if kw:
        return r"{\fnMontserrat ExtraBold\fs72" + GOLD + "}" + txt + r"{\fnMontserrat SemiBold\fs64}"
    color = GOLD if active else WHITE
    return "{" + color + "}" + txt


events = []
for gi, group in enumerate(GROUPS):
    g_start, g_end = group[0][1], group[-1][2]
    raws = [w[0] for w in group]
    plain = join_words(raws, raws)
    # glow layer: one event for the whole group
    events.append((0, g_start, g_end,
                   "{" + GLOW + r"\fad(90,70)}" + plain))
    # text layer: one event per word interval, active word gold
    for wi, w in enumerate(group):
        w_start = w[1] if wi > 0 else g_start
        w_end = w[2] if wi < len(group) - 1 else g_end
        fad_in = 90 if wi == 0 else 0
        fad_out = 70 if wi == len(group) - 1 else 0
        parts = [word_tag(w2, active=(wj == wi)) for wj, w2 in enumerate(group)]
        line = join_words(parts, raws)
        events.append((1, w_start, w_end,
                       "{" + TEXT + rf"\fad({fad_in},{fad_out})}}" + line))

header = """[Script Info]
ScriptType: v4.00+
PlayResX: 1080
PlayResY: 1920
ScaledBorderAndShadow: yes
WrapStyle: 2

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Cap,Montserrat SemiBold,64,&H00FFFFFF,&H00FFFFFF,&H00000000,&H00000000,0,0,0,0,100,100,0,0,1,0,0,5,40,40,40,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""

with open("captions.ass", "w", encoding="utf-8") as f:
    f.write(header)
    for layer, s, e, text in events:
        f.write(f"Dialogue: {layer},{ts(s)},{ts(e)},Cap,,0,0,0,,{text}\n")

print(f"captions.ass written: {len(events)} events, {len(GROUPS)} groups")
