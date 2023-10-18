import Image from "next/image";
import classes from "./InDepthDetailKundal.module.scss";
import CaseStudyListItemContent from "@/components/ui/CaseStudyListItem/CaseStudyListItemContent";

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

const InDepthDetailKundal = () => {
  const content = DUMMY_INDEPTH_CONTENT;
  const rightImage =
    "https://s3-alpha-sig.figma.com/img/dd59/b8e9/cdff501e2a4992457007413a0f4fe13f?Expires=1698019200&Signature=IXUw1DNYKw0ijVkx~wDm8kZDX3SNKhVsjGn33WiOznl5Zje~PTGXO33Nphq8zk8Iu7FBBJLUnpAcHDsXN8x2hSL3nk8o7AOSHjHx-izmwWf9NIzEvidA47EzLt86vP3rCYGvFkI0Kpy5nUw0oufu-8kkdM~U-5iHOJlPPlaQoNfluK7g-R0g1otkThJgPYLt6km22iPDK0r0FMF9FndLkPLRhh-iPPV32EKYjBRqPZRsvHQWwY6V1htLH1LLGwikVqrPMtTCY4ftQXBh7iOJMcv2RMsrfXXnnlC7ATF4HE0Cz4L62mjpkDRMsSza7DNMnojuluV6CcXViflO1g~M4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  const rightImage2 =
    "https://s3-alpha-sig.figma.com/img/e7bb/cd3c/8131ec49ecc3a6bf58fdbbccf3f71155?Expires=1698019200&Signature=dgeYzjVhKticuy3Qyokp7sJDgcwvojrlQ~AzyMw5ia1e8QCLM3I2o8JDE4vqyo3pSbk9a0cmvACuvB58ZepECxZ9llxMwxMcFwqMzPAiAgK3vcaZ8R7TZpNu2Mllj7uvE4ZopQu1~gNoezlTRb~lvA4iakD4458YiL4j5IIhLJ2ERf~GTFZqJY5LsQNzhcW2uQTCQTzLf0XbHERRowXz3ua69qeSmZ6zHHZn8IyZ2NfnzPTdTtezHXriudqNKlKvE5ekxlbQ1oSBfl-nttBgozv-nrWzYeycKmOFNco6eWgtGzp3xJKGh~q2AJ3YaOdMQQHUSvPMvznCuAQt-d1nhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

  return (
    <section className={classes["in-depth"]}>
      <div className="container">
        <div className={classes["in-depth-container"]}>
          <div className={classes["in-depth-left"]}>
            <p className={classes["in-depth-left__heading"]}>
              In-depth Details
            </p>
            <div className={classes["in-depth-left__content-list"]}>
              {content.map((listItem, index) => {
                return (
                  <CaseStudyListItemContent
                    content={listItem}
                    dotColor={listItem.dotColor}
                    index={index}
                    isDark={true}
                  />
                );
              })}
            </div>
          </div>
          <div className={classes["in-depth-right"]}>
            <div style={{ width: "fit-content" }}>
              <div className={classes["in-depth-right__image-1"]}>
                <Image
                  src={rightImage}
                  fill
                  alt="case-study-detail"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className={classes["in-depth-right__image-2"]}>
                <Image
                  src={rightImage2}
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
    </section>
  );
};

export default InDepthDetailKundal;
