import { useEffect } from "react";
import IntroAboutUs from "./components/IntroAboutUs/IntroAboutUs";
import { useBoundStore } from "@/store/useBoundStore";
import BestDigitalMarketing from "./components/BestDigitalMarketing/BestDigitalMarketing";
import StepDigitalMarketing from "./components/StepDigitalMarketing/StepDigitalMarketing";
import OurTrustedPartner from "./components/OurTrustedPartner/OurTrustedPartner";
import ExploreTheExperience from "./components/ExploreTheExperience/ExploreTheExperience";
import NeedHelpDigitalGrowth from "../ui/NeedHelpDigitalGrowth/NeedHelpDigitalGrowth";
import IntroducingOnDigitals from "./components/IntroducingOnDigitals/IntroducingOnDigitals";

const AboutUs = () => {
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

  useEffect(() => {
    setHeaderStickyState(false);
    setChangeStickyIsAllowed(true);
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
      <IntroAboutUs />
      <IntroducingOnDigitals/>
      <BestDigitalMarketing />
      <StepDigitalMarketing />
      <OurTrustedPartner/>
      <ExploreTheExperience/>
      <NeedHelpDigitalGrowth/>
    </>
  );
};

export default AboutUs;
