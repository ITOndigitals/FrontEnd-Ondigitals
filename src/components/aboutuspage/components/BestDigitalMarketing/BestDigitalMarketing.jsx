import React from "react";
import classes from "./BestDigitalMarketing.module.scss";
import BestDigitalMarketingItem from "./BestDigitalMarketingItem";

const parse = require("html-react-parser");

export default function BestDigitalMarketing({ data }) {
  const { titleSection, textFooterSection, listItem } = data[0];
  return (
    <>
      <section className={classes["main-section"]}>
        <div className="container">
          <div className={classes["header"]}>
            <h2>{titleSection && titleSection}</h2>
          </div>
          <div className={classes["main-content"]}>
            <div className={classes["list-reason-item"]}>
              {listItem &&
                listItem
                  .slice(0, 3)
                  .map((data, index) => (
                    <BestDigitalMarketingItem key={index} item={data} />
                  ))}
            </div>
            <div className={classes["text-footer"]}>
              {textFooterSection && parse(textFooterSection)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
