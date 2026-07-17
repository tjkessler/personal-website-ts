import type { SiteContent } from "./types";

const cvPath = "/files/kessler_travis_cv.pdf";

export const site: SiteContent = {
  person: {
    name: "Travis Kessler",
    titles: [
      "PhD Computer Engineering",
      "Full-stack",
      "ML/AI",
      "Scientific computing",
    ],
    shortBio:
      "Production software and ML systems grounded in published research — from scientific modeling and open-source tools to SaaS platforms and large-scale agentic analytics.",
    aboutNarrative:
      "AI and machine learning engineer with a record of impactful research, open-source software, and scalable AI systems for science, industry, and energy. I build production platforms and research tooling end to end across full-stack product work, ML/AI systems, and scientific computing.",
  },
  email: "travis.j.kessler@gmail.com",
  github: "https://github.com/tjkessler",
  linkedin: "https://www.linkedin.com/in/traviskessler/",
  bluesky: "https://bsky.app/profile/traviskessler.bsky.social",
  blueskyHandle: "@traviskessler.bsky.social",
  cvPath,
  heroCtas: [
    { label: "View work", href: "/#work" },
    { label: "Download CV", href: cvPath },
    { label: "Get in touch", href: "mailto:travis.j.kessler@gmail.com" },
  ],
  consultingLine: "Available for select work",
  navItems: [
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/projects" },
    { label: "Research", href: "/research" },
    { label: "Contact", href: "/#contact" },
    {
      label: "GitHub",
      href: "https://github.com/tjkessler",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/traviskessler/",
      icon: "linkedin",
    },
  ],
  socialLinks: [
    {
      label: "Email",
      href: "mailto:travis.j.kessler@gmail.com",
      kind: "email",
    },
    {
      label: "GitHub",
      href: "https://github.com/tjkessler",
      kind: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/traviskessler/",
      kind: "linkedin",
    },
    {
      label: "Bluesky",
      href: "https://bsky.app/profile/traviskessler.bsky.social",
      kind: "bluesky",
    },
    {
      label: "CV",
      href: cvPath,
      kind: "cv",
    },
  ],
};
