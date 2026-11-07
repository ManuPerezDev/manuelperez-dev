# manuelperez.dev

Personal site and blog of Manuel Pérez, live at [manuelperez.dev](https://manuelperez.dev). Spanish at `/`, English at `/en/`.

Built with [Astro](https://astro.build) 7 (fully static, no UI framework) and [Tailwind CSS](https://tailwindcss.com) 4. Icons come from [Simple Icons](https://simpleicons.org) and [Tabler Icons](https://tabler.io/icons); fonts (Geist, JetBrains Mono) are self-hosted. The visual style and its rules are in [`docs/STYLEGUIDE.md`](docs/STYLEGUIDE.md).

## Development

Requires Node.js >= 22.23.4.

```shell
npm ci
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serves the build
npm run lint      # Biome + stylelint
npm run format    # applies Biome and stylelint fixes
```

## Project structure

```text
blog/<folder>/      posts: index.md (Spanish), index.en.md (English, optional) and their images
docs/STYLEGUIDE.md  design tokens, typography, components and rules
public/             favicon, share image (og-image.png), robots.txt
src/components/     UI pieces (sidebar, lists, theme and language switchers, icons, SEO)
src/cv/             CV PDF generator
src/data/           profile, experience, stack and post lists, with Spanish and English text
src/i18n.js         interface strings and per-language settings
src/layouts/        BaseLayout (head, theme script), HomePage and PostPage
src/pages/          routes for / and /en/, including /blog/<slug> and /en/blog/<slug>
src/styles/         global CSS and design tokens
```

## Editing content

- **Profile, experience and stack:** `src/data/profile.js`, `src/data/experience.js` and `src/data/stack.js`. Every text is a `{ es, en }` pair. They feed both the site and the CV.
- **About:** `src/components/About.astro`, one block per language.
- **Interface text** (section names, buttons, labels): `src/i18n.js`.

Every text change needs both languages.

## CV

The site publishes a CV in PDF, built from the same data at `/manuel-perez-cv.pdf` and `/en/manuel-perez-cv.pdf`. It is designed for applicant tracking systems: one column, real text, standard headings. The public version has no email or phone.

### Private CV with contact details

For job applications, generate the full version, which adds email and phone to the contact line. It is built only on your machine and is never committed or deployed.
1. Create your contact file from the example (only the first time):

   ```shell
   cp cv.private.example.json cv.private.json
   ```

2. Fill it in. Leave a field empty to keep it out of the CV:

   ```json
   {
     "email": "you@example.com",
     "phone": "+34 600 000 000"
   }
   ```

3. Generate the PDFs:

   ```shell
   npm run cv:private
   ```

   This writes `cv-private/manuel-perez-cv-es.pdf` and `cv-private/manuel-perez-cv-en.pdf`.

The content comes from the same data as the site, so run the command again after changing your experience, stack or profile. If `cv.private.json` is missing, the script stops and tells you to create it.

Both `cv.private.json` and `cv-private/` are listed in `.gitignore`. Never move them elsewhere in the repo or paste your email or phone into `src/data/`: anything there ends up in the public site and CV.

## Blog posts

Each post is a folder in `blog/` with `index.md` in Spanish and its images next to it. Its frontmatter:

```yaml
title: "CQRS"
date: "2022-02-12"
description: "Short summary for the post list and link previews."
slug: "cqrs"
hero_image: "./main.jpg"
hero_image_alt: "Big building."
hero_image_owner_url: "https://unsplash.com/@author" # optional, credits the photo
```

The URL is `/blog/<slug>`, taken from `slug`, not from the folder name. To add an English version, create `index.en.md` in the same folder with the same `slug`; it is published at `/en/blog/<slug>`. Posts without a translation show up on `/en/` in Spanish with an "In Spanish" badge. Frontmatter is validated in `src/content.config.js`.

## Deploy

Pushing to `main` deploys production on Netlify, which runs `npm run build` and publishes `dist/` (see `netlify.toml`).
