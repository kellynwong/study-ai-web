/* Study cards. Keep every field short. If it needs a paragraph, it is too long. */
window.STUDY = {
  packs: [
    {
      id: "desk",
      title: "The desk",
      blurb: "What the AI can hold, and what it costs.",
      cards: ["token", "context-window", "in-out", "system-prompt", "attention"]
    },
    {
      id: "agent",
      title: "The agent",
      blurb: "Not a chat box. A worker that takes steps.",
      cards: ["agent", "harness", "tool", "mcp", "skill"]
    },
    {
      id: "files",
      title: "The files",
      blurb: "Notes the agent reads before it starts.",
      cards: ["agents-md", "claude-md", "progressive", "context-eng"]
    },
    {
      id: "job",
      title: "Your job now",
      blurb: "The words people use for how you work with it.",
      cards: ["vibe", "taste", "plan-mode", "eval"]
    },
    {
      id: "wrong",
      title: "When it goes wrong",
      blurb: "Why a long chat gets worse, not smarter.",
      cards: ["hallucination", "context-rot", "lost-middle", "pollution"]
    },
    {
      id: "helpers",
      title: "Helpers & leftovers",
      blurb: "Extra hands, leftover facts, and cleaning the desk.",
      cards: ["subagent", "memory", "compact", "rag"]
    }
  ],

  cards: {
    token: {
      term: "Token",
      aka: "the piece, not the word",
      one: "A scrap of text the AI counts. Not a word.",
      picture: "“Hello” is one token. “Antidisestablishmentarianism” is several. A URL is a pile of them.",
      hear: "Anyone talking about cost, speed, or “the window is full.”",
      tip: "Plain English is cheap. Code, URLs, and rare words cost more.",
      q: "A token is…",
      opts: ["Always one English word", "A scrap of text the AI counts", "A credit on your bill"],
      a: 1
    },
    "context-window": {
      term: "Context window",
      aka: "the desk",
      one: "Everything the AI can see for this one job. Then it is gone.",
      picture: "A desk, not a brain. You dump files on it. The job ends. Someone sweeps the desk.",
      hear: "“It forgot” — usually the desk was full, or you started a new chat.",
      tip: "New chat = empty desk. Put the important thing at the start or the end, not the middle.",
      q: "The context window is most like…",
      opts: ["A brain that remembers you", "A desk for one job, then cleared", "The internet"],
      a: 1
    },
    "in-out": {
      term: "In vs out",
      aka: "read cheap, write dear",
      one: "Tokens in (what it reads) cost less than tokens out (what it writes).",
      picture: "Handing someone a book is cheap. Asking them to rewrite the book is not.",
      hear: "“Just use the cheap model” — often the real cost is how much it writes back.",
      tip: "Ask for the change, not a full rewrite of the file.",
      q: "Which costs more?",
      opts: ["The AI reading your file", "The AI writing a long answer", "They cost the same"],
      a: 1
    },
    "system-prompt": {
      term: "System prompt",
      aka: "the hidden brief",
      one: "Secret instructions at the top. You usually never see them.",
      picture: "The note taped to the inside of the worker’s folder, before your message arrives.",
      hear: "When a product “acts like a coach” or “won’t do X.” That’s this, not you.",
      tip: "Your message is not the only thing it reads. The product already briefed it.",
      q: "A system prompt is…",
      opts: ["Your latest chat message", "Hidden instructions the product sets first", "A file on your desktop"],
      a: 1
    },
    attention: {
      term: "Attention budget",
      aka: "it cannot stare at everything",
      one: "Every extra line steals focus from the lines that matter.",
      picture: "A person at a crowded desk. The more paper, the more they skim.",
      hear: "Someone saying “don’t paste the whole repo.”",
      tip: "Shorter, better-chosen context beats a bigger dump.",
      q: "Attention budget means…",
      opts: ["You get 10 questions a day", "More text = less focus on each part", "The AI gets tired after lunch"],
      a: 1
    },
    agent: {
      term: "Agent",
      aka: "not just a chatbot",
      one: "An AI that takes steps: read, try, check, repeat — not only reply.",
      picture: "Chatbot = someone at a desk answering. Agent = someone who gets up and does the errand.",
      hear: "Cursor, Claude Code, “it made a PR,” “it ran the tests.”",
      tip: "You are the manager. It is the intern who can type very fast.",
      q: "An agent is different from a chatbot because it…",
      opts: ["Is always smarter", "Can take steps, not only talk", "Never makes mistakes"],
      a: 1
    },
    harness: {
      term: "Harness",
      aka: "the loop around the model",
      one: "The software that runs the agent: tools, retries, the desk, the stop button.",
      picture: "The model is the brain. The harness is the body — hands, pockets, a watch that says stop.",
      hear: "“Claude Code vs Cursor” — often a harness difference, not a brain difference.",
      tip: "You buy the harness as much as the model. Same brain, different body, different job.",
      q: "The harness is…",
      opts: ["The AI model itself", "The software that runs the agent’s loop", "A kind of prompt"],
      a: 1
    },
    tool: {
      term: "Tool",
      aka: "a verb",
      one: "One thing the agent is allowed to do. Read a file. Search. Click.",
      picture: "A verb on a permission slip: “you may open files.” Not “you now understand files.”",
      hear: "“It has a browser tool” or “it can run the terminal.”",
      tip: "A tool is a capability. It is not knowledge, and it is not taste.",
      q: "A tool is…",
      opts: ["A fact the AI memorized", "A verb the agent is allowed to do", "A nicer prompt"],
      a: 1
    },
    mcp: {
      term: "MCP",
      aka: "Model Context Protocol",
      one: "A shared plug so one connector works in many AI apps.",
      picture: "USB for agents. Build the Figma plug once. Cursor, Claude, others can use it.",
      hear: "“We added the Notion MCP” — they plugged in a connector, not a brain.",
      tip: "Connecting a tool does not teach taste. It only adds a verb.",
      q: "MCP is…",
      opts: ["A smarter model", "A shared plug for tools", "A kind of memory"],
      a: 1
    },
    skill: {
      term: "Skill",
      aka: "SKILL.md",
      one: "A how-to note the agent fetches only when the job matches.",
      picture: "A recipe card. The title sits on the counter. The steps come out of the box when you cook that dish.",
      hear: "“Write a skill for how we do PRs.”",
      tip: "The description is a trigger (“use when prices change”), not a title (“Billing”).",
      q: "A skill should load…",
      opts: ["Every time, no matter the task", "Only when the job matches", "Never — skills are for humans"],
      a: 1
    },
    "agents-md": {
      term: "AGENTS.md",
      aka: "the house rules",
      one: "One file of always-on project rules. Most agents read it first.",
      picture: "The laminated sheet on the kitchen wall. Not the whole cookbook.",
      hear: "“Put it in AGENTS.md so it stops inventing button styles.”",
      tip: "Keep it short. Every extra rule competes with the others.",
      q: "AGENTS.md is for…",
      opts: ["Rules every task needs", "A full dump of the wiki", "Chat history"],
      a: 0
    },
    "claude-md": {
      term: "CLAUDE.md",
      aka: "same idea, Claude’s name",
      one: "Claude Code’s version of the house-rules file.",
      picture: "Same laminated sheet. Different restaurant logo on the header.",
      hear: "People say CLAUDE.md and AGENTS.md as if they were different jobs. They are not.",
      tip: "If you use more than one tool, prefer AGENTS.md so you write the rules once.",
      q: "CLAUDE.md vs AGENTS.md…",
      opts: ["CLAUDE.md is a smarter format", "Same job, different product name", "CLAUDE.md stores memory forever"],
      a: 1
    },
    progressive: {
      term: "Progressive disclosure",
      aka: "show a little, fetch more",
      one: "Start with a label. Open the full note only if this job needs it.",
      picture: "A table of contents first. Chapter 12 only if you are actually in chapter 12.",
      hear: "Why skills stay cheap: the agent carries titles, not whole manuals.",
      tip: "Don’t paste the whole wiki into AGENTS.md. Point at the page instead.",
      q: "Progressive disclosure means…",
      opts: ["The AI slowly learns your name", "Give a little now, load more only if needed", "Hide secrets from the user"],
      a: 1
    },
    "context-eng": {
      term: "Context engineering",
      aka: "what it can see, not how you phrase it",
      one: "Choosing what lands on the desk — files, rules, examples — so the job works.",
      picture: "Prompt engineering = nicer wording. Context engineering = briefing the intern with the right folder.",
      hear: "“The model is fine. The context is a mess.”",
      tip: "If output is bad, first ask: what did it actually see?",
      q: "Context engineering is mostly about…",
      opts: ["Finding magic words", "What information the model can see", "Picking a cheaper model"],
      a: 1
    },
    vibe: {
      term: "Vibe coding",
      aka: "describe it, then steer",
      one: "You say what you want in English. The agent writes it. You judge and correct.",
      picture: "Directing a very fast junior. You do not type the code. You decide if it feels right.",
      hear: "Karpathy, 2025 — then everyone, including people who do not write code.",
      tip: "Vibe coding gets you a draft. Taste decides if it ships.",
      q: "Vibe coding means…",
      opts: ["The AI writes while you steer in plain language", "You turn the lights down to code", "A model that only writes CSS"],
      a: 0
    },
    taste: {
      term: "Taste",
      aka: "the job they cannot outsource",
      one: "Knowing if the result is actually good — for this product, this user, this moment.",
      picture: "The agent can cook 40 dinners. Taste is knowing which one you would serve a guest.",
      hear: "Karpathy: you can hand off typing. You cannot hand off “is this the thing we meant?”",
      tip: "If you cannot say what “good” looks like, the agent will pick generic-good.",
      q: "In AI work, taste means…",
      opts: ["A setting that makes answers classier", "Your judgment of whether the result is good", "A kind of prompt"],
      a: 1
    },
    "plan-mode": {
      term: "Plan mode",
      aka: "talk first, type second",
      one: "The agent writes the plan. You approve or cut. Then it works.",
      picture: "A contractor who sketches the kitchen before knocking down a wall.",
      hear: "When the job is big, fuzzy, or expensive to undo.",
      tip: "Use it when you cannot reverse the work in one undo. Skip it for a one-line fix.",
      q: "Plan mode is useful when…",
      opts: ["Every single message", "The job is big or hard to undo", "You want a cheaper model"],
      a: 1
    },
    eval: {
      term: "Eval",
      aka: "a test for the AI",
      one: "A graded example: given this, the AI should do that. Pass or fail.",
      picture: "Not a unit test of your app. A quiz for the intern, run every time you change the brief.",
      hear: "“We have evals for the support bot.” They are scoring the AI, not the website.",
      tip: "If you cannot write one example of right vs wrong, you do not know what you want yet.",
      q: "An eval scores…",
      opts: ["Your website’s speed", "Whether the AI did the right thing", "How many tokens you used"],
      a: 1
    },
    hallucination: {
      term: "Hallucination",
      aka: "confident fiction",
      one: "It made something up and said it like a fact.",
      picture: "A student who would rather invent a citation than say “I don’t know.”",
      hear: "Fake quotes, fake APIs, “I already ran the tests” when it did not.",
      tip: "Ask it to show the file, the link, or the command output — not to swear it is sure.",
      q: "A hallucination is…",
      opts: ["The AI crashing", "A confident made-up answer", "When the window is full"],
      a: 1
    },
    "context-rot": {
      term: "Context rot",
      aka: "the pile gets worse",
      one: "As the desk fills, the AI gets worse — often before the desk is officially full.",
      picture: "A 4-hour meeting. By minute 180 nobody remembers the decision from minute 12.",
      hear: "A long agent run that starts sharp and ends confused.",
      tip: "New chat, or compact, beats “just keep going.”",
      q: "Context rot means…",
      opts: ["The model’s training went stale", "Longer context, worse thinking", "Your laptop is out of disk"],
      a: 1
    },
    "lost-middle": {
      term: "Lost in the middle",
      aka: "it reads the ends",
      one: "It notices the start and the end. The middle goes fuzzy.",
      picture: "A to-do list of 80 lines. People remember #1 and #80.",
      hear: "A rule you buried in paragraph 14 of a long paste.",
      tip: "Put the real instruction first or last. Repeat it if the chat got long.",
      q: "Lost in the middle means the AI…",
      opts: ["Skips the start of your message", "Pays less attention to the middle of a long pile", "Only reads bullet points"],
      a: 1
    },
    pollution: {
      term: "Context pollution",
      aka: "junk on the desk",
      one: "Wrong or extra stuff on the desk. Not just too much — the wrong much.",
      picture: "A clean short brief beats a huge folder of leftover Slack threads.",
      hear: "After someone dumps “the whole drive, just in case.”",
      tip: "Delete the extra. Quality of what it sees beats quantity.",
      q: "Context pollution is…",
      opts: ["Too many users on the account", "Irrelevant or conflicting stuff on the desk", "When output tokens cost more"],
      a: 1
    },
    subagent: {
      term: "Subagent",
      aka: "a helper with its own desk",
      one: "A side worker with a clean desk. It brings back a summary, not the whole mess.",
      picture: "You send someone to the archive. They return with one paragraph, not the boxes.",
      hear: "“It spun up a helper to search the repo.”",
      tip: "Use a helper for a hunt. Don’t make five helpers argue about taste — that’s your job.",
      q: "A subagent is useful because…",
      opts: ["It is always smarter than the main agent", "It hunts on a clean desk and brings back a summary", "It remembers you forever"],
      a: 1
    },
    memory: {
      term: "Memory",
      aka: "survives the sweep",
      one: "A fact written down somewhere that lasts after this chat ends.",
      picture: "The desk is cleared. A sticky note on the fridge is still there tomorrow.",
      hear: "People say “memory” for four different things. Ask: does it survive a new chat?",
      tip: "If it must be true next Tuesday, put it in a file. Do not trust the chat.",
      q: "Real memory, here, means…",
      opts: ["Whatever is on the desk right now", "Something that survives after this chat", "The model’s training data"],
      a: 1
    },
    compact: {
      term: "Compaction",
      aka: "summarize to make room",
      one: "The chat gets crushed into a shorter recap so the desk has space.",
      picture: "Meeting notes replace the 3-hour recording. Useful. Also lossy.",
      hear: "“/compact” or “the agent summarized itself.”",
      tip: "After a compact, type the one rule again in your next message. Or put it in AGENTS.md so you do not have to.",
      q: "Compaction…",
      opts: ["Makes the model smarter forever", "Shortens the chat and can drop details", "Adds more tools"],
      a: 1
    },
    rag: {
      term: "RAG",
      aka: "fetch, don’t dump",
      one: "Look up the relevant page at the moment you need it. Don’t paste the library.",
      picture: "A librarian who brings one book, not a forklift of shelves.",
      hear: "“Our bot uses RAG over the docs.”",
      tip: "Bad retrieval = pollution. The fetch has to be the right page, not a random page.",
      q: "RAG means the AI…",
      opts: ["Remembers you across years", "Fetches relevant notes when needed", "Writes faster"],
      a: 1
    }
  },

  pairs: [
    {
      id: "taste-vibe",
      left: "Vibe coding",
      right: "Taste",
      line: "Vibe is how you make it. Taste is how you know if it is any good."
    },
    {
      id: "prompt-context",
      left: "Prompt engineering",
      right: "Context engineering",
      line: "Prompt is the wording. Context is the folder you handed it."
    },
    {
      id: "skill-agents",
      left: "Skill",
      right: "AGENTS.md",
      line: "Skill = recipe for one kind of job. AGENTS.md = house rules for every job."
    },
    {
      id: "desk-memory",
      left: "Context window",
      right: "Memory",
      line: "The desk is this chat. Memory is the sticky note that survives the sweep."
    },
    {
      id: "rot-pollution",
      left: "Context rot",
      right: "Context pollution",
      line: "Rot = the pile got too tall. Pollution = the pile has junk in it."
    },
    {
      id: "tool-mcp",
      left: "Tool",
      right: "MCP",
      line: "A tool is a verb. MCP is the plug standard those verbs use."
    }
  ]
};
