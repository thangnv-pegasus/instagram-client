"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "@/style/story-slide.css";
// import required modules
import { Navigation } from "swiper/modules";
import { Key } from "react";
import Image from "next/image";
import { IImage } from "@/types/image";

const PostImage = ({ images_id }: { images_id: Array<IImage> }) => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[468px]">
      {images_id.map((item: IImage, index: Key) => {
        return (
          <SwiperSlide key={index}>
            <Image
              src={item.image_url ?? "https://placehold.it/100x100"}
              alt="post"
              fill
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PostImage;
