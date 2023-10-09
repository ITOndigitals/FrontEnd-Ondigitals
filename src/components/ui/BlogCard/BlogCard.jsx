import React from "react";
import classes from "./BlogCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Maven_Pro } from "next/font/google";
import Tag from "../Tag/Tag";
import DateAndViews from "../DateAndViews/DateAndViews";
import { useRouter } from "next/router";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const BlogCard = ({ isForSlider, data, isForBlogPage }) => {
  const post = data;
  const { locale } = useRouter();
  const isoDate = post.date;
  const containerClasses = `${classes["blog-card"]} ${
    isForSlider
      ? `${classes["blog-card-slider"]} card-news-insights-container`
      : ""
  } ${isForBlogPage ? classes["blog-card-blog-page"] : ""}`;
  const basePath = locale === "en" ? "/blog" : "/bai-viet";

  return (
    <>
      <Link href={`${basePath}/${post.slug}`} locale={locale}>
        <div className={classes["blog-card-container"]}>
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
                <div className={classes["blog-card__content__dayView__item"]}>
                  <Tag type={4} name="Web Development" href="#" />
                </div>
                {isForSlider && (
                  <div className={classes["blog-card__content__dayView__item"]}>
                    <DateAndViews createDate={isoDate} views={500} />
                  </div>
                )}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className={classes["blog-card__content--title-post"]}
              >
                {post.title}
              </Link>
              <div
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={classes["blog-card__content--text"]}
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              ></div>
              {isForSlider && (
                <Link
                  className={classes["blog-card__button"]}
                  href={`/blog/${post.slug}`}
                >
                  <span>
                    Read Full<i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              )}
              {!isForSlider && (
                <DateAndViews createDate={isoDate} views={500} />
              )}
              {isForBlogPage && (
                <Link
                  className={classes["blog-card__button"]}
                  style={{ marginTop: "10px" }}
                  href={`/blog/${post.slug}`}
                >
                  <span>
                    Read Full<i className="fa-solid fa-arrow-right"></i>
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
