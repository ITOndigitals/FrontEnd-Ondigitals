import React, { useEffect } from "react";
import IntroCaseStudyPage from "./components/IntroCaseStudyPage/IntroCaseStudyPage";
import { useBoundStore } from "@/store/useBoundStore";
import NeedHelpDigitalGrowth from "../ui/NeedHelpDigitalGrowth/NeedHelpDigitalGrowth";
import dynamic from "next/dynamic";
import CountryList from "./components/CountryList/CountryList";

const CaseStudy = dynamic(() => import("./components/CaseStudy/CaseStudy"), {
  ssr: true,
});

export default function CaseStudyPage({ data }) {
  const { pageBy, allCaseStudy } = data;
  const { cta, pageCaseStudy, listCountry } = pageBy;
  const combinedData = { ...pageCaseStudy, ...allCaseStudy };
  const setToLight = useBoundStore((state) => state.setToLight);
  const setHeaderCanChangeColor = useBoundStore(
    (state) => state.setHeaderCanChangeColor
  );
  const setBottomNavIsShown = useBoundStore(
    (state) => state.setBottomNavIsShown
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
      setHeaderCanChangeColor();
      setToLight();
      setBottomNavIsShown(true);
      header.classList.remove("hide");
    }
  }, []);

  return (
    <>
      <IntroCaseStudyPage data={pageCaseStudy.sectionIntro} />
      <CaseStudy data={combinedData} />
      {listCountry && <CountryList data={listCountry} />}
      <NeedHelpDigitalGrowth data={cta} />
    </>
  );
}
