// Terminal overlay component. Press T or ~ in game mode to open.
const { useState: useStateT, useEffect: useEffectT, useRef: useRefT } = React;

function Terminal({ lang, setLang, theme, setTheme, onClose }) {
  const [history, setHistory] = useStateT([]);  // [{kind: 'in'|'out', text: string|string[]}]
  const [cmd, setCmd] = useStateT("");
  const [cwd] = useStateT("/home/youssef");
  const inputRef = useRefT(null);
  const bodyRef = useRefT(null);

  // Welcome banner
  useEffectT(() => {
    const banner = lang === "fr"
      ? [
          "abdelhedi@portfolio:~$  welcome",
          "  bash 5.2  ·  ttys001  ·  " + new Date().toLocaleDateString("fr-FR"),
          "  tape `help` pour la liste des commandes, `exit` pour revenir au jeu.",
        ]
      : [
          "abdelhedi@portfolio:~$  welcome",
          "  bash 5.2  ·  ttys001  ·  " + new Date().toLocaleDateString("en-GB"),
          "  type `help` for commands, `exit` to return to the game.",
        ];
    setHistory([{ kind: "out", text: banner }]);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [lang]);

  // Keep scrolled to bottom & maintain focus
  useEffectT(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  // Escape to close
  useEffectT(() => {
    const h = (e) => { if (e.key === "Escape") { onClose(); } };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  const fs = window.makeTerminalFS(lang);
  const fileNames = Object.keys(fs);

  const submit = () => {
    const raw = cmd.trim();
    if (!raw) {
      setHistory(h => [...h, { kind: "in", text: "" }]);
      setCmd("");
      return;
    }
    const [c, ...rest] = raw.split(/\s+/);
    const arg = rest.join(" ").trim();
    let out;
    switch (c.toLowerCase()) {
      case "help":   out = window.terminalHelp(lang); break;
      case "whoami": out = window.terminalWhoami(lang); break;
      case "ls":     out = ["readme.txt", "experience.md", "projects.md", "skills.json", "resume.tex", ".secret"]; break;
      case "pwd":    out = [cwd]; break;
      case "date":   out = [new Date().toString()]; break;
      case "cat": {
        if (!arg) { out = [lang === "fr" ? "usage: cat <fichier>" : "usage: cat <file>"]; break; }
        if (!fileNames.includes(arg)) {
          out = [`cat: ${arg}: ` + (lang === "fr" ? "fichier introuvable" : "no such file")];
        } else {
          const c = fs[arg];
          out = typeof c === "string" ? c.split("\n") : c;
        }
        break;
      }
      case "contact":
      case "social": out = window.terminalContact(lang); break;
      case "lang":   {
        if (arg === "en" || arg === "fr") {
          setLang(arg);
          out = [`lang → ${arg}`];
        } else { out = ["usage: lang en|fr"]; }
        break;
      }
      case "theme": {
        if (arg === "l" || arg === "light") { setTheme("light"); out = ["theme → light"]; }
        else if (arg === "d" || arg === "dark") { setTheme("dark"); out = ["theme → dark"]; }
        else out = ["usage: theme l|d"];
        break;
      }
      case "clear":  setHistory([]); setCmd(""); return;
      case "exit":
      case "quit":   onClose(); return;
      case "sudo":   out = ["Permission denied. (this is a portfolio, not a kernel.)"]; break;
      case "rm":     out = [lang === "fr" ? "rm: nope. les souvenirs ne s'effacent pas." : "rm: nope. memories don't delete."]; break;
      case "make":   out = ["make: nothing to make. but the journey was the build target."]; break;
      case "python": out = ["Python 3.11.4  ·  type `exit` to leave.  (just kidding, this is bash.)"]; break;
      case "ssh":    out = ["ssh: connection to recruiter@research-lab.com established. (drop me an email :)"]; break;
      case "git":    out = ["github.com/ChocNote224674"]; break;
      case "open":   out = arg ? [`opening ${arg} ...`] : ["usage: open <url>"]; break;
      case "tree":   out = [".", "├── readme.txt", "├── experience.md", "├── projects.md", "├── skills.json", "├── resume.tex", "└── .secret"]; break;
      case "echo":   out = [arg]; break;
      default:       out = [`${c}: ` + (lang === "fr" ? "commande introuvable. essaie \`help\`." : "command not found. try `help`.")];
    }
    setHistory(h => [...h, { kind: "in", text: raw }, { kind: "out", text: out }]);
    setCmd("");
  };

  return (
    <div className="terminal-backdrop">
      <div className="terminal" onClick={() => inputRef.current?.focus()}>
        <div className="term-titlebar">
          <span className="term-dot r" /><span className="term-dot y" /><span className="term-dot g" />
          <span className="term-title">— abdelhedi@portfolio: ~ —</span>
          <button className="term-close" onClick={onClose}>×</button>
        </div>
        <div className="term-body" ref={bodyRef}>
          {history.map((e, i) => (
            <div key={i} className={"term-entry " + e.kind}>
              {e.kind === "in"
                ? <div><span className="term-prompt">abdelhedi@portfolio:{cwd}$</span> {e.text}</div>
                : (Array.isArray(e.text) ? e.text : String(e.text).split("\n")).map((line, j) => (
                    <div key={j} className="term-line">{renderTermLine(line)}</div>
                  ))}
            </div>
          ))}
          <form onSubmit={(e) => { e.preventDefault(); submit(); }} className="term-inputline">
            <span className="term-prompt">abdelhedi@portfolio:{cwd}$</span>
            <input ref={inputRef} value={cmd} onChange={(e) => setCmd(e.target.value)}
                   autoFocus autoComplete="off" spellCheck="false" className="term-input" />
            <span className="term-cursor" />
          </form>
        </div>
      </div>
    </div>
  );
}

function renderTermLine(line) {
  // Color URLs and comments
  if (!line) return <>&nbsp;</>;
  if (/^\s*\/\//.test(line)) return <span style={{color:"#7a8a73", fontStyle:"italic"}}>{line}</span>;
  if (/^\s*\[ok\]/.test(line)) return <><span style={{color:"#7eda94"}}>{line}</span></>;
  if (/^\s*\[err\]/.test(line)) return <span style={{color:"#e07a6b"}}>{line}</span>;
  // Highlight commands in /^\s*[a-z]+\s/
  return <>{line}</>;
}

window.Terminal = Terminal;
