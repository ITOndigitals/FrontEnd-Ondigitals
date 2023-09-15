import React from "react";
import classes from "./BlogCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Maven_Pro } from "next/font/google";
import Tag from "../Tag/Tag";
import DateAndViews from "../DateAndViews/DateAndViews";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const BlogCard = ({ isForSlider, data, isForBlogPage }) => {
  const post = data;
  const isoDate = post.date;
  const containerClasses = `${classes["blog-card"]} ${
    isForSlider
      ? `${classes["blog-card-slider"]} card-news-insights-container`
      : ""
  } ${isForBlogPage ? classes["blog-card-blog-page"] : ""}`;

  //Random từ 1 đến 4
  const randomType = Math.floor(Math.random() * 4) + 1;

  return (
    <>
      <Link href={`/blog/${post.slug}`}>
        <div className={containerClasses}>
          <div className={classes["blog-card__image"]}>
            <Image
              src={post.featuredImage?.node.sourceUrl}
              fill
              alt={post.title}
              placeholder={
                post.featuredImage?.node.sourceUrl ? "blur" : "empty"
              }
              blurDataURL={post.featuredImage?.node.sourceUrl}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={classes["blog-card__content"]}>
            <div className={classes["blog-card__content__dayView"]}>
              {/* <span
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={classes["blog-card__content--tag"]}
              >
                SEO Tips
              </span> */}
              <Tag type={4} name="Web Development" />
              {isForSlider && <DateAndViews createDate={isoDate} views={500} />}
            </div>
            <p className={classes["blog-card__content--title-post"]}>
              {post.title}
            </p>
            <div
              style={{ fontFamily: MavenPro.style.fontFamily }}
              className={classes["blog-card__content--text"]}
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            ></div>
            {isForSlider && (
              <div className={classes["blog-card__button"]}>
                <span>
                  Read Full<i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            )}
            {!isForSlider && <DateAndViews createDate={isoDate} views={500} />}
            {isForBlogPage && (
              <div
                className={classes["blog-card__button"]}
                style={{ marginTop: "10px" }}
              >
                <span>
                  Read Full<i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
