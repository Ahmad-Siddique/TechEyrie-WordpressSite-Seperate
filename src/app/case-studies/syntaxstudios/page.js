"use client";

import CaseStudyPage from "../../../../components/case-studies/CaseStudyPage";
import { SYNTAXSTUDIOS_CASE_STUDY } from "../../../../lib/caseStudies/syntaxstudiosData";

export default function SyntaxStudiosCaseStudyPage() {
  return (
    <CaseStudyPage
      caseStudy={SYNTAXSTUDIOS_CASE_STUDY}
      pageKey="case-study-syntaxstudios"
    />
  );
}
