import React from "react";
import classes from "./StepDigitalMarketing.module.scss";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const DUMMY_STEPS = [
  {
    id: 1,
    number: 1,
    title: "Step",
    content: (
      <p>
        Marketing <strong>opportunities analysis</strong> of client's niche
      </p>
    ),
  },
  {
    id: 2,
    number: 2,
    title: "Step",
    content: (
      <p>
        Marketing <strong>opportunities analysis</strong> of client's niche
      </p>
    ),
  },
  {
    id: 3,
    number: 3,
    title: "Step",
    content: (
      <p>
        Marketing <strong>opportunities analysis</strong> of client's niche
      </p>
    ),
  },
  {
    id: 4,
    number: 4,
    title: "Step",
    content: (
      <p>
        Marketing <strong>opportunities analysis</strong> of client's niche
      </p>
    ),
  },
  {
    id: 5,
    number: 5,
    title: "Step",
    content: (
      <p>
        Marketing <strong>opportunities analysis</strong> of client's niche
      </p>
    ),
  },
  {
    id: 6,
    number: 6,
    title: "Step",
    content: (
      <p>
        Marketing <strong>opportunities analysis</strong> of client's niche
      </p>
    ),
  },
];

export default function StepDigitalMarketing() {
  return (
    <section className={classes["step-digital-marketing"]}>
      <div className="container">
        <div className={classes["header"]}>
          <p>Our Digital Marketing Growth Methodology</p>
        </div>
        <ul className={classes["step-container"]}>
          {DUMMY_STEPS.map((item) => (
            <li className={classes["step"]} key={item.id}>
              <div className={classes["step-title"]}>{item.title}</div>
              <div className={classes["main-step-number"]}>
                <div className={classes["step-number"]}>
                  <p>{item.number}</p>
                </div>
              </div>
              <div
                className={classes["step-label"]}
                style={{ fontFamily: MavenPro.style.fontFamily }}
              >
                {item.content}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
