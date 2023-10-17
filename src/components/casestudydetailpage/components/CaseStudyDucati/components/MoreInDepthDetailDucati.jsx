import Image from "next/image";
import classes from "./MoreInDepthDetailDucati.module.scss";
import CaseStudyListItemContent from "@/components/ui/CaseStudyListItem/CaseStudyListItemContent";

const img1 =
  "https://s3-alpha-sig.figma.com/img/5660/a9a3/75cb0806943d4dc9d21f97957395a61b?Expires=1698624000&Signature=fF-PchFK8RL0EjWomEi7BMHvSsmCDQNSttSgwSg4r0PiGAQIG3AENIVtVyuHYE08we~8kyU7nMnsAGc9~Qe5vOrkZ9DVA5GzMv52qNmpIsrR7Dho1JLHJ6YpiJS6-mMyUD7j4SNGUkEZLevFQiZtaJ4vZyY7-VLo1lzz64E30qfSE-DMnyt21ry06G69zu~cwaqCDUnUInP2k3gcqoMaWW5QxHIl1dlVArFdMAD32NKiU3KLMhpedGhLvH0Lo89qQAA-eOWaEF6IeM4W8rIXsMmLI2oywuWjW6wohhxOn599dVjwrzBcvsU7e1VvOnGKuPqUKPu4jfVx4wBO~6GdVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const img2 =
  "https://s3-alpha-sig.figma.com/img/9183/070e/35f36a41d19f31e8316f47ddb0c1e79d?Expires=1698624000&Signature=Q9XCz8qk511FZRneO0c8dS0QymOdDcqeTTfWuik2MKk6OqDmSZePnrKPfknJzIhMblEyjrDLt7rAlVAjq-4nDNPuaxELPecgoyHl3yvKWeoQloD49~Uw34jVjKpyfuHfseeqnp8-WVXrq-DyhN2~U-T8aQkCk6dZwIdnTfUFmh8IGPQAbIffYf6uQlcdQ7lPm2N22iimKc42SUe2MvQpIpaekwYNiSJbH6wMLbta4dIStsCDEFaW5eGAwDsKveN9auziclQ3lvQZPaFRYiylFgVBspQV8x08cN4~H6TqSMGonQN-vpgYd5f5ZBjwkr1N1w9FDZBC6ct0eaD11zJ5Fw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

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

const MoreInDepthDetailDucati = () => {
  const content = DUMMY_INDEPTH_CONTENT;

  return (
    <section className={classes["more-in-depth-ducati"]}>
      <div className={classes["bike-img"]}>
        <Image
          src="https://s3-alpha-sig.figma.com/img/8d11/bacb/81e016242038fde5e604dd18c65d7d85?Expires=1698624000&Signature=XfAQyjqoSd3f909pnd2rBb0rMgZOnk2LiGzASXDZJtmk7DZGkWGfrk~GWs5BhgmRcTtYmcsnhsHo4exjX32PZ4Tg6EuF4BVgFaZ3RQt15Gqbr4idhK9QHVoH9WZNJLpmYPpnRDh81XQHoZupsawnExiMXRVcaZAiadMRoiKFLRLVCmuQSj6JiCJgG9vPLJ74-44K4427G8d0NYL2FHRN7oIjjo4mkzpujZdbbDaAH-qn-FmfIZ6FnSd0XxjZu~YtIREEcV9xwf3xWlMdCvzLT4uwCiByN8h3EzAAU1yioL1ze~jEAmmpVHexPNdt5iv98baRC9I-hqfZl-i2vDCqpw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          fill
          alt="in-depth-ducati"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="container">
        <div className={classes["more-in-depth-ducati-container"]}>
          <div className={classes["more-in-depth-ducati-spacer"]}></div>
          <div className={classes["more-in-depth-ducati-images"]}>
            <div className={classes["more-in-depth-ducati-images-wrapper"]}>
              <div className={classes["more-in-depth-ducati-img-1"]}>
                <Image
                  src={img1}
                  width="0"
                  height="0"
                  alt="in-depth-ducati"
                  style={{
                    objectFit: "cover",
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={classes["more-in-depth-ducati-img-2"]}>
                <Image
                  src={img2}
                  width="0"
                  height="0"
                  alt="in-depth-ducati"
                  style={{
                    objectFit: "cover",
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
          <div className={classes["more-in-depth-ducati-content"]}>
            <div className={classes["more-in-depth-ducati__content-list"]}>
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
        </div>
      </div>
    </section>
  );
};

export default MoreInDepthDetailDucati;
