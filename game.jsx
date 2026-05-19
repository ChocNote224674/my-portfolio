// Side-scroll game world — character walks along the timeline of milestones.
// Keys: ← → to move, Space/Enter/E to interact, T or ~ to open terminal,
//       Esc to close overlays, M to go back to entry.
const { useState: useStateG, useEffect: useEffectG, useRef: useRefG, useCallback: useCallbackG } = React;

const PLAYER_SPEED = 4.4;       // px per frame
const PLAYER_WIDTH = 90;
const PLAYER_HEIGHT = 130;
const INTERACT_RANGE = 110;

function GameMode({ lang, theme, setLang, setTheme, onExit }) {
  const [px, setPx] = useStateG(220);     // player world-x
  const [vx, setVx] = useStateG(0);       // velocity x
  const [facing, setFacing] = useStateG(1);  // 1 right, -1 left
  const [walkTime, setWalkTime] = useStateG(0);
  const [nearStation, setNearStation] = useStateG(null);
  const [activeStation, setActiveStation] = useStateG(null);  // open dialog
  const [termOpen, setTermOpen] = useStateG(false);
  const [visited, setVisited] = useStateG(() => new Set());

  const viewRef = useRefG(null);
  const keys = useRefG({});
  const lastTs = useRefG(0);
  const pxRef = useRefG(px);
  const vxRef = useRefG(vx);
  const facingRef = useRefG(facing);
  pxRef.current = px;
  vxRef.current = vx;
  facingRef.current = facing;

  const stations = window.GAME.stations;
  const milestones = window.CONTENT[lang].journey.milestones;

  // === Keyboard handling ===
  useEffectG(() => {
    const down = (e) => {
      if (termOpen) return;            // terminal eats keys
      if (activeStation !== null) {
        if (e.key === "Escape") { e.preventDefault(); setActiveStation(null); }
        return;
      }
      switch (e.key) {
        case "ArrowLeft":
        case "a":
        case "q":
          keys.current.left = true; e.preventDefault(); break;
        case "ArrowRight":
        case "d":
          keys.current.right = true; e.preventDefault(); break;
        case "e":
        case "E":
        case "Enter":
        case " ":
          if (nearStation !== null) {
            setActiveStation(nearStation);
            setVisited(prev => new Set(prev).add(nearStation));
            e.preventDefault();
          }
          break;
        case "t":
        case "T":
        case "`":
        case "~":
          setTermOpen(true); e.preventDefault(); break;
        case "m":
        case "M":
        case "Escape":
          if (onExit) { onExit(); e.preventDefault(); }
          break;
      }
    };
    const up = (e) => {
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "q") keys.current.left = false;
      if (e.key === "ArrowRight" || e.key === "d") keys.current.right = false;
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, [nearStation, activeStation, termOpen, onExit]);

  // === Animation loop ===
  useEffectG(() => {
    let raf;
    const step = (ts) => {
      const dt = lastTs.current ? Math.min(ts - lastTs.current, 50) : 16;
      lastTs.current = ts;

      if (!termOpen && activeStation === null) {
        let nv = 0;
        if (keys.current.left) nv -= PLAYER_SPEED;
        if (keys.current.right) nv += PLAYER_SPEED;
        vxRef.current = nv;

        if (nv !== 0) {
          let np = pxRef.current + nv * (dt / 16);
          np = Math.max(80, Math.min(window.GAME.worldWidth - 80, np));
          pxRef.current = np;
          facingRef.current = nv > 0 ? 1 : -1;
          setPx(np);
          setFacing(facingRef.current);
          setWalkTime(t => (t + dt) % 1000);
        } else {
          // idle
        }

        // station proximity
        let near = null;
        for (const st of stations) {
          if (Math.abs(st.x - pxRef.current) < INTERACT_RANGE) {
            if (near === null || Math.abs(st.x - pxRef.current) < Math.abs(stations[near].x - pxRef.current)) {
              near = st.idx;
            }
          }
        }
        setNearStation(near);
      }

      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [termOpen, activeStation, stations]);

  const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
  const cameraX = Math.max(0, Math.min(window.GAME.worldWidth - viewportWidth, px - viewportWidth * 0.4));

  return (
    <div className="game-root" ref={viewRef}>
      <BackdropLayers cameraX={cameraX} />
      <SymbolField cameraX={cameraX} />
      <GroundGrid cameraX={cameraX} />

      <div className="game-world" style={{ transform: `translateX(${-cameraX}px)` }}>
        {stations.map((st) => (
          <Station key={st.idx} st={st} milestone={milestones[st.idx]}
                   visited={visited.has(st.idx)} highlighted={nearStation === st.idx} lang={lang} />
        ))}

        <Player x={px} facing={facing} walkTime={walkTime} moving={vx !== 0} />
      </div>

      <CinematicFX />
      <GameHUD lang={lang} setLang={setLang} theme={theme} setTheme={setTheme}
               onExit={onExit} onTerminal={() => setTermOpen(true)}
               playerX={px} stations={stations} visited={visited} />

      {nearStation !== null && activeStation === null && !termOpen && (
        <InteractPrompt lang={lang} />
      )}

      {activeStation !== null && (
        <StationDialog milestone={milestones[activeStation]} st={stations[activeStation]}
                       lang={lang} onClose={() => setActiveStation(null)} />
      )}

      {termOpen && (
        <Terminal lang={lang} setLang={setLang} theme={theme} setTheme={setTheme}
                  onClose={() => setTermOpen(false)} />
      )}
    </div>
  );
}

// ============== BACKDROP LAYERS ==============
function BackdropLayers({ cameraX }) {
  // Far parallax: distant skyline silhouettes that move slowly
  const farOffset = -cameraX * 0.08;
  const midOffset = -cameraX * 0.20;
  return (
    <>
      <div className="bg-sky" />
      <div className="bg-far" style={{ transform: `translateX(${farOffset}px)` }}>
        {/* Distant horizon: blurry mountains/towers built from divs */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="far-spire"
               style={{ left: `${i * 220 - 100}px`, height: `${80 + ((i * 53) % 80)}px`, opacity: 0.35 }} />
        ))}
      </div>
      <div className="bg-mid" style={{ transform: `translateX(${midOffset}px)` }}>
        {/* mid-layer abstract structures */}
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="mid-block"
               style={{ left: `${i * 280 + 60}px`, height: `${100 + ((i * 71) % 110)}px`, width: `${40 + ((i * 31) % 60)}px` }} />
        ))}
      </div>
    </>
  );
}

