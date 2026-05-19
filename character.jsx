// Original geometric character — REDESIGN v2
// Cleaner modern style: bigger rounded head, no helmet/cap hair, integrated beard,
// soft palette, thinner strokes. Inspired by clean editorial illustration.
// Two style variants: "soft" (filled) | "line" (outline only)
// Each pose is self-contained in a 320×360 viewBox.

const Character = ({ pose = "wave", size = 360, style = "soft" }) => {
  // ----- PIXEL ART MODE -----
  if (style === "pixel") {
    const isDark = typeof document !== "undefined" && document.documentElement.getAttribute("data-theme") === "dark";
    const palette = isDark ? window.PIX_PALETTE_DARK : window.PIX_PALETTE_LIGHT;
    const art = window.PIXEL_POSES[pose] || window.PIXEL_POSES.wave;
    return (
      <svg width={size} height={size * (360 / 320)} viewBox="0 0 320 360"
           xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
        {window.renderPixelArt(art, palette, 10)}
      </svg>
    );
  }

  const LINE = style === "line";

  // Palette
  const SKIN      = LINE ? "transparent" : "oklch(0.72 0.06 55)";
  const SKIN_DK   = LINE ? "transparent" : "oklch(0.58 0.07 50)";
  const HAIR      = LINE ? "transparent" : "#221c16";
  const HAIR_LN   = "#221c16";
  const SHIRT     = LINE ? "transparent" : "var(--accent-ink)";
  const SHIRT_LT  = LINE ? "transparent" : "var(--accent)";
  const PANTS     = LINE ? "transparent" : "#2a2722";
  const PAPER_BG  = "var(--paper)";
  const STROKE    = "var(--ink)";
  const STROKE_W  = LINE ? 2 : 0;        // outlines only in line mode
  const FILL_W    = LINE ? 0 : 0;        // no soft borders in soft mode
  const SHADOW    = "color-mix(in oklab, var(--ink) 10%, transparent)";
  const STUD      = "oklch(0.86 0.04 80)";

  // Head — bigger, no cap. Hair integrated, beard as chin strap.
  // (cx,cy) is head centre. Default at (160, 112). Head radius rx=36 ry=40.
  const Head = ({ x = 160, y = 112, tilt = 0, expr = "neutral", hideHair = false, eyesHidden = false }) => (
    <g transform={`translate(${x} ${y}) rotate(${tilt})`}>
      {/* neck */}
      <path d="M -10 30 L -10 52 Q 0 56 10 52 L 10 30 Z" fill={SKIN_DK} stroke={STROKE} strokeWidth={STROKE_W}/>

      {/* ears */}
      <ellipse cx="-37" cy="2" rx="5" ry="9" fill={SKIN} stroke={STROKE} strokeWidth={STROKE_W}/>
      <ellipse cx="37" cy="2" rx="5" ry="9" fill={SKIN} stroke={STROKE} strokeWidth={STROKE_W}/>
      {/* stud piercing — character's left ear = viewer's right (positive x) */}
      <circle cx="39" cy="8" r="2" fill={STUD} stroke={STROKE} strokeWidth="0.6"/>

      {/* face */}
      <ellipse cx="0" cy="0" rx="36" ry="40" fill={SKIN} stroke={STROKE} strokeWidth={STROKE_W}/>

      {/* hair — short, integrated into head, with curved hairline (no helmet) */}
      {!hideHair && (
        <path d="M -34 -10
                 Q -36 -38 -12 -40
                 Q 0 -42 12 -40
                 Q 36 -38 34 -10
                 Q 32 -16 24 -16
                 Q 14 -16 8 -14
                 Q 0 -12 -8 -14
                 Q -14 -16 -24 -16
                 Q -32 -16 -34 -10 Z" fill={HAIR} stroke={LINE ? HAIR_LN : "none"} strokeWidth="1.5"/>
      )}

      {/* thick brows */}
      <path d="M -22 -3 Q -14 -8 -4 -4" stroke={HAIR_LN} strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <path d="M 4 -4 Q 14 -8 22 -3" stroke={HAIR_LN} strokeWidth="3.5" fill="none" strokeLinecap="round"/>

      {/* eyes */}
      {!eyesHidden && (
        <>
          {expr === "closed" ? (
            <>
              <path d="M -16 5 Q -10 8 -4 5" stroke={STROKE} strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M 4 5 Q 10 8 16 5" stroke={STROKE} strokeWidth="2" fill="none" strokeLinecap="round"/>
            </>
          ) : (
            <>
              <circle cx="-10" cy="5" r="2.6" fill={STROKE}/>
              <circle cx="10" cy="5" r="2.6" fill={STROKE}/>
              {/* eye highlight */}
              <circle cx="-9" cy="4" r="0.7" fill="#fff" opacity="0.9"/>
              <circle cx="11" cy="4" r="0.7" fill="#fff" opacity="0.9"/>
            </>
          )}
        </>
      )}

      {/* nose */}
      <path d="M 0 8 Q -2 14 0 18 Q 2 18 3 17" stroke={SKIN_DK} strokeWidth="1.6" fill="none" strokeLinecap="round"/>

      {/* moustache — joined to beard */}
      <path d="M -12 22 Q -6 19 0 21 Q 6 19 12 22 Q 8 24 4 23 Q 0 22 -4 23 Q -8 24 -12 22 Z"
            fill={HAIR} stroke={LINE ? HAIR_LN : "none"} strokeWidth="1"/>

      {/* beard — clean chin strap shape that follows the jaw */}
      <path d="M -36 -2
               Q -38 18 -30 28
               Q -18 36 0 36
               Q 18 36 30 28
               Q 38 18 36 -2
               Q 32 8 24 14
               Q 14 18 8 18
               Q 0 18 -8 18
               Q -14 18 -24 14
               Q -32 8 -36 -2 Z"
            fill={HAIR} stroke={LINE ? HAIR_LN : "none"} strokeWidth="1.5"/>

      {/* mouth — peeking through beard */}
      {expr === "smile" && <path d="M -5 27 Q 0 30 5 27" stroke={SKIN_DK} strokeWidth="1.8" fill="none" strokeLinecap="round"/>}
      {expr === "neutral" && <path d="M -4 27 Q 0 28 4 27" stroke={SKIN_DK} strokeWidth="1.8" fill="none" strokeLinecap="round"/>}
      {expr === "open" && <ellipse cx="0" cy="28" rx="3" ry="2" fill={STROKE}/>}
      {expr === "focused" && <path d="M -3 27 Q 0 28 3 27" stroke={SKIN_DK} strokeWidth="1.6" fill="none" strokeLinecap="round"/>}
    </g>
  );

  // Body builder — used in most standing poses
  const Body = () => (
    <>
      {/* legs */}
      <path d="M 142 286 L 138 326" stroke={PANTS} strokeWidth="16" strokeLinecap="round"/>
      <path d="M 178 286 L 182 326" stroke={PANTS} strokeWidth="16" strokeLinecap="round"/>
      {/* shoes */}
      <ellipse cx="135" cy="330" rx="15" ry="6" fill={STROKE}/>
      <ellipse cx="185" cy="330" rx="15" ry="6" fill={STROKE}/>
      {/* torso */}
      <path d="M 116 182 Q 116 168 140 165 L 180 165 Q 204 168 204 182 L 200 286 L 120 286 Z"
            fill={SHIRT} stroke={STROKE} strokeWidth={STROKE_W}/>
      {/* shirt opening / collar */}
      <path d="M 150 165 L 160 180 L 170 165" fill={PAPER_BG} stroke={STROKE} strokeWidth="1.5"/>
    </>
  );

  const Hand = ({ cx, cy }) => (
    <circle cx={cx} cy={cy} r="9" fill={SKIN} stroke={STROKE} strokeWidth={STROKE_W}/>
  );

  const poses = {
    wave: (
      <>
        <ellipse cx="160" cy="338" rx="86" ry="8" fill={SHADOW}/>
        <Body/>
        {/* arm down */}
        <path d="M 120 190 Q 110 232 122 274" stroke={SHIRT} strokeWidth="20" strokeLinecap="round" fill="none"/>
        <Hand cx="122" cy="274"/>
        {/* arm waving */}
        <path d="M 200 190 Q 240 168 254 122" stroke={SHIRT} strokeWidth="20" strokeLinecap="round" fill="none"/>
        <Hand cx="254" cy="118"/>
        <Head expr="smile"/>
      </>
    ),

    study: (
      <>
        <ellipse cx="160" cy="338" rx="92" ry="8" fill={SHADOW}/>
        {/* desk */}
        <rect x="46" y="262" width="234" height="6" fill={STROKE}/>
        <rect x="54" y="268" width="6" height="62" fill={STROKE}/>
        <rect x="266" y="268" width="6" height="62" fill={STROKE}/>
        {/* book stack */}
        <rect x="66" y="246" width="60" height="6" fill="oklch(0.55 0.14 25)" stroke={STROKE} strokeWidth={STROKE_W}/>
        <rect x="70" y="240" width="52" height="6" fill="oklch(0.50 0.12 145)" stroke={STROKE} strokeWidth={STROKE_W}/>
        <rect x="74" y="234" width="44" height="6" fill="oklch(0.45 0.16 270)" stroke={STROKE} strokeWidth={STROKE_W}/>
        {/* open book */}
        <path d="M 178 256 L 252 250 L 252 262 L 178 268 Z" fill={PAPER_BG} stroke={STROKE} strokeWidth="1.6"/>
        <line x1="215" y1="253" x2="215" y2="265" stroke={STROKE} strokeWidth="1"/>
        {[185,189,193,197].map((y,i) => (
          <React.Fragment key={i}>
            <line x1="185" y1={255+i} x2="208" y2={253+i} stroke={STROKE} strokeWidth="0.6"/>
            <line x1="222" y1={252+i} x2="245" y2={250+i} stroke={STROKE} strokeWidth="0.6"/>
          </React.Fragment>
        ))}
        {/* body seated */}
        <path d="M 126 200 Q 126 184 150 181 L 180 181 Q 204 184 204 200 L 204 260 L 126 260 Z" fill={SHIRT} stroke={STROKE} strokeWidth={STROKE_W}/>
        <path d="M 150 181 L 160 196 L 170 181" fill={PAPER_BG} stroke={STROKE} strokeWidth="1.5"/>
        {/* arms */}
        <path d="M 196 208 Q 212 230 222 252" stroke={SHIRT} strokeWidth="18" strokeLinecap="round" fill="none"/>
        <Hand cx="222" cy="254"/>
        <path d="M 134 208 Q 124 178 148 148" stroke={SHIRT} strokeWidth="18" strokeLinecap="round" fill="none"/>
        <Hand cx="148" cy="146"/>
        <Head tilt={-6} expr="focused"/>
      </>
    ),

    code: (
      <>
        <ellipse cx="160" cy="338" rx="94" ry="8" fill={SHADOW}/>
        {/* laptop base */}
        <path d="M 88 272 L 232 272 L 244 292 L 76 292 Z" fill={STROKE}/>
        <rect x="98" y="208" width="124" height="66" rx="5" fill="#1a1814" stroke={STROKE} strokeWidth={STROKE_W}/>
        <rect x="104" y="214" width="112" height="54" rx="3" fill="#0f1a20"/>
        {/* code lines */}
        <line x1="112" y1="224" x2="170" y2="224" stroke={SHIRT_LT} strokeWidth="2" strokeLinecap="round"/>
        <line x1="112" y1="232" x2="204" y2="232" stroke="oklch(0.78 0.04 60)" strokeWidth="2" strokeLinecap="round"/>
        <line x1="120" y1="240" x2="158" y2="240" stroke="oklch(0.75 0.18 25)" strokeWidth="2" strokeLinecap="round"/>
        <line x1="120" y1="248" x2="190" y2="248" stroke="oklch(0.85 0.04 60)" strokeWidth="2" strokeLinecap="round"/>
        <line x1="112" y1="256" x2="180" y2="256" stroke={SHIRT_LT} strokeWidth="2" strokeLinecap="round"/>
        <line x1="112" y1="264" x2="145" y2="264" stroke="oklch(0.75 0.16 145)" strokeWidth="2" strokeLinecap="round"/>
        {/* seated body */}
        <path d="M 124 200 Q 124 184 148 181 L 180 181 Q 204 184 204 200 L 204 250 L 124 250 Z" fill={SHIRT} stroke={STROKE} strokeWidth={STROKE_W}/>
        <path d="M 150 181 L 160 196 L 170 181" fill={PAPER_BG} stroke={STROKE} strokeWidth="1.5"/>
        {/* arms typing */}
        <path d="M 134 210 Q 132 240 142 260" stroke={SHIRT} strokeWidth="18" strokeLinecap="round" fill="none"/>
        <path d="M 194 210 Q 196 240 186 260" stroke={SHIRT} strokeWidth="18" strokeLinecap="round" fill="none"/>
        <Hand cx="142" cy="262"/>
        <Hand cx="186" cy="262"/>
        <Head expr="focused"/>
        <text x="248" y="172" fontFamily="JetBrains Mono" fontSize="14" fill="var(--accent-ink)">{`{ }`}</text>
      </>
    ),

    voice: (
      <>
        <ellipse cx="160" cy="338" rx="86" ry="8" fill={SHADOW}/>
        <Body/>
        {/* headphones — sit above ears */}
        <path d="M 120 95 Q 160 60 200 95" stroke="#1a1814" strokeWidth="5" fill="none"/>
        <ellipse cx="120" cy="110" rx="11" ry="14" fill="#1a1814" stroke={STROKE} strokeWidth={STROKE_W}/>
        <ellipse cx="200" cy="110" rx="11" ry="14" fill="#1a1814" stroke={STROKE} strokeWidth={STROKE_W}/>
        <ellipse cx="120" cy="110" rx="5" ry="7" fill={SHIRT_LT}/>
        <ellipse cx="200" cy="110" rx="5" ry="7" fill={SHIRT_LT}/>
        {/* mic boom */}
        <path d="M 200 116 Q 184 130 170 132" stroke="#1a1814" strokeWidth="3" fill="none"/>
        <circle cx="168" cy="132" r="4" fill="#1a1814"/>
        {/* tablet arm */}
        <path d="M 202 190 Q 220 220 224 250" stroke={SHIRT} strokeWidth="20" strokeLinecap="round" fill="none"/>
        <rect x="220" y="234" width="42" height="52" rx="4" fill="#1a1814" stroke={STROKE} strokeWidth={STROKE_W}/>
        <rect x="224" y="238" width="34" height="44" rx="2" fill="#0f1a20"/>
        {/* waveform */}
        <path d="M 228 258 L 230 250 L 232 264 L 234 246 L 236 266 L 238 252 L 240 260 L 242 248 L 244 262 L 246 254 L 248 258 L 250 252 L 252 260 L 254 254"
              stroke={SHIRT_LT} strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        {/* other arm */}
        <path d="M 120 190 Q 98 202 106 244" stroke={SHIRT} strokeWidth="20" strokeLinecap="round" fill="none"/>
        <Hand cx="108" cy="246"/>
        <Head expr="smile"/>
        {/* sound waves */}
        <path d="M 78 140 Q 68 152 78 164" stroke="var(--accent-ink)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M 66 132 Q 48 152 66 172" stroke="var(--accent-ink)" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5"/>
        <path d="M 54 124 Q 30 152 54 180" stroke="var(--accent-ink)" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.25"/>
      </>
    ),

    research: (
      <>
        <ellipse cx="160" cy="338" rx="86" ry="8" fill={SHADOW}/>
        <Body/>
        {/* magnifier arm */}
        <path d="M 202 190 Q 232 202 252 178" stroke={SHIRT} strokeWidth="20" strokeLinecap="round" fill="none"/>
        <circle cx="264" cy="160" r="24" fill="oklch(0.88 0.04 200 / 0.4)" stroke={STROKE} strokeWidth="3"/>
        <line x1="280" y1="178" x2="302" y2="204" stroke={STROKE} strokeWidth="5" strokeLinecap="round"/>
        <polyline points="252,166 258,156 264,162 270,150" fill="none" stroke="var(--accent-ink)" strokeWidth="2"/>
        {/* other arm */}
        <path d="M 118 190 Q 98 220 108 270" stroke={SHIRT} strokeWidth="20" strokeLinecap="round" fill="none"/>
        <Hand cx="110" cy="272"/>
        <Head expr="focused"/>
      </>
    ),

    lead: (
      <>
        <ellipse cx="160" cy="338" rx="86" ry="8" fill={SHADOW}/>
        {/* slightly wider stance */}
        <path d="M 138 286 L 128 326" stroke={PANTS} strokeWidth="16" strokeLinecap="round"/>
        <path d="M 182 286 L 192 326" stroke={PANTS} strokeWidth="16" strokeLinecap="round"/>
        <ellipse cx="125" cy="330" rx="15" ry="6" fill={STROKE}/>
        <ellipse cx="195" cy="330" rx="15" ry="6" fill={STROKE}/>
        <path d="M 116 182 Q 116 168 140 165 L 180 165 Q 204 168 204 182 L 200 286 L 120 286 Z" fill={SHIRT} stroke={STROKE} strokeWidth={STROKE_W}/>
        <path d="M 150 165 L 160 180 L 170 165" fill={PAPER_BG} stroke={STROKE} strokeWidth="1.5"/>
        {/* megaphone arm raised */}
        <path d="M 204 190 Q 224 150 240 110" stroke={SHIRT} strokeWidth="20" strokeLinecap="round" fill="none"/>
        <g transform="translate(252 90) rotate(22)">
          <path d="M 0 0 L 34 -14 L 34 14 Z" fill={SHIRT_LT} stroke={STROKE} strokeWidth={STROKE_W}/>
          <rect x="-12" y="-7" width="14" height="14" fill="#1a1814"/>
          <line x1="38" y1="0" x2="52" y2="0" stroke="var(--accent-ink)" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="39" y1="-9" x2="50" y2="-16" stroke="var(--accent-ink)" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="39" y1="9" x2="50" y2="16" stroke="var(--accent-ink)" strokeWidth="2.5" strokeLinecap="round"/>
        </g>
        {/* other arm */}
        <path d="M 120 190 Q 100 222 110 254" stroke={SHIRT} strokeWidth="20" strokeLinecap="round" fill="none"/>
        <Hand cx="112" cy="256"/>
        <Head expr="open"/>
      </>
    ),

    win: (
      <>
        <ellipse cx="160" cy="338" rx="86" ry="8" fill={SHADOW}/>
        <path d="M 142 286 L 138 326" stroke={PANTS} strokeWidth="16" strokeLinecap="round"/>
        <path d="M 178 286 L 182 326" stroke={PANTS} strokeWidth="16" strokeLinecap="round"/>
        <ellipse cx="135" cy="330" rx="15" ry="6" fill={STROKE}/>
        <ellipse cx="185" cy="330" rx="15" ry="6" fill={STROKE}/>
        <path d="M 116 182 Q 116 168 140 165 L 180 165 Q 204 168 204 182 L 200 286 L 120 286 Z" fill={SHIRT} stroke={STROKE} strokeWidth={STROKE_W}/>
        <path d="M 150 165 L 160 180 L 170 165" fill={PAPER_BG} stroke={STROKE} strokeWidth="1.5"/>
        {/* both arms up */}
        <path d="M 122 184 Q 108 130 130 92" stroke={SHIRT} strokeWidth="20" strokeLinecap="round" fill="none"/>
        <path d="M 198 184 Q 212 130 190 92" stroke={SHIRT} strokeWidth="20" strokeLinecap="round" fill="none"/>
        {/* trophy */}
        <g transform="translate(160 70)">
          <path d="M -22 0 Q -27 -22 -5 -24 L 5 -24 Q 27 -22 22 0 Q 20 20 0 24 Q -20 20 -22 0 Z" fill="oklch(0.75 0.14 80)" stroke={STROKE} strokeWidth="2.2"/>
          <path d="M -22 -8 Q -40 -8 -40 -22 Q -40 -32 -24 -32" fill="none" stroke={STROKE} strokeWidth="2.2"/>
          <path d="M 22 -8 Q 40 -8 40 -22 Q 40 -32 24 -32" fill="none" stroke={STROKE} strokeWidth="2.2"/>
          <rect x="-10" y="24" width="20" height="6" fill={STROKE}/>
          <rect x="-16" y="30" width="32" height="6" fill={STROKE}/>
          <text x="0" y="7" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" fill={STROKE} fontWeight="700">1st</text>
        </g>
        <Head y="138" expr="smile"/>
        {/* confetti */}
        <rect x="58" y="102" width="6" height="3" fill="oklch(0.65 0.18 25)" transform="rotate(20 61 104)"/>
        <rect x="80" y="80" width="5" height="3" fill={SHIRT_LT} transform="rotate(-30 82 81)"/>
        <rect x="254" y="92" width="6" height="3" fill="oklch(0.65 0.18 145)" transform="rotate(45 257 93)"/>
        <rect x="272" y="122" width="5" height="3" fill="oklch(0.70 0.18 280)" transform="rotate(15 274 123)"/>
        <rect x="48" y="152" width="5" height="3" fill="oklch(0.65 0.18 60)" transform="rotate(-20 50 153)"/>
        <rect x="276" y="180" width="5" height="3" fill="oklch(0.65 0.18 25)" transform="rotate(35 278 181)"/>
      </>
    ),

    vr: (
      <>
        <ellipse cx="160" cy="338" rx="86" ry="8" fill={SHADOW}/>
        <Body/>
        {/* arms forward */}
        <path d="M 122 190 Q 88 200 78 220" stroke={SHIRT} strokeWidth="20" strokeLinecap="round" fill="none"/>
        <path d="M 198 190 Q 232 200 242 220" stroke={SHIRT} strokeWidth="20" strokeLinecap="round" fill="none"/>
        {/* controllers */}
        <rect x="60" y="212" width="24" height="24" rx="5" fill="#1a1814" stroke={STROKE} strokeWidth={STROKE_W}/>
        <circle cx="72" cy="218" r="3" fill={SHIRT_LT}/>
        <rect x="236" y="212" width="24" height="24" rx="5" fill="#1a1814" stroke={STROKE} strokeWidth={STROKE_W}/>
        <circle cx="248" cy="218" r="3" fill={SHIRT_LT}/>

        {/* head with VR headset — hideHair (covered by strap), eyes hidden under visor */}
        <Head expr="smile" hideHair eyesHidden/>
        {/* VR strap across top */}
        <path d="M 124 88 Q 160 76 196 90" stroke="#1a1814" strokeWidth="8" fill="none" strokeLinecap="round"/>
        {/* visor face plate */}
        <rect x="124" y="98" width="72" height="26" rx="6" fill="#f6f3ec" stroke={STROKE} strokeWidth="2"/>
        <rect x="130" y="103" width="28" height="16" rx="3" fill="#1a1814"/>
        <rect x="162" y="103" width="28" height="16" rx="3" fill="#1a1814"/>
        <circle cx="160" cy="128" r="1.6" fill={SHIRT_LT}/>

        {/* virtual objects floating */}
        <g opacity="0.6">
          <rect x="48" y="158" width="14" height="14" fill="none" stroke="var(--accent-ink)" strokeWidth="2" transform="rotate(15 55 165)"/>
          <circle cx="272" cy="170" r="9" fill="none" stroke="var(--accent-ink)" strokeWidth="2"/>
          <path d="M 286 244 L 296 234 L 306 244 L 296 254 Z" fill="none" stroke="var(--accent-ink)" strokeWidth="2"/>
        </g>
      </>
    ),
  };

  const content = poses[pose] || poses.wave;

  return (
    <svg width={size} height={size * (360 / 320)} viewBox="0 0 320 360" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
      {content}
    </svg>
  );
};

window.Character = Character;
