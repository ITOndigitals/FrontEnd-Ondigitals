import React from "react";
import classes from "./ListServiceParents.module.scss";
import ServiceCard from "@/components/ui/ServiceCard/ServiceCard";
import Link from "next/link";
import { IconChevronRight } from "@/components/ui/Icons/ListIcon";
import { Maven_Pro } from "next/font/google";
import { useRouter } from "next/router";
import {
  languagePathsService,
  localeLangButtonExplore,
  localeTextDigitalMarketing,
  localeViewAllServices,
} from "../../../../../utils/languageSlug";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function ListServiceParents({ data }) {
  if (!data) {
    return null;
  }
  const dataItem = data;
  const { locale } = useRouter();
  return (
    <section className={classes["list-service-parents"]}>
      <div className="container">
        <div className={classes["list-service-parents__head"]}>
          <h2 className={classes["list-service-parents__head__title"]}>
            {localeLangButtonExplore[locale].toUpperCase()}
          </h2>
          <p
            style={{ fontFamily: MavenPro.style.fontFamily }}
            className={classes["list-service-parents__head__text"]}
          >
            {localeTextDigitalMarketing[locale]}
          </p>
        </div>
        <div className={classes["list-service-parents__content"]}>
          <div className={classes["list-service-parents__content__detail"]}>
            {dataItem.map((item, index) => (
              <ServiceCard key={index} data={item} />
            ))}
          </div>
          <div className={classes["list-service-parents__content__btn"]}>
            <Link
              target="_blank"
              href={languagePathsService[locale]}
              className={classes["list-service-parents__content__btn__link"]}
            >
              <p style={{ textAlign: "center" }}>
                {localeViewAllServices[locale]}
              </p>
              <IconChevronRight width={24} height={24} color="#3D1766" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
