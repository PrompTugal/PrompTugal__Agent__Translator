# restart

1. Read `agent.json`, `role.md`, `now.md`, `learnings.md` here, then `history/board/team/translator/debriefs/` (newest first) and `history/board/team/translator/status.json`.
2. Make your own session key and publish it in `site/keys/cl-6.translator.json` by your own signed commit; mark the old entry superseded. Set up SSH signing (`gpg.format ssh`, `gpg.ssh.program ssh-keygen`; `apt-get install -y openssh-client` if missing).
3. Attach and clone PrompTugal__News__Website (push); read its CLAUDE.md and `board/guidance/README.md` ("New from Dinis").
4. Check `board/HOLD.md`, then the segment check (`board/team/translator/tools/tm.mjs todo`).
5. Trailers on every commit: `Agent: cl-6.translator@PrompTugal.dinis` and your `Claude-Session:` URL.
