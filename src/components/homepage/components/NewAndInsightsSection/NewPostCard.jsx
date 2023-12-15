import React from "react";
import classes from "./NewAndInsightsSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Maven_Pro } from "next/font/google";
import { format, parseISO } from "date-fns";
import DateAndViews from "@/components/ui/DateAndViews/DateAndViews";
import Tag from "@/components/ui/Tag/Tag";
import { useRouter } from "next/router";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function NewPostCard({ data }) {
  const post = data;
  const { locale } = useRouter();
  const isoDate = post.date;
  return (
    <>
      <div
        className={`${classes["card-news-insights"]} card-news-insights-container`}
      >
        <div className={classes["card-news-insights__image"]}>
          <Link className={classes["card-news-insights__image__link"]} href={post.slug} locale={locale}>
            <Image
              src={post?.featuredImage?.node.sourceUrl}
              fill
              alt={post.title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>
        <div className={classes["card-news-insights__content"]}>
          <Link href={post.slug} locale={locale}>
            <p
              className={`${classes["card-news-insights__content--titlePost"]} title-post-homepage`}
            >
              {post.title}
            </p>
          </Link>

          <div
            style={{ fontFamily: MavenPro.style.fontFamily }}
            className={classes["card-news-insights__content__tag"]}
          >
            <Tag type={4} name="Web Development" href="#" />
            <Tag type={4} name="SEO" href="#" />
          </div>
          <div
            style={{ fontFamily: MavenPro.style.fontFamily }}
            className={classes["card-news-insights__content__dayView"]}
          >
            <DateAndViews createDate={isoDate} views={500} />
          </div>
        </div>
      </div>
    </>
  );
}
