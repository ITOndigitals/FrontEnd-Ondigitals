import React from "react";
import classes from "./BestDigitalMarketingItem.module.scss";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function BestDigitalMarketingItem({ item }) {
  console.log(item);
  if (!item) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <div className={classes["item-container"]}>
        <div className={classes["icon"]}>
          <Image
            src={item.icon}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={item.title}
          />
        </div>
        <p className={classes["title"]}>{item.title}</p>
        <p
          className={classes["text"]}
          style={{ fontFamily: MavenPro.style.fontFamily }}
        >
          {item.content}
        </p>
      </div>
    </>
  );
}
