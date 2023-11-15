import React from "react";
import classes from "./OverViewCaseStudyDetail.module.scss";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

// Các configuration dựa trên biến config layout
const DUMMY_LAYOUT_CONFIGS = [5, 7];
// const isKulDal = false;
const isFullSize = true; // Layout bất đối xứng hay không

// Danh sách các logo ở dưới
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

// Hình ảnh bên phải
const rightImage =
  "https://s3-alpha-sig.figma.com/img/ff59/4c31/c55c898b1c9bea08b9ac399c65cfe003?Expires=1698624000&Signature=PXxmHQ0DTK0vAJO3-PchnO22gj4ol46h8fpgJs1sdCYqv7I7p5cLZ4TK8SUJuKJRLYh1x0LO9FcyIIgvxDLzM~4SoyeLS6JzyJ6Azchtj5bWTCRIUfPgFjB80BCYKI~oKKQVwmEHrTuBB9JbHtvBhg4iqq91uwHT15pEYgr~W0Q7badCurg2u1xCdk9CtIMj5fTdTOi4zR-D72uJJJo7e8luMLPQz1-XmT6hM1VE28voUGf8kCw7MowwG-UJvfNTjwqE~Ny0CzNoFXVyKohVGTcLX8a-HQjrdLCQD4EDCQHecS765IYG0kx8ik-TsRkwRqoRUetdS2z-BA8Dm47V3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

//Màu nền của section
const mainBackgroundColor = "red"; 

export default function OverViewCaseStudyDetail() {

  return (
    <section
      className={classes["over-view"]}
      style={{ backgroundColor: mainBackgroundColor }}
    >
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
                Ducati is a high-class Italian motorcycle-manufacturer, owned by
                the Volkswagen Group - one of the world's leading manufacturers
                of automobiles and commercial vehicles.
              </p>
              <p
                className={classes["over-view__left__content__text"]}
                style={{ fontFamily: MavenPro.style.fontFamily }}
              >
                At the beginning of 2020, CT-Wearnes Vietnam became the
                exclusive brand distributor of Ducati in Vietnam.
              </p>
              <p
                className={classes["over-view__left__content__text"]}
                style={{ fontFamily: MavenPro.style.fontFamily }}
              >
                On Digitals helped design and develop a fully functional website
                to showcase and promote Ducati products to Vietnamese audience.
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
                      style={{ objectFit: "cover" }}
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
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
