import React, { useEffect } from "react";
import IntroServiceDetail from "./components/IntroServiceDetail/IntroServiceDetail";
import { useBoundStore } from "@/store/useBoundStore";
import ContentServiceDetail from "./components/ContentServiceDetail/ContentServiceDetail";
import ClientFeedbacks from "./components/ClientFeedbacks/ClientFeedbacks";
import NeedHelpDigitalGrowth from "../ui/NeedHelpDigitalGrowth/NeedHelpDigitalGrowth";

export default function ServiceDetail() {
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
      <IntroServiceDetail />
      <ContentServiceDetail/>
      <ClientFeedbacks/>
      <NeedHelpDigitalGrowth/>
    </>
  );
}
