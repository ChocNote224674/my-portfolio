// Game world data: stations along the timeline, terminal files, ambience.

window.GAME = {
  // World dimensions
  worldWidth: 5600,
  groundY: 480,         // ground line from top of game viewport (700 tall)

  // Stations correspond 1:1 with milestones in CONTENT.<lang>.journey.milestones
  // (after the journey was split into academic + work — 7 milestones total)
  stations: [
    { idx: 0, x:  500, kind: "academy",   color: "#a89b6b", icon: "≡", subtitle: "BAC" },
    { idx: 1, x: 1200, kind: "academy",   color: "#5a7c8a", icon: "∫", subtitle: "LICENCE · MATH" },
    { idx: 2, x: 1900, kind: "academy",   color: "#5a8a7a", icon: "∇", subtitle: "M.SC. DS & AI" },
    { idx: 3, x: 2700, kind: "research",  color: "#9c7a6b", icon: "λ", subtitle: "CYBER RESEARCH" },
    { idx: 4, x: 3400, kind: "voice",     color: "#6b9c8a", icon: "♪", subtitle: "VOICE AGENT" },
    { idx: 5, x: 4200, kind: "rag",       color: "#6b8a9c", icon: "Σ", subtitle: "RAG + CAG" },
    { idx: 6, x: 5000, kind: "techlab",   color: "#8a6b9c", icon: "◈", subtitle: "TECH LAB" },
  ],

  // Floating background symbols (math / AI flavour)
  ambientSymbols: ["∇f", "∂L/∂θ", "softmax", "argmin", "Σ", "π", "ℝⁿ", "‖x‖₂", "P(y|x)", "lim", "∇²", "e^x", "𝔼[X]", "Q(s,a)", "KL", "attention", "self-attn", "GELU", "Adam", "tanh", "ReLU", "GNN", "BPTT", "MCTS", "Bayes", "‖·‖", "⟨·,·⟩"],

  // Mini-mobs / decorative entities drifting in background
  ghosts: [
    { x: 0.15, y: 0.20, glyph: "neuron",  size: 1.0 },
    { x: 0.55, y: 0.18, glyph: "matrix",  size: 1.2 },
    { x: 0.80, y: 0.25, glyph: "graph",   size: 0.9 },
    { x: 1.05, y: 0.30, glyph: "neuron",  size: 0.8 },
    { x: 1.35, y: 0.15, glyph: "matrix",  size: 1.1 },
    { x: 1.65, y: 0.22, glyph: "graph",   size: 1.0 },
    { x: 1.95, y: 0.28, glyph: "neuron",  size: 1.2 },
    { x: 2.30, y: 0.18, glyph: "matrix",  size: 0.9 },
  ],
};

// Terminal filesystem (bilingual content gets embedded at runtime)
window.makeTerminalFS = function(lang) {
  const c = window.CONTENT[lang];
  const isFr = lang === "fr";

  const exp = c.journey.milestones
    .slice().reverse()
    .map(m => `${m.year.padEnd(14, " ")}  ${m.title}\n${" ".repeat(16)}${m.org}\n${" ".repeat(16)}> ${m.body}\n`)
    .join("\n");

  const proj = c.projects.items
    .map(p => `[${p.n}] ${p.title}\n     ${p.desc}\n     → ${p.url}\n     tags: ${p.tags.join(", ")}\n`)
    .join("\n");

  const skills = JSON.stringify({
    languages: ["Python", "Java", "R", "C"],
    frameworks: ["PyTorch", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "NLTK", "Streamlit"],
    big_data: ["Spark", "Hadoop", "Redis"],
    domains: ["Deep Learning", "NLP", "Computer Vision", "RAG", "Voice", "RL", "Big Data"],
    cloud: ["Azure"],
    spoken: { ar: "native", fr: "fluent", en: "proficient" },
  }, null, 2);

  const secret = isFr
    ? `// Easter egg trouvé.
//
// "Le meilleur mod\u00e8le n'est pas celui qui converge le plus vite.
//  C'est celui qui sait reconna\u00eetre quand il ne sait pas."
//
//                                       — youssef, en stage chez PwC, 3h du matin.
`
    : `// Easter egg unlocked.
//
// "The best model isn't the one that converges fastest.
//  It's the one that knows when it doesn't know."
//
//                                       — youssef, 3am on a PwC intern night.
`;

  const readme = isFr
    ? `Bienvenue dans le terminal.

Tape "help" pour la liste des commandes.
Tape "exit" ou \`Esc\` pour revenir au jeu.

Tous les fichiers ici sont r\u00e9els --- "cat resume.tex" affiche
mon CV en LaTeX, "cat experience.md" mon parcours, etc.
`
    : `Welcome to the terminal.

Type "help" to list available commands.
Type "exit" or \`Esc\` to return to the game.

Every file here is real --- "cat resume.tex" prints my actual
LaTeX r\u00e9sum\u00e9, "cat experience.md" my full journey, and so on.
`;

  return {
    "readme.txt": readme,
    "experience.md": exp,
    "projects.md": proj,
    "skills.json": skills,
    "resume.tex": window.buildTex(lang),
    ".secret": secret,
  };
};

