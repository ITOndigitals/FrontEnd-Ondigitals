import React, { useEffect } from "react";
import IntroCaseStudyDetail from "./components/IntroCaseStudyDetail/IntroCaseStudyDetail";
import { useBoundStore } from "@/store/useBoundStore";
import ResultsCaseStudyDetail from "./components/ResultsCaseStudyDetail/ResultsCaseStudyDetail";
import SectionDigitalsContent from "./components/SectionDigitalsContentCaseStudy/SectionDigitalsContentCaseStudy";
import CaseStudyViewMore from "./components/CaseStudyViewMore/CaseStudyViewMore";
import NeedHelpDigitalGrowth from "../ui/NeedHelpDigitalGrowth/NeedHelpDigitalGrowth";
import { useRouter } from "next/router";

export default function CaseStudyDetail({ data }) {
  if (!data) return null;
  const router = useRouter();
  const currentLanguage = router.locale.toUpperCase();
  const { caseStudyDetailPage, cta, translations } = data.caseStudyBy;
  const {
    sectionResults,
    sectionContentBody,
  } = caseStudyDetailPage;
  if (data.caseStudyBy) {
    const matchingTranslation = translations?.find(
      (translation) => translation.language.code === currentLanguage
    );
    useEffect(() => {
      if (matchingTranslation) {
        router.push(matchingTranslation.slug);
      } else if (router.locale !== data.caseStudyBy.language?.slug) {
        window.location.href = "/";
      }
    }, [router.locale]);
  }
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
      <IntroCaseStudyDetail data={data} />
      <ResultsCaseStudyDetail data={sectionResults} />
      {sectionContentBody.sectionContentDetail && sectionContentBody.sectionContentDetail.map((item, index) => (
        <SectionDigitalsContent key={index} data={item} />
      ))}
      <CaseStudyViewMore />
      <NeedHelpDigitalGrowth data={cta} />
    </>
  );
}
