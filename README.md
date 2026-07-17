# [https://www.traviskessler.com](https://www.traviskessler.com)

Personal site for [Travis Kessler](https://www.traviskessler.com) — PhD Computer Engineering, full-stack, ML/AI, and scientific computing.

Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Running locally

Needs Node 20+.

```bash
npm ci
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other useful commands:

```bash
npm run build      # production build
npm start          # serve the build
npm run lint
npm run typecheck  # TypeScript only (no Next build)
npm run format     # Prettier write
npm run format:check
```

## Editing content

Copy lives in typed modules under [`content/`](./content/) — bios, experience, skills, projects, research, awards, SEO. Edit those files instead of hunting through React components.

See [`content/README.md`](./content/README.md) for the file map and conventions.

## Deploy

Pushing to `main` builds a Docker image and pushes it to GitHub Container Registry via [`.github/workflows/build_docker_image.yml`](./.github/workflows/build_docker_image.yml). Tags:

- `ghcr.io/<your-github-user>/personal-website-ts:latest`
- `ghcr.io/<your-github-user>/personal-website-ts:sha-<7-char-commit>`

### Registry auth (`GHCR_TOKEN`)

The workflow logs into `ghcr.io` as the pushing actor (`github.actor`) using the repository secret `GHCR_TOKEN`. Without it, the push to GHCR fails.

1. Create a GitHub personal access token (PAT) with `write:packages` (and `read:packages` if you also pull images with that token).
2. In the repo: **Settings → Secrets and variables → Actions**, add a secret named `GHCR_TOKEN` with that token as the value.

The job also declares `permissions: packages: write`; the login step still authenticates with this custom secret.

The image uses Next.js `output: "standalone"` (slim runtime; no full `node_modules`). It listens on `0.0.0.0:$PORT` (default **3000**) and includes a `HEALTHCHECK` against `/`. On DigitalOcean App Platform, set the component HTTP port to **3000** (or set `PORT` to match your configured HTTP port).

To try the image locally:

```bash
docker build -t personal-website .
docker run --rm -p 3000:3000 personal-website
```

## Security

To report a vulnerability privately, see [`SECURITY.md`](./SECURITY.md).
