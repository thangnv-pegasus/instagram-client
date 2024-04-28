"use client";

import MessageItem from "@/components/message/short-item";
import Avatar from "@/components/users/avatar";
import Link from "next/link";
import { useRef, useState } from "react";
import { RiMessengerLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { FiVideo } from "react-icons/fi";
import Message from "@/components/message/item";
import InputEmojiWithRef from "react-input-emoji";

const Page = () => {
  const [selectMessage, setSelectMessage] = useState(1);
  const inputRef = useRef();
  const [text, setText] = useState("");
  function handleOnEnter() {
    console.log("enter", text);
  }

  return (
    <div className="flex pl-20">
      <div className="h-screen w-400px bg-white border-r-[1px] border-solid border-gray-300">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center pt-10 px-5">
            <h2 className="font-bold text-lg select-none">chin_db</h2>
            <button
              type="button"
              className="text-xs text-sky-600 font-semibold"
            >
              Đăng xuất
            </button>
          </div>
          <div className="flex items-center justify-between px-5 pt-5 mb-2">
            <p className="font-semibold text-base select-none">Tin nhắn</p>
            <p className="text-gray-550 font-semibold text-xs">
              Tin nhắn đang chờ
            </p>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
          </div>
        </div>
      </div>
      {selectMessage !== null ? (
        <div className="flex flex-col flex-1 h-screen">
          <div className="flex items-center justify-between py-4 px-5 border-b-[1px] border-solid border-gray-850">
            <Link href={""} className="flex items-center">
              <Avatar type="no-border" />
              <p className="font-semibold ml-3">Chii Nguyễn</p>
            </Link>
            <div className="flex items-center text-2xl gap-x-4">
              <button className="p-1 cursor-pointer">
                <IoCallOutline />
              </button>
              <button className="p-1 cursor-pointer">
                <FiVideo />
              </button>
            </div>
          </div>
          <div className="flex-auto flex flex-col overflow-y-auto px-5 py-3">
            <Message message="first commit" position="left" />
            <Message message="first commit" position="right" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="left" />
            <Message message="first commit" position="right" />
            <Message message="first commit 2" position="left" />
            <Message message="first commit 3" position="right" />
          </div>
          <form action="" method="post" className="block w-full ">
            <InputEmojiWithRef
              fontSize={14}
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
      ) : (
        <div className="flex items-center justify-center flex-1 h-screen">
          <div>
            <p className="text-8xl w-36 h-36 flex items-center justify-center rounded-full border-2 border-solid border-black mx-auto">
              <RiMessengerLine />
            </p>
            <h3 className="text-center font-semibold mt-4 mb-2">
              Tin nhắn của bạn
            </h3>
            <p className="text-sm text-gray-550">
              Gửi ảnh và tin nhắn riêng tư cho bạn bè hoặc nhóm
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
