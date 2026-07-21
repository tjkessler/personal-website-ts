# [traviskessler.com](https://www.traviskessler.com)

The source for my personal portfolio, featuring my experience, projects, research, and work in full-stack development, ML/AI, and scientific computing.

Built with Next.js, React, TypeScript, and Tailwind CSS.

Deployed to DigitalOcean App Platform via a Docker image built with GitHub Actions and published to GitHub Container Registry. After each successful image push to `main`, the workflow triggers an App Platform deployment with `doctl`.

Required Actions secrets for deploy: `DIGITALOCEAN_ACCESS_TOKEN`, `DIGITALOCEAN_APP_ID` (plus existing `GHCR_TOKEN` for the registry push).
