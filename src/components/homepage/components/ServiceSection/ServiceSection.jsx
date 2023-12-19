import classes from "./ServiceSection.module.scss";
import ServiceOptionsList from "./ServiceOptionsList";
import ServiceDetail from "./ServiceDetail";
import { useEffect, useState } from "react";
import AnimatedLines from "./AnimatedLines";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import TopRightArrow from "@/components/ui/Icons/TopRightArrow";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { useRouter } from "next/router";
import { getLanguagePathService } from "../../../../../utils/languageSlug";
const parse = require("html-react-parser");

const ServiceSection = ({ NavButton, data }) => {
  // const [services, setServices] = useState([]);
  const [sectionsHeader, setSectionsHeader] = useState();
  const [renderServices, setRenderServices] = useState([]);
  const [currentActiveService, setCurrentActiveService] = useState();
  const [isOnMobile, setIsOnMobile] = useState(false);

  const { nodes: serviceList } = data ? data.serviceParents : [];
  const { serviceSectionTitle, serviceSectionDesc, serviceSectionTextButton } =
    data.pages.nodes[0].homePageInputContent || {};
  useEffect(() => {
    if (serviceList.length > 0) {
      const renderServices = serviceList.map((item, index) => {
        return {
          id: index,
          slug: item.slug,
          name: item.serviceHomepage.name,
          title: item.title,
          isActive: index === 0,
          activeColor: item.serviceHomepage.color,
          secondaryActiveColor: item.serviceHomepage.color,
          image: item.featuredImage?.node.sourceUrl,
          content: <div>{parse(item.excerpt)}</div>,
        };
      });
      setRenderServices(renderServices);
      setCurrentActiveService(renderServices[0]);
    }
  }, [serviceList]);

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

  const changeActiveItemHandler = (itemId) => {
    //Find and active Item
    const itemIndex = renderServices.findIndex((item) => item.id === itemId);
    const item = { ...renderServices[itemIndex], isActive: true };
    setCurrentActiveService(item);
    let renderData = [...renderServices].map((item) => {
      return { ...item, isActive: false };
    });
    renderData[itemIndex] = item;
    setRenderServices(renderData);
  };
  const { locale } = useRouter();
  const basePath = getLanguagePathService(locale);

  return (
    <section className={`${classes["service"]} service-section`}>
      {!isOnMobile && <SectionHeader isDark />}
      <div className="container">
        <div className={classes["service-grid"]}>
          <div className={classes["service-header"]}>
            <h2
              className={`${classes["service-header-title"]} appear-from-down`}
            >
              {serviceSectionTitle}
            </h2>
            <p
              className={`${classes["service-header-desc"]} appear-from-down-slow`}
            >
              {serviceSectionDesc}
            </p>
            <ButtonNoBorder
              className="appear-from-down-slow"
              href={basePath}
              RightIcon={
                <TopRightArrow width={24} height={24} color="#131114" />
              }
            >
              {serviceSectionTextButton}
            </ButtonNoBorder>
          </div>
          <div className={classes["service-grid__spacer"]}></div>
          <ServiceOptionsList
            items={renderServices}
            onChangeActiveItem={changeActiveItemHandler}
          />
          {currentActiveService && (
            <ServiceDetail context={currentActiveService} />
          )}
        </div>
      </div>
      <AnimatedLines />
      {NavButton && NavButton}
    </section>
  );
};

export default ServiceSection;
