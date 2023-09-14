import React from "react";
import classes from "./postdetail.module.scss";
import Tag from "@/components/ui/Tag/Tag";
import Image from "next/image";
import DateAndViews from "@/components/ui/DateAndViews/DateAndViews";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function PostDetail({ data }) {
  return (
    <div className={classes["post-detail-container"]}>
      {data.map((post) => {
        return (
          <>
            <div className={classes["post-detail-content"]} key={post.postId}>
              <h1 className={classes["title-post-detail"]}>{post.title}</h1>
              <div className={classes["day-and-tag-post-detail"]}>
                <div className={classes["tag-post-detail"]}>
                  <Tag type={1} name={"SEO Tip"} />
                  <Tag type={3} name={"Content Marketing"} />
                  <Tag type={2} name={"Digital Marketing"} />
                </div>
                <div>
                  <DateAndViews createDate={post.date} views={500} />
                </div>
              </div>
              <div className={classes["image-main-post-detail"]}>
                <Image
                  src={post.featuredImage?.node.sourceUrl}
                  fill
                  alt={post.title}
                  blurDataURL={post.featuredImage?.node.sourceUrl}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={classes["content-post"]}
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
            </div>
          </>
        );
      })}
    </div>
  );
}
