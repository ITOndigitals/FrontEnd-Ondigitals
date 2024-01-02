import React, { useEffect } from "react";
import classes from "./AllServiceOndigitals.module.scss";
import ServiceCard from "@/components/ui/ServiceCard/ServiceCard";
import ExploreButton from "@/components/ui/Buttons/ExploreButton/ExploreButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import Link from "next/link";
import { GET_LIST_SERVICES_BY_CATEGORY } from "@/pages/api/graphqlApollo";
import { useLazyQuery } from "@apollo/client";
import LoadingSpinner from "@/components/ui/LoadingSpinner/LoadingSpinner";
import { useRouter } from "next/router";
import { getLanguagePathService } from "../../../../../utils/languageSlug";

const parse = require("html-react-parser");

export default function AllServiceOndigitals({ data }) {
  const { pageBy, serviceParents } = data;
  const { locale } = useRouter();
  const { sectionCaseStudy, sectionListServices } = pageBy.pageService;
  const listServiceParents = serviceParents?.nodes;
  const basePath = getLanguagePathService(locale);
  return (
    <section className={classes["all-service-ondigitals"]}>
      <div className="container">
        <div className={classes["all-service-ondigitals__title"]}>
          <h2>{sectionListServices.title}</h2>
        </div>
        <div className={classes["all-service-ondigitals__card-main"]}>
          {listServiceParents &&
            listServiceParents.map((item) => {
              const bacgroundImageCard = item?.featuredImage?.node;
              const idCate = item?.categories?.nodes[0]?.categoryId;
              const [getListServices, { loading, error, data }] = useLazyQuery(
                GET_LIST_SERVICES_BY_CATEGORY
              );
              useEffect(() => {
                if (idCate) {
                  getListServices({
                    variables: {
                      ID: idCate,
                    },
                  });
                }
              }, []);
              const dataServices = data?.services?.nodes;
              return (
                <div
                  key={item?.id}
                  className={
                    classes["all-service-ondigitals__card-main__container"]
                  }
                  style={{
                    backgroundColor: item.serviceHomepage.color || "#3d1766",
                    backgroundImage:
                      dataServices?.length === 0
                        ? `url(${bacgroundImageCard?.sourceUrl})`
                        : "",
                  }}
                >
                  <h3
                    className={
                      classes[
                        "all-service-ondigitals__card-main__container__title"
                      ]
                    }
                  >
                    {item?.title}
                  </h3>
                  <div
                    className={
                      classes[
                        "all-service-ondigitals__card-main__container__content"
                      ]
                    }
                  >
                    <div
                      className={
                        classes[
                          "all-service-ondigitals__card-main__container__content__text"
                        ]
                      }
                    >
                      {item?.excerpt && parse(item?.excerpt)}
                    </div>
                    {loading ? (
                      <LoadingSpinner />
                    ) : (
                      <div
                        className={
                          classes[
                            "all-service-ondigitals__card-main__container__content__list-card-child"
                          ]
                        }
                      >
                        <Swiper
                          cssMode={true}
                          navigation={true}
                          freeMode={true}
                          autoplay={{
                            delay: 2500,

                            disableOnInteraction: false,
                          }}
                          breakpoints={{
                            100: {
                              slidesPerView: 1,
                              spaceBetween: 15,
                              slidesPerGroup: 1,
                            },
                            640: {
                              slidesPerView: 1,
                              spaceBetween: 15,
                              slidesPerGroup: 1,
                            },
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 15,
                              slidesPerGroup: 2,
                            },
                            1024: {
                              slidesPerView: 4,
                              spaceBetween: 15,
                              slidesPerGroup: 1,
                            },
                          }}
                          modules={[Navigation, Autoplay, FreeMode]}
                          className="list-card-services-page"
                        >
                          {dataServices &&
                            dataServices.map((item, index) => (
                              <SwiperSlide key={index}>
                                <ServiceCard data={item} />
                              </SwiperSlide>
                            ))}
                        </Swiper>
                      </div>
                    )}
                  </div>
                  <div>
                    <Link
                      href={item?.slug ? `${basePath}/${item?.slug}` : basePath}
                    >
                      <ExploreButton>How it works</ExploreButton>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
