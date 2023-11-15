import React from "react";
import InDepthDetailsRenault from "./components/InDepthDetailsRenault/InDepthDetailsRenault";
import SeoContentRenault from "./components/SeoContentRenault/SeoContentRenault";
import ClientFeedbackRenault from "./components/ClientFeedbackRenault/ClientFeedbackRenault";

export default function CaseStudyRenault() {
  return (
    <>
      <InDepthDetailsRenault />
      <SeoContentRenault />
      <ClientFeedbackRenault/>
    </>
  );
}
