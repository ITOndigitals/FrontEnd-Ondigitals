import React, { useEffect, useState } from "react";
import IntroServiceDetail from "./components/IntroServiceDetail/IntroServiceDetail";
import { useBoundStore } from "@/store/useBoundStore";
import ContentServiceDetail from "./components/ContentServiceDetail/ContentServiceDetail";
import NeedHelpDigitalGrowth from "../ui/NeedHelpDigitalGrowth/NeedHelpDigitalGrowth";
import { useRouter } from "next/router";
import FAQServiceDetail from "./components/FAQServiceDetail/FAQServiceDetail";
import SectionWhy from "./components/SectionWhy/SectionWhy";
import SectionWho from "./components/SectionWho/SectionWho";
import SectionHow from "./components/SectionHow/SectionHow";
import SectionWhich from "./components/SectionWhich/SectionWhich";
import SectionWhat from "./components/SectionWhat/SectionWhat";

export default function ServiceDetail({ dataServiceDetail }) {
  const router = useRouter();
  const currentLanguage = router.locale.toUpperCase();
  const serviceBy =
    dataServiceDetail?.serviceBy ||
    dataServiceDetail?.serviceParentBy ||
    dataServiceDetail?.industryBy ||
    dataServiceDetail.pageBy ||
    {};
  const {
    layoutContentServiceDetail,
    sectionContentDetail,
    titleHeadingSectionFaq,
    sectionWho,
    sectionWhat,
    sectionWhy,
    sectionHow,
    sectionWhich,
  } = serviceBy?.serviceHomepage || {};
  const dataContentServiceDetail = layoutContentServiceDetail || [];
  const dataFAQService = sectionContentDetail || [];
  const dataCTA = serviceBy?.cta;
  useEffect(() => {
    if (serviceBy && currentLanguage && router) {
      const matchingTranslation = serviceBy.translations?.find(
        (translation) => translation.language.code === currentLanguage
      );
      if (matchingTranslation && router.locale !== serviceBy.language?.slug) {
        router.push(matchingTranslation.slug);
      } else if (router.locale !== serviceBy.language?.slug) {
        window.location.href = "/";
      }
    }
  }, [serviceBy, currentLanguage, router]);

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
      <IntroServiceDetail data={serviceBy} />
      {dataContentServiceDetail &&
        dataContentServiceDetail.map((item, index) => (
          <ContentServiceDetail key={index} data={item} />
        ))}
      {sectionWho?.projectCardShort && <SectionWho data={sectionWho} />}
      {sectionWhich?.textHeadingLeft && <SectionWhich data={sectionWhich} />}
      {sectionWhat?.textTitle && <SectionWhat data={sectionWhat} />}
      {sectionWhy?.listCardWhy && <SectionWhy data={sectionWhy} />}
      {sectionHow?.cardStep && <SectionHow data={sectionHow} />}
      {dataFAQService.length >= 1 && (
        <FAQServiceDetail
          data={dataFAQService}
          titleHeading={titleHeadingSectionFaq}
        />
      )}
      <NeedHelpDigitalGrowth data={dataCTA} />
    </>
  );
}
