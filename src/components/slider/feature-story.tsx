"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation, Pagination } from "swiper/modules";
import FeatureItem from "../story/feature-item";
import '@/style/story-slide.css'

const FeatureStory = () => {
  return (
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <FeatureItem />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureItem />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureItem />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureItem />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureItem />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureItem />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureItem />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureItem />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureItem />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureItem />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureItem />
        </SwiperSlide>
      </Swiper>
  );
};

export default FeatureStory;
