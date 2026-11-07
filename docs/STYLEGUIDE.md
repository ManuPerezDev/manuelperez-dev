# Style guide: "Product Developer"

Visual identity of manuelperez.dev: a calm, technical look built from a neutral canvas, white or near-black
cards, one cyan accent and monospace labels, over a faint 32px grid. This guide is written for people and
for AI agents: follow it when adding or changing UI.

## Principles

1. **Tokens only.** Every color and font comes from the tokens in `src/styles/global.css`.
   Never write a hex, `rgb()` or a Tailwind palette color (`blue-500`, `white`...) in a component.
2. **Tailwind first.** Style components with Tailwind utility classes built from the tokens.
   Write CSS only for things utilities cannot express (the background grid, Markdown in `.post-body`),
   and put it in `src/styles/global.css`.
3. **Both themes, always.** Every change must look right in light and dark. Theme switching
   is the `data-theme` attribute on `<html>`; use the `dark:` variant only for structural
   differences (e.g. which icon shows), never for colors: color tokens already switch.
4. **Content in cards, chrome in mono.** Readable text is Geist on `surface` cards; labels, dates,
   nav and section titles are JetBrains Mono. No gradients, glows or shadows; borders do the separating.
5. **Static by default.** Pages are `.astro` components with no client JavaScript. A small
   `<script>` is fine for progressive enhancement (theme toggle, nav highlight). There is no UI
   framework; do not add one without a reason.

## Color tokens

| Token (Tailwind class)                | Use                                        | Light      | Dark        |
| ------------------------------------- | ------------------------------------------ | ---------- | ----------- |
| `canvas` (`bg-canvas`)                | Page background                            | `#f7f8fa`  | `#0d0e15`   |
| `surface` (`bg-surface`)              | Cards, buttons, small controls             | `#ffffff`  | `#12131a`   |
| `ink` (`text-ink`)                    | Headings, names, emphasis                  | `#14161c`  | `#e3e1ec`   |
| `ink-muted` (`text-ink-muted`)        | Body text (default on `body`)              | `#4a5260`  | `#bcc9cd`   |
| `ink-faint` (`text-ink-faint`)        | Dates, labels, inactive nav, icons         | `#646b78`  | `#869397`   |
| `accent` (`text-accent`, `bg-accent`) | Links, hover, active state, section titles | `#0e7490`  | `#4cd7f6`   |
| `accent-soft` (`bg-accent-soft`)      | Active control, badge, inline code         | `#e3f3f7`  | cyan at 12% |
| `accent-ink` (`text-accent-ink`)      | Text on `accent-soft`                      | `#0e7490`  | `#4cd7f6`   |
| `hover` (`bg-hover`)                  | Hover surface of article rows              | cyan at 5% | cyan at 6%  |
| `line` (`border-line`)                | Borders and dividers                       | `#dfe3ea`  | `#3d494c`   |

Effect-only variables (used in `global.css`, not as classes): `--grid` (background grid lines) and `--code-bg`
(code blocks, dark in both themes).

Every text token passes WCAG AA (4.5:1) on `canvas` and `surface` in both themes. Check contrast
when adding a token.

## Typography

Fonts are self-hosted with the Astro fonts API (`fonts` in `astro.config.mjs`, `<Font>` in `BaseLayout`).

| Role    | Font                     | Class                                       | Use                                                       |
| ------- | ------------------------ | ------------------------------------------- | --------------------------------------------------------- |
| Display | Geist 600                | `font-display font-semibold tracking-tight` | The name, post titles, `h2` in posts.                     |
| Body    | Geist (400–700)          | `font-sans` (default)                       | Everything readable, card titles.                         |
| Data    | JetBrains Mono (400–600) | `font-mono`                                 | Dates, section titles, nav, role, chips, metrics, footer. |

Scale in use: name `text-3xl sm:text-4xl`, post title `text-3xl sm:text-4xl`, work card titles `text-lg font-semibold`,
education titles `text-sm font-semibold`, body base, secondary text `text-sm`, mono labels `text-xs`/`text-sm`.

## Layout

- **Home:** two columns from `lg` (1024px). Left: sticky `Sidebar` (name, role and location, tagline,
  nav, Download CV button, social links, language and theme controls). Right: `main` with one numbered `Section`
  per block (`sobre-mi`, `experiencia`, `stack`, `articulos`). Below `lg` it is one column: the sidebar shrinks to
  name, role, tagline, CV and social links, `MobileNav` sticks to the top with the sections and the other language,
  and the theme selector moves to the footer.
- **Posts:** one column, `max-w-3xl`, back link and controls on top, Markdown inside `.post-body`.
- Side padding `px-6` on mobile, `md:px-12`, `lg:px-24`. Space between sections `mb-16 md:mb-24 lg:mb-36`.

## Components