window.terminalHelp = function(lang) {
  const isFr = lang === "fr";
  return isFr
    ? [
        "Commandes disponibles :",
        "",
        "  help              cette aide",
        "  whoami            qui suis-je",
        "  ls                lister les fichiers",
        "  cat <fichier>     afficher le contenu d'un fichier",
        "  pwd               r\u00e9pertoire courant",
        "  date              date / heure",
        "  lang <en|fr>      changer la langue",
        "  theme <l|d>       th\u00e8me clair / sombre",
        "  contact           ouvrir un canal de communication",
        "  clear             nettoyer le terminal",
        "  exit              quitter le terminal",
        "",
        "Tape \"ls\" pour voir ce qu'il y a \u00e0 explorer.",
      ]
    : [
        "Available commands:",
        "",
        "  help              this help",
        "  whoami            who am I",
        "  ls                list files",
        "  cat <file>        print a file",
        "  pwd               current directory",
        "  date              date / time",
        "  lang <en|fr>      switch language",
        "  theme <l|d>       light / dark theme",
        "  contact           open a comms channel",
        "  clear             clear terminal",
        "  exit              leave terminal",
        "",
        "Try \"ls\" to see what's here.",
      ];
};

window.terminalWhoami = function(lang) {
  const isFr = lang === "fr";
  return isFr
    ? [
        "youssef@portfolio:~$",
        "",
        "  Youssef Abdelhedi",
        "  AI Consultant @ PwC Tech Lab",
        "  Tunis \u00b7 Paris",
        "",
        "  M.Sc. Science des Donn\u00e9es & IA \u2014 Universit\u00e9 Paris-Dauphine",
        "  Sp\u00e9cialit\u00e9s : RAG, voice agents, GNN, few-shot vision",
        "",
        "  Statut : open to research & AI roles.",
      ]
    : [
        "youssef@portfolio:~$",
        "",
        "  Youssef Abdelhedi",
        "  AI Consultant @ PwC Tech Lab",
        "  Tunis \u00b7 Paris",
        "",
        "  M.Sc. Data Science & AI \u2014 Universit\u00e9 Paris-Dauphine",
        "  Specialties: RAG, voice agents, GNN, few-shot vision",
        "",
        "  Status: open to research & AI roles.",
      ];
};

window.terminalContact = function(lang) {
  return [
    "Channels open:",
    "",
    "  email     mailto:abdelhedi.youssef8@gmail.com",
    "  phone     tel:+216 92 959 206",
    "  github    https://github.com/ChocNote224674",
    "  linkedin  https://www.linkedin.com/in/youssef-abdelhedi-893441159",
    "  medium    https://medium.com/@abdelhedi.youssef8",
    "",
    lang === "fr" ? "Le canal email est le plus rapide." : "Email is the fastest channel.",
  ];
};
