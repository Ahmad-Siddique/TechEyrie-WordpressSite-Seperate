/**
 * Site videos — /public/videos/
 * Hero backgrounds: services-hero (homepage + all other heroes).
 * Content sections / cards: useful-video-1 … useful-video-11.
 */

export const USEFUL_VIDEO_MAX = 11;

/** @param {number} n — 1-based slot (wraps to 1…11); slot 8 is disabled */
export function usefulVideo(n) {
  let num = Math.floor(Number(n) || 1);
  if (num === 8) num = 7; // USEFUL_VIDEO_8 removed — use 7 instead
  const slot = ((num - 1) % USEFUL_VIDEO_MAX + USEFUL_VIDEO_MAX) % USEFUL_VIDEO_MAX;
  return `/videos/useful-video-${slot + 1}.mp4`;
}

export const USEFUL_VIDEO_1 = usefulVideo(1);
export const USEFUL_VIDEO_2 = usefulVideo(2);
export const USEFUL_VIDEO_3 = usefulVideo(3);
export const USEFUL_VIDEO_4 = usefulVideo(4);
export const USEFUL_VIDEO_5 = usefulVideo(5);
export const USEFUL_VIDEO_6 = usefulVideo(6);
export const USEFUL_VIDEO_7 = usefulVideo(7);
// export const USEFUL_VIDEO_8 = usefulVideo(8); // removed from site
export const USEFUL_VIDEO_9 = usefulVideo(9);
export const USEFUL_VIDEO_10 = usefulVideo(10);
export const USEFUL_VIDEO_11 = usefulVideo(11);

export const USEFUL_VIDEOS = Array.from({ length: USEFUL_VIDEO_MAX }, (_, i) =>
  usefulVideo(i + 1),
);

/** @param {number} index — 0-based, wraps */
export function usefulVideoAt(index) {
  const i = ((Math.floor(index) % USEFUL_VIDEO_MAX) + USEFUL_VIDEO_MAX) % USEFUL_VIDEO_MAX;
  return USEFUL_VIDEOS[i];
}

/** Main homepage (icomat1) hero only */
export const HOMEPAGE_HERO_BACKGROUND_VIDEO =
  "/videos/services-hero-video.mp4";

/** Service pages, markets, blog, reviews, and other hero sections */
export const SERVICES_HERO_BACKGROUND_VIDEO =
  "/videos/services-hero-video.mp4";

/** @deprecated Prefer getPageVideo(pageKey, section) from pageVideos.js */
export const SECTION_BACKGROUND_VIDEO = USEFUL_VIDEO_3;
