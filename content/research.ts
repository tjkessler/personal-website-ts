import type { Presentation, Publication } from "./types";

/** Display labels for topic slugs used on publications / presentations. */
export const topicLabels: Record<string, string> = {
  ml: "ML",
  qsar: "QSAR",
  biofuels: "Biofuels",
  combustion: "Combustion",
  sooting: "Sooting",
  "open-source": "Open source",
  plasma: "Plasma",
};

export function topicLabel(slug: string): string {
  return topicLabels[slug] ?? slug;
}

/** Published works (newest first). DOIs are bare identifiers; prefix with https://doi.org/ in UI. */
export const publications: Publication[] = [
  {
    id: "pb12-co2-hdpe-upcycling",
    title: "CO2 and HDPE Upcycling: A Plasma Catalysis Alternative",
    authors:
      "Fnu Gorky, Apolo Nambo, Travis J. Kessler, J. Hunter Mack, Maria L. Carreon",
    venue: "Industrial & Engineering Chemistry Research",
    year: 2023,
    doi: "10.1021/acs.iecr.3c02403",
    topics: ["plasma"],
    featured: true,
  },
  {
    id: "pb11-octane-qsar",
    title:
      "Artificial Neural Network Models for Octane Number and Octane Sensitivity: A Quantitative Structure Property Relationship Approach to Fuel Design",
    authors: "Amina SubLaban, Travis Kessler, Noah Van Dam, J. Hunter Mack",
    venue: "Journal of Energy Resources Technology",
    year: 2023,
    doi: "10.1115/1.4062189",
    topics: ["ml", "qsar", "biofuels"],
    featured: true,
  },
  {
    id: "pb10-terpene-fuel-additives",
    title:
      "Predicting the Cetane Number, Sooting Tendency, and Energy Density of Terpene Fuel Additives",
    authors: "Travis Kessler, Amina SubLaban, J. Hunter Mack",
    venue: "ASME Internal Combustion Engine Division Fall Technical Conference",
    year: 2022,
    doi: "10.1115/ICEF2022-91163",
    topics: ["ml", "biofuels", "sooting", "combustion"],
    featured: true,
  },
  {
    id: "pb9-diesel-biofuel-blends",
    title:
      "Evaluating Diesel/Biofuel Blends Using Artificial Neural Networks and Linear/Nonlinear Equations",
    authors: "Travis Kessler, Thomas Schwartz, Hsi-Wu Wong, J. Hunter Mack",
    venue: "ASME Internal Combustion Engine Division Fall Technical Conference",
    year: 2021,
    doi: "10.1115/ICEF2021-67785",
    topics: ["ml", "biofuels", "combustion"],
  },
  {
    id: "pb8-pyrolysis-oil-ann",
    title:
      "Predicting the Cetane Number, Yield Sooting Index, Kinematic Viscosity, and Cloud Point for Catalytically Upgraded Pyrolysis Oil Using Artificial Neural Networks",
    authors: "Travis Kessler, Thomas Schwartz, Hsi-Wu Wong, J. Hunter Mack",
    venue: "ASME Internal Combustion Engine Division Fall Technical Conference",
    year: 2020,
    doi: "10.1115/ICEF2020-2978",
    topics: ["ml", "biofuels", "sooting", "combustion"],
  },
  {
    id: "pb7-yield-sooting-index",
    title:
      "A comparison of computational models for predicting yield sooting index",
    authors:
      "Travis Kessler, Peter C. St. John, Junqing Zhu, Charles S. McEnally, Lisa D. Pfefferle, J. Hunter Mack",
    venue: "Proceedings of the Combustion Institute",
    year: 2020,
    doi: "10.1016/j.proci.2020.07.009",
    topics: ["ml", "sooting", "combustion"],
    featured: true,
  },
  {
    id: "pb6-fast-pyrolysis-screening",
    title:
      "Screening Compounds for Fast Pyrolysis and Catalytic Biofuel Upgrading Using Artificial Neural Networks",
    authors: "Travis Kessler, Thomas Schwartz, Hsi-Wu Wong, J. Hunter Mack",
    venue: "ASME Internal Combustion Engine Division Fall Technical Conference",
    year: 2019,
    doi: "10.1115/ICEF2019-7170",
    topics: ["ml", "biofuels", "combustion"],
  },
  {
    id: "pb5-ecabc",
    title:
      "ECabc: A feature tuning program focused on Artificial Neural Network hyperparameters",
    authors:
      "Sanskriti Sharma, Hernan Gelaf-Romer, Travis Kessler, J. Hunter Mack",
    venue: "Journal of Open Source Software",
    year: 2019,
    doi: "10.21105/joss.01420",
    topics: ["ml", "open-source"],
  },
  {
    id: "pb4-furanic-cetane-fuel",
    title:
      "Artificial neural network based predictions of cetane number for furanic biofuel additives",
    authors: "Travis Kessler, Eric Sacia, Alexis Bell, J. Hunter Mack",
    venue: "Fuel",
    year: 2017,
    doi: "10.1016/j.fuel.2017.06.015",
    topics: ["ml", "qsar", "biofuels"],
    featured: true,
  },
  {
    id: "pb3-relu-cetane",
    title:
      "Application of a Rectified Linear Unit (ReLU) Based Artificial Neural Network to Cetane Number Predictions",
    authors: "Travis Kessler, Gregory Dorian, J. Hunter Mack",
    venue: "ASME Internal Combustion Engine Division Fall Technical Conference",
    year: 2017,
    doi: "10.1115/icef2017-3614",
    topics: ["ml", "biofuels", "combustion"],
  },
  {
    id: "pb2-ecnet",
    title:
      "ECNet: Large scale machine learning projects for fuel property prediction",
    authors: "Travis Kessler, J. Hunter Mack",
    venue: "Journal of Open Source Software",
    year: 2017,
    doi: "10.21105/joss.00401",
    topics: ["ml", "open-source", "biofuels"],
  },
  {
    id: "pb1-furanic-cetane-asme",
    title:
      "Predicting the Cetane Number of Furanic Biofuel Candidates Using an Improved Artificial Neural Network Based on Molecular Structure",
    authors: "Travis Kessler, Eric Sacia, Alexis Bell, J. Hunter Mack",
    venue: "ASME Internal Combustion Engine Division Fall Technical Conference",
    year: 2016,
    doi: "10.1115/icef2016-9383",
    topics: ["ml", "qsar", "biofuels", "combustion"],
  },
];

