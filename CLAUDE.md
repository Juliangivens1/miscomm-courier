# CLAUDE.md

Marketing site for **Miscomm Logistics**, a one-person SUV and medical courier service in Columbus, Ohio. It is served by GitHub Pages at `miscommlogistics.com` (see `CNAME`).

## Layout

- `index.html` is the whole site: inline `<style>` at the top, markup in the middle, one small inline `<script>` at the bottom. There is no build step, no package manager, and no framework.
- `assets/hero.jpg` is the self-hosted hero photo.
- `CNAME` sets the custom domain. Don't delete or rename it, or the domain stops resolving to the site.

Page sections, in order: `nav`, `.hero`, `#services`, `#certifications`, `#about`, `#schedule` (Google Calendar appointment embed), `#contact` (pickup form), `footer`.

## Conventions

- Colors and theme values are CSS custom properties on `:root` (`--accent` amber, `--blue`, and so on). Reuse them rather than hard-coding hex values.
- Fonts: Barlow Condensed for headings, Barlow for body text, loaded from Google Fonts.
- Copy is first person ("I answer direct"), because the business is one operator. Keep that voice.
- The phone number `(614) 526-8207` / `tel:+16145268207` and the email `jay@miscommconsultant.com` appear in several places (nav, hero, stats, schedule, contact, footer, and the form script). If either one changes, update every occurrence: `grep -n "526-8207\|miscommconsultant" index.html`.
- The pickup form has no backend. On submit, the script builds a `mailto:` link to the email above.
- When you add or remove a service, check the services grid, the `#delivery-type` `<select>` options, and any copy that lists services, so they stay in sync.

## Previewing

Open `index.html` directly, or serve the repo root with `python3 -m http.server 8000` and visit http://localhost:8000. Check the layout at phone width as well as desktop width.

## Workflow

Changes ship by merging a PR into `main`. GitHub Pages redeploys automatically.
