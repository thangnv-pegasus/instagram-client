"use client";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { useRef, useState } from "react";
import InputEmoji from "react-input-emoji";

interface IPost {
  avatar: string;
  image: string;
  author: string;
  title: string;
  created_at: string;
  updated_at: string;
  total_like: number;
  total_comment: number;
  isLike: boolean;
  isMark: boolean;
}

const Post = ({ post }: { post: IPost }) => {
  const inputRef = useRef();
  const [text, setText] = useState("");
  function handleOnEnter() {
    console.log("enter", text);
  }
  return (
    <div>
      <div className="flex items-center py-2">
        <Link
          href={""}
          className="h-10 w-10 block relative rounded-full overflow-hidden bg-gradient-to-tr from-amber-500 to-fuchsia-600"
        >
          <div className="absolute top-[2px] left-[2px] right-[2px] bottom-[2px] bg-white rounded-full"></div>
          <Image
            src={post.avatar}
            alt={post.author}
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
              zIndex: "999",
            }}
          />
        </Link>
        <Link href={""} className="text-xs font-semibold ml-2">
          {post.author}
        </Link>
        <p className="text-xs text-gray-550 font-medium ml-[10px] relative after:content-[''] after:absolute after:w-1 after:h-1 after:-left-[6px] after:bg-black after:rounded-full after:top-1/2 after:-translate-y-1/2">
          {post.created_at}
        </p>
      </div>
      <div className="relative w-full h-[468px] border-[1px] border-solid border-gray-400 rounded-md overflow-hidden">
        <Image
          src={post.image ?? ""}
          alt="post"
          fill
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="flex justify-between items-center pt-2 pb-1">
        <div className="flex items-center">
          {post.isLike === true ? (
            <button className="text-3xl">
              <FaHeart />
            </button>
          ) : (
            <button className="text-3xl">
              <CiHeart />
            </button>
          )}
          <button className="text-xl mx-2">
            <FaRegMessage />
          </button>
          <button className="text-xl ml-1">
            <FaRegPaperPlane />
          </button>
        </div>
        <button className="text-2xl">
          {post.isMark === true ? <FaBookmark /> : <CiBookmark />}
        </button>
      </div>
      <p className="text-sm font-semibold px-1">{post.total_like} lượt thích</p>
      <div className="flex items-center line-clamp-1 my-1 text-sm px-1">
        <Link href={""} className="font-semibold mr-2">
          {post.author}
        </Link>
        <div className="text-sm">{post.title}</div>
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
  );
};

export default Post;
