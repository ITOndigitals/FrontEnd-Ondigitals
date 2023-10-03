import React from "react";
import classes from "./CaseStudy.module.scss";
import { Maven_Pro } from "next/font/google";
import CaseStudyCard from "@/components/ui/CaseStudyCard/CaseStudyCard";
import ButtonSearch from "@/components/ui/Buttons/ButtonsSearch/ButtonSearch";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
export default function CaseStudy() {
  return (
    <section className={classes["case-study"]}>
      <div className="container">
        <div className={classes["case-study__main"]}>
          <div className={classes["case-study__main__head"]}>
            <p>Case Study</p>
          </div>
          <div className={classes["case-study__main__content"]}>
            <div className={classes["case-study__main__content__item"]}>
              <CaseStudyCard />
            </div>
            <div className={classes["case-study__main__content__item"]}>
              <ButtonSearch/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
