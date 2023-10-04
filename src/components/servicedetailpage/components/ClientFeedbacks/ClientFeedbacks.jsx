import React from "react";
import classes from "./ClientFeedbacks.module.scss";
import ExploreTheExperienceCardReview from "@/components/ui/ExploreTheExperienceCardReview/ExploreTheExperienceCardReview";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import TopRightArrow from "@/components/ui/Icons/TopRightArrow";
const dataSimple = [
  {
    id: 1,
    contentReview:
      "On Digitals adheres to the timetable and deadlines and has a well-organized working process.",
    position: "Founder & Managing Director,Taylor Made Beauty Ltd",
    name: "Nikki Taylor",
    avatar: "/assets/images/PageAboutUs/ExploreTheExperience/Nikki Taylor.png",
    titleService: "SEO & PPC Service for Personal Care Product Manufacturer",
    serviceContent:
      "On Digitals provides ongoing SEO services for a personal care product manufacturer. The team is responsible for SEO audit, keyword study, content generation, and link-building procedures.",
    nameService: "SEO, PPC",
    priceService: "$50,000 to $199,999",
    timeService: "Oct. 2022 - Ongoing",
    pointRating: "5.0",
    feedbackContent:
      "Thanks to On Digitals, the client's online visibility, search engine rankings, organic search results, and website traffic have experienced steady growth. The team's well-structured workflow and open communication have been beneficial. They have been accommodating, understanding, and responsive.",
  },
  {
    id: 2,
    contentReview:
      "On Digital stands apart due to their dynamic and flexible working style. They sought to provide the best service.",
    position: "Wastewater Engineer Kim Hoang Hiep",
    name: "Thanh Chi Nguyen",
    avatar:
      "/assets/images/PageAboutUs/ExploreTheExperience/Thanh Chi Nguyen.png",
    titleService:
      "Web Design & Digital Marketing for Environmental Consultancy",
    serviceContent:
      "In order to promote their brand, an environmental consultancy hired On Digitals to design their site and provide marketing efforts. The team handled the web profile's UI design, content marketing, and SEO.",
    nameService: "Web Design, Digital Marketing",
    priceService: "Less than $10,000",
    timeService: "Aug. - Dec. 2020",
    pointRating: "5.0",
    feedbackContent:
      "On Digitals did a fantastic job. End users praised the website's design. Thanks to their efforts, the client saw improvements in their digital presence and online engagements. The team was incredibly professional, efficient, creative, and flexible.",
  },
  {
    id: 3,
    contentReview:
      "The most impressive aspect about them is their ability to complete tasks on schedule.",
    position: "CEO Guernsey",
    name: "Jared Stigge",
    avatar: "/assets/images/PageAboutUs/ExploreTheExperience/Truong Pham 1.png",
    titleService: "Web Dev & Design for Design Architecture & Consulting Firm",
    serviceContent:
      "On Digitals delivered a user-friendly interface that fully met the client's expectations. The team's project management skills were exemplary, allowing them to complete tasks on schedule effectively.",
    nameService: "Web Design",
    priceService: "$50,000 to $199,999",
    timeService: "Feb. - May 2023",
    pointRating: "5.0",
    feedbackContent:
      "On Digitals delivered a user-friendly interface that fully met the client's expectations. The team's project management skills were exemplary, allowing them to complete tasks on schedule effectively.",
  },
];
export default function ClientFeedbacks() {
  return (
    <section className={classes["client-feedbacks"]}>
      <div className="container">
        <div className={classes["client-feedbacks__content"]}>
          <div className={classes["client-feedbacks__content__head"]}>
            <p className={classes["client-feedbacks__content__head__title"]}>
              Client feedbacks
            </p>
            <p className={classes["client-feedbacks__content__head__text"]}>
              Our SEO Services
            </p>
          </div>
          <div className={classes["client-feedbacks__content__card"]}>
            {dataSimple &&
              dataSimple.map((item) => (
                <div
                  className={`${classes["client-feedbacks__content__card__item"]} card-service-detail`}
                  key={item.id}
                >
                  <ExploreTheExperienceCardReview data={item} />
                </div>
              ))}
          </div>
          <div className={classes["client-feedbacks__content__btn"]}>
            <ButtonNoBorder
              href="#"
              textSize="md"
              RightIcon={<TopRightArrow width={24} height={24} color="#fff" />}
            >
              VIEW MORE
            </ButtonNoBorder>
          </div>
        </div>
      </div>
    </section>
  );
}
