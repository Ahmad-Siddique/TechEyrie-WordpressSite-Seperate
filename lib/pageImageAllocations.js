/**
 * Per-page eyrion slot numbers — no duplicate slots on the same page.
 * Video cards / hero videos are excluded (see siteVideos.js).
 */

import { EYRION_PIC_MAX } from "./siteImages";

/** Newest brand photography — prioritized on homepage and key pages */
export const PRIMARY_EYRION_SLOTS = [32, 33, 34, 35, 36, 37];

/** @param {number} start — 1-based first slot @param {number} count */
export function consecutiveSlots(start, count) {
  const out = [];
  for (let i = 0; i < count; i++) {
    out.push(((start - 1 + i) % EYRION_PIC_MAX) + 1);
  }
  return out;
}

/** @param {number} start @param {Record<string, number>} sections */
function buildBundle(start, sections) {
  let cursor = start;
  const bundle = {};
  for (const [key, count] of Object.entries(sections)) {
    if (count === 1) {
      bundle[key] = ((cursor - 1) % EYRION_PIC_MAX) + 1;
      cursor += 1;
    } else {
      bundle[key] = consecutiveSlots(cursor, count);
      cursor += count;
    }
  }
  return bundle;
}

export const WP_SERVICE_SLUGS = [
  "design",
  "development",
  "hosting",
  "maintainance",
  "maintenance",
  "support",
  "security",
  "speed-optimization",
  "search-engine-optimization",
  "migration",
  "backups",
  "convert",
  "compliance",
  "ada-compliance",
  "gdpr-compliance",
  "pci-compliance",
  "elementor",
  "divi",
  "theme",
  "woocommerce",
  "marketing-pro",
  "premium-support",
  "retained-services",
  "white-label-wordpress",
  "sell-my-design-company",
];

const wpBundles = Object.fromEntries(
  WP_SERVICE_SLUGS.map((slug, i) => {
    const start = 1 + ((i * 13) % EYRION_PIC_MAX);
    const bundle = buildBundle(start, {
      unlocking: 2,
      endToEnd: 7,
      supportHighlight: 1,
      icomatSolutions: 3,
    });
    if (i < PRIMARY_EYRION_SLOTS.length) {
      bundle.supportHighlight = PRIMARY_EYRION_SLOTS[i];
    }
    return [`wp-${slug}`, bundle];
  }),
);

/** @type {Record<string, Record<string, number | number[]>>} */
export const PAGE_IMAGE_SLOTS = {
  homepage: {
    howWeOperate: [32, 33],
    icomatSolutions: [34, 35, 36],
    industries: [37, 1, 2, 3, 4],
    unlocking: [5, 6],
    endToEnd: consecutiveSlots(8, 12),
  },
  aboutUs: {
    hero: 20,
    unlocking: [33, 34],
    endToEnd: consecutiveSlots(10, 7),
  },
  icomat: {
    howWeOperate: [35, 36],
    icomatSolutions: [32, 33, 34],
    industries: consecutiveSlots(5, 4),
    unlocking: [37, 1],
    endToEnd: consecutiveSlots(9, 7),
  },
  "case-study-syntaxstudios": { endToEnd: consecutiveSlots(8, 8), showcase: [32, 33] },
  "case-study-fueled": { endToEnd: consecutiveSlots(9, 8), showcase: [34, 35] },
  "case-study-nectafy": { endToEnd: consecutiveSlots(10, 8), showcase: [36, 37] },
  "case-study-fadna": { endToEnd: consecutiveSlots(11, 8), showcase: [32, 33] },
  "case-study-echtsocial": { endToEnd: consecutiveSlots(12, 9), showcase: [34, 35] },
  "case-study-cleindy": { endToEnd: consecutiveSlots(13, 10), showcase: [36, 37] },
  "case-study-brincdrones": { endToEnd: consecutiveSlots(14, 11), showcase: [32, 33] },
  "case-study-ufomammoot": { endToEnd: consecutiveSlots(15, 12), showcase: [34, 35] },
  "portfolio-hrchitect": { endToEnd: consecutiveSlots(10, 7), showcase: [32, 33] },
  "portfolio-tiger": { endToEnd: consecutiveSlots(11, 7), showcase: [34, 35] },
  "portfolio-azelis-aes": { endToEnd: consecutiveSlots(17, 7), showcase: [36, 37] },
  "portfolio-acertus": buildBundle(24, { endToEnd: 7, showcase: 2 }),
  icomatWork: {
    projects: [32, 33, 34, 35, 36, 37, 1, 2, 3, 4, 5, 6],
  },
  blog: {
    listing: [32, 33, 34, 35, 36, 37, 13, 14, 15, 16, 17, 18],
  },
  wordpress: {
    icomatSolutions: [32, 33, 34],
    unlocking: [35, 36],
    endToEnd: [37, ...consecutiveSlots(1, 6)],
  },
  whyEyrion: {
    endToEnd: [35, 36, 37, ...consecutiveSlots(15, 4)],
  },
  home1: {
    hero: 32,
    rtsCombinedCards: [33, 34, 35, 36, 37, 1],
    rtsCombinedPanel: 2,
    customerBackground: 3,
    customerModal: 4,
    howWeOperate: [5, 6],
    icomatSolutions: [7, 8, 9],
    industries: [10, 11, 12, 13, 14],
    unlocking: [15, 16],
    endToEnd: consecutiveSlots(17, 12),
    rtsRevolution: [18, 19],
  },
  "wp-premium-support1": {
    hero: 37,
    customerBackground: 1,
    customerModal: 2,
    unlocking: [32, 33],
    endToEnd: consecutiveSlots(4, 7),
    supportHighlight: 34,
    icomatSolutions: [35, 36, 5],
  },
  ...wpBundles,
};
