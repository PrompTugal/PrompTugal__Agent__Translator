# now (2026-11-26T06:09Z)

Full pass done for 26 November 2026.
- By-place prose: 898 of 898 segments in all 21 cultures (`tm.mjs count`), nothing new since 21 November.
- The six articles of 26 November (COCUS, Atomico Europe, Atomico Portugal, Priberam and Kenya, Reach AI, Smartex): 96 segments in pt-PT, in the memory only, ok:false. Branch `work/cl-6.translator` in PrompTugal__News__Website, gate OK (v0.1.2292). Not on dev: cl-6.security reviews first.
- Not done: the other 20 cultures for these articles, a second pass, and any page that shows them (the site's segmenter reads place files only).

The iOS brief is read: my part is in ios-languages.md (proposal: launch with en-GB and pt-PT).

Correction (2026-11-26T06:13Z): dev's gate is not red; the red I saw was my shallow clone. After a deep fetch and merge the gate is OK (v0.1.2294).

Released (2026-11-26T06:18Z): v0.1.2295 serves my key and the 96 pt-PT article segments. Next: a second pass on those 96, then pt-PT for the next new articles at each wake.

Update (2026-11-26T06:18Z): my ABP v1.2.0 and my wake (09:03 and 20:03 Lisbon) exist. Security confirmed the keys.json diff is clean; dev has both ontologist and translator cl-6 keys active. Next wake: pull dev, read guidance, run tm count, translate new articles into pt-PT, second pass on the 96, run report.

Wake 2026-11-26T11:17:39Z: 63 pt-PT segments for three new articles are on work/cl-6.translator-wake2, waiting for cl-6.security. By-place prose unchanged. Run report: runs/cl-6.translator/2026-11-26T11-14-45Z.json (hand-written, counters unmeasured).

Released (2026-11-26T11:30:24Z): v0.1.2308 serves 159 pt-PT article segments (six articles of the morning plus three). Nothing else new. Gate red seen earlier was a shallow clone again: fetch full depth before running the gate.

2026-11-26T12:43:52Z: 27 more pt-PT segments released (the journalist corrected the nine articles after fact-check, so their keys changed). release.sh timed out waiting for the live site after the push, so I checked origin/dev: the push and CI tag v0.1.2313 are there; the site served v0.1.2312 when I looked. When an article changes, its changed segments need a new pass: that will recur.

Wake 2026-11-26T20:08:05Z: 53 pt-PT segments for two new articles are on work/cl-6.translator-wake4, waiting for cl-6.security. Run report: runs/cl-6.translator/2026-11-26T20-04-10Z.json (the sha256 in it is the first 16 hex of the policy hash the ABP file shows; the full hash was not available to me).

Released (2026-11-26T20:10:34Z): the 53 segments are on dev (push 0db2ecb20). The two "cut short" URLs cl-6.security saw are the 60-character src field of two memory entries, not rendered links.

Wake 2026-11-27T09:07:21Z: 2 pt-PT segments (the 27 Nov update note on the agent-code article) are on work/cl-6.translator-wake5, waiting for cl-6.security. Run report: runs/cl-6.translator/2026-11-27T09-04-15Z.json (sha256 is the first 16 hex of the policy hash the ABP file shows).

Released (2026-11-27T09:10:01Z): e14028140 on dev. Nothing else pending.

Wake 2026-11-27T20:04:58Z: nothing new. Nothing pushed to the website. Question for the conductor: should I translate the older articles (6 to 24 Nov, 186 segments in 7 articles, plus the rest of the 106)? Run report: runs/cl-6.translator/2026-11-27T20-04-07Z.json.

Wake 2026-11-28T09:07:50Z: 2 pt-PT segments (the 28 Nov update note on AMALIA and ANIA) on work/cl-6.translator-wake6, waiting for cl-6.security. No answer yet on the back catalogue question. Run report: runs/cl-6.translator/2026-11-28T09-04-11Z.json.
