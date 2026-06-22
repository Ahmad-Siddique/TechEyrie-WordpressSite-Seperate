import { caseStudyImage } from "../caseStudyAssets";

const SLUG = "fadna";

export const FADNA_CASE_STUDY = {
  slug: SLUG,
  name: "Fadna",
  domain: "fadna.com",
  siteUrl: "https://fadna.com",
  heroTitle: "Fadna",
  heroIntro:
    "Fadna is a Sri Lankan wellness brand blending ancient Ayurvedic wisdom with modern life science—functional herbal teas, health solutions, and beauty products trusted for over 20 years. Eyrion partnered with Fadna to design and develop a high-performance e-commerce site that showcases their brands, product ranges, and research-backed story with a polished responsive experience across every device.",
  meta: {
    industry: ["Wellness & Herbal Products", "E-commerce"],
    services: [
      "WordPress / Shopify storefront design",
      "Custom theme development",
      "Product catalog architecture",
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
    timeline: ["Multi-phase engagement", "Global wellness retail"],
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
    { src: caseStudyImage(SLUG, "all-devices-white"), alt: "Fadna website on desktop, tablet, and mobile — light background", featured: true },
    { src: caseStudyImage(SLUG, "all-devices-black"), alt: "Fadna responsive website mockup on dark background", featured: true },
    { src: caseStudyImage(SLUG, "desktop"), alt: "Fadna desktop website design" },
    { src: caseStudyImage(SLUG, "laptop"), alt: "Fadna laptop website mockup" },
    { src: caseStudyImage(SLUG, "3-devices-white"), alt: "Fadna website across three devices" },
    { src: caseStudyImage(SLUG, "3-devices-black"), alt: "Fadna multi-device presentation on dark background" },
    { src: caseStudyImage(SLUG, "tablet-white"), alt: "Fadna tablet experience" },
    { src: caseStudyImage(SLUG, "tablet-black"), alt: "Fadna tablet mockup on dark background" },
    { src: caseStudyImage(SLUG, "mobile-white"), alt: "Fadna mobile website design" },
    { src: caseStudyImage(SLUG, "mobile-black"), alt: "Fadna mobile mockup on dark background" },
  ],
  story: {
    storyHeading: "Nature's science, brought to a global audience",
    clientOverview:
      "For more than two decades, Fadna has pioneered functional herbal products—from lifestyle and medicinal teas to Fadna Life Science and Quality of Life wellness ranges—rooted in Sri Lankan Ayurveda and validated through modern research. Their site needed to communicate that depth of credibility while making it easy for customers to explore product lines, brand stories, and the science behind every blend.",
    challenge: [
      "Present a multi-brand portfolio (Fadna, Fadna Life Science, Quality of Life) with distinct product ranges without overwhelming shoppers.",
      "Convey research-backed credibility—FAREC, university partnerships, HACCP standards—alongside an inviting consumer brand experience.",
      "Deliver a fast, responsive e-commerce site that works flawlessly on desktop, tablet, and mobile for local and international customers.",
      "Build a scalable foundation for new product launches, blog content, and ongoing digital growth.",
    ],
    approach: [
      "Mapped customer journeys across tea ranges (lifestyle, medicinal, energy, traditional) and life-science product lines.",
      "Designed a warm, premium visual system that balances heritage storytelling with clear product discovery and purchase paths.",
      "Developed modular templates for brand pages, collections, product detail, and editorial content so Fadna could scale independently.",
      "Validated layouts across desktop, laptop, tablet, and mobile throughout QA using multi-device mockups.",
      "Optimized for performance and clarity so the site reflects Fadna’s promise: the essence of nature’s science.",
    ],
    outcomes: [
      "A launch-ready site at fadna.com that presents Fadna’s brands, product catalog, and wellness story in one cohesive experience.",
      "Responsive layouts proven across desktop, laptop, tablet, and phone form factors.",
      "A scalable e-commerce foundation ready for new collections, research updates, and global expansion.",
      "A digital presence that matches Fadna’s positioning—bridging ancient herbal wisdom with modern clinical precision.",
    ],
  },
  showcase: {
    eyebrow: "Responsive delivery",
    title: "Built to look sharp on every screen",
    galleryTitle: "Fadna across devices",
  },
};
