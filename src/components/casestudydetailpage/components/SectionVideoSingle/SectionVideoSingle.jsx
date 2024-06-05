import React from "react";
import classes from "./SectionVideoSingle.module.scss";
import { isMov } from "../../../../../utils/checkVideoFormat";

export default function SectionVideoSingle({ data }) {
  const { backgroundColor, listVideo, titleLeft, titleRight, widthVideo } =
    data;
  return (
    <>
      <div
        style={{ backgroundColor: backgroundColor }}
        className={classes["section-video-main__singleVideo"]}
      >
        <p className={classes["section-video-main__singleVideo__titleLeft"]}>
          {titleLeft && titleLeft}
        </p>
        <div className={classes["section-video-main__singleVideo__item"]}>
          {listVideo &&
            listVideo.map((item, index) => (
              <video
                style={{ width: widthVideo }}
                key={index}
                muted
                controls
                playsInline
              >
                <source
                  src={item?.linkVideoItem}
                  type={isMov(item?.linkVideoItem) ? "video/quicktime" : "video/mp4"}
                />
              </video>
            ))}
        </div>
        <p className={classes["section-video-main__singleVideo__titleRight"]}>
          {titleRight && titleRight}
        </p>
      </div>
    </>
  );
}
