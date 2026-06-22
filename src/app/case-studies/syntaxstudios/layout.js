import { SYNTAXSTUDIOS_CASE_STUDY } from "../../../../lib/caseStudies/syntaxstudiosData";

export const metadata = {
  title: `${SYNTAXSTUDIOS_CASE_STUDY.name} Case Study | Eyrion`,
  description: SYNTAXSTUDIOS_CASE_STUDY.heroIntro,
};

export default function SyntaxStudiosLayout({ children }) {
  return children;
}
