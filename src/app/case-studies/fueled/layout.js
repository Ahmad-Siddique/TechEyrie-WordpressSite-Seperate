import { FUELED_CASE_STUDY } from "../../../../lib/caseStudies/fueledData";

export const metadata = {
  title: `${FUELED_CASE_STUDY.name} Case Study | Eyrion`,
  description: FUELED_CASE_STUDY.heroIntro,
};

export default function FueledLayout({ children }) {
  return children;
}
