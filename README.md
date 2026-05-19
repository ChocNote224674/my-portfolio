# Youssef Abdelhedi — Personal Portfolio

A bilingual (EN/FR) interactive portfolio with two modes:

- **Portfolio** — a long editorial scrolling page (Hero, Academic & Work journeys, Research, Projects, Writing, Community, LaTeX-typeset Resume, Contact).
- **The Lab** — a side-scrolling game where a pixel-art character walks across a timeline of stations. Press `T` to open a working bash-style terminal with `cat resume.tex`, `cat experience.md`, `whoami` and more.

A flippable coin on the hero swaps between the pixel character and the profile photo.

## Run locally

This is a static site — no build step needed. You can:

**Option A · Open directly**
Just open `index.html` in any modern browser. (Some browsers restrict ES module loading from `file://` — if you get a blank page, use Option B.)

**Option B · Serve over HTTP**
```bash
# Python 3
python3 -m http.server 8000

# or Node
npx serve .
```
Then open <http://localhost:8000>.

## Deploy with GitHub Pages

1. Push the repo to GitHub.
2. In repo Settings → **Pages**: source `main` branch, `/ (root)`.
3. Site is live at `https://<your-username>.github.io/<repo-name>/`.

## Project structure

```
index.html               page entry, loads CSS + JSX scripts
styles.css               portfolio styles
game.css                 game mode + entry screen styles

app.jsx                  React root: mode router + all portfolio sections
content.jsx              EN / FR copy for every section
resume-data.jsx          CV data + LaTeX (.tex) source generator
character.jsx            character SVG with 8 poses (soft, line, pixel styles)
character-pixel.jsx      32×36 pixel-art grids per pose
character-pixel-hires.jsx 40×56 standing portrait for the menu

entry.jsx                cinematic entry screen with two-button choice
game.jsx                 side-scroller world, stations, dialogs, HUD
game-data.jsx            stations + virtual filesystem for the terminal
terminal.jsx             interactive terminal overlay

images/                  profile photo, VR demo photo, IT LAB logos
```

## Editing content

| What to edit | Where |
|---|---|
| Hero, About, Academic & Work journey, Research interests, Projects, Writing, Community, Contact, navigation labels | `content.jsx` |
| Résumé content + LaTeX source | `resume-data.jsx` |
| Roadmap stations (game mode) | `game-data.jsx` (`stations` array) |
| Terminal commands | `terminal.jsx` (`submit()` switch) |

## Tweaks panel

The gear button (bottom-right) opens a panel with:
- Language toggle (EN / FR)
- Theme (Paper / Ink)
- Accent hue slider
- Character scale
- Character style (Soft / Line / Pixel)

## Tech

- Plain HTML + React 18 (UMD) + Babel Standalone — no bundler.
- All animation done with CSS transforms.
- LaTeX résumé generated client-side from a single source of truth and downloadable as a real `.tex` file (`xelatex cv.tex`).

— Hand-built. No template.
