import React from "react";
import classes from "./AllServiceOndigitals.module.scss";
import ServiceCard from "@/components/ui/ServiceCard/ServiceCard";

const dataCard = [
  {
    id: 1,
    title: (
      <p>
        Search Engine <br /> Optimization (SEO)
      </p>
    ),
    color: "#3D1766",
    link: "#",
  },
  {
    id: 2,
    title: <p>Pay Per <br/> Click(PPC)</p>,
    color: "#6F1AB6",
    link: "#",
  },
  {
    id: 3,
    title: <p>Social Media <br/> Marketing</p>,
    color: "#FF0032",
    link: "#",
  },
  {
    id: 4,
    title: <p>Website / <br/> E-commerce <br/> Design & Development</p>,
    color: "#CD0404",
    link: "#",
  },
  {
    id: 5,
    title: <p>Mobile App <br/> Design & Development</p>,
    color: "#131114",
    link: "#",
  },
  {
    id: 6,
    title: <p>Content <br/> Marketing</p>,
    color: "#3D1766",
    link: "#",
  },
  {
    id: 7,
    title: <p>KOL <br/> Marketing</p>,
    color: "#6F1AB6",
    link: "#",
  },
  {
    id: 8,
    title: <p>Creative <br/> Design</p>,
    color: "#FF0032",
    link: "#",
  },
  {
    id: 9,
    title: <p>OOH <br/> Advertising</p>,
    color: "rgba(205, 4, 4, 1)",
    link: "#",
  },
  {
    id: 10,
    title: <p>TVC <br/> Advertising</p>,
    color: "rgba(19, 17, 20, 1)",
    link: "#",
  },
  {
    id: 11,
    title: <p>Telemarketing</p>,
    color: "rgba(61, 23, 102, 1)",
    link: "#",
  },
  {
    id: 12,
    title: <p>Email <br/> Marketing</p>,
    color: "rgba(111, 26, 182, 1)",
    link: "#",
  },
  {
    id: 13,
    title: <p>PR Event <br/> Marketing</p>,
    color: "rgba(255, 0, 50, 1)",
    link: "#",
  },
  {
    id: 14,
    title: <p>Video <br/> Marketing</p>, 
    color: "rgba(205, 4, 4, 1)",
    link: "#",
  },
  {
    id: 15,
    title: <p>Need special help? <br/> Tell us ↓</p>,
    link: "#",
    isFinal: true,
  },
];
export default function AllServiceOndigitals() {
  return (
    <section className={classes["all-service-ondigitals"]}>
      <div className="container">
        <div className={classes["all-service-ondigitals__title"]}>
          <p>Explore our Full Solution for Digital Marketing</p>
        </div>
        <div className={classes["all-service-ondigitals__card"]}>
          {dataCard.map((item) => (
            <div
              key={item.id}
              className={classes["all-service-ondigitals__card__item"]}
            >
              <ServiceCard
                isFinal={item.isFinal ? true : false}
                title={item.title}
                color={item.color}
                href={item.link}
              />
            </div>
          ))}
          {/* <div className={classes["all-service-ondigitals__card__item"]}>
            <div className={classes["final-card"]}>
              <div className={classes["final-card__content"]}>
                <p>Need special help?</p>
                <ButtonNoBorder
                  href="#"
                  textSize="md"
                  RightIcon={
                    <ArrowRight width={24} height={24} color="#131114" />
                  }
                >
                  Tell us
                </ButtonNoBorder>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
