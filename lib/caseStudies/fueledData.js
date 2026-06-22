import { caseStudyImage } from "../caseStudyAssets";

const SLUG = "fueled";

export const FUELED_CASE_STUDY = {
  slug: SLUG,
  name: "Fueled",
  domain: "fueled.com",
  siteUrl: "https://fueled.com",
  heroTitle: "Fueled",
  heroIntro:
    "Fueled is a digital product agency delivering strategy, AI, mobile apps, and enterprise web experiences for brands like Google, Microsoft, Apple, and the White House. Eyrion partnered with Fueled to design and develop a high-performance marketing site that showcases their expertise, flagship work, and platform partnerships—with a polished responsive experience across every device.",
  meta: {
    industry: ["Digital Agency", "Enterprise Web & Mobile"],
    services: [
      "WordPress website design",
      "Custom theme development",
      "Case study & work showcase",
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
    timeline: ["Multi-phase engagement", "Enterprise-grade delivery"],
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
    { src: caseStudyImage(SLUG, "all-devices-white"), alt: "Fueled website on desktop, tablet, and mobile — light background", featured: true },
    { src: caseStudyImage(SLUG, "all-devices-black"), alt: "Fueled responsive website mockup on dark background", featured: true },
    { src: caseStudyImage(SLUG, "desktop"), alt: "Fueled desktop website design" },
    { src: caseStudyImage(SLUG, "laptop"), alt: "Fueled laptop website mockup" },
    { src: caseStudyImage(SLUG, "3-devices-white"), alt: "Fueled website across three devices" },
    { src: caseStudyImage(SLUG, "3-devices-black"), alt: "Fueled multi-device presentation on dark background" },
    { src: caseStudyImage(SLUG, "tablet-white"), alt: "Fueled tablet experience" },
    { src: caseStudyImage(SLUG, "tablet-black"), alt: "Fueled tablet mockup on dark background" },
    { src: caseStudyImage(SLUG, "mobile-white"), alt: "Fueled mobile website design" },
    { src: caseStudyImage(SLUG, "mobile-black"), alt: "Fueled mobile mockup on dark background" },
  ],
  story: {
    storyHeading: "Digital done right, at enterprise scale",
    clientOverview:
      "Fueled helps ambitious organizations ship impact—combining digital strategy, AI, award-winning mobile apps, and enterprise WordPress delivery for clients ranging from global tech leaders to high-stakes public-sector launches. Their site needed to communicate that breadth with confidence: sharp positioning, proof through flagship case studies, and a editorial system flexible enough for a team that publishes regularly.",
    challenge: [
      "Present a wide capability set—AI, mobile, web, growth, and CMS expertise—without overwhelming visitors or diluting the brand.",
      "Showcase marquee client work (Google Site Kit, WhiteHouse.gov, Apple, Microsoft, and more) in a format that feels premium and scannable.",
      "Deliver a fast, responsive marketing site that reflects Fueled’s “precision execution” positioning on every breakpoint.",
      "Build a WordPress foundation the Fueled team could extend as new work, partnerships, and insights were published.",
    ],
    approach: [
      "Structured the site around clear service pillars and proof points—expertise, platforms, and featured case studies—aligned to Fueled’s “Digital Done Right” narrative.",
      "Designed bold typography and work-led sections that put flagship projects front and center while keeping navigation intuitive.",
      "Developed modular page templates for services, work, blog, and platform partnerships so content could scale without rework.",
      "Validated layouts across desktop, laptop, tablet, and mobile throughout QA using multi-device mockups.",
      "Collaborated closely with the Fueled team through iterative reviews to match their quality bar and delivery pace.",
    ],
    outcomes: [
      "A launch-ready marketing site at fueled.com that presents Fueled’s services, flagship work, and technology partnerships in one cohesive experience.",
      "Responsive layouts proven across desktop, laptop, tablet, and phone form factors.",
      "A scalable WordPress build ready for new case studies, blog posts, and service expansions.",
      "A site that reflects Fueled’s enterprise credibility—from WordPress VIP leadership to AI and mobile excellence.",
    ],
  },
  showcase: {
    eyebrow: "Responsive delivery",
    title: "Built to look sharp on every screen",
    galleryTitle: "Fueled across devices",
  },
};
