import { useEffect, useRef } from "react";
import classes from "./postdetail.module.scss";
import Tag from "@/components/ui/Tag/Tag";
import Image from "next/image";
import DateAndViews from "@/components/ui/DateAndViews/DateAndViews";
import { Maven_Pro } from "next/font/google";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import { IconChevronLeft, UpNavIcon } from "@/components/ui/Icons/ListIcon";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function PostDetail({ data, applyMarkDown }) {
  if (!data) {
    return <div>Loading...</div>;
  }
  const post = data;
  const parse = require("html-react-parser");
  const postDetailRef = useRef(null);
  const handleScrollToTop = () => {
    if (postDetailRef.current) {
      const offsetTop = postDetailRef.current.offsetTop;
      window.scrollTo({ top: offsetTop - 75, behavior: "smooth" });
    }
  };
  //useEffect sau là khâu chuẩn bị dữ liệu cho Table Of Content
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
  if (!data) {
    return null;
  }

  return (
    <div ref={postDetailRef} className={classes["post-detail-container"]}>
      <div className={classes["post-detail-content"]} key={post.postId}>
        <h1 className={classes["title-post-detail"]}>{post.title}</h1>
        <div className={classes["day-and-tag-post-detail"]}>
          <div className={classes["tag-post-detail"]}>
            <Tag type={1} name={"SEO Tip"} href="" />
            <Tag type={3} name={"Content Marketing"} href="" />
            <Tag type={2} name={"Digital Marketing"} href="" />
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
        >
          {parse(post.content)}
        </div>
        <div className={classes["post-detail-footer"]}>
          <hr />
          <div className={classes["post-detail-footer-button"]}>
            <div className={classes["post-detail-footer-button__back"]}>
              <ButtonNoBorder
                href="/blog"
                textSize="md"
                LeftIcon={
                  <IconChevronLeft width={24} height={24} color="#131114" />
                }
              >
                Back to list
              </ButtonNoBorder>
            </div>
            <div
              onClick={handleScrollToTop}
              className={classes["post-detail-footer-button__icon-to-top"]}
            >
              <UpNavIcon width={24} height={24} color="#131114" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
