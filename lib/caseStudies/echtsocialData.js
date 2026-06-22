import { caseStudyImage } from "../caseStudyAssets";

const SLUG = "echtsocial";

export const ECHTSOCIAL_CASE_STUDY = {
  slug: SLUG,
  name: "Echt Social",
  domain: "echtsocial.com",
  siteUrl: "https://echtsocial.com",
  heroTitle: "Echt Social",
  heroIntro:
    "Echt Social is a boutique digital marketing agency in Sri Lanka championing uniqueness—delivering social media marketing, graphic design, SEO, PPC, and content marketing with a genuinely creative edge. Eyrion partnered with Echt to design and develop a WordPress marketing site that captures their bold personality, service depth, and client-first values with a polished responsive experience across every device.",
  meta: {
    industry: ["Digital Marketing", "Creative Agency"],
    services: [
      "WordPress website design",
      "Custom theme development",
      "Service page architecture",
      "Responsive UI implementation",
      "Performance optimization",
    ],
    milestones: [
      "Discovery & brand alignment",
      "Design system & page templates",
      "Development & cross-device QA",
      "Launch & handoff",
      "Ongoing iteration support",
    ],
    timeline: ["Multi-phase engagement", "Boutique agency delivery"],
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
    { src: caseStudyImage(SLUG, "all-devices-white"), alt: "Echt Social website on desktop, tablet, and mobile — light background", featured: true },
    { src: caseStudyImage(SLUG, "all-devices-black"), alt: "Echt Social responsive website mockup on dark background", featured: true },
    { src: caseStudyImage(SLUG, "desktop"), alt: "Echt Social desktop website design" },
    { src: caseStudyImage(SLUG, "laptop"), alt: "Echt Social laptop website mockup" },
    { src: caseStudyImage(SLUG, "3-devices-white"), alt: "Echt Social website across three devices" },
    { src: caseStudyImage(SLUG, "3-devices-black"), alt: "Echt Social multi-device presentation on dark background" },
    { src: caseStudyImage(SLUG, "tablet-white"), alt: "Echt Social tablet experience" },
    { src: caseStudyImage(SLUG, "tablet-black"), alt: "Echt Social tablet mockup on dark background" },
    { src: caseStudyImage(SLUG, "mobile-white"), alt: "Echt Social mobile website design" },
    { src: caseStudyImage(SLUG, "mobile-black"), alt: "Echt Social mobile mockup on dark background" },
  ],
  story: {
    storyHeading: "A breath of fresh air in digital marketing",
    clientOverview:
      "Echt Social set out to be the antithesis of mundane marketing—a boutique Sri Lankan agency where hand-picked experts bring quirk, creativity, and truly customised strategies to every client. From social media management and scroll-stopping graphic design to SEO, PPC, and content marketing, their site needed to feel as distinctive and genuine as their name promises. (“Echt” means authentic in German.)",
    challenge: [
      "Communicate a playful, boutique brand personality without sacrificing clarity around core services—social, design, SEO, and content.",
      "Structure service pages that explain complex offerings (organic social growth, keyword strategy, campaign creative) in a scannable, conversion-friendly way.",
      "Deliver a fast, responsive site that reflects Echt’s values: genuine, proactive, flexible, reliable, and quality-focused.",
      "Build a WordPress foundation the Echt team could update as case studies, careers, and service lines evolved.",
    ],
    approach: [
      "Anchored the site around Echt’s positioning as a digital marketing agency championing uniqueness—not one-size-fits-all packages.",
      "Designed bold, attention-grabbing layouts with clear pathways to social media marketing, graphic design, SEO/PPC, and content services.",
      "Developed modular WordPress templates for service detail, case studies, testimonials, and careers so the team could scale content in-house.",
      "Validated layouts across desktop, laptop, tablet, and mobile throughout QA using multi-device mockups.",
      "Collaborated iteratively to ensure the site felt unmistakably Echt: creative, direct, and genuinely client-first.",
    ],
    outcomes: [
      "A launch-ready marketing site at echtsocial.com that presents Echt’s services, culture, and client proof in one cohesive experience.",
      "Responsive layouts proven across desktop, laptop, tablet, and phone form factors.",
      "A scalable WordPress build ready for new case studies, career listings, and service expansions.",
      "A digital presence that matches Echt’s promise—the breath of fresh air Sri Lankan brands have been looking for.",
    ],
    quote:
      "Been working with Echt for close to a year now, and the team has been absolutely reliable—which to me is a hard trait to find. Deadlines, meetings, promises, and all work and changes has been attended to in an incredibly efficient and timely manner.",
    quoteAuthor: "Rahil Gomes — Senior Manager, Branding, Creative & Design",
  },
  showcase: {
    eyebrow: "Responsive delivery",
    title: "Built to look sharp on every screen",
    galleryTitle: "Echt Social across devices",
  },
};
