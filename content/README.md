# Site content

Typed modules under `content/` are the source of truth for professional copy. Edit these files to update the site; do **not** hardcode new prose in layout or page components.

Import from the barrel:

```ts
import {
  site,
  pillars,
  experience,
  skillGroups,
  featuredProjects,
  mainProjects,
  sideProjects,
  featuredPublications,
  publications,
} from "@/content";
```

## File map

| File            | What to edit                                                                                                                                         |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `site.ts`       | Name, titles, short bio, about narrative, email, GitHub, LinkedIn, Bluesky, CV path, hero CTAs, consulting line, nav items, social links |
| `pillars.ts`    | About proof pillars (Full-stack, ML/AI, Scientific computing)                                                                                        |
| `theme.ts`      | Pillar / skill-group → visual variant maps (About bars, skill chips, project pillar tags)                                                              |
| `experience.ts` | Roles, orgs, dates, bullets (newest first)                                                                                                           |
| `skills.ts`     | Skill groups and lists                                                                                                                               |
| `projects.ts`   | Project summaries, tech tags, links; set `featured` / `side`. Use `featuredProjects`, `mainProjects`, `sideProjects` on pages                        |
| `research.ts`   | Publications and presentations (venue, year, DOI/URL, topics); set `featured` for home. Use `featuredPublications` on home                           |
| `awards.ts`     | Awards and education entries; set `featured` for home About strip                                                                                    |
| `seo.ts`        | Per-route titles, descriptions, and paths; `buildPageMetadata()` for title/description/OG/canonical (Bluesky OG cards use these + `app/**/opengraph-image.tsx`) |
| `jsonLd.ts`     | Root layout structured data: Person + WebSite + `ScholarlyArticle` nodes from `publications` in `research.ts`                                          |
| `types.ts`      | Shared TypeScript shapes (change only when adding fields)                                                                                            |
| `index.ts`      | Public barrel — re-export only what pages/components import from `@/content`                                                                         |

## Home vs deep routes

| Surface          | Content selector                          |
| ---------------- | ----------------------------------------- |
| Home `#work`     | `featuredProjects` (`featured: true`)     |
| `/projects`      | `mainProjects` + `sideProjects`           |
| Home `#research` | `featuredPublications` (`featured: true`) |
| `/research`      | `publications` + `presentations`          |

Keep both surfaces on these exports so copy stays in sync.

## Conventions

- Keep stable string `id`s when renaming titles so anchors/keys stay predictable.
- Order lists newest-first where the modules already do (experience, awards, publications).
- Project pillars: `"fullstack" | "ml" | "scientific"`.
- Store DOIs as bare identifiers (e.g. `10.1021/...`); UI prefixes `https://doi.org/`.
- Prefer facts from `public/files/kessler_travis_cv.pdf` and existing site copy — don’t invent CV details.

## Reserved optional fields

These optional properties exist on content types but are **not populated or rendered** today. Keep them for future CV detail without inventing copy just to fill them:

| Field | Type | Intended use |
| ----- | ---- | ------------ |
| `location` | `Experience`, `Presentation` | City / venue when useful on timeline or presentation rows |
| `description` | `Award` | Short honor blurb beyond title / org / year |
| `details` | `Education` | Thesis title, concentration, honors lines |

Do not remove them from `types.ts` unless a later cleanup intentionally drops the reserved slots.

## After editing

Typecheck/build will catch shape mistakes (`npm run typecheck` / `npm run build`). No CMS step required.
