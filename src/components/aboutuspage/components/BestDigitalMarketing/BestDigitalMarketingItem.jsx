import React from "react";
import classes from "./BestDigitalMarketingItem.module.scss";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const parse = require("html-react-parser");

export default function BestDigitalMarketingItem({ item }) {
  if (!item) {
    return <div>Loading....</div>;
  }
  const { altText, sourceUrl } = item?.imageIcon || {};
  return (
    <>
      <div className={classes["item-container"]}>
        <div className={`${classes["icon"]} hvr-float-shadow`}>
          <Image
            src={sourceUrl}
            fill
            alt={altText || "Ondigitals"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>

        <div className={classes["title"]}>
          {item?.titleItem && parse(item?.titleItem)}
        </div>
        <p
          className={classes["text"]}
          style={{ fontFamily: MavenPro.style.fontFamily }}
        >
          {item?.textContent}
        </p>
      </div>
    </>
  );
}
