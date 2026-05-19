/* Main application */
const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ===== Tweaks defaults =====
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "en",
  "theme": "light",
  "accentHue": 200,
  "characterScale": 1,
  "characterStyle": "pixel",
  "heroAsPhoto": false
}/*EDITMODE-END*/;

// ===== Top bar =====
function TopBar({ lang, setLang, activeSection, scrollTo, onBackToMenu }) {
  const t = window.CONTENT[lang];
  const [navOpen, setNavOpen] = useState(false);
  const items = [
    { id: "about", label: t.nav.about },
    { id: "academic", label: t.nav.academic },
    { id: "work", label: t.nav.work },
    { id: "research", label: t.nav.research },
    { id: "projects", label: t.nav.projects },
    { id: "publications", label: t.nav.publications },
    { id: "community", label: t.nav.community },
    { id: "resume", label: t.nav.resume },
    { id: "contact", label: t.nav.contact },
  ];
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="topbar-back" onClick={onBackToMenu} title={lang === "fr" ? "Retour au menu" : "Back to menu"}>
          <span className="back-arrow">‹</span>
          <span className="back-label">{lang === "fr" ? "Menu" : "Menu"}</span>
        </button>
        <a href="#top" className="brand" onClick={(e) => { e.preventDefault(); scrollTo("top"); }}>
          <span className="dot" />
          <span style={{whiteSpace: "nowrap"}}>Y. Abdelhedi</span>
        </a>
      </div>

      <nav className="nav-pills">
        {items.map(it => (
          <a key={it.id} href={`#${it.id}`} className={activeSection === it.id ? "active" : ""}
             onClick={(e) => { e.preventDefault(); scrollTo(it.id); }}>
            {it.label}
          </a>
        ))}
      </nav>

      <div className="topbar-right">
        <div className="lang-toggle">
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
          <button className={lang === "fr" ? "active" : ""} onClick={() => setLang("fr")}>FR</button>
        </div>
        <button className="hamburger" onClick={() => setNavOpen(!navOpen)} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </div>

      {navOpen && (
        <div className="mobile-nav-sheet" onClick={() => setNavOpen(false)}>
          <div className="mobile-nav-inner" onClick={(e) => e.stopPropagation()}>
            {items.map(it => (
              <a key={it.id} href={`#${it.id}`}
                 className={activeSection === it.id ? "active" : ""}
                 onClick={(e) => { e.preventDefault(); scrollTo(it.id); setNavOpen(false); }}>
                {it.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

// ===== Hero =====
function Hero({ lang, scrollTo, characterScale, characterStyle, heroAsPhoto, toggleHeroPhoto }) {
  const t = window.CONTENT[lang].hero;
  const characterEl = <window.Character pose="wave" size={420} style={characterStyle} />;
  const photoEl = (
    <div className="hero-photo">
      <img src="images/profile.jpg" alt="Youssef Abdelhedi" />
    </div>
  );
  return (
    <section id="top" className="hero">
      <div className="hero-grid" />
      <div className="hero-inner">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="first">{t.title1}</span>
            <span className="last">{t.title2}.</span>
          </h1>
          <div className="hero-tagline">{t.tagline}</div>
          <p style={{fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 28}}>
            {t.role}
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollTo("academic")}>
              {t.cta1} <span className="arrow">↓</span>
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo("resume")}>
              {t.cta2} <span className="arrow">→</span>
            </button>
          </div>
        </div>
        <div className={"hero-character" + (heroAsPhoto ? " is-photo" : "")} style={{ transform: `scale(${characterScale})` }}>
          <div className={"hero-coin" + (heroAsPhoto ? " flipped" : "")} onClick={toggleHeroPhoto}
               title={lang === "fr" ? "Cliquer pour retourner la pièce" : "Click to flip the coin"}>
            <div className="coin-inner">
              <div className="coin-face coin-front">
                <div className="coin-rim" />
                <div className="coin-content">{characterEl}</div>
              </div>
              <div className="coin-face coin-back">
                <div className="coin-rim" />
                <div className="coin-content">{photoEl}</div>
              </div>
            </div>
          </div>
          <div className="coin-hint" onClick={toggleHeroPhoto}>
            <span className="flip-glyph">↻</span>
            <span>{lang === "fr" ? "Clique pour retourner" : "Click to flip"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== About =====
function About({ lang }) {
  const t = window.CONTENT[lang].about;
  return (
    <section id="about">
      <div className="wrap">
        <div className="eyebrow"><span className="num">01</span> {t.eyebrow}</div>
        <h2 className="section-title">{t.title}</h2>
        <div className="about-grid">
          <div className="about-text">
            {t.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <aside className="about-card">
            <h4>// quick facts</h4>
            {t.sidebar.map((row, i) => (
              <div key={i} className="label-row">
                <span className="k">{row.k}</span>
                <span className="v">{row.v}<small>{row.small}</small></span>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}

// ===== Roadmap (stacked cards on left, sticky character on right that morphs as you scroll) =====
function Roadmap({ lang, characterScale, characterStyle, kind = "academic", num = "02", sectionId = "academic" }) {
  const journey = window.CONTENT[lang].journey;
  const t = journey[kind];
  const milestones = journey.milestones.filter(m => m.kind === kind);
  const cardsRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.roadmap-card');
    if (!cards) return;
    const obs = new IntersectionObserver((entries) => {
      // pick visible entry with highest ratio
      let best = active, bestRatio = 0;
      entries.forEach(e => {
        if (e.isIntersecting && e.intersectionRatio > bestRatio) {
          bestRatio = e.intersectionRatio;
          best = Number(e.target.dataset.idx);
        }
      });
      if (bestRatio > 0) setActive(best);
    }, { rootMargin: "-35% 0px -35% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] });
    cards.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, [lang, kind]);

  const m = milestones[active] || milestones[0];

  const scrollToIdx = (i) => {
    const el = cardsRef.current?.querySelector(`[data-idx="${i}"]`);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.4;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id={sectionId} className="roadmap">
      <div className="wrap">
        <div className="eyebrow"><span className="num">{num}</span> {t.eyebrow}</div>
        <h2 className="section-title">{t.title}</h2>
        <p className="lede">{t.lede}</p>
      </div>

      <div className="roadmap-rail">
        <div className="rail-inner">
          {milestones.map((ms, i) => (
            <div key={i}
                 className={"rail-step" + (i === active ? " active" : "")}
                 onClick={() => scrollToIdx(i)}>
              {ms.short}
            </div>
          ))}
        </div>
      </div>

      <div className="wrap roadmap-track">
        <div className="roadmap-cards" ref={cardsRef}>
          {milestones.map((ms, i) => (
            <div key={i}
                 data-idx={i}
                 className={"roadmap-card" + (i === active ? " active" : "")}>
              <div className="rc-meta">
                <span className="year">{ms.year}</span>
                <span className="sep">/</span>
                <span>{String(i + 1).padStart(2, "0")} of {String(milestones.length).padStart(2, "0")}</span>
              </div>
              <h3 className="rc-title">{ms.title}</h3>
              <div className="rc-org">{ms.org}</div>
              {ms.image && (
                <div className={"rc-image" + (ms.image.padded ? " padded" : "") + (ms.image.fit === "contain" ? " contain" : "")}>
                  <img className="rc-img-light" src={ms.image.light} alt={ms.image.alt} />
                  {ms.image.dark !== ms.image.light && (
                    <img className="rc-img-dark" src={ms.image.dark} alt={ms.image.alt} />
                  )}
                </div>
              )}
              <p className="rc-body">{ms.body}</p>
              <div className="rc-tags">
                {ms.tags.map((tg, j) => <span key={j} className="rc-tag">{tg}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div className="roadmap-character-col">
          <div className="roadmap-character" style={{ transform: `scale(${characterScale})` }}>
            <div className="character-frame">
              <div className="character-walk" key={active}>
                <window.Character pose={m.pose} size={360} style={characterStyle} />
              </div>
            </div>
            <div className="character-year-overlay">{m.year} · {m.short}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Research =====
function Research({ lang }) {
  const t = window.CONTENT[lang].research;
  return (
    <section id="research">
      <div className="wrap">
        <div className="eyebrow"><span className="num">04</span> {t.eyebrow}</div>
        <h2 className="section-title">{t.title}</h2>
        <div className="research-grid">
          {t.cells.map((c, i) => (
            <div key={i} className="research-cell">
              <div className="glyph" style={{ fontSize: 20 }}>{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Projects =====
function Projects({ lang }) {
  const t = window.CONTENT[lang].projects;
  return (
    <section id="projects" className="projects">
      <div className="wrap">
        <div className="eyebrow"><span className="num">05</span> {t.eyebrow}</div>
        <h2 className="section-title">{t.title}</h2>
        <p className="lede">{t.lede}</p>
        <div className="projects-list">
          {t.items.map((p, i) => (
            <a key={i} className="project-row" href={p.url} target="_blank" rel="noreferrer">
              <div className="pn">{p.n}</div>
              <div className="pt">{p.title}</div>
              <div className="pd">{p.desc}</div>
              <div className="pg">{p.tags.map((tg, j) => <span key={j} className="rc-tag">{tg}</span>)}</div>
              <div className="arrow-end">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Publications =====
function Publications({ lang }) {
  const t = window.CONTENT[lang].publications;
  return (
    <section id="publications" className="publications">
      <div className="wrap">
        <div className="eyebrow"><span className="num">06</span> {t.eyebrow}</div>
        <h2 className="section-title">{t.title}</h2>
        <p className="lede">{t.lede}</p>
        <div className="pubs-grid">
          {t.items.map((p, i) => (
            <a key={i} className="pub-card" href={p.url} target="_blank" rel="noreferrer">
              <div className="pub-num">{p.n}</div>
              <div className="pub-body">
                <h3 className="pub-title">{p.title}</h3>
                <div className="pub-sub">{p.subtitle}</div>
                <p className="pub-desc">{p.desc}</p>
                <div className="pub-tags">
                  {p.tags.map((tg, j) => <span key={j} className="rc-tag">{tg}</span>)}
                </div>
              </div>
              <div className="pub-arrow">↗</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Community & Leadership =====
function Community({ lang }) {
  const t = window.CONTENT[lang].community;
  return (
    <section id="community" className="community">
      <div className="wrap">
        <div className="eyebrow"><span className="num">07</span> {t.eyebrow}</div>
        <h2 className="section-title">{t.title}</h2>
        <p className="lede">{t.lede}</p>

        <div className="community-grid">
          <article className="community-card itlab-card">
            <div className="cc-logo">
              <img className="rc-img-light" src="images/itlab-light.png" alt="IT LAB" />
              <img className="rc-img-dark" src="images/itlab-dark.png" alt="IT LAB" />
            </div>
            <div className="cc-meta">
              <h3 className="cc-title">{t.itlab.title}</h3>
              <div className="cc-sub">{t.itlab.sub}</div>
              <p className="cc-body">{t.itlab.body}</p>
            </div>
          </article>

          <article className="community-card hack-card">
            <div className="cc-trophy">
              <svg viewBox="0 0 80 80" width="64" height="64">
                <path d="M28 14 L52 14 L52 36 Q52 50 40 52 Q28 50 28 36 Z" fill="none" stroke="currentColor" strokeWidth="2.2"/>
                <path d="M28 22 Q14 22 14 32 Q14 42 26 44" fill="none" stroke="currentColor" strokeWidth="2.2"/>
                <path d="M52 22 Q66 22 66 32 Q66 42 54 44" fill="none" stroke="currentColor" strokeWidth="2.2"/>
                <rect x="36" y="52" width="8" height="10" fill="currentColor"/>
                <rect x="26" y="62" width="28" height="4" fill="currentColor"/>
                <text x="40" y="36" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="currentColor" fontWeight="700">1st</text>
              </svg>
            </div>
            <div className="cc-meta">
              <h3 className="cc-title">{t.hackathons.title}</h3>
              <div className="cc-sub">{t.hackathons.sub}</div>
              <p className="cc-body">{t.hackathons.body}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

// ===== Resume (LaTeX-styled paper — matches the source CV exactly) =====
function ResumePaper({ lang }) {
  const r = window.RESUME[lang];
  return (
    <div className="resume-paper" id="resume-paper">
      <h1>{r.name}</h1>
      <div className="contact-line">
        {r.contact.map((c, i) => (
          <React.Fragment key={i}>
            <a href={c.href}>{c.label}</a>
            {i < r.contact.length - 1 && <span> &nbsp;|&nbsp; </span>}
          </React.Fragment>
        ))}
      </div>

      <h2>{r.sections.summary}</h2>
      <p className="summary">{r.summary}</p>

      <h2>{r.sections.edu}</h2>
      {r.education.map((e, i) => (
        <div key={i} className="entry">
          <div className="entry-row">
            <span className="where">{e.where}</span>
            <span className="when">{e.when}</span>
          </div>
          <div className="entry-row single">
            <span className="what">{e.what}</span>
          </div>
          <p className="summary" style={{ marginTop: 4 }}>{e.details}</p>
        </div>
      ))}

      <h2>{r.sections.xp}</h2>
      {r.experience.map((e, i) => (
        <div key={i} className="entry">
          <div className="entry-row">
            <span className="where">{e.where}</span>
            <span className="when">{e.when}</span>
          </div>
          <div className="entry-row single">
            <span className="what">{e.what}</span>
          </div>
          <ul>{e.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
        </div>
      ))}

      <h2>{r.sections.proj}</h2>
      {r.projects.map((p, i) => (
        <div key={i} className="entry">
          <div className="entry-row">
            <span className="where">{p.name}</span>
            <span className="when"><a href={p.link.href} target="_blank" rel="noreferrer">{p.link.label}</a></span>
          </div>
          <p className="summary" style={{ marginTop: 4 }}>{p.desc}</p>
        </div>
      ))}

      <h2>{r.sections.skills}</h2>
      <div className="skill-grid">
        {Object.entries(r.skills).map(([k, v], i) => (
          <React.Fragment key={i}>
            <div className="k">{k}</div>
            <div>{v}</div>
          </React.Fragment>
        ))}
      </div>

      <h2>{r.sections.lead}</h2>
      {r.leadership.map((e, i) => (
        <div key={i} className="entry">
          <div className="entry-row">
            <span className="where">{e.where}</span>
            <span className="when">{e.when}</span>
          </div>
          <div className="entry-row single">
            <span className="what">{e.what}</span>
          </div>
          <ul>{e.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
        </div>
      ))}

      <p className="footer-mark">Typeset with the moderncv class &mdash; compile with <code style={{ fontFamily: "inherit" }}>xelatex cv.tex</code></p>
    </div>
  );
}

function ResumeSection({ lang }) {
  const t = window.CONTENT[lang].resume;
  const [showSource, setShowSource] = useState(false);
  const [copied, setCopied] = useState(false);

  const texSource = useMemo(() => window.buildTex(lang), [lang]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(texSource);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) { /* noop */ }
  };

  const handleDownload = () => {
    const blob = new Blob([texSource], { type: "application/x-tex" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Youssef-Abdelhedi-CV-${lang.toUpperCase()}.tex`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <section id="resume" className="resume-section">
      <div className="wrap">
        <div className="eyebrow"><span className="num">08</span> {t.eyebrow}</div>
        <h2 className="section-title">{t.title}</h2>
        <p className="lede">{t.lede}</p>

        <div className="resume-toolbar">
          <div className="tool-group">
            <span style={{fontFamily:"var(--mono)", fontSize:11, color:"var(--ink-3)", letterSpacing:"0.1em", textTransform:"uppercase", marginRight:8}}>Output</span>
            <button className="tool-btn active">{lang === "en" ? "English" : "Français"} · A4</button>
          </div>
          <div className="tool-group">
            <button className="tool-btn" onClick={() => setShowSource(true)}>
              <span style={{fontFamily:"var(--mono)"}}>{"</>"}</span> {t.sourceBtn}
            </button>
            <button className="tool-btn" onClick={handleDownload}>
              ↓ .tex
            </button>
            <button className="tool-btn primary" onClick={() => window.print()}>
              ⎙ {t.printBtn}
            </button>
          </div>
        </div>

        <div className="resume-frame">
          <ResumePaper lang={lang} />
        </div>
      </div>

      {showSource && (
        <div className="modal-backdrop" onClick={() => setShowSource(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <h3>cv.tex · {lang.toUpperCase()} · moderncv (banking)</h3>
              <div className="actions">
                <button className="tool-btn" onClick={handleCopy}>{copied ? t.copied : t.copyBtn}</button>
                <button className="tool-btn" onClick={handleDownload}>↓ .tex</button>
                <button className="tool-btn" onClick={() => setShowSource(false)}>✕</button>
              </div>
            </div>
            <pre className="modal-body" dangerouslySetInnerHTML={{__html: window.highlightTex(texSource)}} />
          </div>
        </div>
      )}
    </section>
  );
}

// ===== Contact =====
function Contact({ lang }) {
  const t = window.CONTENT[lang].contact;
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="eyebrow"><span className="num">09</span> {t.eyebrow}</div>
        <h2 className="section-title">{t.title}</h2>
        <div className="contact-grid">
          {t.cells.map((c, i) => {
            const inner = (
              <>
                <div className="ck">{c.k}</div>
                <div className="cv">{c.v}</div>
              </>
            );
            return c.href
              ? <a key={i} className="contact-cell" href={c.href} target="_blank" rel="noreferrer">{inner}</a>
              : <div key={i} className="contact-cell">{inner}</div>;
          })}
        </div>
      </div>
    </section>
  );
}

// ===== Footer =====
function Footer({ lang }) {
  const t = window.CONTENT[lang].footer;
  return (
    <footer>
      <div>{t.left}</div>
      <div>{t.right}</div>
    </footer>
  );
}

// ===== Tweaks panel =====
function TweaksPanel({ tweaks, setTweak, open, setOpen }) {
  if (!open) return null;
  return (
    <div className="tweaks-panel open">
      <h4>
        <span>Tweaks</span>
        <button onClick={() => setOpen(false)}>×</button>
      </h4>

      <div className="tweak-row">
        <label>Language</label>
        <div className="tweak-seg">
          <button className={tweaks.lang === "en" ? "active" : ""} onClick={() => setTweak("lang", "en")}>English</button>
          <button className={tweaks.lang === "fr" ? "active" : ""} onClick={() => setTweak("lang", "fr")}>Français</button>
        </div>
      </div>

      <div className="tweak-row">
        <label>Theme</label>
        <div className="tweak-seg">
          <button className={tweaks.theme === "light" ? "active" : ""} onClick={() => setTweak("theme", "light")}>Paper</button>
          <button className={tweaks.theme === "dark" ? "active" : ""} onClick={() => setTweak("theme", "dark")}>Ink</button>
        </div>
      </div>

      <div className="tweak-row">
        <label>Accent hue · {tweaks.accentHue}°</label>
        <input
          className="tweak-slider"
          type="range" min="0" max="360" step="5"
          value={tweaks.accentHue}
          onChange={(e) => setTweak("accentHue", Number(e.target.value))}
        />
        <div className="swatch-row" style={{marginTop: 8}}>
          {[200, 145, 25, 270, 60].map(h => (
            <div key={h}
                 className={"swatch" + (tweaks.accentHue === h ? " active" : "")}
                 style={{ background: `oklch(0.58 0.10 ${h})` }}
                 onClick={() => setTweak("accentHue", h)} />
          ))}
        </div>
      </div>

      <div className="tweak-row">
        <label>Character style</label>
        <div className="tweak-seg">
          <button className={tweaks.characterStyle === "soft" ? "active" : ""} onClick={() => setTweak("characterStyle", "soft")}>Soft</button>
          <button className={tweaks.characterStyle === "line" ? "active" : ""} onClick={() => setTweak("characterStyle", "line")}>Line</button>
          <button className={tweaks.characterStyle === "pixel" ? "active" : ""} onClick={() => setTweak("characterStyle", "pixel")}>Pixel</button>
        </div>
      </div>

      <div className="tweak-row">
        <label>Character size · {tweaks.characterScale.toFixed(2)}×</label>
        <input
          className="tweak-slider"
          type="range" min="0.7" max="1.4" step="0.05"
          value={tweaks.characterScale}
          onChange={(e) => setTweak("characterScale", Number(e.target.value))}
        />
      </div>
    </div>
  );
}

// ===== App root =====
function App() {
  const [tweaks, setTweaks] = useState(TWEAK_DEFAULTS);
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const [active, setActive] = useState("top");
  const [mode, setMode] = useState("entry"); // "entry" | "site" | "game"

  const setTweak = (k, v) => {
    setTweaks(prev => {
      const next = { ...prev, [k]: v };
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
      return next;
    });
  };

  // Edit-mode protocol
  useEffect(() => {
    const handler = (e) => {
      if (!e.data || !e.data.type) return;
      if (e.data.type === '__activate_edit_mode') setTweaksOpen(true);
      if (e.data.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  useEffect(() => {
    if (!tweaksOpen) {
      window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
    }
  }, [tweaksOpen]);

  // Apply theme + accent
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tweaks.theme);
    const h = tweaks.accentHue;
    const isDark = tweaks.theme === "dark";
    document.documentElement.style.setProperty("--accent", `oklch(${isDark ? 0.72 : 0.58} 0.10 ${h})`);
    document.documentElement.style.setProperty("--accent-soft", `oklch(${isDark ? 0.28 : 0.92} ${isDark ? 0.05 : 0.04} ${h})`);
    document.documentElement.style.setProperty("--accent-ink", `oklch(${isDark ? 0.85 : 0.30} 0.08 ${h})`);
  }, [tweaks.theme, tweaks.accentHue]);

  // Section observer for active nav (only when in site mode)
  useEffect(() => {
    if (mode !== "site") return;
    const ids = ["about", "academic", "work", "research", "projects", "publications", "community", "resume", "contact"];
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, [mode]);

  const scrollTo = useCallback((id) => {
    const el = id === "top" ? document.documentElement : document.getElementById(id);
    if (!el) return;
    if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
    else el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // ----- ENTRY MODE -----
  if (mode === "entry") {
    return (
      <window.EntryScreen
        lang={tweaks.lang}
        setLang={(l) => setTweak("lang", l)}
        onSelect={setMode}
      />
    );
  }

  // ----- GAME MODE -----
  if (mode === "game") {
    return (
      <window.GameMode
        lang={tweaks.lang}
        theme={tweaks.theme}
        setLang={(l) => setTweak("lang", l)}
        setTheme={(t) => setTweak("theme", t)}
        onExit={() => setMode("entry")}
      />
    );
  }

  // ----- SITE MODE (default portfolio) -----
  return (
    <>
      <TopBar lang={tweaks.lang} setLang={(l) => setTweak("lang", l)} activeSection={active} scrollTo={scrollTo} onBackToMenu={() => setMode("entry")} />
      <Hero lang={tweaks.lang} scrollTo={scrollTo} characterScale={tweaks.characterScale} characterStyle={tweaks.characterStyle}
            heroAsPhoto={tweaks.heroAsPhoto} toggleHeroPhoto={() => setTweak("heroAsPhoto", !tweaks.heroAsPhoto)} />
      <About lang={tweaks.lang} />
      <Roadmap lang={tweaks.lang} characterScale={tweaks.characterScale} characterStyle={tweaks.characterStyle} kind="academic" num="02" sectionId="academic" />
      <Roadmap lang={tweaks.lang} characterScale={tweaks.characterScale} characterStyle={tweaks.characterStyle} kind="work" num="03" sectionId="work" />
      <Research lang={tweaks.lang} />
      <Projects lang={tweaks.lang} />
      <Publications lang={tweaks.lang} />
      <Community lang={tweaks.lang} />
      <ResumeSection lang={tweaks.lang} />
      <Contact lang={tweaks.lang} />
      <Footer lang={tweaks.lang} />

      {!tweaksOpen && (
        <button className="fab-tweaks" onClick={() => setTweaksOpen(true)} aria-label="Open tweaks">⚙</button>
      )}
      <TweaksPanel tweaks={tweaks} setTweak={setTweak} open={tweaksOpen} setOpen={setTweaksOpen} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
