import React, { useEffect } from "react";
import IntroService from "./components/IntroService/IntroService";
import { useBoundStore } from "@/store/useBoundStore";
import dynamic from "next/dynamic";

const AllServiceOndigitals = dynamic(() => import("./components/AllServiceOndigitals/AllServiceOndigitals"), { ssr: true });
const NeedHelpDigitalGrowth = dynamic(() => import("../ui/NeedHelpDigitalGrowth/NeedHelpDigitalGrowth"), { ssr: true });

export default function ServicePage({ data }) {
  const { pageBy } = data;
  const dataCTA = pageBy?.cta;
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
      <AllServiceOndigitals dataAllServices={data} />
      <NeedHelpDigitalGrowth data={dataCTA} />
    </>
  );
}
