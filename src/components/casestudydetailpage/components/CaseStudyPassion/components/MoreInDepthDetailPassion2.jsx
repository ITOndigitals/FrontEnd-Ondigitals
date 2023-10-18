import Image from "next/image";
import classes from "./MoreInDepthDetailPassion2.module.scss";
import CaseStudyListItemContent from "@/components/ui/CaseStudyListItem/CaseStudyListItemContent";

const img1 =
  "https://s3-alpha-sig.figma.com/img/6623/f3a3/2ef1a76b9edc8ada086321f2308c24aa?Expires=1698624000&Signature=fGr2yoloIFupVstVW0tHR0ifxLrV07WCLbjOjTgVEUWZxJBrlDDIhffNExowS4trWgcgyBLENdgZhBDW5bpfn2dILTwqvUn4sGM4QAkkmEJGuXTVGRGXeoMUaLmoAHX1IC7TrDlJT7gHINL4FSnd~bwzJ8HJzXdDOcuWMHAKCDcEZqO-LOzgojF5U7A76KWtM1GWJCnBtcLjnP-GPlue58Jj4UNSkSexaFMG5CSJSSISwgum88ekoenmdeitiG6BD2gJbgOIXW1wHWMoeZhYEJKoHP7yVMcp~0vhnjS7uI8fYuyU9VI0uU91qx2WHBDl9BnLvSRuLvHlFXzUiNMCkw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const img2 =
  "https://s3-alpha-sig.figma.com/img/0ec0/611a/bec2a7741f2ec256128e821c2186c0f2?Expires=1698624000&Signature=YuQ8Gr6TycfTELMG2mQNyt~KmhmgmDAGAIct22Q0rb4BW4LSu6Qhm54LMyy63Ny7kOeKm0hVDkK7cpUOwt0Cs~rYwFz7rQeKcDc7vrhh0PCAWzq5MYe6f1yV3tNHN6Sv9v1BXMNi~vu1d3zdVILeEmDm6~paQkPAUWsyVM-4EQSzM38tljB-RYM6bK4ZJd80~FBt3ZpWhVH84u3wePsUavLy6P5W-rRz1rZl77trs0~BrjdlqwhWbhQUKkR7GKixk32glIsVG0DgEPxyo7EEfVapTMCn7WCpeWlAuntdrBvm7NyRy1cxQWTeir7fvJVj2yy0FyO~hbHd7LeFnclfsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const img3 =
  "https://s3-alpha-sig.figma.com/img/21d4/7e13/78335d074b4d39fadda617a5dd0c001e?Expires=1698624000&Signature=XD24iOCLcKfbRyqv1yvtnnapBRnr6AbkLc4g29P4c3y4KzxoOfLt8xxAT9VQF3oL9a5hZc-mLEAukWoP2iMbu6Pffa3XSH~f0OOrqtpra2ieEAwutUPeZMSsFbaJVMmSj6QGncLD-w11P~YMp0XeTdj3ap1lM~-gNZkhtCM2rtV4eC0WgPkWt9XHtjRlcXbWMMNcO4dU2uSAZP9A~LoN1sto3VMYpz-DqByG5r5IBbSpzZDc4IXAC5X20bxtxH8WOz10vzVL59MAKNVLKQb9zHMseD~hvUN32CvP5P19y~Oy2HENQy2RMe6iEzlrzypIxmzeOhF2RTszthdDQvQbsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

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

const MoreInDepthDetailPassion2 = () => {
  const content = DUMMY_INDEPTH_CONTENT;

  return (
    <section className={classes["more-in-depth-detail"]}>
      <div className="container">
        <div className={classes["more-in-depth-detail-container"]}>
          <div className={classes["more-in-depth-detail-left"]}>
            <div className={classes["more-in-depth-detail-left-wrapper"]}>
              <div className={classes["more-in-depth-detail-left-img-1"]}>
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
              <div className={classes["more-in-depth-detail-left-img-2"]}>
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
              <div className={classes["more-in-depth-detail-left-img-3"]}>
                <Image
                  src={img3}
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
          <div className={classes["more-in-depth-detail-right"]}>
            <div className={classes["more-in-depth-detail-right__content"]}>
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
        </div>
      </div>
    </section>
  );
};

export default MoreInDepthDetailPassion2;
