import React from "react";
import classes from "./CaseStudyViewMore.module.scss";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import TopRightArrow from "@/components/ui/Icons/TopRightArrow";
import { useRouter } from "next/router";
import {  languagePathsCaseStudy } from "../../../../../utils/languageSlug";
export default function CaseStudyViewMore() {
  const { locale } = useRouter();
  const textTranslate = {
    en: "VIEW MORE CASE STUDY",
    vi: "XEM THÊM DỰ ÁN",
    zh: "查看更多案例研究",
    jp: "その他のケーススタディを見る",
    kr: "더 많은 사례 연구 보기",
  };
  return (
    <div className={classes["view-more"]}>
      <div className={`container ${classes["view-more-content"]}`}>
        <ButtonNoBorder
          href={languagePathsCaseStudy[locale]}
          RightIcon={<TopRightArrow width={24} height={24} color="#111" />}
        >
         {textTranslate[locale]}
        </ButtonNoBorder>
      </div>
    </div>
  );
}
