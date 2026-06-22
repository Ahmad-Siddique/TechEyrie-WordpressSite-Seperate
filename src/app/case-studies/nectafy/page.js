"use client";

import CaseStudyPage from "../../../../components/case-studies/CaseStudyPage";
import { NECTAFY_CASE_STUDY } from "../../../../lib/caseStudies/nectafyData";

export default function NectafyCaseStudyPage() {
  return (
    <CaseStudyPage
      caseStudy={NECTAFY_CASE_STUDY}
      pageKey="case-study-nectafy"
    />
  );
}
