/* Visual flavor for each card. Decorative — the words on the left still teach. */
window.VIZ = {
  token: `
    <div class="v-art v-token">
      <div class="v-kicker">How the model actually sees it</div>
      <div class="v-cut">
        <div class="v-cut-row">
          <span class="v-chip on">Hello</span>
          <span class="v-meta">1 token</span>
        </div>
        <div class="v-cut-row wrap">
          <span class="v-chip">Anti</span><span class="v-chip">dis</span><span class="v-chip">establish</span><span class="v-chip">ment</span><span class="v-chip">arian</span><span class="v-chip">ism</span>
          <span class="v-meta">several</span>
        </div>
        <div class="v-cut-row wrap">
          <span class="v-chip dim">https</span><span class="v-chip dim">://</span><span class="v-chip dim">api</span><span class="v-chip dim">.shop</span><span class="v-chip dim">/v2</span><span class="v-chip dim">?q=</span>
          <span class="v-meta">a pile</span>
        </div>
      </div>
    </div>`,

  "context-window": `
    <div class="v-art">
      <div class="v-kicker">This job only</div>
      <div class="v-desk">
        <div class="v-paper a"><b>system</b> hidden brief</div>
        <div class="v-paper b"><b>your files</b> the folder you handed over</div>
        <div class="v-paper c"><b>this chat</b> then the sweep</div>
        <div class="v-broom">new chat = empty desk</div>
      </div>
    </div>`,

  "in-out": `
    <div class="v-art v-io">
      <div class="v-slip cheap">
        <span class="v-kicker">In · read</span>
        <b>Hand them the book</b>
        <em>$0.40</em>
        <small>cheap</small>
      </div>
      <div class="v-slip dear">
        <span class="v-kicker">Out · write</span>
        <b>Ask them to rewrite it</b>
        <em>$6.20</em>
        <small>dear</small>
      </div>
    </div>`,

  "system-prompt": `
    <div class="v-art">
      <div class="v-folder">
        <div class="v-tab">inside the folder</div>
        <div class="v-hidden">
          <span class="v-seal">you never see this</span>
          <p>You are a careful coach. Do not invent APIs. Prefer the existing buttons.</p>
        </div>
        <div class="v-msg">
          <span class="v-kicker">then your message</span>
          <p>“Make the settings page less noisy.”</p>
        </div>
      </div>
    </div>`,

  attention: `
    <div class="v-art">
      <div class="v-kicker">Same eyes, more paper</div>
      <div class="v-stack">
        <div class="v-leaf sharp"><b>the rule that matters</b> use /ui buttons</div>
        <div class="v-leaf mid">readme, then another readme</div>
        <div class="v-leaf fade">pasted logs from last Tuesday</div>
        <div class="v-leaf gone">the whole repo, just in case</div>
      </div>
    </div>`,

  agent: `
    <div class="v-art v-split">
      <div class="v-panel">
        <span class="v-kicker">Chatbot</span>
        <div class="v-bubble">Sure — here’s how you could do it.</div>
        <small>stays at the desk</small>
      </div>
      <div class="v-panel on">
        <span class="v-kicker">Agent</span>
        <ol>
          <li>read the file</li>
          <li>try the change</li>
          <li>run the tests</li>
          <li>open a PR</li>
        </ol>
        <small>gets up and does the errand</small>
      </div>
    </div>`,

  harness: `
    <div class="v-art">
      <div class="v-kicker">Brain vs body</div>
      <div class="v-harness">
        <div class="v-node brain">model</div>
        <div class="v-loop">
          <span>tools</span>
          <span>retries</span>
          <span>desk</span>
          <span class="stop">stop</span>
        </div>
        <p>Same brain. Different harness, different job.</p>
      </div>
    </div>`,

  tool: `
    <div class="v-art">
      <div class="v-permit">
        <div class="v-kicker">Permission slip</div>
        <h3>You may</h3>
        <ul>
          <li><i></i> read a file</li>
          <li><i></i> run the terminal</li>
          <li><i></i> click in the browser</li>
        </ul>
        <p>A verb. Not knowledge. Not taste.</p>
      </div>
    </div>`,

  mcp: `
    <div class="v-art">
      <div class="v-kicker">USB for agents</div>
      <div class="v-plugs">
        <div class="v-box">Figma</div>
        <div class="v-cord"><span>MCP</span></div>
        <div class="v-col">
          <div class="v-box sm">Cursor</div>
          <div class="v-box sm">Claude</div>
          <div class="v-box sm">others</div>
        </div>
      </div>
      <p class="v-note">Build the plug once. The apps share it.</p>
    </div>`,

  skill: `
    <div class="v-art">
      <div class="v-recipe">
        <div class="v-box-lid">skills/</div>
        <div class="v-card-sm">
          <b>SKILL.md</b>
          <span class="v-trig">use when prices change</span>
          <hr>
          <small>title sits on the counter</small>
          <div class="v-steps">1. pull the table<br>2. write the note<br>3. don’t touch billing</div>
          <small>steps only if the job matches</small>
        </div>
      </div>
    </div>`,

  "agents-md": `
    <div class="v-editor">
      <div class="v-ebar">
        <span class="v-traffic"><i></i><i></i><i></i></span>
        <span class="v-fname">AGENTS.md</span>
        <span class="v-badge">always on</span>
      </div>
      <pre class="v-md"><span class="h"># House rules</span>
<span class="c"># Keep this short. Every line competes.</span>

<span class="h">## UI</span>
- Buttons come from <span class="em">/ui</span> only
- Accent is the existing green
- <span class="no">Do not invent new button styles</span>

<span class="h">## Git</span>
- Small PRs
- Never push main

<span class="h">## Don’t</span>
- Extra animation libraries
- Rewrite auth “while you’re here”</pre>
    </div>`,

  "claude-md": `
    <div class="v-twin">
      <div class="v-editor faded">
        <div class="v-ebar">
          <span class="v-traffic"><i></i><i></i><i></i></span>
          <span class="v-fname">AGENTS.md</span>
        </div>
        <pre class="v-md short"><span class="h"># House rules</span>
- Buttons from /ui
- Small PRs</pre>
      </div>
      <div class="v-editor front claude">
        <div class="v-ebar">
          <span class="v-traffic"><i></i><i></i><i></i></span>
          <span class="v-fname">CLAUDE.md</span>
          <span class="v-badge warm">Claude Code</span>
        </div>
        <pre class="v-md"><span class="h"># House rules</span>
<span class="c"># Same job. Different restaurant logo.</span>

<span class="h">## UI</span>
- Buttons come from <span class="em">/ui</span> only
- <span class="no">Do not invent new button styles</span>

<span class="h">## Prefer</span>
- If you also use Cursor, put this in AGENTS.md instead</pre>
      </div>
    </div>`,

  progressive: `
    <div class="v-art">
      <div class="v-toc">
        <div class="v-kicker">Carry titles, not manuals</div>
        <ul>
          <li><span>▸</span> billing-pr</li>
          <li><span>▸</span> deploy</li>
          <li class="open"><span>▾</span> prices-change
            <div class="v-chapter">
              Full recipe loaded — only because this job matched.
            </div>
          </li>
          <li class="dim"><span>▸</span> onboarding-copy</li>
        </ul>
      </div>
    </div>`,

  "context-eng": `
    <div class="v-art v-split">
      <div class="v-panel dim">
        <span class="v-kicker">Prompt</span>
        <p class="v-magic">“Please be thorough, think step by step, you are an expert…”</p>
        <small>nicer wording</small>
      </div>
      <div class="v-panel on">
        <span class="v-kicker">Context</span>
        <div class="v-folder-list">
          <b>briefing the intern</b>
          <span>AGENTS.md</span>
          <span>the one failing test</span>
          <span>last week’s good PR</span>
        </div>
        <small>the right folder</small>
      </div>
    </div>`,

  vibe: `
    <div class="v-art v-vibe">
      <div class="v-bubble you">Make settings feel quieter. Keep our buttons.</div>
      <div class="v-code">
        <span class="v-kicker">it types</span>
        <pre>function Settings() {
  return &lt;Page quiet /&gt;
}</pre>
      </div>
      <div class="v-bubble you soft">No. The spacing is still shouty.</div>
      <small>you steer · it drafts</small>
    </div>`,

  taste: `
    <div class="v-art">
      <div class="v-kicker">40 dinners. One guest.</div>
      <div class="v-plates">
        <i></i><i></i><i></i><i></i><i></i>
        <i></i><i></i><i></i><i></i><i></i>
        <i class="pick"></i>
        <i></i><i></i><i></i><i></i>
      </div>
      <div class="v-serve">This one we would actually serve.</div>
    </div>`,

  "plan-mode": `
    <div class="v-art">
      <div class="v-plan">
        <div class="v-sketch">
          <span class="v-kicker">1. Sketch</span>
          <ul>
            <li>move settings into a sheet</li>
            <li>keep /ui buttons</li>
            <li class="x">do not rewrite auth</li>
          </ul>
          <em class="ok">you approved</em>
        </div>
        <div class="v-arrow">then</div>
        <div class="v-build">
          <span class="v-kicker">2. Build</span>
          <p>Now it may knock down the wall.</p>
        </div>
      </div>
    </div>`,

  eval: `
    <div class="v-art">
      <div class="v-score">
        <div class="v-kicker">Quiz for the intern</div>
        <table>
          <tr><td>given</td><td>“refund the mug”</td></tr>
          <tr><td>should</td><td>open a return, not a coupon</td></tr>
          <tr class="pass"><td>score</td><td>pass</td></tr>
        </table>
        <small>run it again whenever you change the brief</small>
      </div>
    </div>`,

  hallucination: `
    <div class="v-art">
      <div class="v-cite">
        <p>“See <span class="fake">Chen et al., 2024</span>, <i>Journal of Reliable APIs</i>.”</p>
        <div class="v-stamp">no such paper</div>
        <small>Ask for the file, the link, or the command output.</small>
      </div>
    </div>`,

  "context-rot": `
    <div class="v-art">
      <div class="v-kicker">A 4-hour meeting</div>
      <div class="v-time">
        <div class="t sharp"><b>min 12</b> ship the quiet settings</div>
        <div class="t mid"><b>min 90</b> wait, which settings?</div>
        <div class="t fade"><b>min 180</b> it invents a new nav</div>
      </div>
      <small>worse before the desk is officially full</small>
    </div>`,

  "lost-middle": `
    <div class="v-art">
      <div class="v-kicker">A list of 80</div>
      <ol class="v-midlist">
        <li class="sharp">#1  use existing buttons</li>
        <li class="ghost">#2</li>
        <li class="ghost">#3</li>
        <li class="lost">#14 do not invent colors</li>
        <li class="ghost">…</li>
        <li class="sharp">#80 ship today</li>
      </ol>
      <small>the real instruction got buried</small>
    </div>`,

  pollution: `
    <div class="v-art v-split">
      <div class="v-panel on">
        <span class="v-kicker">Clean brief</span>
        <p>the failing test<br>the one screen<br>AGENTS.md</p>
      </div>
      <div class="v-panel junk">
        <span class="v-kicker">The dump</span>
        <p>old Slack<br>a random drive<br>three leftover plans</p>
        <small>wrong, not just much</small>
      </div>
    </div>`,

  subagent: `
    <div class="v-art">
      <div class="v-desks">
        <div class="v-mini">
          <span>your desk</span>
          <p>the job</p>
        </div>
        <div class="v-send">hunt →</div>
        <div class="v-mini clean">
          <span>helper</span>
          <p>empty desk</p>
        </div>
      </div>
      <div class="v-back">comes back with one paragraph, not the boxes</div>
    </div>`,

  memory: `
    <div class="v-art v-mem">
      <div class="v-cleared">
        <span class="v-kicker">the desk</span>
        <div class="v-empty">swept</div>
      </div>
      <div class="v-fridge">
        <div class="v-sticky">Kel prefers AGENTS.md, not a second rules file.</div>
        <span>still there Tuesday</span>
      </div>
    </div>`,

  compact: `
    <div class="v-art">
      <div class="v-tape">3-hour recording</div>
      <div class="v-arrow down">crushed · maybe it dropped a rule</div>
      <div class="v-notes">
        <b>Meeting notes</b>
        <p>Ship quiet settings. Auth…?</p>
        <em>useful · also lossy</em>
      </div>
      <div class="v-arrow down">you, next message</div>
      <div class="v-bubble you">The rule I cannot lose: keep /ui buttons. Auth is out of scope.</div>
    </div>`,

  rag: `
    <div class="v-art v-split">
      <div class="v-panel on">
        <span class="v-kicker">RAG</span>
        <div class="v-book">returns · mugs</div>
        <small>one page, now</small>
      </div>
      <div class="v-panel dim">
        <span class="v-kicker">the dump</span>
        <div class="v-shelf"><i></i><i></i><i></i><i></i><i></i></div>
        <small>the whole library</small>
      </div>
    </div>`
};
