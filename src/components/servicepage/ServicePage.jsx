import React from "react";
import IntroService from "./components/IntroService/IntroService";
import AllServiceOndigitals from "./components/AllServiceOndigitals/AllServiceOndigitals";
import NeedHelpDigitalGrowth from "../ui/NeedHelpDigitalGrowth/NeedHelpDigitalGrowth";
import CaseStudy from "./components/CaseStudy/CaseStudy";

export default function ServicePage() {
  return (
    <>
      <IntroService />
      <AllServiceOndigitals />
      <CaseStudy/>
      <NeedHelpDigitalGrowth />
    </>
  );
}
