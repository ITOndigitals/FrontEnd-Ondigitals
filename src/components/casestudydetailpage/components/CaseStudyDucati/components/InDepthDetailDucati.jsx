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
  "https://s3-alpha-sig.figma.com/img/ed75/84bc/be848ef02b38970e0ca935e117a6e213?Expires=1699228800&Signature=QGnMrkMC3bhNwDJR7WKHSj7dmMNYbXAEprqidmBzpRX5fT6KeCepjq5U7pS2C4ZCYCuleeG9T23WizNlvQ1KR1TDEYj8At0P74Yiw2o3lXqLR7CxlPQacT3L4a0qELbL9LIM76FmUdmEYeRq6AVPOHTL2dkOY09knKD8JG7VfmNIsW2ytIil3wrL9BhOI9oc42FgY0Z~853kFxmdtC~jf6CgYzlvRSrYg79uN4jgNiBLDUgXV~zoZUwpaHH1352abFGZbGYcmd76pPASt9IsqgdlCuEQhmsoi9GuoDTlsYxMVHyPKdLYNw8ZO2zvvVrYR9KWhxzCQoU92JyW9GrFdg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
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
