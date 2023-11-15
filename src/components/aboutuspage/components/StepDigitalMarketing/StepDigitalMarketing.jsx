import React from "react";
import classes from "./StepDigitalMarketing.module.scss";
import { Maven_Pro } from "next/font/google";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const parse = require("html-react-parser");

export default function StepDigitalMarketing({ data }) {
  const { titleSection, listSteps } = data[0];
  return (
    <section className={classes["step-digital-marketing"]}>
      <div className="container">
        <div className={classes["header"]}>
          <h2>{titleSection && titleSection}</h2>
        </div>
        <ul className={classes["step-container"]}>
          {listSteps &&
            listSteps.map((item, index) => (
              <li className={classes["step"]} key={index}>
                <div className={classes["step-title"]}>{item?.titleSteps}</div>
                <div className={classes["main-step-number"]}>
                  <div className={classes["step-number"]}>
                    <p>{item?.stepsNumber}</p>
                  </div>
                </div>
                <div
                  className={classes["step-label"]}
                  style={{ fontFamily: MavenPro.style.fontFamily }}
                >
                  { item.stepsContent && parse(item.stepsContent)}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
