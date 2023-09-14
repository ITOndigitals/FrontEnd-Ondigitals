import React from "react";
import classes from "./NewAndInsightsSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Maven_Pro } from "next/font/google";
import { format, parseISO } from "date-fns";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function NewPostCard({data}) {
  const post = data;
  const isoDate = post.date;
  const parsedDate = parseISO(isoDate);
  const formattedDate = format(parsedDate, "dd/MM/yyyy");
  return (
    <>
      <Link href={post.link}>
        <div
          className={`${classes["card-news-insights"]} card-news-insights-container`}
        >
          <div className={classes["card-news-insights__image"]}>
            <Image
              src={post.featuredImage.node.sourceUrl}
              fill
              alt={post.title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={classes["card-news-insights__content"]}>
            <div className={classes["card-news-insights__content__dayView"]}>
              <span
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={classes["card-news-insights__content--tag"]}
              > 
                SEO Tips
              </span>
              <p
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={
                  classes["card-news-insights__content__dayView--date"]
                }
              >
                <i
                  className="fa-regular fa-calendar"
                  style={{ marginRight: "5px" }}
                ></i>
               {formattedDate}
              </p>
              <p
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={
                  classes["card-news-insights__content__dayView--views"]
                }
              >
                <i
                  className="fa-regular fa-eye"
                  style={{ marginRight: "5px" }}
                ></i>
                <span> 500</span>
              </p>
            </div>

            <p className={classes["card-news-insights__content--titlePost"]}>
              {post.title}
            </p>
            <div
              style={{ fontFamily: MavenPro.style.fontFamily }}
              className={classes["card-news-insights__content--text"]}
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            ></div>

            <div className={classes["card-news-insights__button"]}>
              <span>
                Read Full<i className="fa-solid fa-arrow-right"></i>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
