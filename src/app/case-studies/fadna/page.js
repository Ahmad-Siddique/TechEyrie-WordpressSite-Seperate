"use client";

import CaseStudyPage from "../../../../components/case-studies/CaseStudyPage";
import { FADNA_CASE_STUDY } from "../../../../lib/caseStudies/fadnaData";

export default function FadnaCaseStudyPage() {
  return (
    <CaseStudyPage
      caseStudy={FADNA_CASE_STUDY}
      pageKey="case-study-fadna"
    />
  );
}
