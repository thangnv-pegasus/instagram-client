"use client";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import InputEmoji from "react-input-emoji";
import { IPostPaginate } from "@/types/home";
import PostImage from "./post-image";
import Pusher from "pusher-js";
import PostDetail from "../modal/post-detail";
import "@/style/story-slide.css";
const Post = ({ post }: { post: IPostPaginate }) => {
  const inputRef = useRef();
  const [text, setText] = useState("");
  const [likes, setLikes] = useState(post.post_detail.like_total);
  const [isLike, setIsLike] = useState(post.is_like);
  const [showDetail, setShowDetail] = useState(false);

  function handleOnEnter() {
    console.log("enter", text);
  }

  useEffect(() => {
    const pusher = new Pusher(`${process.env.NEXT_PUBLIC_PUSHER_APP_KEY}`, {
      cluster: `${process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER}`,
    });

    const channel = pusher.subscribe("like-post");
    
    channel.bind(
      "like-event",
      function (data: { id: number; likesCount: number; name: string }) {
        if (data.id == post.post_id) {
          setLikes(() => {
            return data.likesCount;
          });
          setIsLike((pre) => !pre);
        }
      }
    );

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [post.post_id]);

  const handleLike = async () => {
    const res = await fetch(`/api/post/${post.post_id}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await res.json();
  };

  const handleUnlike = async () => {
    const res = await fetch(`/api/post/${post.post_id}/unlike`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await res.json();
  };

  return (
    <>
      <div className="mb-5">
        <div className="flex items-center py-2">
          <Link
            href={""}
            className="h-10 w-10 block relative rounded-full overflow-hidden bg-gradient-to-tr from-amber-500 to-fuchsia-600"
          >
            <div className="absolute top-[2px] left-[2px] right-[2px] bottom-[2px] bg-white rounded-full"></div>
            <Image
              src={
                post.user_profile.avatar_url ?? "https://placehold.it/100x100"
              }
              alt={post.user_profile.nickname}
              // width={50}
              // height={50}
              fill
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "50%",
                padding: "4px",
                zIndex: "1",
              }}
            />
          </Link>
          <Link href={""} className="text-xs font-semibold ml-2">
            {post.user_profile.nickname}
          </Link>
          <p className="text-xs text-gray-550 font-medium ml-[10px] relative after:content-[''] after:absolute after:w-1 after:h-1 after:-left-[6px] after:bg-black after:rounded-full after:top-1/2 after:-translate-y-1/2">
            {post.post_detail.created_at + ""}
          </p>
        </div>
        <div className="relative w-full h-[468px] border-[1px] border-solid border-gray-400 rounded-md overflow-hidden">
          <PostImage images_id={post.images_id} />
        </div>
        <div className="flex justify-between items-center pt-3 pb-1">
          <div className="flex items-center">
            {isLike ? (
              <button className="text-2xl text-red-500" onClick={handleUnlike}>
                <FaHeart />
              </button>
            ) : (
              <button className="text-2xl" onClick={handleLike}>
                <FaRegHeart />
              </button>
            )}
            <button
              className="text-xl mx-4"
              onClick={() => setShowDetail(true)}
            >
              <FaRegMessage />
            </button>
            <button className="text-xl">
              <FaRegPaperPlane />
            </button>
          </div>
          <button className="text-2xl">
            {true ? <FaBookmark /> : <CiBookmark />}
          </button>
        </div>
        <p className="text-sm font-semibold px-1">{likes} lượt thích</p>
        <div className="flex items-center line-clamp-1 my-1 text-sm px-1">
          <Link href={""} className="font-semibold mr-2">
            {post.user_profile.nickname}
          </Link>
          <div className="text-sm">{post.post_detail.caption}</div>
        </div>
        <button className="my-2 text-sm text-gray-400 px-1">
          Xem tất cả bình luận
        </button>
        <form action="" method="post" className="block w-full">
          <InputEmoji
            ref={inputRef}
            value={text}
            onChange={setText}
            onEnter={handleOnEnter}
            cleanOnEnter
            placeholder="Type a message"
            shouldReturn={false}
            shouldConvertEmojiToImage={false}
            borderColor="#ccc"
          />
        </form>
      </div>
      {showDetail === true && (
        <PostDetail
          post={post}
          setShowDetail={setShowDetail}
          likes={likes}
          setLikes={setLikes}
          isLike={isLike}
          setIsLike={setIsLike}
          handleLike={handleLike}
          handleUnLike={handleUnlike}
        />
      )}
    </>
  );
};

export default Post;
