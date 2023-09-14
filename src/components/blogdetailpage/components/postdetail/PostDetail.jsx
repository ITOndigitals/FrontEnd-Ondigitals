import React, { useEffect, useState } from "react";
import classes from "./postdetail.module.scss";
import Tag from "@/components/ui/Tag/Tag";
import Image from "next/image";
import DateAndViews from "@/components/ui/DateAndViews/DateAndViews";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function PostDetail({ data, applyMarkDown }) {
  useEffect(() => {
    const headingElements = document.querySelectorAll("h2, h3, h4");
    if (headingElements.length > 0) {
      let currentLevel = 1;
      let subLevel = 1;
      let innerSubLevel = 1;
      const markdown = [];

      for (let i = 0; i < headingElements.length; i++) {
        const headingElement = headingElements[i];
        const headingContent = headingElement.textContent
          .trim()
          .replace(/\d+\./g, "");
        let level;
        if (headingElement.tagName === "H2") {
          level = 2;
        } else if (headingElement.tagName === "H3") {
          level = 3;
        } else if (headingElement.tagName === "H4") {
          level = 4;
        }

        if (headingContent !== "") {
          const tagName = headingElement.tagName;
          const headingId = "heading-" + i;
          headingElement.id = headingId;
          let numbering = 1;

          if (level === 2 && i > 0) {
            currentLevel++;
            numbering = currentLevel;
            subLevel = 1;
          }
          if (level === 3) {
            numbering = currentLevel + `.${subLevel}`;
            const headingItem = headingElements[i + 1];
            if (headingItem && headingItem.tagName === "H3") {
              subLevel++;
            }
            innerSubLevel = 1;
          }
          if (level === 4) {
            numbering = currentLevel + `.${subLevel}` + `.${innerSubLevel}`;
            innerSubLevel++;
            const headingItem = headingElements[i + 1];
            if (headingItem && headingItem.tagName === "H3") {
              subLevel++;
            }
          }
          markdown.push({
            content: numbering + ". " + headingContent,
            href: "#" + headingId,
            level: level - 1,
          });
        }
      }
      applyMarkDown(markdown);
    }
  }, []);

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
