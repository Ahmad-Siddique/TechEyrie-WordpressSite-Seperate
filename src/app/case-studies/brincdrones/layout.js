import { BRINCDRONES_CASE_STUDY } from "../../../../lib/caseStudies/brincdronesData";

export const metadata = {
  title: `${BRINCDRONES_CASE_STUDY.name} Case Study | Eyrion`,
  description: BRINCDRONES_CASE_STUDY.heroIntro,
};

export default function BrincDronesLayout({ children }) {
  return children;
}
