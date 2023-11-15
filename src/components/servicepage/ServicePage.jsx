import React, { useEffect } from "react";
import IntroService from "./components/IntroService/IntroService";
import AllServiceOndigitals from "./components/AllServiceOndigitals/AllServiceOndigitals";
import NeedHelpDigitalGrowth from "../ui/NeedHelpDigitalGrowth/NeedHelpDigitalGrowth";
import { useBoundStore } from "@/store/useBoundStore";
import CaseStudyServicePage from "./components/CaseStudy/CaseStudy";

export default function ServicePage({ data }) {
  const { pageBy, services } = data;
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
      <IntroService data={pageBy} />
      <AllServiceOndigitals data={data} />
      <CaseStudyServicePage />
      <NeedHelpDigitalGrowth />
    </>
  );
}
