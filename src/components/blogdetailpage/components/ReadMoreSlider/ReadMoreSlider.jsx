import BlogCard from "@/components/ui/BlogCard/BlogCard";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const ReadMoreSlider = ({ data }) => {
  return (
    <Swiper
      className="read-more-swiper"
      cssMode={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      freeMode={true}
      autoplay={{
        delay: 2500000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      }}
      modules={[Pagination, Autoplay, FreeMode]}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <BlogCard data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReadMoreSlider;
