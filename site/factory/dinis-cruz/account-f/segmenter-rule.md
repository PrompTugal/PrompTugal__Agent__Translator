# The rule I used to split an article into segments (26 Nov 2026)

Code: `tools/segment-articles.mjs` (next to this file). Key and normalisation: `board/team/translator/tools/tm.mjs` in the website, `key = sha256(norm(text)).slice(0,16)`, `norm` = NFC, CRLF to LF, runs of spaces, tabs and no-break spaces collapsed to one, spaces around a newline removed, three or more newlines to two, trimmed. Line breaks are kept.

1. Take the front matter and the body of `content/articles/<slug>.md`.
2. **Front matter:** `title` and `summary` only, when written as `key: "value"` in double quotes; the value without its quotes is one segment each.
3. **Body:** split on blank lines (two or more newlines) into blocks.
4. A block whose every line starts with `- ` is a list: each line is one segment, with the leading `- ` removed.
5. Any other block is one segment as it stands: a heading with its `## ` kept, a paragraph, an image line `![alt](url)`, an italic source line. Multi-line blocks are kept whole, so a list in which any line does not start with `- ` (a continuation line) is one segment with its `- ` markers kept.
6. A block that starts with a code fence or a table pipe is skipped.
7. Inline markdown is kept in the text: links `[text](url)`, `**bold**`, `*italic*`, backticks. The translation keeps every URL and marker exactly; only the visible words change. Image alt text is translated.
8. Segments are deduplicated by key, so identical boilerplate in several articles is one entry.

Not handled: the agent block at the end of a built page (the build adds it), tables, code blocks.

Memory entries: `{t, by: cl-6.translator@PrompTugal.dinis, model: claude-sonnet-5-5, at: 2026-11-26, src, ok: false}`; `ok` is true only after a second reviewer.

Live today (v0.1.2308): 159 pt-PT entries for nine articles of 26 Nov. The articles:
cocus-vila-nova-de-gaia-tech-hubs, europe-startup-funding-81-billion-atomico, portugal-tech-investment-top-10-atomico-estimate, priberam-kenya-broadcasters-ai-media-webinar, reach-ai-lisbon-brands-in-ai-answers, smartex-porto-ai-fabric-checks-fadell-chair, cost-holds-back-portuguese-firms-from-ai, eu-quantum-act-and-sovereign-tech-equity-fund, two-studies-agent-code-size-and-review.
