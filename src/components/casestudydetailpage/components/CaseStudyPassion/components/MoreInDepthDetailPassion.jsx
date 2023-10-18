import CaseStudyListItemContent from "@/components/ui/CaseStudyListItem/CaseStudyListItemContent";
import classes from "./MoreInDepthDetailPassion.module.scss";
import Image from "next/image";

const DUMMY_INDEPTH_CONTENT = [
  {
    title: "Creative Design",
    dotColor: "#3D1766",
    contentItems: [
      "Product image design",
      "Post design following the brand's guidelines and agreed concepts",
      "Advertising post design",
      "Digital promotion banner design",
    ],
  },
];
const img1 =
  "https://s3-alpha-sig.figma.com/img/cc05/ca1f/2fb9a4088617312d9b041c71073b344e?Expires=1698624000&Signature=WCHdBOcbGrGYiAgqa61UcpB-DXZLKuuiPWUiRptpLDwPATa89EPhLOjiWkMv5~RF-x6qpj9SagEv9y7Ay9I39dR1GLiyZAbTtLBaBAABSI2yT~Vt7M1RIBh7-dPOxYW~tWSrM6wT3cSA955pLSBMg2rT5~ZqQFpNP781~nYPrXAChzOnTFAmn5jdGD~8VeDrml-UYfVnf4RFTZXuhTZVCAcbw9~4YWiIFmgk5N11J7hrnhrjgcVadxmyyOYDMFf07bQboxYI653d8U78UmL4jfvz4rC9NoahYurvnucGdRJ8291CM0ByEH7Y~W0KGvuOILAeknqIo5zW6XTKXC9dyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const img2 =
  "https://s3-alpha-sig.figma.com/img/7cfb/787c/52f9fb4306edb7d63c1a2f3cbc7fa473?Expires=1698624000&Signature=G93OAccwDPG4-uFYIeqoexTDTOvFhlDEGZARQOB25kW5Gng8Wv3y-ufkfZDinktz1a3r1gvPMbkcDzj5DTm9mjkBCPd4L3tGbni5OcgeUO~yiq3sdhda~Mp6aZIgbo2VunWhaL5vSTXyvlNGcF9ktIwox3DiD6-a76LULT8SO1gPOpg~Om6MQYPvhrbAO7ZwrRgj-3wMm1X2x1wJLRHe69f~3vVPfCksElxt26SK4kLyCB3Ro2~Md77AZtPueyt6KSv37gIbk90n~jgkDml3HkE5jD6eBVOzEr889zjx6tB3jpsuFjWbqn6V33S4VhyltDcP03AoaZTJZnMq-jzaHw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const MoreInDepthDetailPassion = () => {
  const content = DUMMY_INDEPTH_CONTENT;

  return (
    <section className={classes["more-in-depth-passion"]}>
      <div className="container">
        <div className={classes["more-in-depth-passion-container"]}>
          <div className={classes["more-in-depth-passion-left"]}>
            <div
              className={classes["more-in-depth-passion-left__content-list"]}
            >
              {content.map((listItem, index) => {
                return (
                  <CaseStudyListItemContent
                    content={listItem}
                    dotColor={listItem.dotColor}
                    index={index}
                    isDark={false}
                  />
                );
              })}
            </div>
          </div>
          <div className={classes["more-in-depth-passion-right"]}>
            <div className={classes["more-in-depth-passion-right-wrapper"]}>
              <div className={classes["more-in-depth-passion-right-img-1"]}>
                <Image
                  src={img2}
                  width="0"
                  height="0"
                  alt="case-study-detail"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={classes["more-in-depth-passion-right-img-2"]}>
                <Image
                  src={img1}
                  width="0"
                  height="0"
                  alt="case-study-detail"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreInDepthDetailPassion;
