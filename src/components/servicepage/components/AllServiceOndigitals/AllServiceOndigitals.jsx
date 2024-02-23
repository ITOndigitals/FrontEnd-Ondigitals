import React, { useCallback, useEffect, useState } from "react";
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
const parse = require("html-react-parser");

export default function AllServiceOndigitals({ dataAllServices }) {
  const { pageBy, serviceParents } = dataAllServices;
  const { locale } = useRouter();
  const { sectionCaseStudy, sectionListServices } = pageBy.pageService;
  const listServiceParents = serviceParents?.nodes;
  const [servicesByCategory, setServicesByCategory] = useState([]);
  const [getListServices, { loading }] = useLazyQuery(
    GET_LIST_SERVICES_BY_CATEGORY
  );

  const fetchData = useCallback(async (idCate) => {
    if (idCate && !loading) {
      const result = await getListServices({
        variables: {
          ID: idCate,
        },
      });
      return result.data;
    }
    return null;
  }, []);

  useEffect(() => {
    async function getData() {
      const newData = {};
      const uniqueCategories = new Set();
      listServiceParents.forEach((parent) => {
        const idCate = parent?.categories?.nodes[0]?.categoryId;
        if (idCate) {
          uniqueCategories.add(idCate);
        }
      });
      const uniqueCategoriesArray = Array.from(uniqueCategories);

      const promises = uniqueCategoriesArray.map(async (idCate) => {
        const result = await fetchData(idCate);
        return { idCate, result }; // Trả về một object chứa idCate và result
      });
      const results = await Promise.all(promises);
      // Đổi từ mảng kết quả thành object kết quả
      results.forEach(({ idCate, result }) => {
        newData[idCate] = result;
      });
      setServicesByCategory(newData);
    }
    getData();
  }, [locale]);

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
              const dataServices = servicesByCategory[idCate]?.services?.nodes;
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
                        : "unset",
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
                      {
                        item?.serviceHomepage
                          ?.titleBelowTextHeadingPageServiceDetail
                      }
                    </div>
                    {loading && dataServices ? (
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
                  <Link href={item && item.slug || "#"}>
                      <ExploreButton>
                        {sectionListServices?.textButtonLink}
                      </ExploreButton>
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
