"use client";

import FeatureStory from "@/components/slider/feature-story";
import FeatureItem from "@/components/story/feature-item";
import Avatar from "@/components/users/avatar";
import { LuGrid } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";
import { PiUserSquare } from "react-icons/pi";
import { useState } from "react";
import Footer from "@/components/layout/footer";
import PostMini from "@/components/post/post-mini";

const Page = () => {
  const [tab, setTab] = useState<Number>(1);

  return (
    <div className="pl-64">
      <div className="px-52 py-9">
        <div className="flex items-center mb-11">
          <Avatar type="no-border" size="big" />
          <div className="flex-auto px-20">
            <div className="flex items-center justify-between select-none pb-2">
              <p className="text-xl font-medium">thangnv_02</p>
              <div className="flex items-center">
                <button
                  type="button"
                  className="bg-gray-750 text-black text-sm py-1 px-4 mx-4 rounded-md font-semibold"
                >
                  Chỉnh sửa trang cá nhân
                </button>
                <button
                  type="button"
                  className="bg-gray-750 text-black text-sm py-1 px-4 mx-4 rounded-md font-semibold"
                >
                  Xem kho lưu trữ
                </button>
              </div>
            </div>
            <div className="flex py-2 text-sm justify-between select-none">
              <p>
                <span className="font-semibold">2</span> bài viết
              </p>
              <p>
                <span className="font-semibold">40</span> người theo dõi
              </p>
              <p>
                Đang theo dõi <span className="font-semibold">79</span> người
                dùng
              </p>
            </div>
            <div className="py-2 text-sm select-none">
              <p className="font-semibold">Nguyễn Văn Thắng</p>
              <p>Pegasus</p>
            </div>
          </div>
        </div>
        <div className="select-none mb-11">
          <FeatureStory />
        </div>
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
            <PostMini type="normal" />
            <PostMini type="normal" />
            <PostMini type="normal" />
            <PostMini type="normal" />
          </div>
        )}
        {tab === 2 && (
          <>
            <p className="mb-3 mt-5 text-xs text-gray-550">
              Chỉ mình bạn có thể xem mục mình đã lưu
            </p>
            <div className="grid grid-cols-3 gap-2">
              <PostMini type="normal" />
              <PostMini type="normal" />
              <PostMini type="normal" />
              <PostMini type="normal" />
            </div>
          </>
        )}
        {tab === 3 && (
          <div className="grid grid-cols-3 gap-2">
            <PostMini type="normal" />
            <PostMini type="normal" />
            <PostMini type="normal" />
            <PostMini type="normal" />
          </div>
        )}
        <Footer classes="justify-center" />
      </div>
    </div>
  );
};

export default Page;
