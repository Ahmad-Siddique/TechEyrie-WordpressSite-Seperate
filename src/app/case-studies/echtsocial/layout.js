import { ECHTSOCIAL_CASE_STUDY } from "../../../../lib/caseStudies/echtsocialData";

export const metadata = {
  title: `${ECHTSOCIAL_CASE_STUDY.name} Case Study | Eyrion`,
  description: ECHTSOCIAL_CASE_STUDY.heroIntro,
};

export default function EchtSocialLayout({ children }) {
  return children;
}
