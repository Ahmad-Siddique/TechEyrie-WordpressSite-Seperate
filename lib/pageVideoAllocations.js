/**
 * Per-page useful-video slot numbers — no duplicate slots on the same page.
 * Hero videos are excluded (see siteVideos.js).
 */

import { USEFUL_VIDEO_MAX } from "./siteVideos";
import { WP_SERVICE_SLUGS } from "./pageImageAllocations";

/** @param {number} start — 1-based first slot @param {number} count */
export function consecutiveVideoSlots(start, count) {
  const out = [];
  for (let i = 0; i < count; i++) {
    out.push(((start - 1 + i) % USEFUL_VIDEO_MAX) + 1);
  }
  return out;
}

/** @param {number} start @param {Record<string, number>} sections */
function buildVideoBundle(start, sections) {
  let cursor = start;
  const bundle = {};
  for (const [key, count] of Object.entries(sections)) {
    if (count === 1) {
      bundle[key] = ((cursor - 1) % USEFUL_VIDEO_MAX) + 1;
      cursor += 1;
    } else {
      bundle[key] = consecutiveVideoSlots(cursor, count);
      cursor += count;
    }
  }
  return bundle;
}

const wpVideoBundles = Object.fromEntries(
  WP_SERVICE_SLUGS.map((slug, i) => {
    const start = 1 + ((i * 5) % USEFUL_VIDEO_MAX);
    return [
      `wp-${slug}`,
      buildVideoBundle(start, {
        customerBackground: 1,
        customerModal: 1,
      }),
    ];
  }),
);

/** @type {Record<string, Record<string, number | number[]>>} */
export const PAGE_VIDEO_SLOTS = {
  homepage: (() => {
    const b = buildVideoBundle(1, {
      rtsCombinedCards: 6,
      rtsCombinedPanel: 1,
      customerBackground: 1,
      customerModal: 1,
      rtsRevolution: 2,
      compositeShowcase: 1,
    });
    // RTS panel only — swapped off useful-video-7
    b.rtsRevolution[1] = b.rtsCombinedPanel;
    b.rtsCombinedPanel = 11;
    return b;
  })(),
  icomat: buildVideoBundle(1, {
    rtsCombinedCards: 6,
    rtsCombinedPanel: 1,
    customerBackground: 1,
    customerModal: 1,
    rtsRevolution: 2,
    compositeShowcase: 1,
  }),
  icomatWork: buildVideoBundle(1, {
    rtsCombinedCards: 6,
    rtsCombinedPanel: 1,
    customerBackground: 1,
    customerModal: 1,
  }),
  "case-study-syntaxstudios": buildVideoBundle(5, { customerModal: 1 }),
  "case-study-fueled": buildVideoBundle(6, { customerModal: 1 }),
  "case-study-nectafy": buildVideoBundle(7, { customerModal: 1 }),
  "case-study-fadna": buildVideoBundle(8, { customerModal: 1 }),
  "case-study-echtsocial": buildVideoBundle(9, { customerModal: 1 }),
  "case-study-cleindy": buildVideoBundle(10, { customerModal: 1 }),
  "case-study-brincdrones": buildVideoBundle(11, { customerModal: 1 }),
  "case-study-ufomammoot": buildVideoBundle(12, { customerModal: 1 }),
  "portfolio-hrchitect": buildVideoBundle(1, { customerModal: 1 }),
  "portfolio-tiger": buildVideoBundle(2, { customerModal: 1 }),
  "portfolio-azelis-aes": buildVideoBundle(3, { customerModal: 1 }),
  "portfolio-acertus": buildVideoBundle(4, { customerModal: 1 }),
  ...wpVideoBundles,
};
