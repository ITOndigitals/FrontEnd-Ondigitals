import React, { useEffect } from "react";
import HeroIndustriesPage from "./components/HeroIndustriesPage/HeroIndustriesPage";
import { useBoundStore } from "@/store/useBoundStore";
import IntroIndustriesPage from "./components/IntroIndustriesPage/IntroIndustriesPage";
import NeedHelpDigitalGrowth from "../ui/NeedHelpDigitalGrowth/NeedHelpDigitalGrowth";
import ListIndustriesPage from "./components/ListIndustriesPage/ListIndustriesPage";

export default function IndustriesPage({ data }) {
  const dataCTA = data?.pageBy?.cta;
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
      <HeroIndustriesPage data={data} />
      <IntroIndustriesPage data={data} />
      <ListIndustriesPage data={data}/>
      <NeedHelpDigitalGrowth data={dataCTA} />
    </>
  );
}
