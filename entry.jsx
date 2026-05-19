// Cinematic entry screen — calm, two-button menu.
// Tweaks vs v1: subtler colors, two equally-weighted buttons, higher-res pixel preview.
const { useState: useStateE, useEffect: useEffectE } = React;

function EntryScreen({ onSelect, lang, setLang }) {
  const [hover, setHover] = useStateE(null);
  const [bootProgress, setBootProgress] = useStateE(0);
  const [bootDone, setBootDone] = useStateE(false);

  useEffectE(() => {
    const lines = bootLines(lang);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setBootProgress(i);
      if (i >= lines.length) {
        clearInterval(id);
        setTimeout(() => setBootDone(true), 250);
      }
    }, 95);
    return () => clearInterval(id);
  }, [lang]);

  const lines = bootLines(lang);
  const labels = lang === "fr"
    ? {
        choose: "Choisis ton interface",
        sub: "Deux fa\u00e7ons d'explorer le m\u00eame parcours.",
        portfolio: "Portfolio",
        lab: "The Lab",
        pSub: "Lecture lin\u00e9aire \u00b7 \u00e9ditorial",
        lSub: "Mode jeu \u00b7 terminal \u00b7 immersif",
        hint: "\u2190 \u2192 pour bouger \u00b7 E pour interagir \u00b7 T pour le terminal",
        select: "S\u00e9lectionner \u2192",
        eyebrow: "YOUSSEF ABDELHEDI \u00b7 IA & DATA",
      }
    : {
        choose: "Choose your interface",
        sub: "Two ways to walk the same journey.",
        portfolio: "Portfolio",
        lab: "The Lab",
        pSub: "Linear read \u00b7 editorial",
        lSub: "Game mode \u00b7 terminal \u00b7 immersive",
        hint: "\u2190 \u2192 to move \u00b7 E to interact \u00b7 T for terminal",
        select: "Select \u2192",
        eyebrow: "YOUSSEF ABDELHEDI \u00b7 AI & DATA",
      };

  return (
    <div className="entry-root">
      <div className="entry-bg-calm">
        <div className="entry-grid-calm" />
        <FloatingSymbols />
      </div>

      <div className="entry-topbar">
        <div className="entry-brand">
          <span className="brand-dot" /> Youssef Abdelhedi
        </div>
        <div className="entry-lang">
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
          <button className={lang === "fr" ? "active" : ""} onClick={() => setLang("fr")}>FR</button>
        </div>
      </div>

      <div className="entry-boot">
        {lines.slice(0, bootProgress).map((l, i) => (
          <div key={i} className="entry-boot-line info">
            <span className="boot-meta">{`[${String(i + 1).padStart(2, "0")}]`}</span> {l}
          </div>
        ))}
      </div>

      <div className={"entry-stage" + (bootDone ? " is-ready" : "")}>
        <div className="entry-eyebrow">{labels.eyebrow}</div>
        <h1 className="entry-title">{labels.choose}</h1>
        <p className="entry-subtitle">{labels.sub}</p>

        <div className="entry-portals-v2">
          <button
            className={"portal-v2" + (hover === "site" ? " hover" : "")}
            onMouseEnter={() => setHover("site")}
            onMouseLeave={() => setHover(null)}
            onClick={() => onSelect("site")}
          >
            <div className="portal-v2-icon">
              <PortfolioGlyph />
            </div>
            <div className="portal-v2-label">{labels.portfolio}</div>
            <div className="portal-v2-sub">{labels.pSub}</div>
            <div className="portal-v2-cta">{labels.select}</div>
          </button>

          <button
            className={"portal-v2" + (hover === "game" ? " hover" : "")}
            onMouseEnter={() => setHover("game")}
            onMouseLeave={() => setHover(null)}
            onClick={() => onSelect("game")}
          >
            <div className="portal-v2-icon hires-character">
              <PixelHeroHires />
            </div>
            <div className="portal-v2-label">{labels.lab}</div>
            <div className="portal-v2-sub">{labels.lSub}</div>
            <div className="portal-v2-cta">{labels.select}</div>
          </button>
        </div>

        <div className="entry-hint">{labels.hint}</div>
      </div>
    </div>
  );
}

function bootLines(lang) {
  return [
    "BIOS v3.14 \u00b7 Abdelhedi Research Systems",
    "init kernel ... OK",
    "load nlp \u00b7 vision \u00b7 voice ... OK",
    "ready.",
  ];
}

function FloatingSymbols() {
  const symbols = window.GAME.ambientSymbols;
  const items = [];
  for (let i = 0; i < 18; i++) {
    const s = symbols[i % symbols.length];
    const left = (i * 73) % 100;
    const top = (i * 41) % 100;
    const delay = (i % 7) * 0.7;
    const dur = 18 + (i % 8) * 2;
    const size = 12 + (i % 4) * 4;
    items.push(
      <span key={i} className="float-sym"
            style={{ left: `${left}%`, top: `${top}%`, animationDuration: `${dur}s`, animationDelay: `-${delay}s`, fontSize: `${size}px` }}>
        {s}
      </span>
    );
  }
  return <div className="float-sym-layer">{items}</div>;
}

function PortfolioGlyph() {
  // Simple stylized "book / document" pictogram
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ display: "block" }}>
      <rect x="22" y="18" width="56" height="68" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
      <line x1="32" y1="36" x2="68" y2="36" stroke="currentColor" strokeWidth="2"/>
      <line x1="32" y1="46" x2="60" y2="46" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      <line x1="32" y1="54" x2="64" y2="54" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      <line x1="32" y1="62" x2="56" y2="62" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      <line x1="32" y1="70" x2="62" y2="70" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      <line x1="32" y1="78" x2="48" y2="78" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      <circle cx="50" cy="14" r="2.5" fill="currentColor"/>
    </svg>
  );
}

function PixelHeroHires() {
  // Standing pose — no hand up, no props. Used on the entry-screen Lab portal preview.
  const art = window.POSE_STAND;
  const pal = window.PIX_PALETTE_LIGHT;
  return (
    <svg viewBox="0 0 320 360" width="100%" height="100%" style={{ display: "block" }} preserveAspectRatio="xMidYMid meet">
      {window.renderPixelArt(art, pal, 10)}
    </svg>
  );
}

window.EntryScreen = EntryScreen;
