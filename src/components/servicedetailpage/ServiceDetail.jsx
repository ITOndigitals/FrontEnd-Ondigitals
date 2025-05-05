import React, { useEffect, useState } from "react";
import IntroServiceDetail from "./components/IntroServiceDetail/IntroServiceDetail";
import { useBoundStore } from "@/store/useBoundStore";
import ContentServiceDetail from "./components/ContentServiceDetail/ContentServiceDetail";
import NeedHelpDigitalGrowth from "../ui/NeedHelpDigitalGrowth/NeedHelpDigitalGrowth";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import ListServiceParents from "./components/ListServiceParents/ListServiceParents";

const SectionWhy = dynamic(() => import("./components/SectionWhy/SectionWhy"), {
  ssr: true,
});
const SectionWho = dynamic(() => import("./components/SectionWho/SectionWho"), {
  ssr: true,
});
const SectionHow = dynamic(() => import("./components/SectionHow/SectionHow"), {
  ssr: true,
});
const SectionWhich = dynamic(
  () => import("./components/SectionWhich/SectionWhich"),
  { ssr: true }
);
const SectionWhat = dynamic(
  () => import("./components/SectionWhat/SectionWhat"),
  { ssr: true }
);
const FAQServiceDetail = dynamic(
  () => import("./components/FAQServiceDetail/FAQServiceDetail"),
  { ssr: true }
);

export default function ServiceDetail({ dataServiceDetail }) {
  const router = useRouter();
  const currentLanguage = router.locale.toUpperCase();
  const serviceBy =
    dataServiceDetail?.serviceBy ||
    dataServiceDetail?.serviceParentBy ||
    dataServiceDetail?.industryBy ||
    dataServiceDetail?.countryBy ||
    dataServiceDetail.pageBy ||
    {};
  const dataServicesParent = dataServiceDetail?.serviceParents?.nodes;
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
      {dataServicesParent && <ListServiceParents data={dataServicesParent} />}
    </>
  );
}