// ============== AMBIENT MATH SYMBOL FIELD ==============
function SymbolField({ cameraX }) {
  const symbols = window.GAME.ambientSymbols;
  const items = [];
  // Generate fixed pseudo-random distribution across world width
  const count = 90;
  for (let i = 0; i < count; i++) {
    const x = (i * 547) % window.GAME.worldWidth;
    const y = 60 + ((i * 113) % 320);
    const speed = 0.30 + ((i % 3) * 0.08);
    const drawX = x - cameraX * speed;
    if (drawX < -100 || drawX > window.innerWidth + 100) continue;
    const s = symbols[i % symbols.length];
    const size = 14 + (i % 5) * 4;
    const opacity = 0.10 + (i % 4) * 0.04;
    items.push(
      <span key={i} className="sym"
            style={{ left: `${drawX}px`, top: `${y}px`, fontSize: `${size}px`, opacity }}>
        {s}
      </span>
    );
  }
  return <div className="sym-field">{items}</div>;
}

// ============== GROUND ==============
function GroundGrid({ cameraX }) {
  // a perspective floor — single horizontal line + faint grid
  const offset = -((cameraX * 0.6) % 80);
  return (
    <>
      <div className="ground-line" />
      <div className="ground-grid" style={{ backgroundPositionX: `${offset}px` }} />
    </>
  );
}

// ============== PLAYER ==============
function Player({ x, facing, walkTime, moving }) {
  const screenX = x;  // we're inside the world transform
  const phase = Math.floor(walkTime / 180) % 2; // 0 or 1 — for walk cycle
  const bob = moving ? (phase === 0 ? -2 : 2) : 0;

  return (
    <div className="player" style={{ left: `${screenX - PLAYER_WIDTH/2}px`, bottom: `${720 - window.GAME.groundY}px` }}>
      <div className="player-shadow" />
      <div className="player-body"
           style={{ transform: `scaleX(${facing}) translateY(${bob}px)` }}>
        <window.Character pose="wave" size={PLAYER_HEIGHT} style="pixel" />
      </div>
    </div>
  );
}

