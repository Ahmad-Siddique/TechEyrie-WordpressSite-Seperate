import { caseStudyImage } from "../caseStudyAssets";

const SLUG = "cleindy";

export const CLEINDY_CASE_STUDY = {
  slug: SLUG,
  name: "CLE Indy",
  domain: "cleindy.com",
  siteUrl: "https://cleindy.com",
  heroTitle: "CLE Indy",
  heroIntro:
    "The Center for Leadership Excellence is a career and leadership consultancy empowering professionals and organizations—through outplacement, leadership coaching, culture consulting, and programs like Advancing Women and the Emerging Leaders Academy. Eyrion partnered with CLE Indy to design and develop a WordPress marketing site that communicates their services, mission, and impact with clarity and a polished responsive experience across every device.",
  meta: {
    industry: ["Leadership Development", "Career Consulting"],
    services: [
      "WordPress website design",
      "Custom theme development",
      "Service page architecture",
      "Responsive UI implementation",
      "Performance optimization",
    ],
    milestones: [
      "Discovery & messaging alignment",
      "Design system & page templates",
      "Development & cross-device QA",
      "Launch & handoff",
      "Ongoing iteration support",
    ],
    timeline: ["Multi-phase engagement", "Professional services delivery"],
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
    { src: caseStudyImage(SLUG, "all-devices-white"), alt: "CLE Indy website on desktop, tablet, and mobile — light background", featured: true },
    { src: caseStudyImage(SLUG, "all-devices-black"), alt: "CLE Indy responsive website mockup on dark background", featured: true },
    { src: caseStudyImage(SLUG, "desktop"), alt: "CLE Indy desktop website design" },
    { src: caseStudyImage(SLUG, "laptop"), alt: "CLE Indy laptop website mockup" },
    { src: caseStudyImage(SLUG, "3-devices-white"), alt: "CLE Indy website across three devices" },
    { src: caseStudyImage(SLUG, "3-devices-black"), alt: "CLE Indy multi-device presentation on dark background" },
    { src: caseStudyImage(SLUG, "tablet-white"), alt: "CLE Indy tablet experience" },
    { src: caseStudyImage(SLUG, "tablet-black"), alt: "CLE Indy tablet mockup on dark background" },
    { src: caseStudyImage(SLUG, "mobile-white"), alt: "CLE Indy mobile website design" },
    { src: caseStudyImage(SLUG, "mobile-black"), alt: "CLE Indy mobile mockup on dark background" },
  ],
  story: {
    storyHeading: "Empowering careers. Elevating leaders.",
    clientOverview:
      "The Center for Leadership Excellence helps individuals and organizations unlock human potential—one leader, one career, one workplace at a time. From personalized outplacement coaching and leadership training to culture consulting, college career preparedness, and Advancing Women programs, CLE Indy’s site needed to present a broad service portfolio with the professionalism and warmth their clients expect.",
    challenge: [
      "Organize a diverse offering—outplacement, leadership coaching, corporate culture consulting, early-career programs, and women’s advancement—into a clear, navigable site structure.",
      "Communicate a values-driven mission: fulfillment at work, capable leaders, and thriving organizational cultures.",
      "Deliver a trustworthy, accessible marketing site that works seamlessly on desktop, tablet, and mobile.",
      "Build a WordPress foundation the CLE team could extend as programs, academies, and service pages evolved.",
    ],
    approach: [
      "Structured the site around CLE’s core promise—empowering careers, elevating leaders, and cultivating excellence.",
      "Designed service-led pages for outplacement, leadership training, coaching, culture consulting, college preparedness, and Advancing Women with scannable benefits and clear CTAs.",
      "Developed modular WordPress templates so program pages, contact flows, and content updates could be managed in-house.",
      "Validated layouts across desktop, laptop, tablet, and mobile throughout QA using multi-device mockups.",
      "Collaborated with CLE Indy to ensure the site reflected their standard of leadership excellence and human-centered approach.",
    ],
    outcomes: [
      "A launch-ready marketing site at cleindy.com that presents CLE’s services, mission, and contact pathways in one cohesive experience.",
      "Responsive layouts proven across desktop, laptop, tablet, and phone form factors.",
      "A scalable WordPress build ready for new programs, academy content, and service expansions.",
      "A digital presence aligned with CLE’s vision—transforming people and workplaces through values-driven leadership.",
    ],
  },
  showcase: {
    eyebrow: "Responsive delivery",
    title: "Built to look sharp on every screen",
    galleryTitle: "CLE Indy across devices",
  },
};
