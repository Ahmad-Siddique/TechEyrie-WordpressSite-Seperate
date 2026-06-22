/**
 * Homepage (/icomat1) image slots — unique per section (see pageImageAllocations).
 */

import { eyrionPic } from "./siteImages";
import { PAGE_IMAGE_SLOTS } from "./pageImageAllocations";
import { CUSTOMER_TESTIMONIALS } from "./customerTestimonials";
import {
  getHowWeOperateImages,
  getIcomatSolutionCards,
  getUnlockingImageCards,
} from "./pageImages";

const industryMeta = [
  {
    id: "services",
    label: "Services",
    heading: "Explore our\nWordPress website services.",
    subheading: "This is WordPress at its best.",
    alt: "Team workshop planning WordPress services",
  },
  {
    id: "testimonials",
    label: "Testimonials",
    heading: "Testimonials from\nhappy customers.",
    subheading: CUSTOMER_TESTIMONIALS[1].quote,
    alt: "Client team meeting at night",
  },
  {
    id: "projects",
    label: "Case studies",
    heading: "Featured projects",
    subheading: "Syntax Studios, Fueled, Nectafy, Fadna, Echt Social, CLE Indy, BRINC, UFOMAMMOOT, HRchitect, Tiger, Azelis A&ES, and Acertus.",
    alt: "Featured WordPress client projects and case studies",
  },
  {
    id: "technology",
    label: "Technology",
    heading: "Built for performance\nand scale.",
    subheading:
      "Secure hosting, speed optimization, and modern WordPress engineering for businesses across Qatar and the Gulf.",
    alt: "Digital engineering and performance",
  },
  {
    id: "flexibility",
    label: "How we work",
    heading: "A modern team,\nwherever you are.",
    subheading:
      "Distributed experts collaborating with your business — from Doha to Dubai, Riyadh, and beyond.",
    alt: "Professional working remotely on a laptop outdoors",
  },
];

const industrySlots = PAGE_IMAGE_SLOTS.homepage.industries;

export const HOMEPAGE_HOW_WE_OPERATE_IMAGES = getHowWeOperateImages("homepage");
export const HOMEPAGE_ICOMAT_SOLUTION_CARDS = getIcomatSolutionCards("homepage");
export const HOMEPAGE_UNLOCKING_IMAGE_CARDS = getUnlockingImageCards("homepage");

export const HOMEPAGE_INDUSTRIES = industryMeta.map((meta, i) => ({
  ...meta,
  src: eyrionPic(industrySlots[i]),
}));
