import { Navigation, Pagination,  } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import GoogleSwiper from "./swiper";
import { review } from "../../constant/review";



import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";



export default () => {
  const reviews = review.data;
  return (
    <div className="swiper-section">
    <div className="swiper-button-prev swiper1-prev"></div>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination,]}
      spaceBetween={50}
      slidesPerView={3}
      navigation={{
          clickable: true,
          nextEl: ".swiper1-next",
          prevEl: ".swiper1-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper1-page",
        }}

      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >

{reviews.map((item, index) => (
        <SwiperSlide key={index}>
          <GoogleSwiper data={item} />
        </SwiperSlide>
      ))}


    </Swiper>
    <div className="swiper-button-next swiper1-next"></div>

      <div className="swiper-pagination swiper1-page"></div>
</div>
  );
};
