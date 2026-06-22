"use client";

import CaseStudyPage from "../../../../components/case-studies/CaseStudyPage";
import { BRINCDRONES_CASE_STUDY } from "../../../../lib/caseStudies/brincdronesData";

export default function BrincDronesCaseStudyPage() {
  return (
    <CaseStudyPage
      caseStudy={BRINCDRONES_CASE_STUDY}
      pageKey="case-study-brincdrones"
    />
  );
}
