/**
 * Resolve per-page image URLs from pageImageAllocations (unique per page).
 */

import { eyrionPic } from "./siteImages";
import { PAGE_IMAGE_SLOTS } from "./pageImageAllocations";

/** @param {string} pageKey @param {string} section @param {number} [index] */
export function getPagePicNum(pageKey, section, index = 0) {
  const slots = PAGE_IMAGE_SLOTS[pageKey]?.[section];
  if (slots == null) return 1;
  if (Array.isArray(slots)) return slots[index] ?? slots[0];
  return slots;
}

/** @param {string} pageKey @param {string} section @param {number} [index] */
export function getPagePic(pageKey, section, index = 0) {
  return eyrionPic(getPagePicNum(pageKey, section, index));
}

/** @param {string} pageKey @param {string} section */
export function getPageSectionPics(pageKey, section) {
  const slots = PAGE_IMAGE_SLOTS[pageKey]?.[section];
  if (slots == null) return [eyrionPic(1)];
  if (Array.isArray(slots)) return slots.map((n) => eyrionPic(n));
  return [eyrionPic(slots)];
}

const UNLOCKING_CARD_META = [
  {
    id: "work",
    label: "FEATURED PROJECTS",
    href: "/work",
    alt: "Eyrion WordPress project work",
  },
  {
    id: "team",
    label: "OUR TEAM",
    href: "/about-us",
    alt: "Eyrion team collaboration",
  },
];

/** @param {string} pageKey */
export function getUnlockingImageCards(pageKey) {
  const slots = PAGE_IMAGE_SLOTS[pageKey]?.unlocking;
  const nums = Array.isArray(slots) ? slots : [slots ?? 1, 2];
  return UNLOCKING_CARD_META.map((card, i) => ({
    ...card,
    src: eyrionPic(nums[i] ?? nums[0]),
  }));
}

const ICOMAT_SOLUTION_META = [
  {
    id: "production",
    label: "WordPress website design",
    href: "/wordpress/design",
    alt: "Design team presenting a WordPress website concept",
  },
  {
    id: "design",
    label: "WordPress development",
    href: "/wordpress/development",
    alt: "Developers collaborating on WordPress code",
  },
  {
    id: "tailored",
    label: "Hosting, support, and SEO",
    href: "/wordpress/hosting",
    alt: "Digital infrastructure and performance engineering",
  },
];

/** @param {string} pageKey */
export function getIcomatSolutionCards(pageKey) {
  const slots = PAGE_IMAGE_SLOTS[pageKey]?.icomatSolutions;
  const nums = Array.isArray(slots) ? slots : [1, 2, 3];
  return ICOMAT_SOLUTION_META.map((card, i) => ({
    ...card,
    src: eyrionPic(nums[i] ?? nums[0]),
  }));
}

const HOW_WE_OPERATE_ALTS = [
  "Eyrion design and development workflow",
  "Eyrion quality review and support process",
];

/** @param {string} pageKey */
export function getHowWeOperateImages(pageKey) {
  const slots = PAGE_IMAGE_SLOTS[pageKey]?.howWeOperate ?? [1, 2];
  const nums = Array.isArray(slots) ? slots : [slots];
  return nums.map((n, i) => ({
    src: eyrionPic(n),
    alt: HOW_WE_OPERATE_ALTS[i] ?? "Eyrion team at work",
  }));
}

/** @param {string} pageKey */
export function getHeroBackgroundPic(pageKey) {
  return getPagePic(pageKey, "hero");
}

/** @param {string} pageKey */
export function getRtsCombinedCardPics(pageKey) {
  return getPageSectionPics(pageKey, "rtsCombinedCards");
}

/** @param {string} pageKey */
export function getRtsCombinedPanelPic(pageKey) {
  return getPagePic(pageKey, "rtsCombinedPanel");
}

/** @param {string} pageKey */
export function getCustomerSectionImages(pageKey) {
  return {
    background: getPagePic(pageKey, "customerBackground"),
    modal: getPagePic(pageKey, "customerModal"),
  };
}

/** @param {string} pageKey @param {number} [index] */
export function getRtsRevolutionCardPic(pageKey, index = 0) {
  return getPagePic(pageKey, "rtsRevolution", index);
}

/** @param {string} pageKey — uses panel image when no dedicated showcase slot */
export function getCompositeShowcasePic(pageKey) {
  const showcase = PAGE_IMAGE_SLOTS[pageKey]?.compositeShowcase;
  if (showcase != null) return getPagePic(pageKey, "compositeShowcase");
  return getRtsCombinedPanelPic(pageKey);
}
