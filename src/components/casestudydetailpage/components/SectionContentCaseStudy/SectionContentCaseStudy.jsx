import React from "react";
import classes from "./SectionContentCaseStudy.module.scss";
import Image from "next/image";
export default function SectionContentCaseStudy() {
  return (
    <section className={classes["section-content-caseStudy"]}>
      <div className="container">
        <div className={classes["section-content-caseStudy__head"]}>
          <h2 className={classes["section-content-caseStudy__head__title"]}>
            asdadasdas
          </h2>
          <div className={classes["section-content-caseStudy__head__text"]}>
            sdassadsasdassadsasdassadsasdassadsasdassadsasdassadsasdassadsasdassadsasdassadsa
          </div>
        </div>
        <div className={classes["section-content-caseStudy__content"]}>
          <div className={classes["section-content-caseStudy__content__image"]}>
            <Image
              src="https://api.ondigitals.com/wp-content/uploads/2023/10/Stationery-2.png"
              fill
              style={{ objectFit: "cover" }}
              alt="Ondigitals"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>{" "}
          <div className={classes["section-content-caseStudy__content__image"]}>
            <Image
              src="https://api.ondigitals.com/wp-content/uploads/2023/10/Company-profile-2.png"
              fill
              style={{ objectFit: "cover" }}
              alt="Ondigitals"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
