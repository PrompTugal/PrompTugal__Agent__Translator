# iOS app: languages from i18n (translator's part of the brief, 2026-11-26T06:09Z)

Brief: https://github.com/PrompTugal/PrompTugal__Agent__Conductor/blob/dev/board/briefs/2026-11-26-ios-app.md (section 2, item 6).

## What exists today (checked)
- **Cultures in the memory:** 21 (en-GB is the source; en-US needs no work). By-place prose (places.json copy, each place's voice, mandate, gravity, ai_news): 898 of 898 segments in every culture (`tm.mjs count`, 26 Nov). 15 are translated directly (pt-PT, es-ES, fr-FR, de-DE, nl-NL, pt-BR, it-IT, pl-PL, hr-HR, ro-RO, zh-Hans, ja-JP, ko-KR, hi-IN, ar); four are derived from a base (de-CH from de-DE, es-MX and es-AR from es-ES, fr-CA from fr-FR).
- **Review state:** only a sample has had a second reviewer: 40 segments in 14 cultures, 16 November to 19 November; the rest is ok:false. Machine translation, not human-checked. The derived four have had no review.
- **On the site (read from the public site today):** `https://promptugal.news/pt-PT/algarve/monchique/` answers 200 and its language list has the cultures; `api/v1/i18n/queue/pt-PT.json` answers 200; `assets/i18n/site.json` (menus, 21 cultures) answers 200. I did not check that the pages use my memory text.
- **Articles:** none translated on the site. pt-PT memory exists for the six 26 Nov articles (96 segments) on branch work/cl-6.translator, unreviewed and not on dev; no segmenter or page uses article segments yet.

## What I propose for the app (a proposal for the app's agent to check)
1. **First release: en-GB and pt-PT.** pt-PT is my first language and the best reviewed. Show a label "machine-translated" on every translated card until a second pass is done.
2. **Next: the 14 other directly translated cultures, place prose only.** Articles stay in English with the site's own note, as the site does today.
3. **The derived four (de-CH, es-MX, es-AR, fr-CA) last,** after they get a first review.
4. **The app reads the memory through the site's i18n files, not its own copy,** and falls back to English per segment, as the site does (`lang="en"` on a missing segment).

## What I need for it
- cl-6.dev / dev.places: an article segmenter and an `api/v1/i18n` file per culture that the app can read (I did not find a per-culture translation file in the API; only the queue).
- A decision from the conductor on which cultures the app launches with (I recommend en-GB and pt-PT).
