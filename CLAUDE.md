# link-station — notes for Claude Code

Personal link-in-bio page with a canvas robot arm. Live at https://abdullaheker1.github.io/link-station/ (GitHub Pages, `main` branch root). Owner writes in Turkish; code, comments and UI copy are English.

## Constraints
- **Zero build.** No npm, no bundler, no framework in the repo. `index.html` + `links.js` + `icons.js` + `assets/`. Classic `<script src>` (not ES modules) so `file://` keeps working.
- **Links live only in `links.js`.** Never hard-code a link in `index.html`. Empty `url` = OFFLINE node.
- **Keep the comments.** The owner keeps the section-banner comments for onboarding; match their density and style when adding code.
- HUD version string is in `index.html` (`LINK_STATION_vX.Y`); bump it and the README "Geçmiş" list on feature releases.

## Verify before committing
Render the page in a real browser at 1440×900, 768×1024, 390×844 and 320×568 (Playwright with `channel: 'chrome'` works on this machine; bundled Chromium downloads don't). Check: no `pageerror`, last `.link` reachable (or page scrollable) on 320×568, arm docks on a hovered node (`?diag` → `ERR` ≈ 0), loop sleeps when idle (`#sysState` → `STANDBY`).

## Conventions
- Commits: imperative subject, body says *why*. One concern per commit.
- Palette tokens are in `:root`; stamp kinds are `'mark' | 'limit' | 'route'`.
- Don't add sound, storage or network calls without asking — the page is intentionally self-contained.
