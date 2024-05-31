"use client";

import { IMyPost, IPOST } from "@/types/posts";
import Image from "next/image";
import { FaHeart } from "react-icons/fa6";
import { BiSolidMessageRounded } from "react-icons/bi";
import { useState } from "react";
import PostDetail from "../modal/post-detail";
import { IProfile } from "@/types/profile";
const PostMini = ({
  post,
  user,
  type = "normal",
  classess,
}: {
  post?: IMyPost;
  type: "big" | "normal";
  classess?: string;
  user: IProfile;
}) => {

  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className={`relative block w-full overflow-hidden group ${
          type === "big" ? "h-600px" : "h-300px"
        } ${classess}`}
        onClick={() => setShow(true)}
      >
        <Image
          src={post?.images[0].image_url ?? "https://placehold.it/200x200"}
          alt="post name"
          height={200}
          width={200}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: "1",
            position: "static",
          }}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 items-center justify-center bg-[rgba(0,0,0,0.4)] group-hover:flex hidden">
          <div className="text-white flex items-center justify-center text-xl gap-x-5">
            <div className="flex items-center">
              <FaHeart />
              <p className="text-sm ml-1">{post?.like_total}</p>
            </div>
            <div className="flex items-center">
              <BiSolidMessageRounded />
              <p className="text-sm ml-1">{post?.comment_count}</p>
            </div>
          </div>
        </div>
      </button>
      {show && post && (
        <PostDetail
          likes={post.like_total}
          setShowDetail={setShow}
          post={{
            images: post.images,
            is_like: false,
            post_id: post.id,
            user_id: post.user_id,
            user_profile: {
              avatar_url: user.avatar_url,
              bio: user.bio,
              id: user.user_id,
              is_company: user.is_company,
              is_real: user.is_real,
              nickname: user.nickname,
              priority: user.priority,
              user_id: user.user_id,
            },
            post_detail: {
              caption: post.caption,
              created_at: post.created_at,
              id: post.id,
              like_total: post.like_total,
              updated_at: post.updated_at,
              user_id: post.user_id,
            },
          }}
        />
      )}
    </>
  );
};

export default PostMini;
