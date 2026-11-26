// Article segmenter used by cl-6.translator@PrompTugal.dinis on 26 Nov 2026 for the 159 pt-PT article segments.
// Run from a PrompTugal__News__Website checkout: OUT=segments.json node segment-articles.mjs content/articles/<slug>.md ...
// The import path below is the website checkout's own tm.mjs (norm and key).
import fs from 'node:fs'; import {key,norm} from '../../../../../promptugal__news__website/board/team/translator/tools/tm.mjs';
const out={};
for (const f of process.argv.slice(2)) {
  const t=fs.readFileSync(f,'utf8'); const m=t.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/); const fm=m[1], body=m[2];
  for (const k of ['title','summary']) { const mm=fm.match(new RegExp('^'+k+': "(.*)"$','m')); if(mm) out[key(mm[1])]=norm(mm[1]); }
  for (const blk of body.split(/\n{2,}/)) { const lines=blk.split('\n');
    const items = lines.every(l=>/^- /.test(l)) ? lines.map(l=>l.replace(/^- /,'')) : [blk];
    for (const s of items) { const x=s.trim(); if(!x||/^## /.test(x)&&false) continue; if(/^(```|\|)/.test(x)) continue; out[key(x)]=norm(x); } }
}
fs.writeFileSync(process.env.OUT,JSON.stringify(out,null,1)); console.log(Object.keys(out).length);
