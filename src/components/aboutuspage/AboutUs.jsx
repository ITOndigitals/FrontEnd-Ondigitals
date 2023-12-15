import { useEffect } from "react";
import IntroAboutUs from "./components/IntroAboutUs/IntroAboutUs";
import { useBoundStore } from "@/store/useBoundStore";
import BestDigitalMarketing from "./components/BestDigitalMarketing/BestDigitalMarketing";
import StepDigitalMarketing from "./components/StepDigitalMarketing/StepDigitalMarketing";
import OurTrustedPartner from "./components/OurTrustedPartner/OurTrustedPartner";
import ExploreTheExperience from "./components/ExploreTheExperience/ExploreTheExperience";
import NeedHelpDigitalGrowth from "../ui/NeedHelpDigitalGrowth/NeedHelpDigitalGrowth";
import IntroducingOnDigitals from "./components/IntroducingOnDigitals/IntroducingOnDigitals";

const AboutUs = ({ data }) => {
  const { pageBy, allCardReviews } = data;
  const {
    backgroundImage,
    imageLogo,
    textDescription,
    textHeading,
    sectionBestDigitalmarketing,
    sectionIntroducingOndigitals,
    sectionStepDigitalMarketing,
    sectionOurTrustedPartner,
    sectionExploreTheExperience,
  } = pageBy?.pageAboutUs;
  const dataIntro = {
    backgroundImage,
    imageLogo,
    textDescription,
    textHeading,
  };
  const dataExploreTheExperience = {
    sectionExploreTheExperience,
    allCardReviews,
  };
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
      <IntroAboutUs data={dataIntro} />
      {sectionIntroducingOndigitals && (
        <IntroducingOnDigitals data={sectionIntroducingOndigitals} />
      )}
      {sectionOurTrustedPartner && (
        <OurTrustedPartner data={sectionOurTrustedPartner} />
      )}
      {dataExploreTheExperience && (
        <ExploreTheExperience data={dataExploreTheExperience} />
      )}
      {sectionBestDigitalmarketing && (
        <BestDigitalMarketing data={sectionBestDigitalmarketing} />
      )}
      {sectionStepDigitalMarketing && (
        <StepDigitalMarketing data={sectionStepDigitalMarketing} />
      )}

      <NeedHelpDigitalGrowth />
    </>
  );
};

export default AboutUs;
