import React, { useEffect } from "react";
import IntroCaseStudyDetail from "./components/IntroCaseStudyDetail/IntroCaseStudyDetail";
import OverViewCaseStudyDetail from "./components/OverViewCaseStudyDetail/OverViewCaseStudyDetail";
import CampaignResults from "./components/CampaignResults/CampaignResults";
import { useBoundStore } from "@/store/useBoundStore";

export default function CaseStudyDetail() {
  const setToDark = useBoundStore((state) => state.setToDark);
  const setToLight = useBoundStore((state) => state.setToLight);

  const headerIsDark = useBoundStore((state) => state.isDark);
  const setHeaderCanChangeColor = useBoundStore(
    (state) => state.setHeaderCanChangeColor
  );
  const setHeaderStickyState = useBoundStore(
    (state) => state.setHeaderStickyState
  );
  const setChangeStickyIsAllowed = useBoundStore(
    (state) => state.setChangeStickyIsAllowed
  );
  const setIsInSubPageState = useBoundStore(
    (state) => state.setIsInSubPageState
  );

  useEffect(() => {
    setHeaderStickyState(false);
    setChangeStickyIsAllowed(true);
    setIsInSubPageState(true);
    const header = document.querySelector(".main-header-g");
    if (header) {
      header.classList.remove("hide");
    }
    setHeaderCanChangeColor();
    setToLight();
  }, [headerIsDark]);

  return (
    <>
      <IntroCaseStudyDetail />
      <OverViewCaseStudyDetail />
      <CampaignResults/>
    </>
  );
}
