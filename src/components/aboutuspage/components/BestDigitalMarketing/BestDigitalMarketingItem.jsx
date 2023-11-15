import React from "react";
import classes from "./BestDigitalMarketingItem.module.scss";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";
import {
  IconCompetitivePricing,
  IconFullTransparency,
  IconLocalInsights,
  IconPersistentGrowth,
  IconSetting,
  IconThoroughResearch,
} from "@/components/ui/Icons/ListIcon";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function BestDigitalMarketingItem({ item }) {
  if (!item) {
    return <div>Loading....</div>;
  }
  return (
    <>
      <div className={classes["item-container"]}>
        <div className={classes["icon"]}>
          {(() => {
            switch (item.numberTypeIcon) {
              case 1:
                return <IconSetting color={"#fff"} width={70} height={70} />;
              case 2:
                return (
                  <IconThoroughResearch color={"#fff"} width={70} height={70} />
                );
              case 3:
                return (
                  <IconLocalInsights color={"#fff"} width={70} height={70} />
                );
              case 4:
                return (
                  <IconPersistentGrowth color={"#fff"} width={70} height={70} />
                );
              case 5:
                return (
                  <IconFullTransparency color={"#fff"} width={70} height={70} />
                );
              case 6:
                return (
                  <IconCompetitivePricing color={"#fff"} width={70} height={70} />
                );
              default:
                return (
                  <IconCompetitivePricing color={"#fff"} width={70} height={70} />
                );
            }
          })()}
        </div>

        <p className={classes["title"]}>{item?.titleItem}</p>
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
