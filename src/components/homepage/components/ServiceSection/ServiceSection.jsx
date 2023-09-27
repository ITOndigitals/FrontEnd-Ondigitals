import classes from "./ServiceSection.module.scss";
import ServiceOptionsList from "./ServiceOptionsList";
import ServiceDetail from "./ServiceDetail";
import { useEffect, useState } from "react";
import AnimatedLines from "./AnimatedLines";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import TopRightArrow from "@/components/ui/Icons/TopRightArrow";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";

const DUMMY_SERVICES = [
  {
    id: 1,
    name: "SEO",
    title: "Search Engine Optimization (SEO) 1",
    activeColor: "primary-dark",
    secondaryActiveColor: "primary-light",
    image: "/assets/images/partials/service-seo.png",
    content: (
      <div>
        <p>
          From the 2020s, an ever-increasing number of people, from C-Level
          employees to consumers, are using the web to search answers for their
          problems.
        </p>
        <p>
          Will your site be there at the first result to offer your products and
          services to solve their immediate needs? If not, your competitors are
          probably getting all those valuable leads...
        </p>
      </div>
    ),
  },
  {
    id: 2,
    name: "SEO",
    title: "Search Engine Optimization (SEO) 2",
    activeColor: "primary-light",
    secondaryActiveColor: "primary-dark",
    image: "/assets/images/partials/service-seo.png",
    content: (
      <div>
        <p>
          From the 2020s, an ever-increasing number of people, from C-Level
          employees to consumers, are using the web to search answers for their
          problems.
        </p>
        <p>
          Will your site be there at the first result to offer your products and
          services to solve their immediate needs? If not, your competitors are
          probably getting all those valuable leads...
        </p>
      </div>
    ),
  },
  {
    id: 3,
    name: "SEO",
    title: "Search Engine Optimization (SEO) 3",
    activeColor: "red-light",
    secondaryActiveColor: "red-dark",
    image: "/assets/images/partials/service-seo.png",
    content: (
      <div>
        <p>
          From the 2020s, an ever-increasing number of people, from C-Level
          employees to consumers, are using the web to search answers for their
          problems.
        </p>
        <p>
          Will your site be there at the first result to offer your products and
          services to solve their immediate needs? If not, your competitors are
          probably getting all those valuable leads...
        </p>
      </div>
    ),
  },
  {
    id: 4,
    name: "SEO",
    title: "Search Engine Optimization (SEO) 4",
    activeColor: "red-dark",
    secondaryActiveColor: "red-light",
    image: "/assets/images/partials/service-seo.png",
    content: (
      <div>
        <p>
          From the 2020s, an ever-increasing number of people, from C-Level
          employees to consumers, are using the web to search answers for their
          problems.
        </p>
        <p>
          Will your site be there at the first result to offer your products and
          services to solve their immediate needs? If not, your competitors are
          probably getting all those valuable leads...
        </p>
      </div>
    ),
  },
  {
    id: 6,
    name: "SEO",
    title: "Search Engine Optimization (SEO) 5",
    activeColor: "primary-dark",
    secondaryActiveColor: "primary-light",
    image: "/assets/images/partials/service-seo.png",
    content: (
      <div>
        <p>
          From the 2020s, an ever-increasing number of people, from C-Level
          employees to consumers, are using the web to search answers for their
          problems.
        </p>
        <p>
          Will your site be there at the first result to offer your products and
          services to solve their immediate needs? If not, your competitors are
          probably getting all those valuable leads...
        </p>
      </div>
    ),
  },
  {
    id: 7,
    name: "SEO",
    title: "Search Engine Optimization (SEO) 6",
    activeColor: "primary-light",
    secondaryActiveColor: "primary-dark",
    image: "/assets/images/partials/service-seo.png",
    content: (
      <div>
        <p>
          From the 2020s, an ever-increasing number of people, from C-Level
          employees to consumers, are using the web to search answers for their
          problems.
        </p>
        <p>
          Will your site be there at the first result to offer your products and
          services to solve their immediate needs? If not, your competitors are
          probably getting all those valuable leads...
        </p>
      </div>
    ),
  },
  {
    id: 8,
    name: "SEO",
    title: "Search Engine Optimization (SEO) 7",
    activeColor: "red-light",
    secondaryActiveColor: "red-dark",
    image: "/assets/images/partials/service-seo.png",
    content: (
      <div>
        <p>
          From the 2020s, an ever-increasing number of people, from C-Level
          employees to consumers, are using the web to search answers for their
          problems.
        </p>
        <p>
          Will your site be there at the first result to offer your products and
          services to solve their immediate needs? If not, your competitors are
          probably getting all those valuable leads...
        </p>
      </div>
    ),
  },
];

const ServiceSection = ({ NavButton }) => {
  const services = DUMMY_SERVICES;
  const [renderServices, setRenderServices] = useState(services);
  const [currentActiveService, setCurrentActiveService] = useState(services[0]);
  const [isOnMobile, setIsOnMobile] = useState(false);

  //Set active for the first item
  useEffect(() => {
    const data = [...renderServices].map((item, index) => {
      if (index === 0) {
        return { ...item, isActive: true };
      }
      return { ...item, isActive: false };
    });
    setRenderServices(data);
  }, []);

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

  return (
    <section className={`${classes["service"]} service-section`}>
      {!isOnMobile && <SectionHeader isDark />}
      <div className="container">
        <div className={classes["service-grid"]}>
          <div className={classes["service-header"]}>
            <p
              className={`${classes["service-header-title"]} appear-from-down`}
            >
              We offer The best DIGITAL SERVICES
            </p>
            <p
              className={`${classes["service-header-desc"]} appear-from-down-slow`}
            >
              For the persistent growth and creativity of ambitious brands
            </p>
            <ButtonNoBorder
              className="appear-from-down-slow"
              href="#"
              RightIcon={
                <TopRightArrow width={24} height={24} color="#131114" />
              }
            >
              VIEW FULL SOLUTION
            </ButtonNoBorder>
          </div>
          <div className={classes["service-grid__spacer"]}></div>
          <ServiceOptionsList
            items={renderServices}
            onChangeActiveItem={changeActiveItemHandler}
          />
          <ServiceDetail context={currentActiveService} />
        </div>
      </div>
      <AnimatedLines />
      {NavButton && NavButton}
    </section>
  );
};

export default ServiceSection;
