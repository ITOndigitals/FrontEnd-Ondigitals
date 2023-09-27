import React from "react";
import classes from "./AllServiceOndigitals.module.scss";
import { Maven_Pro } from "next/font/google";
import ServiceCard from "@/components/ui/ServiceCard/ServiceCard";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import { ArrowRight } from "@/components/ui/Icons/ListIcon";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const dataCard = [
  {
    id: 1,
    title: "Search Engine Optimization (SEO)",
    color: "#3D1766",
    link: "#",
  },
  {
    id: 2,
    title: "Pay Per Click(PPC)",
    color: "#6F1AB6",
    link: "#",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    color: "#FF0032",
    link: "#",
  },
  {
    id: 4,
    title: "Website / E-commerce Design & Development",
    color: "#CD0404",
    link: "#",
  },
  {
    id: 5,
    title: "Mobile App Design & Development",
    color: "#131114",
    link: "#",
  },
  {
    id: 6,
    title: "Content Marketing",
    color: "#3D1766",
    link: "#",
  },
  {
    id: 7,
    title: "KOL Marketing",
    color: "#6F1AB6",
    link: "#",
  },
  {
    id: 8,
    title: "Creative Design",
    color: "#FF0032",
    link: "#",
  },
  {
    id: 9,
    title: "OOH Advertising",
    color: "rgba(205, 4, 4, 1)",
    link: "#",
  },
  {
    id: 10,
    title: "TVC Advertising",
    color: "rgba(19, 17, 20, 1)",
    link: "#",
  },
  {
    id: 11,
    title: "Telemarketing",
    color: "rgba(61, 23, 102, 1)",
    link: "#",
  },
  {
    id: 12,
    title: "Email Marketing",
    color: "rgba(111, 26, 182, 1)",
    link: "#",
  },
  {
    id: 13,
    title: "PR Event Marketing",
    color: "rgba(255, 0, 50, 1)",
    link: "#",
  },
  {
    id: 14,
    title: "Video Marketing",
    color: "rgba(205, 4, 4, 1)",
    link: "#",
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
                title={item.title}
                color={item.color}
                href={item.link}
              />
            </div>
          ))}
          <div className={classes["all-service-ondigitals__card__item"]}>
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
          </div>
        </div>
      </div>
    </section>
  );
}
