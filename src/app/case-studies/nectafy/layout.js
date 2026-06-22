import { NECTAFY_CASE_STUDY } from "../../../../lib/caseStudies/nectafyData";

export const metadata = {
  title: `${NECTAFY_CASE_STUDY.name} Case Study | Eyrion`,
  description: NECTAFY_CASE_STUDY.heroIntro,
};

export default function NectafyLayout({ children }) {
  return children;
}
