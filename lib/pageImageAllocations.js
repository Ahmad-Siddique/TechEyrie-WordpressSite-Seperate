/**
 * Per-page eyrion slot numbers — no duplicate slots on the same page.
 * Video cards / hero videos are excluded (see siteVideos.js).
 */

import { EYRION_PIC_MAX } from "./siteImages";

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
    return [
      `wp-${slug}`,
      buildBundle(start, {
        unlocking: 2,
        endToEnd: 7,
        supportHighlight: 1,
        icomatSolutions: 3,
      }),
    ];
  }),
);

/** @type {Record<string, Record<string, number | number[]>>} */
export const PAGE_IMAGE_SLOTS = {
  homepage: buildBundle(1, {
    howWeOperate: 2,
    icomatSolutions: 3,
    industries: 5,
    unlocking: 2,
    endToEnd: 7,
  }),
  aboutUs: buildBundle(20, {
    hero: 1,
    unlocking: 2,
    endToEnd: 7,
  }),
  icomat: buildBundle(5, {
    howWeOperate: 2,
    icomatSolutions: 3,
    industries: 4,
    unlocking: 2,
    endToEnd: 7,
  }),
  "portfolio-hrchitect": buildBundle(3, { endToEnd: 7, showcase: 2 }),
  "portfolio-tiger": buildBundle(10, { endToEnd: 7, showcase: 2 }),
  "portfolio-azelis-aes": buildBundle(17, { endToEnd: 7, showcase: 2 }),
  "portfolio-acertus": buildBundle(24, { endToEnd: 7, showcase: 2 }),
  icomatWork: buildBundle(1, {
    projects: 12,
  }),
  blog: buildBundle(13, {
    listing: 12,
  }),
  wordpress: buildBundle(8, {
    icomatSolutions: 3,
    unlocking: 2,
    endToEnd: 7,
  }),
  whyEyrion: buildBundle(15, {
    endToEnd: 7,
  }),
  home1: buildBundle(1, {
    hero: 1,
    rtsCombinedCards: 6,
    rtsCombinedPanel: 1,
    customerBackground: 1,
    customerModal: 1,
    howWeOperate: 2,
    icomatSolutions: 3,
    industries: 5,
    unlocking: 2,
    endToEnd: 7,
    rtsRevolution: 2,
  }),
  "wp-premium-support1": buildBundle(14, {
    hero: 1,
    customerBackground: 1,
    customerModal: 1,
    unlocking: 2,
    endToEnd: 7,
    supportHighlight: 1,
    icomatSolutions: 3,
  }),
  ...wpBundles,
};
