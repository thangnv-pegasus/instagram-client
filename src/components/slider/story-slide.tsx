"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '@/style/story-slide.css'
// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import Item from "../story/item";
import 'swiper/css/navigation';

const StorySlide = () => {
  return (
   <div className="w-full">
     <Swiper
      slidesPerView={9}
      spaceBetween={10}
      slidesPerGroupSkip={9}
      navigation= {true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      style={{ display: 'block' }}
    >
      <SwiperSlide key={1}>
        <Item />
      </SwiperSlide>
      <SwiperSlide key={2}>
        <Item />
      </SwiperSlide>
      <SwiperSlide key={3}>
        <Item />
      </SwiperSlide>
      <SwiperSlide key={3}>
        <Item />
      </SwiperSlide>
      <SwiperSlide key={3}>
        <Item />
      </SwiperSlide>
      <SwiperSlide key={3}>
        <Item />
      </SwiperSlide>
      <SwiperSlide key={3}>
        <Item />
      </SwiperSlide>
      <SwiperSlide key={3}>
        <Item />
      </SwiperSlide>
      
    </Swiper>
   </div>
  );
};

export default StorySlide;
