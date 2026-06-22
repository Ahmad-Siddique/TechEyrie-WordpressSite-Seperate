import { CLEINDY_CASE_STUDY } from "../../../../lib/caseStudies/cleindyData";

export const metadata = {
  title: `${CLEINDY_CASE_STUDY.name} Case Study | Eyrion`,
  description: CLEINDY_CASE_STUDY.heroIntro,
};

export default function CleindyLayout({ children }) {
  return children;
}
