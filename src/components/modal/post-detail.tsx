"use client";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { IImage, IPostPaginate } from "@/types/home";
import { Dispatch, Key, SetStateAction } from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const PostDetail = ({
  post,
  setShowDetail,
}: {
  post: IPostPaginate;
  setShowDetail: Dispatch<SetStateAction<boolean>>;
}) => {
    console.log(post.images_id)
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(89,89,89,0.2)] flex justify-center items-center z-[2000]">
      <button
        className="absolute top-0 right-0 p-3 text-3xl text-white"
        onClick={() => setShowDetail(false)}
      >
        <IoClose />
      </button>
      <div className="w-4/5 h-4/5 bg-white grid grid-cols-7_5 rounded-md overflow-hidden">
        <div className="max-w-7/12 relative">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {post.images_id.map((item: IImage, index: Key) => {
              return (
                <SwiperSlide key={index}>
                  <Image
                    src={item.image_url ?? "https://placehold.it/100x100"}
                    alt="post"
                    fill
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <p>key</p>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PostDetail;
