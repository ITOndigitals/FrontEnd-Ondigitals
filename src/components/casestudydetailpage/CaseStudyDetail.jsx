import React from "react";
import IntroCaseStudyDetail from "./components/IntroCaseStudyDetail/IntroCaseStudyDetail";
import OverViewCaseStudyDetail from "./components/OverViewCaseStudyDetail/OverViewCaseStudyDetail";
import CampaignResults from "./components/CampaignResults/CampaignResults";

export default function CaseStudyDetail() {
  return (
    <>
      <IntroCaseStudyDetail />
      <OverViewCaseStudyDetail />
      <CampaignResults/>
    </>
  );
}
