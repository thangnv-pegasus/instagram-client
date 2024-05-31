"use client";
import { useState } from "react";
import MyPosts from "./mypost-infinite";
import { IProfile } from "@/types/profile";
import { LuGrid } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";
import { PiUserSquare } from "react-icons/pi";

const PostSection = ({ user }: { user: IProfile }) => {
  const [tab, setTab] = useState<Number>(1);

  return (
    <>
      <div className="flex justify-center border-t-2 border-solid border-gray-200 gap-x-14">
        <button
          type="button"
          className={`flex items-center px-3 py-4 text-sm uppercase border-t-2 border-solid -mt-[2px] ${
            tab === 1
              ? "text-black border-black"
              : "text-gray-550 border-transparent"
          }`}
          onClick={() => setTab(1)}
        >
          {" "}
          <span className="mr-2">
            <LuGrid />
          </span>{" "}
          Bài viết
        </button>
        <button
          type="button"
          className={`flex items-center px-3 py-4 text-sm uppercase border-t-2 border-solid -mt-[2px] ${
            tab === 2
              ? "text-black border-black"
              : "text-gray-550 border-transparent"
          }`}
          onClick={() => setTab(2)}
        >
          {" "}
          <span className="mr-2">
            <FaRegBookmark />
          </span>{" "}
          Đã lưu
        </button>
        <button
          type="button"
          className={`flex items-center px-3 py-4 text-sm uppercase border-t-2 border-solid -mt-[2px] ${
            tab === 3
              ? "text-black border-black"
              : "text-gray-550 border-transparent"
          }`}
          onClick={() => setTab(3)}
        >
          <span className="mr-2 text-lg">
            <PiUserSquare />
          </span>
          Được gắn thẻ
        </button>
      </div>
      {tab === 1 && (
        <div className="grid grid-cols-3 gap-2 mt-5">
          <MyPosts user={user} />
        </div>
      )}
      {tab === 2 && (
        <>
          <p className="mb-3 mt-5 text-xs text-gray-550">
            Chỉ mình bạn có thể xem mục mình đã lưu
          </p>
          <div className="grid grid-cols-3 gap-2"></div>
        </>
      )}
      {tab === 3 && <div className="grid grid-cols-3 gap-2"></div>}
    </>
  );
};

export default PostSection;
