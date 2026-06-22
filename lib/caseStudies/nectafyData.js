import { caseStudyImage } from "../caseStudyAssets";

const SLUG = "nectafy";

export const NECTAFY_CASE_STUDY = {
  slug: SLUG,
  name: "Nectafy",
  domain: "nectafy.com",
  siteUrl: "https://nectafy.com",
  heroTitle: "Nectafy",
  heroIntro:
    "Nectafy is a human content marketing agency that turns expert conversations into credible video and written content—without scripts, filters, or sales vibes. Eyrion partnered with Nectafy to design and develop a WordPress marketing site that communicates their Content Credibility and HumanContent offerings with clarity, authenticity, and a polished responsive experience across every device.",
  meta: {
    industry: ["Content Marketing", "B2B Thought Leadership"],
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
      "Ongoing content support",
    ],
    timeline: ["Multi-phase engagement", "Editorial-first delivery"],
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
    { src: caseStudyImage(SLUG, "all-devices-white"), alt: "Nectafy website on desktop, tablet, and mobile — light background", featured: true },
    { src: caseStudyImage(SLUG, "all-devices-black"), alt: "Nectafy responsive website mockup on dark background", featured: true },
    { src: caseStudyImage(SLUG, "desktop"), alt: "Nectafy desktop website design" },
    { src: caseStudyImage(SLUG, "laptop"), alt: "Nectafy laptop website mockup" },
    { src: caseStudyImage(SLUG, "3-devices-white"), alt: "Nectafy website across three devices" },
    { src: caseStudyImage(SLUG, "3-devices-black"), alt: "Nectafy multi-device presentation on dark background" },
    { src: caseStudyImage(SLUG, "tablet-white"), alt: "Nectafy tablet experience" },
    { src: caseStudyImage(SLUG, "tablet-black"), alt: "Nectafy tablet mockup on dark background" },
    { src: caseStudyImage(SLUG, "mobile-white"), alt: "Nectafy mobile website design" },
    { src: caseStudyImage(SLUG, "mobile-black"), alt: "Nectafy mobile mockup on dark background" },
  ],
  story: {
    storyHeading: "Authentic content, built to earn trust",
    clientOverview:
      "Nectafy helps experts and organizations turn what they know into consistent, credible content—through conversation-first workflows that produce video, blogs, case studies, and long-form thought leadership without the hype. Their site needed to reflect that positioning: human, direct, and professional, with clear paths for individual leaders (Content Credibility) and teams (HumanContent).",
    challenge: [
      "Communicate a differentiated anti-hype positioning in a market saturated with generic content marketing promises.",
      "Present two distinct offerings—Content Credibility for individual experts and HumanContent for teams—without confusing visitors.",
      "Design a site that feels authentic and editorial, matching Nectafy’s emphasis on trust, voice, and thoughtful visibility.",
      "Deliver a fast, responsive WordPress build the Nectafy team could grow as services and insights evolved.",
    ],
    approach: [
      "Structured the site around Nectafy’s core narrative—turning expertise into credibility through natural conversation, not scripts or performance.",
      "Designed clear service pathways for Content Credibility and HumanContent with scannable proof points and editorial-quality typography.",
      "Built modular WordPress templates for service pages, thought leadership, and conversion flows so content could scale with the team.",
      "Validated layouts across desktop, laptop, tablet, and mobile throughout QA using multi-device mockups.",
      "Collaborated iteratively with Nectafy to ensure the site felt true to their voice: professional, credible, and unmistakably human.",
    ],
    outcomes: [
      "A launch-ready marketing site at nectafy.com that presents Nectafy’s credibility engine positioning and service lines in one cohesive experience.",
      "Responsive layouts proven across desktop, laptop, tablet, and phone form factors.",
      "A scalable WordPress foundation ready for new service expansions, blog content, and lead-generation updates.",
      "A site that reinforces Nectafy’s promise: consistent, authentic content powered by real human expertise.",
    ],
  },
  showcase: {
    eyebrow: "Responsive delivery",
    title: "Built to look sharp on every screen",
    galleryTitle: "Nectafy across devices",
  },
};
