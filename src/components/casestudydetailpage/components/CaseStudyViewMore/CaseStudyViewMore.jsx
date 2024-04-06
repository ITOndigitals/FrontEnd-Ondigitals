import React from "react";
import classes from "./CaseStudyViewMore.module.scss";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import TopRightArrow from "@/components/ui/Icons/TopRightArrow";
export default function CaseStudyViewMore() {
  return (
    <div className={classes["view-more"]}>
      <div className={`container ${classes["view-more-content"]}`}>
        <ButtonNoBorder
          href="/"
          RightIcon={<TopRightArrow width={24} height={24} color="#131114" />}
        >
          VIEW MORE CASE STUDY
        </ButtonNoBorder>
      </div>
    </div>
  );
}
