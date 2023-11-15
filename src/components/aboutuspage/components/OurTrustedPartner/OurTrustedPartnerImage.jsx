import React from "react";
import classes from "./OurTrustedPartnerImage.module.scss";
import Image from "next/image";

export default function OurTrustedPartnerImage({ data }) {
    const dataImage = data;
  return (
    <>
      <div className={classes["main-image"]}>
        <div className={classes["image-item"]}>
          <Image
            src={dataImage.sourceUrl}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            alt={dataImage.altText}
          />
        </div>
      </div>
    </>
  );
}
