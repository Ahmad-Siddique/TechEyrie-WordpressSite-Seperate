/**
 * Eyrion brand photography — /public/pics/eyrion-1.png … eyrion-37.png
 * (eyrion-7.png may be missing; slot 7 uses eyrion-8.png)
 */

export const EYRION_PIC_MAX = 37;
const EYRION_7_FALLBACK = 8;

/** @param {number} n — 1–37 */
export function eyrionPic(n) {
  const num = Math.max(1, Math.min(EYRION_PIC_MAX, Math.floor(Number(n) || 1)));
  const fileNum = num === 7 ? EYRION_7_FALLBACK : num;
  return `/pics/eyrion-${fileNum}.png`;
}

/** All logical slots (index 0 = eyrion-1). */
export const EYRION_PICS = Array.from({ length: EYRION_PIC_MAX }, (_, i) =>
  eyrionPic(i + 1),
);

/** @param {number} index — 0-based, wraps */
export function eyrionPicAt(index) {
  const i = ((Math.floor(index) % EYRION_PIC_MAX) + EYRION_PIC_MAX) % EYRION_PIC_MAX;
  return EYRION_PICS[i];
}

export const DEFAULT_SITE_IMAGE = eyrionPic(32);

/** Pass-through for local paths (kept for existing call sites). */
export function siteImageUrl(src) {
  return src || DEFAULT_SITE_IMAGE;
}
