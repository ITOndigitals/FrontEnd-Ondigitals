import React from "react";
import classes from "./BestDigitalMarketing.module.scss";
import BestDigitalMarketingItem from "./BestDigitalMarketingItem";
const DataTest = [
  {
    id: 1,
    icon: "/assets/images/PageAboutUs/BestMarketing/item1.png",
    title: "Project management",
    content:
      "We project to manage all aspects of our work to ensure the best results",
  },
  {
    id: 2,
    icon: "/assets/images/PageAboutUs/BestMarketing/item2.png",
    title: "Thorough research",
    content:
      "We collect as much information as possible to run an effective campaign",
  },
  {
    id: 3,
    icon: "/assets/images/PageAboutUs/BestMarketing/item3.png",
    title: "Local insights",
    content:
      "We know how to win the locals' trust and how to penetrate the local market",
  },
  {
    id: 4,
    icon: "/assets/images/PageAboutUs/BestMarketing/item4.png",
    title: "Persistent growth",
    content:
      "Our target audience is highly segmented and relevant to your business",
  },
  {
    id: 5,
    icon: "/assets/images/PageAboutUs/BestMarketing/item5.png",
    title: "Full transparency",
    content:
      "We provide detailed monthly reports and turn your data into valuable takeaways",
  },
  {
    id: 6,
    icon: "/assets/images/PageAboutUs/BestMarketing/item6.png",
    title: "Competitive pricing",
    content:
      "Our pricing is guaranteed affordable based on current market trends and competition",
  },
];
export default function BestDigitalMarketing() {
  return (
    <>
      <section className={classes["main-section"]}>
        <div className="container">
          <div className={classes["header"]}>
            <p>What makes us THE BEST Digital Marketing Agency</p>
          </div>
          <div className={classes["main-content"]}>
            <div className={classes["list-reason-item"]}>
              {DataTest.map((data) => (
                <BestDigitalMarketingItem item={data} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
