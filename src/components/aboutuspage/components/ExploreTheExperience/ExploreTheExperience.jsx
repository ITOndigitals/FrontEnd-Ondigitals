import React from "react";
import classes from "./ExploreTheExperience.module.scss";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import TopRightArrow from "@/components/ui/Icons/TopRightArrow";
import ExploreTheExperienceCardReview from "@/components/ui/ExploreTheExperienceCardReview/ExploreTheExperienceCardReview";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Mousewheel, Pagination } from "swiper/modules";
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
  {
    id: 4,
    contentReview:
      "Our traffic has increased dramatically since we started with them.",
    position: "Regional Sales & Marketing Manager Cement Company",
    name: "Truong Pham",
    avatar: "/assets/images/PageAboutUs/ExploreTheExperience/Nikki Taylor.png",
    titleService: "SEO Campaign for Vietnamese Cement Company",
    serviceContent:
      "A new construction company was expanding nationally across Vietnam, competing against long-established brands. They hired On Digitals to increase their brand awareness by improving their SEO rank in Vietnam.",
    nameService: "SEO",
    priceService: "$10,000 to $49,999",
    timeService: "June 2019 - Ongoing",
    pointRating: "5.0",
    feedbackContent:
      "The campaign involved keyword research and analysis, backend alterations, content creation, and link-building. On Digitals' responsive team increased the site's traffic dramatically, successfully targeting core audiences. This work has generated a good amount of new leads across Vietnam.",
  },
  {
    id: 5,
    contentReview:
      "Their competence, quality of work, and reliability make them stand out.",
    position: "CEO DFE",
    name: "Ellison Carroll",
    avatar: "/assets/images/PageAboutUs/ExploreTheExperience/Nikki Taylor.png",
    titleService: "Content Marketing for Education Firm",
    serviceContent:
      "On Digitals has provided content marketing and blogging services for an education firm. The goal is to publish the platforms on the popular website and the client's niche.",
    nameService: "Content Marketing",
    priceService: "$50,000 to $199,999",
    timeService: "Oct. 2022 - Ongoing",
    pointRating: "5.0",
    feedbackContent:
      "After the guest blogging and publishing content on various sites, the client has seen a significant increase in web traffic and top 10 ranking keywords and received new subscribers. The team has exhibited a smooth workflow through timelines and task management. They are reliable and skilled.",
  },
  {
    id: 6,
    contentReview:
      "They provided us a form that was used for easier updates and share important information.",
    position: "Marketing Assistant Manager Luxury Automotive Company",
    name: "Marvin McKinney",
    avatar: "/assets/images/PageAboutUs/ExploreTheExperience/Nikki Taylor.png",
    titleService: "Web Dev for Luxury Automotive Company",
    serviceContent:
      "A luxury automotive company engaged with On Digitals to build and develop their website. Their goal was to improve site traffic and enhance its customer journey.",
    nameService: "Web Development",
    priceService: "$10,000 to $49,999",
    timeService: "Aug. 2020 - Jan. 2021",
    pointRating: "4.5",
    feedbackContent:
      "Collaboration between the two parties went smoothly and effectively. The team was highly proactive in providing progress updates whenever it was necessary. The client was ultimately impressed with the final output of the project.",
  },
  {
    id: 7,
    contentReview: "Their team was skillful and strategic.",
    position: "Marketing Head Self-Help Podcast",
    name: "My Hien Tran",
    avatar: "/assets/images/PageAboutUs/ExploreTheExperience/Nikki Taylor.png",
    titleService: "Influencer Marketing Services for Self-Help Podcast",
    serviceContent:
      "On Digitals provided influencer marketing efforts for a self-help podcast. After an intensive research phase, they came up with a list of popular influencers for the client to choose from.",
    nameService: "Social Media Marketing",
    priceService: "$50,000 to $199,999",
    timeService: "Jan. - June 2021",
    pointRating: "5.0",
    feedbackContent:
      "As a result of this engagement, the client saw a 47% increase in social media followers; their organic reach also improved significantly. On Digitals managed the project really well — they followed an organized process and met all deadlines. They are professional, knowledgeable, and reliable.",
  },
  {
    id: 8,
    contentReview:
      "We were impressed by the professionalism of the team and how they handled the project.",
    position: "CEO Frozen Food Brand",
    name: "Fekete Csanád",
    avatar: "/assets/images/PageAboutUs/ExploreTheExperience/Nikki Taylor.png",
    titleService: "E-Commerce Website Design for Frozen Food Brand",
    serviceContent:
      "On Digitals created and designed the storefront of a frozen food brand's online shop. The design was expected to be simple and intuitive. The team also added a payment gateway and other third-party services.",
    nameService: "E-Commerce Development",
    priceService: "$50,000 to $199,999",
    timeService: "Jan. - Mar. 2022",
    pointRating: "5.0",
    feedbackContent:
      "The final website came out exactly as envisioned — fully functional, well-designed, and user-friendly. As a result, the client saw a 48% increase in terms of business sales. On Digitals managed tasks on Jira, allowing them to institute an organized and systematic process to avoid any delays.",
  },
  {
    id: 9,
    contentReview:
      "We have found On Digitals to be very accommodating and understanding as our project has developed.",
    position: "President Cantera Concrete Company",
    name: "Brent Dostal",
    avatar: "/assets/images/PageAboutUs/ExploreTheExperience/Nikki Taylor.png",
    titleService: "SEO & PPC for Concrete Company",
    serviceContent:
      "On Digitals provided SEO and PPC services for a concrete company. The team managed the client's website optimization and Google Ads campaigns.",
    nameService: "SEO, PPC, Social Media Marketing",
    priceService: "$10,000 to $49,999",
    timeService: "Nov. 2022 - June 2023",
    pointRating: "5.0",
    feedbackContent:
      "On Digitals generated 32% more high-quality leads and elevated the client's rankings for 300 competitive keywords. The team's accommodating and empathetic approach fostered a positive partnership. Their commitment to understanding the business and personalized approach was commendable.",
  },
];
export default function ExploreTheExperience({ data }) {
  const { sectionExploreTheExperience, allCardReviews } = data;
  const { titleSection, buttonLink } = sectionExploreTheExperience;
  const dataCardReviews = allCardReviews.nodes;
  return (
    <>
      <section className={classes["explore-the-experience"]}>
        <div className="container">
          <div className={classes["header"]}>
            <div className={classes["header__text"]}>
              <p className={classes["header__text__title"]}>
                {titleSection && titleSection}
              </p>
            </div>
            <div className={classes["header__btn"]}>
              <ButtonNoBorder
                href={buttonLink?.url}
                textSize="md"
                RightIcon={
                  <TopRightArrow width={24} height={24} color="#fff" />
                }
              >
                {buttonLink.title}
              </ButtonNoBorder>
            </div>
          </div>
          <div className={classes["main-content"]}>
            <Swiper
              // mousewheel={true}
              pagination={{
                clickable: true,
              }}
              modules={[Mousewheel, Pagination]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                  slidesPerGroup: 1,
                },
                700: {
                  slidesPerView: 2.1,
                  spaceBetween: 15,
                  slidesPerGroup: 1,
                },
                1024: {
                  slidesPerView: 3.2,
                  spaceBetween: 24,
                  slidesPerGroup: 1,
                },
              }}
              className="slider-explore-page-about-us"
            >
              {dataCardReviews.map((data) => (
                <SwiperSlide key={data.card_reviewId}>
                  <ExploreTheExperienceCardReview data={data?.cardReview} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
