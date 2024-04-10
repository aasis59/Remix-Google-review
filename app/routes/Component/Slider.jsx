import { Navigation, Pagination,  } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import GoogleSwiper from "./swiper";
import { review } from "../../constant/review";



import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";



export default ({next,prev,page}) => {
  const reviews = review.data;
  const nextEl = `.swiper1-next-${next}`;
  const prevEl = `.swiper1-prev-${prev}`;
  const pageEl = `.swiper1-page-${page}`;
  const nextElo = `swiper1-next-${next}`;
  const prevElo = `swiper1-prev-${prev}`;
  const pageElo = `swiper1-page-${page}`;
  return (
    <div className="swiper-section">
    <div className={`swiper-button-prev ${prevElo}`}></div>
    <Swiper
      
      modules={[Navigation, Pagination,]}
      spaceBetween={10}
      slidesPerView={3}
      navigation={{
          clickable: true,
          nextEl: nextEl,
          prevEl:prevEl,
        }}
        pagination={{
          clickable: true,
          el: pageEl,
        }}

      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >

{reviews.map((item, _index) => (
        <SwiperSlide key={`${item.id}`}>
          <GoogleSwiper data={item} />
        </SwiperSlide>
      ))}


    </Swiper>
    <div className={`swiper-button-next ${nextElo}`}></div>

      <div className={`swiper-pagination ${pageElo}`}></div>
</div>
  );
};
