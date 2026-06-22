"use client";

import CaseStudyPage from "../../../../components/case-studies/CaseStudyPage";
import { CLEINDY_CASE_STUDY } from "../../../../lib/caseStudies/cleindyData";

export default function CleindyCaseStudyPage() {
  return (
    <CaseStudyPage
      caseStudy={CLEINDY_CASE_STUDY}
      pageKey="case-study-cleindy"
    />
  );
}
