import type { Award, Education } from "./types";

/** Selected awards & honors from the CV (newest first). */
export const awards: Award[] = [
  {
    id: "deans-gold-medal",
    title: "Dean's Gold Medal for Outstanding Academic Achievement",
    year: 2023,
    org: "University of Massachusetts Lowell",
    featured: true,
  },
  {
    id: "outstanding-phd",
    title: "Computer Engineering Department Award for Outstanding Ph.D.",
    year: 2023,
    org: "University of Massachusetts Lowell",
  },
  {
    id: "asme-icef-best-presentation",
    title: "Best Presentation, ASME ICEF 2019 Conference",
    year: 2019,
    org: "ASME",
  },
  {
    id: "symbotic-1st",
    title: "1st place, Symbotic Warehouse Robot Prototyping Competition",
    year: 2018,
    org: "Symbotic",
  },
  {
    id: "differencemaker-innovative-tech",
    title:
      "Innovative Technology Solution, UMass Lowell DifferenceMaker 50K Idea Challenge",
    year: 2017,
    org: "University of Massachusetts Lowell",
    featured: true,
  },
  {
    id: "fcoe-prototyping-1st",
    title: "1st place, Francis College of Engineering Prototyping Competition",
    year: 2016,
    org: "University of Massachusetts Lowell",
    featured: true,
  },
];

/** Awards surfaced on the home About footer strip (newest first). */
export const featuredAwards = awards.filter((a) => a.featured);

/** Non-featured awards for the About “More honors” disclosure (newest first). */
export const otherAwards = awards.filter((a) => !a.featured);

/** Degrees from the CV (highest first). */
export const education: Education[] = [
  {
    id: "phd-computer-engineering",
    degree: "PhD, Computer Engineering",
    institution: "University of Massachusetts Lowell",
    dates: "May 2023",
  },
  {
    id: "bs-computer-engineering",
    degree: "B.S., Computer Engineering",
    institution: "University of Massachusetts Lowell",
    dates: "May 2018",
  },
];
