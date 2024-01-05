import React, { useEffect, useRef, useState } from "react";
import classes from "./FAQServiceDetail.module.scss";
import Image from "next/image";
import {
  DownNavIcon,
  IconChevronLeft,
  UpNavIcon,
} from "@/components/ui/Icons/ListIcon";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import { Maven_Pro } from "next/font/google";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const parse = require("html-react-parser");

export default function FAQServiceDetail({ data, titleHeading }) {
  const scrollRef = useRef(null);
  const [expandedItems, setExpandedItems] = useState(
    Array(data.length).fill(false)
  );

  const toggleItem = (index) => {
    const newExpandedItems = [...expandedItems];
    newExpandedItems[index] = !newExpandedItems[index];
    setExpandedItems(newExpandedItems);
  };
  const handleScrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.style.marginTop = "-60px";
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
      scrollRef.current.style.marginTop = "0";
    }
  };

  useEffect(() => {
    const newExpandedItems = [...expandedItems];
    newExpandedItems[0] = true;
    setExpandedItems(newExpandedItems);
  }, []);
  return (
    <section ref={scrollRef} className={classes["faq-service-detail"]}>
      <div className="container">
        <div className={classes["faq-service-detail__heading"]}>
          {titleHeading && parse(titleHeading)}
        </div>
        {data.map((item, index) => (
          <div
            style={{ fontFamily: MavenPro.style.fontFamily }}
            key={index}
            className={classes["faq-service-detail__content"]}
          >
            <div
              className={classes["faq-service-detail__content__title"]}
              onClick={() => toggleItem(index)}
            >
              <h2>{item.title && item.title}</h2>
              <div
                className={`${
                  classes["faq-service-detail__content__title__icon"]
                } ${
                  !expandedItems[index]
                    ? classes["faq-service-detail__content__title__icon__turn"]
                    : ""
                }`}
              >
                <DownNavIcon width={30} height={30} color="#fff" />
              </div>
            </div>
            {expandedItems[index] &&
              (item.image ? (
                <div
                  className={classes["faq-service-detail__content__has-image"]}
                >
                  <div
                    className={
                      classes["faq-service-detail__content__has-image__text"]
                    }
                  >
                    {item.content && parse(item.content)}
                  </div>
                  <div
                    className={
                      classes["faq-service-detail__content__has-image__image"]
                    }
                  >
                    <Image
                      src={item.image.sourceUrl}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={item.image.altText}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={classes["faq-service-detail__content__no-image"]}
                >
                  {item.content && parse(item.content)}
                </div>
              ))}
          </div>
        ))}
        <div className={classes["faq-service-detail__footer"]}>
          <ButtonNoBorder
            href="/services"
            textSize="md"
            LeftIcon={<IconChevronLeft width={24} height={24} color="#fff" />}
          >
            Back to list
          </ButtonNoBorder>
          <div
            onClick={handleScrollToTop}
            className={classes["faq-service-detail__footer__icon-to-top"]}
          >
            <UpNavIcon width={30} height={30} color="#fff" />
          </div>
        </div>
      </div>
    </section>
  );
}
