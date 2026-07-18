import { doiHref } from "@/app/lib/links";
import { publications } from "./research";
import { seo } from "./seo";
import { site } from "./site";
import type { Publication } from "./types";

const personId = `${seo.siteUrl}/#person`;
const websiteId = `${seo.siteUrl}/#website`;
const profilePageId = `${seo.siteUrl}/#profile`;

function publicationNode(pub: Publication): Record<string, unknown> {
  const node: Record<string, unknown> = {
    "@type": "ScholarlyArticle",
    "@id": `${seo.siteUrl}/#pub-${pub.id}`,
    name: pub.title,
    author: pub.authors,
    datePublished: String(pub.year),
    isPartOf: {
      "@type": "Periodical",
      name: pub.venue,
    },
    creator: { "@id": personId },
  };

  const link = pub.doi ? doiHref(pub.doi) : pub.url;
  if (link) {
    node.url = link;
    if (pub.doi) {
      node.identifier = {
        "@type": "PropertyValue",
        propertyID: "DOI",
        value: pub.doi,
      };
    }
  }

  return node;
}

/** Schema.org JSON-LD for Travis's profile, website, and publications. */
export function buildJsonLd(): Record<string, unknown> {
  const jobTitle = site.person.titles.join(" · ");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.person.name,
        url: seo.siteUrl,
        description: site.person.shortBio,
        jobTitle,
        email: site.email,
        sameAs: [site.github, site.linkedin, site.bluesky],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "University of Massachusetts Lowell",
          url: "https://www.uml.edu/",
        },
        worksFor: {
          "@type": "Organization",
          name: "Cognitive Chemistry Labs",
          url: "https://cognichem.com/",
        },
        knowsAbout: [
          "Artificial intelligence",
          "Machine learning",
          "Scientific computing",
          "Full-stack software engineering",
          "Quantitative structure–activity relationship",
          "Computational chemistry",
          "Combustion modeling",
        ],
        mainEntityOfPage: { "@id": profilePageId },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: seo.siteName,
        url: seo.siteUrl,
        description: seo.defaultDescription,
        author: { "@id": personId },
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: seo.siteUrl,
        name: site.person.name,
        description: seo.home.description,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
      ...publications.map(publicationNode),
    ],
  };
}