/** One-line intro under the home Research heading. */
export const homeResearchIntro = `${publications.length} peer-reviewed publications spanning combustion, QSAR, and fuel property ML — selected works below.`;

/**
 * Home Research section order (not publication-list chronology).
 * IDs must exist in `publications` with `featured: true`.
 */
const featuredPublicationIds = [
  "pb4-furanic-cetane-fuel",
  "pb7-yield-sooting-index",
  "pb11-octane-qsar",
  "pb12-co2-hdpe-upcycling",
  "pb10-terpene-fuel-additives",
] as const;

/** Home Research section (explicit featured order). */
export const featuredPublications = featuredPublicationIds.map((id) => {
  const publication = publications.find((p) => p.id === id);
  if (!publication) {
    throw new Error(`Missing featured publication: ${id}`);
  }
  return publication;
});

/** Conference / symposium presentations (newest first). From `/research`. */
export const presentations: Presentation[] = [
  {
    id: "pres-2022-essci-inliers",
    title:
      "Analysis of Inlier and Outlier Compounds with respect to Artificial Neural Network Cetane Number Prediction Accuracy",
    authors: "Amina SubLaban, Travis Kessler, J. Hunter Mack",
    event:
      "Eastern States Section of the Combustion Institute Spring Technical Meeting",
    year: 2022,
    topics: ["ml", "biofuels", "combustion"],
  },
  {
    id: "pres-2021-acs-octane",
    title:
      "Predicting Research and Motor Octane Number using a Single Artificial Neural Network",
    authors: "Travis Kessler, Amina SubLaban, J. Hunter Mack",
    event: "American Chemical Society Fall Conference",
    year: 2021,
    topics: ["ml", "biofuels"],
  },
  {
    id: "pres-2020-essci-octane",
    title:
      "Prediction of Research/Motor Octane Number and Octane Sensitivity Using Artificial Neural Networks",
    authors: "Travis Kessler, Corey Hudson, Leanne Whitmore, J. Hunter Mack",
    event:
      "Eastern States Section of the Combustion Institute Spring Technical Meeting",
    year: 2020,
    topics: ["ml", "biofuels", "combustion"],
  },
  {
    id: "pres-2019-neerf-screening",
    title: "A Computational Approach to Screening Alternative Fuel Candidates",
    authors: "J. Hunter Mack, Travis Kessler",
    event: "New England Energy Research Forum",
    year: 2019,
    topics: ["ml", "biofuels"],
  },
  {
    id: "pres-2016-uml-symposium",
    title: "Predicting Biofuel Properties with an Artificial Neural Network",
    authors: "Travis Kessler, J. Hunter Mack",
    event: "UMass Lowell Student Research and Engagement Symposium",
    year: 2016,
    topics: ["ml", "biofuels"],
  },
];
