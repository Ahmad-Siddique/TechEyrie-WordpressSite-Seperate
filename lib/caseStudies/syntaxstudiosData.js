import { caseStudyImage } from "../caseStudyAssets";

const SLUG = "syntaxstudios";

export const SYNTAXSTUDIOS_CASE_STUDY = {
  slug: SLUG,
  name: "Syntax Studios",
  domain: "syntaxstudios.xyz",
  siteUrl: "https://syntaxstudios.xyz",
  heroTitle: "Syntax Studios",
  heroIntro:
    "Syntax Studios is a US-based software development agency building custom blockchain, AI, and product engineering solutions for startups and enterprise teams. Eyrion partnered with Syntax to design and develop a high-performance marketing site that communicates their services, founder story, and client outcomes—with a responsive experience across every device.",
  meta: {
    industry: ["Software Development", "Web3 & AI"],
    services: [
      "WordPress website design",
      "Custom theme development",
      "Responsive UI implementation",
      "Performance optimization",
      "Ongoing support & iteration",
    ],
    milestones: [
      "Discovery & positioning",
      "Design system & page architecture",
      "Development & QA",
      "Launch & handoff",
      "Retained collaboration",
    ],
    timeline: ["Multi-phase engagement", "Ongoing partnership"],
  },
  images: {
    hero: caseStudyImage(SLUG, "all-devices-white"),
    desktop: caseStudyImage(SLUG, "desktop"),
    laptop: caseStudyImage(SLUG, "laptop"),
    mobileWhite: caseStudyImage(SLUG, "mobile-white"),
    mobileBlack: caseStudyImage(SLUG, "mobile-black"),
    tabletWhite: caseStudyImage(SLUG, "tablet-white"),
    tabletBlack: caseStudyImage(SLUG, "tablet-black"),
    threeDevicesWhite: caseStudyImage(SLUG, "3-devices-white"),
    threeDevicesBlack: caseStudyImage(SLUG, "3-devices-black"),
    allDevicesWhite: caseStudyImage(SLUG, "all-devices-white"),
    allDevicesBlack: caseStudyImage(SLUG, "all-devices-black"),
  },
  gallery: [
    { src: caseStudyImage(SLUG, "all-devices-white"), alt: "Syntax Studios website on desktop, tablet, and mobile — light background", featured: true },
    { src: caseStudyImage(SLUG, "all-devices-black"), alt: "Syntax Studios responsive website mockup on dark background", featured: true },
    { src: caseStudyImage(SLUG, "desktop"), alt: "Syntax Studios desktop website design" },
    { src: caseStudyImage(SLUG, "laptop"), alt: "Syntax Studios laptop website mockup" },
    { src: caseStudyImage(SLUG, "3-devices-white"), alt: "Syntax Studios website across three devices" },
    { src: caseStudyImage(SLUG, "3-devices-black"), alt: "Syntax Studios multi-device presentation on dark background" },
    { src: caseStudyImage(SLUG, "tablet-white"), alt: "Syntax Studios tablet experience" },
    { src: caseStudyImage(SLUG, "tablet-black"), alt: "Syntax Studios tablet mockup on dark background" },
    { src: caseStudyImage(SLUG, "mobile-white"), alt: "Syntax Studios mobile website design" },
    { src: caseStudyImage(SLUG, "mobile-black"), alt: "Syntax Studios mobile mockup on dark background" },
  ],
  story: {
    storyHeading: "Engineering trust at startup speed",
    clientOverview:
      "Syntax Studios helps ambitious teams ship secure, scalable software—from full product builds and dedicated engineering squads to staff augmentation and CTO-as-a-service. Their site needed to feel as polished and technical as the products they deliver, while making complex service lines easy to understand.",
    challenge: [
      "Translate a broad service offering—full product development, dedicated teams, staff augmentation, and CTO advisory—into a clear marketing narrative.",
      "Build a premium brand presence that appeals to founders, product leaders, and enterprise stakeholders.",
      "Deliver a fast, responsive site that looks sharp on desktop, tablet, and mobile without sacrificing editorial flexibility.",
      "Create a foundation the Syntax team could grow with as case studies, testimonials, and service pages evolved.",
    ],
    approach: [
      "Mapped visitor journeys for founders evaluating a dev partner versus teams needing immediate engineering capacity.",
      "Designed a confident visual system with strong typography, service-led sections, and social proof blocks aligned to Syntax’s positioning.",
      "Developed a modular WordPress build so marketing pages, service detail, and founder story content could be updated in-house.",
      "Optimized layouts for performance and accessibility across breakpoints—validated with multi-device mockups throughout QA.",
      "Stayed embedded after launch with steady communication, daily follow-ups, and iterative improvements as priorities shifted.",
    ],
    outcomes: [
      "A launch-ready marketing site at syntaxstudios.xyz that presents Syntax’s services, founder principles, and client testimonials in one cohesive experience.",
      "Responsive layouts proven across desktop, laptop, tablet, and phone form factors.",
      "A dependable delivery partnership—Syntax describes Eyrion as a consistent, communicative extension of their team.",
      "A scalable WordPress foundation ready for new case studies, service expansions, and ongoing growth.",
    ],
    quote:
      "Eyrion has been a consistent and dependable partner, delivering high-quality work with steady communication and daily follow-ups. They integrated seamlessly into our workflow and contributed positively to our team culture. We look forward to continued collaboration.",
    quoteAuthor: "Syntaxstudios",
  },
  showcase: {
    eyebrow: "Responsive delivery",
    title: "Built to look sharp on every screen",
    galleryTitle: "Syntax Studios across devices",
  },
};
