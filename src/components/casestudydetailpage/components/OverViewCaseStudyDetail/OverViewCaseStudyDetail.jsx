import React from "react";
import classes from "./OverViewCaseStudyDetail.module.scss";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

// Các configuration dựa trên biến config layout
const DUMMY_LAYOUT_CONFIGS = [6, 6];
// const isKulDal = false;
const isFullSize = true;
const logoList = [
  {
    src: "https://s3-alpha-sig.figma.com/img/9fdc/cc3d/fe13e4a1906584219f34a8f79998ef17?Expires=1698019200&Signature=m41UoHBJMmW~YO7FhshmoShaFkMU3ZJMZsZmk~UQIG0h0qlEemwdsItFWF~OFoSCNh4tylEsPlQYPchWWHdmGCEWHpBuK6ZpZsGadc4hpWf6M9rxnuzw886hK0602QwAEblN8s0v8O8hAvW9QcFnDPsf-RH69VBFRUlkyPgGzPZJCrxpw94VpDG0Am4ZeZ~0uI5XDYLB0DYzQBR3c0xKU0DKA~jHOpcXBIEwD3tPjHdFF6bV2cr8uY5jspNrdXuJyp77U-EaKFWMWR9fhcJFt79lb6jhLYYw~40x~ASSjt7K5tlmqdalwgvO0gwQGA4wDw66ZkMOplOfO8BCOu2Imw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/3d4f/722f/c78a535d8ef20f7f960ce3b30284c7d4?Expires=1698019200&Signature=Y2w~rqIo9LIl1H4NALRM-jU4j06ZDBsp4o8HOKSlpdme6ACmjZV93f2RC0JhjtAIHlvSv1643Jkd3N3ssb~NCcudTfDvi6QRapQUkGtT1IjHc1Oa9LYHrxB2lb3qA3TIHrVVjFj2a9QNucR1jgwnuvlzwVLS5UDyDxaZpV6Mg0gPZGoK2HebJdFSwxN3K~rr63GSWRvGQFdXZ8uvDxeZy4TY5NStLMD0ND4~z8BfyFdnwLwGfVJuiey64A72cJY3SAnoNt9Bi7GcCwenBq9ZkXxp9bZ3cM1RNy1e3re1gpOTqeYBUaUc~8Ub7k857dqGhrtsH6VrR6mANYM~VdH8qA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];
const carImg =
  "/assets/images/CaseStudy/z2448687871484_b29658f9b6d904d7cd06a12e2703e2fb-e1619083201721 1.png";

// const rightImage = "/assets/images/CaseStudy/kld1 1.png";
const rightImage = carImg;

// const rightImage =
//   "https://s3-alpha-sig.figma.com/img/390a/b4d5/e4fa8a8a92d27408eab008dea2afed27?Expires=1698019200&Signature=iYlzy8XDakA-u9pL4gp-LvMNILFKb4qMWzlJdVp8Ee4YY2lhOZGqhib3O5tz2UuorKWY4obkXVAzKO6yxSnKGCxBGOW91-YOix8HPZGzDxT1l4FswRzpTnSEqXWg3Hotqi8sd494btFanBKJdTegeEoAv0ck~9u1BKbpk9223GkMLkpL~JBQ8GhfihAE~0DyODq6vHb82YN4yuHv5hWv85QRMXrZ4Sp9BFo5MFyVpJFnn7Ui7HXN~i-Mv-9r7h1txCaQ0IIeXx1AbtPwfWHFuALLnoc7D0pAQ0YYZMx9eS3adlMRts3XMKKaDczLjX2RmRd4137y8FDTqaihFshlRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

export default function OverViewCaseStudyDetail() {
  // const caseStudyCardTheme = classes["primary-theme"];
  // const caseStudyCardTheme = classes["red-theme"];
  const caseStudyCardTheme = classes["black-theme"];

  return (
    <section className={`${classes["over-view"]} ${caseStudyCardTheme}`}>
      <div className={classes["over-view__layout"]}>
        <div
          className={`${classes["over-view__left"]} ${
            !isFullSize ? classes["no-full"] : ""
          }`}
          style={{
            gridColumn: `span ${DUMMY_LAYOUT_CONFIGS[0]} / span ${DUMMY_LAYOUT_CONFIGS[0]}`,
          }}
        >
          <div className={classes["container--sm"]}>
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
                      objectFit="cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div
          className={classes["over-view__right"]}
          style={{
            gridColumn: `span ${DUMMY_LAYOUT_CONFIGS[1]} / span ${DUMMY_LAYOUT_CONFIGS[1]}`,
            padding: `${!isFullSize ? "2% 8%" : "0 0"}`,
          }}
        >
          <div
            className={`${classes["over-view__right__image"]} ${
              !isFullSize ? classes["inner-size"] : classes["full-size"]
            }`}
          >
            <Image
              src={rightImage}
              fill
              alt="case-study-image"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
