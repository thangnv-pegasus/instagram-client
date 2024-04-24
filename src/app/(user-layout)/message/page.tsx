'use client'

import MessageItem from "@/components/message/item"
import { useState } from "react"
import { RiMessengerLine } from "react-icons/ri";

const Page = () => {

    const [selectMessage, setSelectMessage] = useState(null)

    return (
        <div className="flex pl-20">
            <div className="h-screen w-400px bg-white border-r-[1px] border-solid border-gray-300">
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center pt-10 px-5">
                        <h2 className="font-bold text-lg select-none">chin_db</h2>
                        <button type="button" className="text-xs text-sky-600 font-semibold">Đăng xuất</button>
                    </div>
                    <div className="flex items-center justify-between px-5 pt-5 mb-2">
                        <p className="font-semibold text-base select-none">Tin nhắn</p>
                        <p className="text-gray-550 font-semibold text-xs">Tin nhắn đang chờ</p>
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
            {
                selectMessage !== null ? (
                    <>message</>
                ) : (
                    <div>
                        <div>
                            <RiMessengerLine />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Page