| Component          | File                                    | Notes                                                                                                                                                                                                                                                                                        |
| ------------------ | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BaseLayout`       | `src/layouts/BaseLayout.astro`          | `<html lang="es">`, SEO, fonts, theme script. Every page uses it.                                                                                                                                                                                                                            |
| `Sidebar`          | `src/components/Sidebar.astro`          | Takes `sections` (`{ id, title }[]`); plain mono nav (no numbers or icons) that highlights the section in view with `aria-current` (accent text and a 2px left border).                                                                                                                      |
| `Section`          | `src/components/Section.astro`          | `id`, `title` and a 1-based `index`. Header `// 0N. TITLE` in accent mono over a `border-line` rule; the `// 0N.` prefix is `aria-hidden`. Never sticky; on mobile `MobileNav` names the section in view.                                                                                    |
| `MobileNav`        | `src/components/MobileNav.astro`        | Below `lg` only: sticky bar with the section links (`data-nav-link`, highlighted by the `Sidebar` scroll-spy) and a link to the other language. 44px touch targets.                                                                                                                          |
| `About`            | `src/components/About.astro`            | About text in both languages.                                                                                                                                                                                                                                                                |
| `ExperienceList`   | `src/components/ExperienceList.astro`   | Reads `src/data/experience.js` and splits it by `kind`: work as a timeline (the current job leads with a filled accent dot and a larger title), education as a quieter two-column list under its own heading.                                                                                |
| `Stack`            | `src/components/Stack.astro`            | Reads `src/data/stack.js`; one row per group. Items with `core: true` lead their row as accent chips; the rest are plain text with a faint icon.                                                                                                                                             |
| `ArticleList`      | `src/components/ArticleList.astro`      | Takes the `blog` collection entries; the two latest lead with a large image and description, the rest are compact rows with a thumbnail and date.                                                                                                                                            |
| `Seo`              | `src/components/Seo.astro`              | Title, canonical, icons, Open Graph and Twitter tags. Pages without an image share `public/og-image.png`; posts pass `type: 'article'` and an ISO `publishedTime`.                                                                                                                           |
| `Icon`             | `src/components/Icon.astro`             | Inline SVG at build time. See Icons.                                                                                                                                                                                                                                                         |
| `ThemeToggle`      | `src/components/ThemeToggle.astro`      | Three options: system, light, dark. Logic lives in the `BaseLayout` head script (`window.siteTheme`): follows OS changes live, syncs tabs, updates `theme-color` and reveals the new theme with a View Transition (skipped with reduced motion). `touch` gives 44px buttons (mobile footer). |
| `LanguageSwitcher` | `src/components/LanguageSwitcher.astro` | ES / EN links between `/` and `/en/`, active one marked with `aria-current`.                                                                                                                                                                                                                 |
| `HomePage`         | `src/layouts/HomePage.astro`            | The home page for one language; takes `lang`.                                                                                                                                                                                                                                                |
| `PostPage`         | `src/layouts/PostPage.astro`            | A post in one language, with ES/EN switcher and hreflang when the translation exists. Ends with previous/next links (same order as the home list, Spanish fallback on `/en/`) and a link back to the articles.                                                                               |

### Patterns

- **No cards as the default container.** Sections separate content with `border-line` rules, a timeline or
  whitespace. `bg-surface` is for controls (Download CV, language and theme).
- **Section title:** `font-mono text-sm font-semibold tracking-wide uppercase text-accent`, prefixed `// 0N.` (`aria-hidden`).
- **Reading measure:** paragraphs in the home column cap at `max-w-xl` (~75 characters). Not `max-w-prose`: Geist's `ch`
  is wide, so 65ch ends up near the full column.
- **Date / label:** `font-mono text-xs text-ink-faint` (the current job's date in `text-accent`).
- **Core chip (stack):** `rounded-md bg-accent-soft px-2 py-0.5 text-sm font-medium text-accent-ink` with its icon;
  non-core items are plain `text-sm text-ink-muted` with a `text-ink-faint` icon.
- **Small control (language, theme):** `rounded-md border border-line bg-surface font-mono`; active option in
  `accent-soft` / `accent-ink`.
- **Link inside text:** `text-ink` + `hover:text-accent`; in Markdown, `accent` underlined.
- **External link:** `target="_blank" rel="noopener noreferrer"`, a `↗` that moves on hover and an sr-only
  "opens in a new tab".
- **Whole item clickable (articles):** an absolutely positioned span inside the item's only link.
- **Inline element after a line break:** Astro drops the line break before a tag, so `word\n<a>` renders as
  `word<a>`. End the previous line with `{' '}` or keep the text and the tag on the same line.

## Icons

Monochrome only: icons take `currentColor`, so they follow the text token of their container.
`<Icon name="set:icon" size="1em" label="…" />` renders an inline SVG at build time (no JS).

| Set                                     | Prefix    | Use                                                                                       | Find names              |
| --------------------------------------- | --------- | ----------------------------------------------------------------------------------------- | ----------------------- |
| [Simple Icons](https://simpleicons.org) | `si:`     | Brands and technologies (`si:nodedotjs`, `si:docker`)                                     | Slug on simpleicons.org |
| [Tabler Icons](https://tabler.io/icons) | `tabler:` | Concepts, methodologies and UI (`tabler:sun`, `tabler:arrow-left`, `tabler:brand-github`) | Name on tabler.io/icons |
- Never use full-color logos, PNGs or another icon set; that breaks the palette.
- Size with `size` in `em` next to text (`1em`, `1.1em`) or in px for standalone buttons (`22`, `24`).
- Decorative icons need nothing: they get `aria-hidden`. An icon that is the only content of a
  link or button needs `label` on the icon or `aria-label` on the control.
- An unknown name fails the build, so typos never ship.

## Motion and accessibility

- Motion is limited to color and border transitions and small hover translations (`↗`, `←`),
  all with `motion-reduce:transition-none`.
- Visible focus: global `:focus-visible` outline in `accent`. Do not remove it.
- Icon-only links and buttons need `aria-label`. Decorative icons get `aria-hidden`.
- Skip link "Saltar al contenido" on the home page.
