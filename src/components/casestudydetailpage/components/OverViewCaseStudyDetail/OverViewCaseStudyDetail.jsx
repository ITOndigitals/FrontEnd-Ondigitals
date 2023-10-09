import React from "react";
import classes from "./OverViewCaseStudyDetail.module.scss";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

// Các configuration dựa trên biến config layout
const DUMMY_LAYOUT_CONFIGS = [6, 6];
const isKulDal = true;
const logoList = [
  {
    src: "https://s3-alpha-sig.figma.com/img/9fdc/cc3d/fe13e4a1906584219f34a8f79998ef17?Expires=1698019200&Signature=m41UoHBJMmW~YO7FhshmoShaFkMU3ZJMZsZmk~UQIG0h0qlEemwdsItFWF~OFoSCNh4tylEsPlQYPchWWHdmGCEWHpBuK6ZpZsGadc4hpWf6M9rxnuzw886hK0602QwAEblN8s0v8O8hAvW9QcFnDPsf-RH69VBFRUlkyPgGzPZJCrxpw94VpDG0Am4ZeZ~0uI5XDYLB0DYzQBR3c0xKU0DKA~jHOpcXBIEwD3tPjHdFF6bV2cr8uY5jspNrdXuJyp77U-EaKFWMWR9fhcJFt79lb6jhLYYw~40x~ASSjt7K5tlmqdalwgvO0gwQGA4wDw66ZkMOplOfO8BCOu2Imw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/3d4f/722f/c78a535d8ef20f7f960ce3b30284c7d4?Expires=1698019200&Signature=Y2w~rqIo9LIl1H4NALRM-jU4j06ZDBsp4o8HOKSlpdme6ACmjZV93f2RC0JhjtAIHlvSv1643Jkd3N3ssb~NCcudTfDvi6QRapQUkGtT1IjHc1Oa9LYHrxB2lb3qA3TIHrVVjFj2a9QNucR1jgwnuvlzwVLS5UDyDxaZpV6Mg0gPZGoK2HebJdFSwxN3K~rr63GSWRvGQFdXZ8uvDxeZy4TY5NStLMD0ND4~z8BfyFdnwLwGfVJuiey64A72cJY3SAnoNt9Bi7GcCwenBq9ZkXxp9bZ3cM1RNy1e3re1gpOTqeYBUaUc~8Ub7k857dqGhrtsH6VrR6mANYM~VdH8qA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

export default function OverViewCaseStudyDetail() {
  return (
    <section className={`${classes["over-view"]} ${classes["purple-theme"]}`}>
      <div className="container">
        <div className={classes["over-view__layout"]}>
          <div
            className={`${classes["over-view__left"]}`}
            style={{
              gridColumn: `span ${DUMMY_LAYOUT_CONFIGS[0]} / span ${DUMMY_LAYOUT_CONFIGS[0]}`,
            }}
          >
            <div className={classes["over-view__left__content"]}>
              <p className={classes["over-view__left__content__title"]}>
                Overview
              </p>
              <p
                className={classes["over-view__left__content__text"]}
                style={{ fontFamily: MavenPro.style.fontFamily }}
              >
                Guardian is a retail chain that offers health and beauty
                products in Vietnam, including Kundal - a Korean brand that
                specializes in natural and eco-friendly hair and body care
                products.
              </p>
              <p
                className={classes["over-view__left__content__text"]}
                style={{ fontFamily: MavenPro.style.fontFamily }}
              >
                Here in this campaign, with stunning visuals and highly
                interactive content, On Digitals helped Guardian Vietnam
                introduce and promote Kundal brand to Vietnamese market.
              </p>
              <ul className={classes["over-view__left__content__logo"]}>
                {logoList.map((item, index) => (
                  <li
                    key={index}
                    className={classes["over-view__left__content__logo__item"]}
                    style={{ width: "133px", height: "32px" }}
                  >
                    <Image
                      src={item.src}
                      fill
                      alt="case-study-logo"
                      objectFit="contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={classes["over-view__right"]}
            style={{
              gridColumn: `span ${DUMMY_LAYOUT_CONFIGS[0]} / span ${DUMMY_LAYOUT_CONFIGS[0]}`,
              padding: `${isKulDal ? "2% 8%" : "0 0"}`,
            }}
          >
            <div
              className={`${classes["over-view__right__image"]} ${
                isKulDal ? classes.kuldal : ""
              }`}
            >
              <Image
                src="https://s3-alpha-sig.figma.com/img/390a/b4d5/e4fa8a8a92d27408eab008dea2afed27?Expires=1697414400&Signature=oy3SU~91bun95wCgIW9~8mxn-lnXe3ZZlv5f~~3DCVLvtdqWrhrUSSwsOq3yR7Yk8SmzXlkjyA2DzDSDnOFkDMpeae8i8M-HYNaRZVbc-crXwOLkVm2wxU3lSwmKbq5nRgojBLwhw2tLr22kVclGTN6NBIGRvhELgB-sawrpUM68ZWgaiz7cHll3-JDmJjQHQvm6lNODRKFcF8LAqxa5UzBJYLPfVRGJ~MndviLEMe2CKL1po7a5RL3y8BBOYi2-~MrnsfEWTEX8TwLyPJYn3U7PVw1s0JmrLkWHZt1c730A22RJJkdyvvUajtOwIQrycrCHDrsYs3dJ7m6AJ8ZnwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                fill
                alt="case-study-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
