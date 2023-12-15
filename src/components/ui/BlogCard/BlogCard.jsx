import React from "react";
import classes from "./BlogCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Maven_Pro } from "next/font/google";
import Tag from "../Tag/Tag";
import DateAndViews from "../DateAndViews/DateAndViews";
import { useRouter } from "next/router";

const parse = require("html-react-parser");
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const BlogCard = ({ data }) => {
  const post = data;
  const { locale } = useRouter();
  const isoDate = post.date;
  const containerClasses = `${classes["blog-card"]} ${classes["blog-card-blog-page"]}`;
  return (
    <>
      <div className={classes["blog-card-container"]}>
        <div className={containerClasses}>
          <div className={classes["blog-card__image"]}>
            <Link href={`${post.slug}`} locale={locale}>
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
            </Link>
          </div>
          <div className={classes["blog-card__content"]}>
            <Link
              href={`${post.slug}`}
              locale={locale}
              className={classes["blog-card__content--title-post"]}
            >
              {post.title}
            </Link>
            <div
              style={{ fontFamily: MavenPro.style.fontFamily }}
              className={classes["blog-card__content--text"]}
            >
              <Link href={`${post.slug}`} locale={locale}>
                {post?.excerpt && parse(post.excerpt)}
              </Link>
            </div>
            <DateAndViews createDate={isoDate} views={500} />

            <div className={classes["blog-card__content__tag"]}>
              <Tag type={4} name="Web Development" href="#" />
              <Tag type={4} name="Web Development" href="#" />
            </div>
            {/* <Link
              className={classes["blog-card__button"]}
              style={{ marginTop: "10px" }}
              href={`${basePath}/${post.slug}`}
              locale={locale}
            >
              <span>
                {textReadFull}
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
