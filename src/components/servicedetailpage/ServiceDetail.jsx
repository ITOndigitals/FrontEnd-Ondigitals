import React, { useEffect } from "react";
import IntroServiceDetail from "./components/IntroServiceDetail/IntroServiceDetail";
import { useBoundStore } from "@/store/useBoundStore";
import ContentServiceDetail from "./components/ContentServiceDetail/ContentServiceDetail";
import ClientFeedbacks from "./components/ClientFeedbacks/ClientFeedbacks";
import NeedHelpDigitalGrowth from "../ui/NeedHelpDigitalGrowth/NeedHelpDigitalGrowth";
import { useRouter } from "next/router";
import FAQServiceDetail from "./components/FAQServiceDetail/FAQServiceDetail";

export default function ServiceDetail({ dataServiceDetail }) {
  const router = useRouter();
  const currentLanguage = router.locale.toUpperCase();
  const { serviceBy, allCardReviews } = dataServiceDetail || {};

  const {
    layoutContentServiceDetail,
    sectionContentDetail,
    sectionClientFeedbacksServiceDetail,
  } = serviceBy?.serviceHomepage || {};

  const dataContentServiceDetail = layoutContentServiceDetail || [];

  const dataFAQService = sectionContentDetail || [];

  const dataClientFeedbacks = {
    ...sectionClientFeedbacksServiceDetail,
    ...allCardReviews,
  };

  if (serviceBy) {
    const matchingTranslation = serviceBy.translations.find(
      (translation) => translation.language.code === currentLanguage
    );
    useEffect(() => {
      if (matchingTranslation) {
        router.push(`/service/${matchingTranslation.slug}`);
      } else if (router.locale !== serviceBy.language.slug) {
        router.push("/");
      }
    }, [router.locale, serviceBy.translations]);
  }

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
      <ClientFeedbacks data={dataClientFeedbacks} />
      {dataFAQService.length >= 1 && <FAQServiceDetail data={dataFAQService} />}
      <NeedHelpDigitalGrowth />
    </>
  );
}