// ============== STATIONS ==============
function Station({ st, milestone, visited, highlighted, lang }) {
  return (
    <div className="station" style={{ left: `${st.x - 60}px`, bottom: `${720 - window.GAME.groundY}px` }}>
      <div className={"station-glow" + (highlighted ? " on" : "")} style={{ background: `radial-gradient(circle, ${st.color}55 0%, transparent 70%)` }} />
      <div className="station-pylon">
        <div className="pylon-base" />
        <div className="pylon-stalk" />
        <div className={"pylon-orb" + (visited ? " visited" : "")} style={{ borderColor: st.color, boxShadow: `0 0 30px ${st.color}99` }}>
          <span className="pylon-icon" style={{ color: st.color }}>{st.icon}</span>
        </div>
      </div>
      <div className="station-label">
        <div className="sl-year">{milestone.year}</div>
        <div className="sl-sub">{st.subtitle}</div>
      </div>
      {highlighted && <div className="station-pulse" />}
    </div>
  );
}

// ============== INTERACT PROMPT ==============
function InteractPrompt({ lang }) {
  return (
    <div className="interact-prompt">
      <kbd>E</kbd> <span>{lang === "fr" ? "interagir" : "interact"}</span>
    </div>
  );
}

// ============== STATION DIALOG ==============
function StationDialog({ milestone, st, lang, onClose }) {
  return (
    <div className="dialog-backdrop" onClick={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()} style={{ borderColor: st.color }}>
        <div className="dialog-corner top-left" style={{ borderColor: st.color }} />
        <div className="dialog-corner top-right" style={{ borderColor: st.color }} />
        <div className="dialog-corner bottom-left" style={{ borderColor: st.color }} />
        <div className="dialog-corner bottom-right" style={{ borderColor: st.color }} />

        <div className="dialog-head">
          <div className="dialog-icon" style={{ color: st.color, borderColor: st.color }}>{st.icon}</div>
          <div>
            <div className="dialog-meta">
              <span className="dialog-year" style={{ color: st.color }}>{milestone.year}</span>
              <span>{st.subtitle}</span>
            </div>
            <h2 className="dialog-title">{milestone.title}</h2>
            <div className="dialog-org">{milestone.org}</div>
          </div>
        </div>
        <p className="dialog-body">{milestone.body}</p>
        <div className="dialog-tags">
          {milestone.tags.map((tg, i) => <span key={i} className="dialog-tag">{tg}</span>)}
        </div>
        <div className="dialog-foot">
          <kbd>Esc</kbd> {lang === "fr" ? "fermer" : "close"}
        </div>
      </div>
    </div>
  );
}

// ============== HUD ==============
function GameHUD({ lang, setLang, theme, setTheme, onExit, onTerminal, playerX, stations, visited }) {
  const total = stations.length;
  const done = visited.size;
  const progressPercent = (playerX / window.GAME.worldWidth) * 100;
  return (
    <div className="game-hud">
      <div className="hud-top">
        <div className="hud-pill" onClick={onExit} title="Back to menu">
          <span className="hud-glyph">‹</span> {lang === "fr" ? "menu" : "menu"}
        </div>
        <div className="hud-center">
          <span className="hud-tape">// YOUSSEF.ABDELHEDI — JOURNEY.v2025 — {done}/{total} stations</span>
        </div>
        <div className="hud-actions">
          <div className="hud-pill" onClick={() => setLang(lang === "fr" ? "en" : "fr")}>{lang.toUpperCase()}</div>
          <div className="hud-pill" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? "DARK" : "LIGHT"}</div>
          <div className="hud-pill primary" onClick={onTerminal}>
            <span className="hud-glyph">_</span> {lang === "fr" ? "terminal (T)" : "terminal (T)"}
          </div>
        </div>
      </div>

      <div className="hud-progress">
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
          {stations.map((st) => (
            <div key={st.idx} className={"progress-tick" + (visited.has(st.idx) ? " visited" : "")}
                 style={{ left: `${(st.x / window.GAME.worldWidth) * 100}%`, background: st.color }} />
          ))}
        </div>
      </div>

      <div className="hud-controls">
        <kbd>←</kbd><kbd>→</kbd> <span>{lang === "fr" ? "marcher" : "walk"}</span>
        <span className="sep">·</span>
        <kbd>E</kbd> <span>{lang === "fr" ? "interagir" : "interact"}</span>
        <span className="sep">·</span>
        <kbd>T</kbd> <span>terminal</span>
        <span className="sep">·</span>
        <kbd>Esc</kbd> <span>{lang === "fr" ? "menu" : "menu"}</span>
      </div>
    </div>
  );
}

// ============== CINEMATIC FX ==============
function CinematicFX() {
  return (
    <>
      <div className="fx-vignette" />
      <div className="fx-scanlines" />
      <div className="fx-noise" />
    </>
  );
}

window.GameMode = GameMode;
