import React from "react";
import classes from "./StepDigitalMarketing.module.scss";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function StepDigitalMarketing() {
  return (
    <section className={classes["step-digital-marketing"]}>
      <div className="container">
        <div className={classes["header"]}>
          <p>Our Digital Marketing Growth Methodology</p>
        </div>
        <div className={classes["step-container"]}>
          <div className={classes["step"]}>
            <div className={classes["step-title"]}>Step</div>
            <div className={classes["main-step-number"]}>
              <div className={classes["step-number"]}>
                <p>1</p>
              </div>
            </div>
            <div
              className={classes["step-label"]}
              style={{ fontFamily: MavenPro.style.fontFamily }}
            >
              Marketing <strong>opportunities analysis</strong> of client's
              niche
            </div>
          </div>
          <div className={classes["step"]}>
            <div className={classes["step-title"]}>Step</div>
            <div className={classes["main-step-number"]}>
              <div className={classes["step-number"]}>
                <p>2</p>
              </div>
            </div>
            <div
              className={classes["step-label"]}
              style={{ fontFamily: MavenPro.style.fontFamily }}
            >
              Marketing <strong>opportunities analysis</strong> of client's
              niche
            </div>
          </div>
          <div className={classes["step"]}>
            <div className={classes["step-title"]}>Step</div>
            <div className={classes["main-step-number"]}>
              <div className={classes["step-number"]}>
                <p>3</p>
              </div>
            </div>
            <div
              className={classes["step-label"]}
              style={{ fontFamily: MavenPro.style.fontFamily }}
            >
              Marketing <strong>opportunities analysis</strong> of client's
              niche
            </div>
          </div>
          <div className={classes["step"]}>
            <div className={classes["step-title"]}>Step</div>
            <div className={classes["main-step-number"]}>
              <div className={classes["step-number"]}>
                <p>4</p>
              </div>
            </div>
            <div
              className={classes["step-label"]}
              style={{ fontFamily: MavenPro.style.fontFamily }}
            >
              Marketing <strong>opportunities analysis</strong> of client's
              niche
            </div>
          </div>
          <div className={classes["step"]}>
            <div className={classes["step-title"]}>Step</div>
            <div className={classes["main-step-number"]}>
              <div className={classes["step-number"]}>
                <p>5</p>
              </div>
            </div>
            <div
              className={classes["step-label"]}
              style={{ fontFamily: MavenPro.style.fontFamily }}
            >
              Marketing <strong>opportunities analysis</strong> of client's
              niche
            </div>
          </div>
          <div className={classes["step"]}>
            <div className={classes["step-title"]}>Step</div>
            <div className={classes["main-step-number"]}>
              <div className={classes["step-number"]}>
                <p>6</p>
              </div>
            </div>
            <div
              className={classes["step-label"]}
              style={{ fontFamily: MavenPro.style.fontFamily }}
            >
              Marketing <strong>opportunities analysis</strong> of client's
              niche
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
