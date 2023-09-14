import React, { useRef } from "react";
import classes from "./postdetail.module.scss";
import Tag from "@/components/ui/Tag/Tag";
import Image from "next/image";
import DateAndViews from "@/components/ui/DateAndViews/DateAndViews";
import { Maven_Pro } from "next/font/google";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import { IconChevronLeft, IconChevronUp } from "@/components/ui/Icons/ListIcon";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
export default function PostDetail({ data }) {
  const post = data;
  const postDetailRef = useRef(null);
  const handleScrollToTop = () => {
    if (postDetailRef.current) {
      const offsetTop = postDetailRef.current.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };
  if (!data) {
    return null;
  }
  return (
    <div ref={postDetailRef} className={classes["post-detail-container"]}>
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
              <IconChevronUp width={24} height={24} color="#131114" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
