"use client";
import { ICcomment, IChildComment } from "@/types/comments";
import Avatar from "../users/avatar";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { durationMoment } from "@/utils/moment-duration";
import { useState } from "react";
const CommentItem = ({ comment }: { comment: ICcomment }) => {
  const [showChild, setShowChild] = useState(false);
  return (
    <div className="py-2 my-2">
      <div className="flex justify-between items-start mb-1 select-auto">
        <div className="flex flex-1 pr-5">
          <Avatar type="no-border" size="mini" image_url={comment.avatar_url} />

          <div className=" ml-2">
            <p className="text-sm">
              <span className="font-bold mr-1">mr.thank.you</span>
              {comment.content}
            </p>
            <div className="flex items-center text-xs text-gray-850 gap-x-5 mt-1">
              <p>{durationMoment(comment.created_at).result}</p>
              <p>{comment.like_total} lượt thích</p>
              <button className="transition-all ease-linear duration-200 hover:text-black">
                Trả lời
              </button>
            </div>
          </div>
        </div>

        <button className="text-lg">
          {true ? <IoHeartOutline /> : <IoHeartSharp />}
        </button>
      </div>
      {/* child comment */}
      <div className=" ml-10">
        {comment.child_comment.length > 0 && (
          <button
            className="text-xs relative text-gray-850 px-8 after:content-[''] after:absolute after:left-0 after:w-7 after:top-1/2 after:h-[1px] after:bg-gray-400 after:-translate-y-1/2 
        before:content-[''] before:absolute before:right-0 before:w-7 before:top-1/2 before:h-[1px] before:bg-gray-400 before:-translate-y-1/2"
            onClick={() => setShowChild((pre) => !pre)}
          >
            {showChild === false
              ? `Xem ${comment.child_comment.length} câu trả lời`
              : `Ẩn câu trả lời`}
          </button>
        )}
        {showChild &&
          comment.child_comment.map((item, index) => {
            return <ChildComment childComment={item} key={index} />;
          })}
      </div>
    </div>
  );
};

const ChildComment = ({ childComment }: { childComment: IChildComment }) => {
  return (
    <div className="flex justify-between items-start py-2 my-2 select-auto">
      <div className="flex flex-1 pr-5">
        <Avatar
          type="no-border"
          size="mini"
          image_url={childComment.avatar_url}
        />

        <div className=" ml-2">
          <p className="text-sm">
            <span className="font-bold mr-1">mr.thank.you</span>
            {childComment.content}
          </p>
          <div className="flex items-center text-xs text-gray-850 gap-x-5 mt-1">
            <p>{durationMoment(childComment.created_at).result}</p>
            <p>{childComment.like_total} lượt thích</p>
            <button className="transition-all ease-linear duration-200 hover:text-black">
              Trả lời
            </button>
          </div>
        </div>
      </div>

      <button className="text-lg">
        {true ? <IoHeartOutline /> : <IoHeartSharp />}
      </button>
    </div>
  );
};

export default CommentItem;
