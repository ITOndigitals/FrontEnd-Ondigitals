import React, { useEffect } from "react";
import IntroCaseStudyDetail from "./components/IntroCaseStudyDetail/IntroCaseStudyDetail";
import OverViewCaseStudyDetail from "./components/OverViewCaseStudyDetail/OverViewCaseStudyDetail";
import CampaignResults from "./components/CampaignResults/CampaignResults";
import { useBoundStore } from "@/store/useBoundStore";
import CaseStudyKLD from "./components/CaseStudyKLD/CaseStudyKLD";
import CaseStudyKundal from "./components/CaseStudyKundal/CaseStudyKundal";
import CaseStudyDucati from "./components/CaseStudyDucati/CaseStudyDucati";
import CaseStudyPassion from "./components/CaseStudyPassion/CaseStudyPassion";

const DUMMY_EXTEND_COMPONENTS_TYPE = 3;

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

  const extendComponentType = DUMMY_EXTEND_COMPONENTS_TYPE;

  return (
    <>
      <IntroCaseStudyDetail />
      <OverViewCaseStudyDetail />
      <CampaignResults />
      {extendComponentType === 0 && <CaseStudyKundal/>}
      {extendComponentType === 2 && <CaseStudyKLD />}
      {extendComponentType === 3 && <CaseStudyDucati/>}
      {extendComponentType === 4 && <CaseStudyPassion/>}
    </>
  );
}
