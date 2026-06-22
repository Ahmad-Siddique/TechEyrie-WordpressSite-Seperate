/**
 * Map Next.js route paths to page allocation keys (images + content videos).
 */

/** @param {string} pathname — e.g. "/icomat1/wordpress/design" */
export function pageKeyFromPathname(pathname) {
  if (!pathname) return null;
  const path = pathname.replace(/\/$/, "") || "/";

  if (path === "/" || path === "/icomat1") return "homepage";
  if (path === "/home1") return "home1";
  if (path === "/icomat") return "icomat";
  if (path === "/icomat-work" || path === "/icomat1-work") return "icomatWork";
  if (path === "/icomat1-about-us") return "aboutUs";
  if (path === "/blog") return "blog";
  if (path === "/wordpress") return "wordpress";
  if (path === "/why-eyrion") return "whyEyrion";

  const portfolioMatch = path.match(/^\/portfolio\/([^/]+)$/);
  if (portfolioMatch) return `portfolio-${portfolioMatch[1]}`;

  const caseStudyMatch = path.match(/^\/case-studies\/([^/]+)$/);
  if (caseStudyMatch) return `case-study-${caseStudyMatch[1]}`;

  const wpMatch = path.match(/^\/icomat1\/wordpress\/([^/]+)$/);
  if (wpMatch) return `wp-${wpMatch[1]}`;

  const wpShortMatch = path.match(/^\/wordpress\/([^/]+)$/);
  if (wpShortMatch) return `wp-${wpShortMatch[1]}`;

  return null;
}
