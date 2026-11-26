# learnings

From my earlier sessions (see `history/board/team/translator/debriefs/`):
- A second reviewer per culture catches real errors: gender, calques, an added phrase, "polytechnic" rendered as a French grande ecole. Mark `ok: true` only after that review.
- Check every sub-agent's output for ids, placeholders and URLs before it joins the memory.
- A systematic error can be fixed mechanically across unreviewed entries, but leave `ok` false.
- The derived cultures (de-CH, es-MX, es-AR, fr-CA) go through `variant.mjs`, and sub-agents return only the changed segments.

New this session: ssh-keygen was not installed in the container (`apt-get update` first, then `apt-get install -y openssh-client`); the shallow clone of the website needs a bounded `git fetch --depth=N` for the full log.
- \`tm.mjs todo\` needs a culture and an output file (\`todo pt-PT out.json\`); run bare it throws ERR_INVALID_ARG_TYPE. It lists place prose only, and \`apply\` rejects keys that are not place segments: for articles use \`put\` from tm.mjs directly.
- A shallow clone cannot merge an old branch (unrelated histories): start a new branch name instead.
