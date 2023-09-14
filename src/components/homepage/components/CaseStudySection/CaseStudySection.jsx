import classes from "./CaseStudySection.module.scss";
import CaseStudiesList from "./CaseStudiesList";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import TopRightArrow from "@/components/ui/Icons/TopRightArrow";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { useEffect, useState } from "react";

const DUMMY_CASE_STUDY = [
  {
    id: 1,
    name: "Client: Renault Vietnam",
    descriptions: [
      "Website Development",
      "SEO Content Creation",
      "Website Development",
    ],
    year: 2020,
    image: "/assets/images/backgrounds/car.png",
  },
  {
    id: 2,
    name: "Client: Renault Vietnam",
    descriptions: [
      "Website Development",
      "SEO Content Creation",
      "Website Development",
    ],
    year: 2020,
    image: "/assets/images/backgrounds/car.png",
  },
  {
    id: 3,
    name: "Client: Renault Vietnam",
    descriptions: [
      "Website Development",
      "SEO Content Creation",
      "Website Development",
    ],
    year: 2020,
    image: "/assets/images/backgrounds/car.png",
  },
];

const CaseStudySection = ({ NavButton }) => {
  const [isOnMobile, setIsOnMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsOnMobile(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={`${classes["case-study"]} case-study-section`}>
      {!isOnMobile && <SectionHeader />}
      <div className="container">
        <div className={`${classes["case-study-header"]} appear-from-down`}>
          <h2 className={classes["case-study-header__heading"]}>Case Study</h2>
          <ButtonNoBorder
            href="#"
            textSize="md"
            RightIcon={<TopRightArrow width={24} height={24} color="#ffffff" />}
          >
            VIEW ALL
          </ButtonNoBorder>
        </div>
      </div>
      <div className="container-no-pd appear-from-down-slow-more">
        <CaseStudiesList items={DUMMY_CASE_STUDY} />
      </div>
      {NavButton && NavButton}
    </section>
  );
};

export default CaseStudySection;
