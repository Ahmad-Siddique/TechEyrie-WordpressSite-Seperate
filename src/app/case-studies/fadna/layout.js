import { FADNA_CASE_STUDY } from "../../../../lib/caseStudies/fadnaData";

export const metadata = {
  title: `${FADNA_CASE_STUDY.name} Case Study | Eyrion`,
  description: FADNA_CASE_STUDY.heroIntro,
};

export default function FadnaLayout({ children }) {
  return children;
}
