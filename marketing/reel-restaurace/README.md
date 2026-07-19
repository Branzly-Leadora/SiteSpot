# Reel — redesign webu restaurace (U Staré Pošty)

- `Reel_1_final.mp4` — finální video s vypálenými titulky, vyhlazeným hlasem (původní výška, highpass + de-esser + jemná komprese, hudba beze změny) a úvodním hookem „Tenhle web ODHÁNÍ HOSTY" (0–2 s, pop-in + zoom punch)
- `captions.ass` — zdrojové animované titulky (Montserrat, bílá + zlatá `#DCBC7E` podle designu webu, slovo po slově, pozice v prostřední třetině)
- `titulky.srt` — jednoduchá SRT verze (např. pro nahrání do IG jako nativní titulky)
- `make_ass.py` — generátor `.ass` titulků z časování slov (Whisper large-v3 na oddělené hlasové stopě přes Demucs)

Přepis voiceoveru:
„Tohle je web jedné restaurace v centru Prahy. Skvělá kuchyně, tankový Pilsner, zvěřina. Ale vypadá jako z roku 2008. Na mobilu se špatně čte a zarezervovat stůl skoro nejde. Tak jsem jim za jeden večer udělal nový. Poctivé fotky jídla, menu s cenami, rezervace na jeden klik a na mobilu to lítá. Máš podnik s podobným webem? Napiš mi do zprávy slovo WEB a udělám ti ukázku zdarma."
