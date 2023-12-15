import Link from "next/link";
import classes from "./ServiceDetail.module.scss";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Maven_Pro } from "next/font/google";
import ExploreButton from "@/components/ui/Buttons/ExploreButton/ExploreButton";
import { useRouter } from "next/router";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const ServiceDetail = ({ context }) => {
  const contentRef = useRef(null);
  const { locale } = useRouter();
  const activeColor = context.activeColor;
  // const colorClass = classes[`${context.activeColor}`];

  useEffect(() => {
    const serviceDetailElement = contentRef.current;
    serviceDetailElement.classList.remove(classes["fade-in"]);
    const fadeIn = setTimeout(() => {
      serviceDetailElement.classList.add(classes["fade-in"]);
    }, 400);

    () => {
      clearTimeout(fadeIn);
    };
  }, [context.content]);

  return (
    <div
      className={`${classes["service-details"]} appear-from-down-slow`}
      style={{ backgroundColor: activeColor }}
    >
      <div className={classes["service-details-header"]}></div>
      <div className={classes["service-details-content"]} ref={contentRef}>
        <div className={classes["service-details-content-wrapper"]}>
          <p className={classes["service-details-content__title"]}>
            {context.title}
          </p>
          <div
            className={classes["service-details-content__main"]}
            style={{ fontFamily: MavenPro.style.fontFamily }}
          >
            {context.content}
          </div>
          <Link href={context.slug} locale={locale}>
            <ExploreButton>Explore</ExploreButton>
          </Link>
        </div>
        <div className={classes["service-details-image"]}>
          <Image
            src={context.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            alt="service-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
