"use client";

import CaseStudyPage from "../../../../components/case-studies/CaseStudyPage";
import { ECHTSOCIAL_CASE_STUDY } from "../../../../lib/caseStudies/echtsocialData";

export default function EchtSocialCaseStudyPage() {
  return (
    <CaseStudyPage
      caseStudy={ECHTSOCIAL_CASE_STUDY}
      pageKey="case-study-echtsocial"
    />
  );
}
