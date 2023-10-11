import React from "react";
import IntroCaseStudyDetail from "./components/IntroCaseStudyDetail/IntroCaseStudyDetail";
import OverViewCaseStudyDetail from "./components/OverViewCaseStudyDetail/OverViewCaseStudyDetail";
import CaseStudyKLD from "./components/CaseStudyKLD/CaseStudyKLD";

export default function CaseStudyDetail() {
  return (
    <>
      <IntroCaseStudyDetail />
      <OverViewCaseStudyDetail />
      <CaseStudyKLD />
    </>
  );
}
