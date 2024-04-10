import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import GoogleSwiper from "./swiper";
import {
  Box,
  Card,
  Text,

} from "@shopify/polaris";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";



export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      
      <SwiperSlide><GoogleSwiper/></SwiperSlide>
      <SwiperSlide><GoogleSwiper/></SwiperSlide>
      <SwiperSlide><GoogleSwiper/></SwiperSlide>
      <SwiperSlide><GoogleSwiper/></SwiperSlide>
      
     
    </Swiper>
  );
};


