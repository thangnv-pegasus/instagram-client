"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";
import screenshot1 from "@/components/logo/screenshot1.png";
import screenshot2 from "@/components/logo/screenshot2.png";
import screenshot3 from "@/components/logo/screenshot3.png";
import screenshot4 from "@/components/logo/screenshot4.png";
import Image from "next/image";

const AutoSlide = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      effect={'fade'}
      speed={3000}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          src={screenshot1}
          alt="image 1"
          className="w-full h-full object-cover object-center block"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={screenshot2}
          alt="image 1"
          className="w-full h-full object-cover object-center block"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={screenshot3}
          alt="image 1"
          className="w-full h-full object-cover object-center block"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={screenshot4}
          alt="image 1"
          className="w-full h-full object-cover object-center block"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default AutoSlide;
