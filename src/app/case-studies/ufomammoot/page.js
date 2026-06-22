"use client";

import CaseStudyPage from "../../../../components/case-studies/CaseStudyPage";
import { UFOMAMMOOT_CASE_STUDY } from "../../../../lib/caseStudies/ufomammootData";

export default function UfomammootCaseStudyPage() {
  return (
    <CaseStudyPage
      caseStudy={UFOMAMMOOT_CASE_STUDY}
      pageKey="case-study-ufomammoot"
    />
  );
}
