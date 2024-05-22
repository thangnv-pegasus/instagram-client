"use client";

// Import Swiper React components
import "@/style/story-slide.css";
// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import Item from "../story/item";
import "swiper/css/navigation";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const StorySlide = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11];
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={9}
        spaceBetween={10}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {arr.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Item />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default StorySlide;
