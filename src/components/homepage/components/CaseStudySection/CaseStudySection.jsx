import classes from "./CaseStudySection.module.scss";
import CaseStudiesList from "./CaseStudiesList";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import TopRightArrow from "@/components/ui/Icons/TopRightArrow";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const CaseStudySection = ({ NavButton, data }) => {
  const [isOnMobile, setIsOnMobile] = useState(false);
  const { allCaseStudy, pages } = data;
  const { caseStudySessionTitle, caseStudySessionButtonText } =
    pages.nodes[0].homePageInputContent || {};
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
  const { locale } = useRouter();
  const languagePaths = {
    en: "/case-study",
    vi: "/du-an",
  };
  const basePath = languagePaths[locale] || "/case-study";
  return (
    <section className={`${classes["case-study"]} case-study-section`}>
      {!isOnMobile && <SectionHeader />}
      <div className="container">
        <div className={`${classes["case-study-header"]} appear-from-down`}>
          <h2 className={classes["case-study-header__heading"]}>
            {caseStudySessionTitle}
          </h2>
          <ButtonNoBorder
            href={basePath}
            textSize="md"
            RightIcon={<TopRightArrow width={24} height={24} color="#ffffff" />}
          >
            {caseStudySessionButtonText}
          </ButtonNoBorder>
        </div>
      </div>
      <div className="container-no-pd appear-from-down-slow-more">
        <CaseStudiesList items={allCaseStudy} />
      </div>
      {NavButton && NavButton}
    </section>
  );
};

export default CaseStudySection;
