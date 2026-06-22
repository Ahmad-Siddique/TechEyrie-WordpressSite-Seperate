import { caseStudyImage } from "../caseStudyAssets";

const SLUG = "brincdrones";

export const BRINCDRONES_CASE_STUDY = {
  slug: SLUG,
  name: "BRINC",
  domain: "brincdrones.com",
  siteUrl: "https://brincdrones.com",
  heroTitle: "BRINC",
  heroIntro:
    "BRINC builds technology in the service of public safety—a connected ecosystem of drones, software, and services helping first responders save lives across all 50 states. Eyrion partnered with BRINC to design and develop a high-performance marketing site that showcases their drone programs, mission-critical hardware, and end-to-end public safety solutions with a polished responsive experience across every device.",
  meta: {
    industry: ["Public Safety Technology", "Drone Systems"],
    services: [
      "WordPress website design",
      "Custom theme development",
      "Product & program showcase",
      "Responsive UI implementation",
      "Performance optimization",
    ],
    milestones: [
      "Discovery & content architecture",
      "Design system & page templates",
      "Development & cross-device QA",
      "Launch & handoff",
      "Ongoing iteration support",
    ],
    timeline: ["Multi-phase engagement", "Mission-critical delivery"],
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
    { src: caseStudyImage(SLUG, "all-devices-white"), alt: "BRINC website on desktop, tablet, and mobile — light background", featured: true },
    { src: caseStudyImage(SLUG, "all-devices-black"), alt: "BRINC responsive website mockup on dark background", featured: true },
    { src: caseStudyImage(SLUG, "desktop"), alt: "BRINC desktop website design" },
    { src: caseStudyImage(SLUG, "laptop"), alt: "BRINC laptop website mockup" },
    { src: caseStudyImage(SLUG, "3-devices-white"), alt: "BRINC website across three devices" },
    { src: caseStudyImage(SLUG, "3-devices-black"), alt: "BRINC multi-device presentation on dark background" },
    { src: caseStudyImage(SLUG, "tablet-white"), alt: "BRINC tablet experience" },
    { src: caseStudyImage(SLUG, "tablet-black"), alt: "BRINC tablet mockup on dark background" },
    { src: caseStudyImage(SLUG, "mobile-white"), alt: "BRINC mobile website design" },
    { src: caseStudyImage(SLUG, "mobile-black"), alt: "BRINC mobile mockup on dark background" },
  ],
  story: {
    storyHeading: "Technology that helps first responders save lives",
    clientOverview:
      "BRINC offers an end-to-end public safety drone ecosystem—hardware, software, and services built exclusively for law enforcement and emergency response in the USA. From indoor tactical drones like the Lemur 2 and de-escalation tools like the BRINC Ball to outdoor Guardian and Responder stations, their site needed to communicate complex capabilities, proven outcomes, and mission-driven credibility to agencies nationwide.",
    challenge: [
      "Present a sophisticated product portfolio—indoor tactical, outdoor response, and drone-as-first-responder programs—without overwhelming public safety decision-makers.",
      "Communicate measurable impact (faster 911 response, officer safety, reduced use of force) alongside technical specs and compliance credentials.",
      "Deliver a fast, responsive site worthy of a company deployed by 900+ agencies across all 50 states.",
      "Build a scalable WordPress foundation for new products, case studies, demo requests, and program resources.",
    ],
    approach: [
      "Structured the site around BRINC’s mission—technology in the service of public safety—and their full-stack drone program offering.",
      "Designed product-led sections for Guardian Station, Responder Station, Lemur 2, and BRINC Ball with clear use cases and capability highlights.",
      "Built conversion paths for demo requests, drone program reviews, and agency outreach alongside trust signals (USA-made, NDAA/CJIS/SOC2 compliant).",
      "Validated layouts across desktop, laptop, tablet, and mobile throughout QA using multi-device mockups.",
      "Collaborated with BRINC to ensure the site reflected their origin story and commitment to first responders.",
    ],
    outcomes: [
      "A launch-ready marketing site at brincdrones.com that presents BRINC’s ecosystem, outcomes, and agency proof in one cohesive experience.",
      "Responsive layouts proven across desktop, laptop, tablet, and phone form factors.",
      "A scalable WordPress build ready for new hardware launches, program expansions, and customer stories.",
      "A digital presence aligned with BRINC’s purpose—helping first responders save lives through purpose-built drone technology.",
    ],
  },
  showcase: {
    eyebrow: "Responsive delivery",
    title: "Built to look sharp on every screen",
    galleryTitle: "BRINC across devices",
  },
};
