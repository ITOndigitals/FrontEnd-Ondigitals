import CaseStudyListItemContent from "@/components/ui/CaseStudyListItem/CaseStudyListItemContent";
import classes from "./InDepthDetailDucati.module.scss";
import Image from "next/image";

const DUMMY_INDEPTH_CONTENT = [
  {
    title: "Facebook Ads",
    dotColor: "#3D1766",
    contentItems: [
      "Cosmetic and healthcare market research",
      "Customer behavior analysis",
      "Customer segmentation",
      "Identify the target audience",
    ],
  },
];

const rightImage =
  "https://s3-alpha-sig.figma.com/img/ed75/84bc/be848ef02b38970e0ca935e117a6e213?Expires=1698624000&Signature=lkzjPxqkEU04q0DUbWwOyl247NgX1w3FxSyXnpRSFtumCrjDY0jcHOOa8I5r9CGZjabjIJ9gQOYZlcFE7lWllAZEDh6ieg48KRb80hrWCpbE2rA00F7kFVX7WdV69nWu7-t7zPn1UO9MzCjfEQeH3BwtVW7JyC-w5Toe~0ob2YOKwO-qiBy2jUCoMlP2ibVjvV1Uxxn-9jGv-jawQT3TyTwCTYr0PPlieaf6cxDzw1bIA2tWf9WSUSRSBgue9vyKHHIN9MzuAwicpeSkGWjJGX9cxo0Qktl3vB2edGrEoOGSG1PHFVa-23iaV5aWYzv9Q3~Uh22sGJbnR0HIWw4iAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const InDepthDetailDucati = () => {
  const content = DUMMY_INDEPTH_CONTENT;

  return (
    <section className={classes["in-depth-detail-ducati"]}>
      <div className="container">
        <div className={classes["in-depth-detail-ducati-container"]}>
          <div className={classes["in-depth-left"]}>
            <p className={classes["in-depth-left__heading"]}>
              In-depth Details
            </p>
            <div className={classes["in-depth-left__content-list"]}>
              {content.map((listItem, index) => {
                return (
                  <CaseStudyListItemContent
                    key={index}
                    content={listItem}
                    dotColor={listItem.dotColor}
                    index={index}
                    isDark={false}
                  />
                );
              })}
            </div>
          </div>
          <div className={classes["in-depth-right"]}>
            <div className={classes["in-depth-right"]}>
              <div style={{ width: "fit-content" }}>
                <div className={classes["in-depth-right__image"]}>
                  <Image
                    src={rightImage}
                    fill
                    alt="case-study-detail"
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InDepthDetailDucati;
