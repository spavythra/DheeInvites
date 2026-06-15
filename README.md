# DheeInvites

A zero-dependency, config-driven event invite template — edit one file, ship instantly.

**Live demo → [meet-two-year-dhrithi.vercel.app](https://meet-two-year-dhrithi.vercel.app/)**

Built for Dhrithi's 2nd birthday (July 2026, Tampere, Finland). Designed so any event can be set up by editing a single config file, with no build tools and no framework.

---

## Features

- **Config-driven** — all event-specific data lives in `event.config.js`; the HTML never changes between events
- **Finnish ↔ English language toggle** — fixed pill button switches all bilingual labels via `html[lang]` + CSS
- **Multi-page card layout** — Invite, "Meet the guest of honour", and Family pages
- **CSS design system** — full custom-property token set (`--forest`, `--sky`, `--yell`, etc.) for one-file theming
- **CSS animations** — staggered card entrance, pulsing age ring, confetti burst on load
- **Inline SVG artwork** — daisy meadow, forest scene, Nordic folk border; zero image requests
- **Photo / video upload** — `FileReader` + `URL.createObjectURL`; syncs across all card pages
- **IntersectionObserver video** — auto-plays on scroll-into-view, pauses on exit
- **Visual regression tests** — Playwright suite covering config injection, language toggle, and snapshot diffs
- **Zero runtime dependencies** — `index.html` + `event.config.js`; no npm, no bundler, no framework

---

## Quick start

```bash
git clone https://github.com/spavythra/DheeInvites.git
cd DheeInvites
# Open index.html in any browser — no server needed
```

To adapt for your own event, edit **`event.config.js`** only:

```js
const EVENT_CONFIG = {
  child:  { name: 'Dhrithi', age: 2 },
  event:  {
    date:    'July 4, 2026',
    time:    '17:00 – 19:00',
    venue:   'Jussilankulma 1 B7,<br>33580 Tampere',
    mapsUrl: 'https://maps.google.com/?q=...',
  },
  rsvp:   { deadline: 'June 28, 2026' },
};
```

Reload the page. Done.

---

## Project structure

```
DheeInvites/
├── index.html          # Markup, CSS design system, SVG art, animations, JS
├── event.config.js     # All event-specific data — the only file to edit per event
├── playwright.config.js
├── tests/
│   └── visual.spec.js  # Config injection + language toggle + visual snapshot tests
├── media/              # Local photos / video used in the invite
└── README.md
```

---

## Running tests

```bash
npm install
npx playwright install chromium
npm test                  # run all tests
npm run test:update       # regenerate baseline snapshots
```

Tests cover:
- Config values injected into the DOM (`#cfg-name`, `#cfg-date`, `#cfg-venue`, …)
- Language toggle behaviour (`html[lang]` switching, span visibility)
- Visual snapshots of the invite card, event details grid, and full mobile page

---

## Tech highlights

| Area | Technique |
|---|---|
| Theming | CSS custom properties — swap a whole palette by editing `:root {}` |
| Animations | `@keyframes` with `cubic-bezier` easing and per-element stagger delays |
| SVG | Inline data-URI SVG for decorative art — no external asset requests |
| Interactivity | `IntersectionObserver`, `FileReader`, `URL.createObjectURL` |
| i18n | `html[lang]` toggled by JS; bilingual spans hidden with a single CSS rule |
| Config | External JS object injected into the DOM at runtime via element IDs |
| Testing | Playwright visual regression — snapshot diffs with `maxDiffPixelRatio: 0.02` |

---

## Design decisions

**No framework, no bundler.** The invite arrives as a WhatsApp or email link opened on a phone. A build step adds friction with no benefit.

**Inline SVG over image files.** Keeps the project self-contained and removes network latency for decorative art.

**CSS custom properties for all tokens.** A full palette swap is a 10-line edit in `:root {}` — no grep-and-replace across the file.

**`event.config.js` separation.** One file changes per event; the HTML and styles are stable across invitations. This is the architectural seam that makes the project reusable.

**Playwright for visual regression.** Static files have no unit logic, but they do have pixels. Screenshot diffs catch CSS regressions that text assertions miss.

---

## Event details

| | |
|---|---|
| **Who** | Dhrithi turns 2 🎂 |
| **Date** | July 4, 2026 |
| **Time** | 17:00 – 19:00 |
| **Venue** | Jussilankulma 1 B7, 33580 Tampere |

---

## Deployment

Hosted on **Vercel** — auto-deploys on push to `main`.

```bash
# Local HTTP server (for video playback accuracy)
npx serve .
```

Upload `index.html`, `event.config.js`, and the `media/` folder together on any static host.

---

*Invitation & design © Pavithra Subramaniyam · 2026*
