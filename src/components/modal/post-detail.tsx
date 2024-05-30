"use client";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { IImage, IPostPaginate } from "@/types/home";
import {
  Dispatch,
  Key,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Avatar from "../users/avatar";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import { durationMoment } from "@/utils/moment-duration";
import InputEmojiWithRef from "react-input-emoji";
import InfiniteComment from "../comment/infinite-comment";
const PostDetail = ({
  post,
  setShowDetail,
  isLike,
  setIsLike,
  likes,
  setLikes,
  handleLike,
  handleUnLike,
}: {
  post: IPostPaginate;
  setShowDetail: Dispatch<SetStateAction<boolean>>;
  isLike: boolean;
  setIsLike: Dispatch<SetStateAction<boolean>>;
  likes: number;
  setLikes: Dispatch<SetStateAction<number>>;
  handleLike: VoidFunction;
  handleUnLike: VoidFunction;
}) => {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const handleOnEnter = (text: string) => {
    console.log("Enter:", text);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(89,89,89,0.2)] flex justify-center items-center z-[2000]">
      <button
        className="absolute top-0 right-0 p-3 text-3xl text-white"
        onClick={() => setShowDetail(false)}
      >
        <IoClose />
      </button>
      <div className="w-4/5 h-4/5 bg-white flex rounded-md overflow-hidden select-none">
        <div className="w-730px h-full overflow-hidden">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper h-full"
          >
            {post.images_id.map((item: IImage, index: Key) => {
              return (
                <SwiperSlide key={index} className="">
                  <Image
                    src={item.image_url ?? "https://placehold.it/100x100"}
                    alt="post"
                    width={100}
                    height={50}
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
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between py-3 px-5 border-b-[1px] border-solid border-gray-850">
            <div className="flex items-center">
              <Avatar
                type="no-border"
                size="mini"
                borderColor="gray"
                image_url={post.user_profile.avatar_url}
              />
              <p className="text-sm font-semibold mx-2">
                {post.user_profile.nickname}
              </p>
            </div>
            <button className="p-1 text-lg">
              <BsThreeDots />
            </button>
          </div>
          <div className="flex-1 px-5 py-2 overflow-y-auto no-scrollbar">
            <div className="flex itemss-center">
              <Avatar
                type="no-border"
                size="mini"
                image_url={post.user_profile.avatar_url}
              />
              <div className="mx-2 text-sm">
                <div className="flex items-center">
                  <p className="mr-2 font-semibold">
                    {post.user_profile.nickname}
                  </p>
                  <span>{post.post_detail.caption}</span>
                </div>
                <p className="text-xs text-gray-550">
                  {durationMoment(post.post_detail.created_at).result}
                </p>
              </div>
            </div>
            {/* comments */}
            <InfiniteComment post_id={post.post_id} />
          </div>
          <div className="">
            <div className="px-5 py-3 border-b-[1px] border-solid border-gray-850 shadow-top-gray">
              <div className="flex justify-between items-center text-xl py-2">
                <div className="flex items-center gap-x-4">
                  <button className={`${isLike && "text-red-500"}`}>
                    {isLike ? <FaHeart /> : <FaRegHeart />}
                  </button>
                  <button>
                    <FaRegMessage />
                  </button>
                  <button>
                    <FaRegPaperPlane />
                  </button>
                </div>
                <button>{false ? <FaBookmark /> : <FaRegBookmark />}</button>
              </div>
              <div className="text-sm font-medium mt-1">
                <p className="leading-4">{likes} lượt thích</p>
                {durationMoment(post.post_detail.created_at).result}
              </div>
            </div>
            <div className="">
              <InputEmojiWithRef
                ref={inputRef}
                borderColor="transparent"
                fontSize={14}
                value={text}
                onChange={setText}
                cleanOnEnter
                onEnter={handleOnEnter}
                placeholder="Type a message"
                shouldReturn={false}
                shouldConvertEmojiToImage={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
