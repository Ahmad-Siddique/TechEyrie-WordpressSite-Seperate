import { caseStudyImage } from "../caseStudyAssets";

const SLUG = "ufomammoot";

export const UFOMAMMOOT_CASE_STUDY = {
  slug: SLUG,
  name: "UFOMAMMOOT",
  domain: "ufomammoot.de",
  siteUrl: "https://ufomammoot.de",
  heroTitle: "UFOMAMMOOT",
  heroIntro:
    "UFOMAMMOOT is an independent Berlin digital agency—established in 2011—with a mission to make the internet exciting again through surprising, interactive work. From websites and apps to AR, VR, and digital installations for brands like adidas, Jägermeister, Netflix, and Comedy Central, their portfolio demands a site that matches their creative ambition. Eyrion partnered with UFOMAMMOOT to design and develop a marketing site that showcases their work, culture, and technical craft with a polished responsive experience across every device.",
  meta: {
    industry: ["Digital Agency", "Interactive & Immersive"],
    services: [
      "WordPress website design",
      "Custom theme development",
      "Portfolio & case study showcase",
      "Responsive UI implementation",
      "Performance optimization",
    ],
    milestones: [
      "Discovery & creative alignment",
      "Design system & page templates",
      "Development & cross-device QA",
      "Launch & handoff",
      "Ongoing iteration support",
    ],
    timeline: ["Multi-phase engagement", "Creative-technology delivery"],
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
    { src: caseStudyImage(SLUG, "all-devices-white"), alt: "UFOMAMMOOT website on desktop, tablet, and mobile — light background", featured: true },
    { src: caseStudyImage(SLUG, "all-devices-black"), alt: "UFOMAMMOOT responsive website mockup on dark background", featured: true },
    { src: caseStudyImage(SLUG, "desktop"), alt: "UFOMAMMOOT desktop website design" },
    { src: caseStudyImage(SLUG, "laptop"), alt: "UFOMAMMOOT laptop website mockup" },
    { src: caseStudyImage(SLUG, "3-devices-white"), alt: "UFOMAMMOOT website across three devices" },
    { src: caseStudyImage(SLUG, "3-devices-black"), alt: "UFOMAMMOOT multi-device presentation on dark background" },
    { src: caseStudyImage(SLUG, "tablet-white"), alt: "UFOMAMMOOT tablet experience" },
    { src: caseStudyImage(SLUG, "tablet-black"), alt: "UFOMAMMOOT tablet mockup on dark background" },
    { src: caseStudyImage(SLUG, "mobile-white"), alt: "UFOMAMMOOT mobile website design" },
    { src: caseStudyImage(SLUG, "mobile-black"), alt: "UFOMAMMOOT mobile mockup on dark background" },
  ],
  story: {
    storyHeading: "The future of the future, on every screen",
    clientOverview:
      "UFOMAMMOOT unites classic creative concepts with deep digital and technological expertise—building websites, apps, AR/VR experiences, and museum-scale installations that turn brands into interactive stories. Their own site needed to reflect that pedigree: bold portfolio presentation, room for experimental touches (including their U.W.E. chatbot and WebVR experience), and a structure that scales as new work lands—from Königgrätz Digital Museum to Netflix’s The Rain and adidas retail activations.",
    challenge: [
      "Showcase a diverse, award-caliber portfolio spanning WebGL games, AR apps, retail installations, and campaign microsites without losing navigability.",
      "Capture UFOMAMMOOT’s personality—nerdy, playful, Berlin-rooted—while remaining professional for global brand clients.",
      "Deliver a responsive site that honors their technical standards (including rich media and interactive ambitions) on desktop, tablet, and mobile.",
      "Build a WordPress foundation the agency could extend as new case studies, culture content, and contact flows evolved.",
    ],
    approach: [
      "Structured the site around UFOMAMMOOT’s positioning—“The Future of the Future”—with clear paths to Work, Clients, Culture, and contact.",
      "Designed portfolio-led layouts that let flagship projects (Jägermeister Monument to Friendship, Poster Roaster, Mammoot Control, Umbrella Academy DOOH) tell the story at a glance.",
      "Developed modular WordPress templates for case studies, agency pages, and editorial content so the team could publish independently.",
      "Validated layouts across desktop, laptop, tablet, and mobile throughout QA using multi-device mockups.",
      "Collaborated with UFOMAMMOOT to ensure the site felt as surprising and craft-driven as the work they ship for adidas, Comedy Central, eBay, and Netflix.",
    ],
    outcomes: [
      "A launch-ready marketing site at ufomammoot.de that presents UFOMAMMOOT’s work, clients, and culture in one cohesive experience.",
      "Responsive layouts proven across desktop, laptop, tablet, and phone form factors.",
      "A scalable WordPress build ready for new case studies, bot integrations, and experimental features.",
      "A digital home aligned with a agency that has been filling the internet with fun since 2011.",
    ],
  },
  showcase: {
    eyebrow: "Responsive delivery",
    title: "Built to look sharp on every screen",
    galleryTitle: "UFOMAMMOOT across devices",
  },
};
