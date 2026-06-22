"use client";

import CaseStudyPage from "../../../../components/case-studies/CaseStudyPage";
import { FUELED_CASE_STUDY } from "../../../../lib/caseStudies/fueledData";

export default function FueledCaseStudyPage() {
  return (
    <CaseStudyPage
      caseStudy={FUELED_CASE_STUDY}
      pageKey="case-study-fueled"
    />
  );
}
