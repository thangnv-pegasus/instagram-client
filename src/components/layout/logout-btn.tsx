import { IModal } from "@/types/modal"
import { BiLogOut } from "react-icons/bi"
import { headers } from 'next/headers'

const ButtonLogout = () => {
    const pathname = headers().get('next-url')
    console.log({pathname})
    return(
        <button className="flex w-full px-3 py-[10px] transition-all ease-linear items-center my-3 hover:bg-gray-50 group">
          <span className="text-2xl transition-all ease-linear group-hover:scale-105">
            <BiLogOut />
          </span>{" "}
            {
                // pathname !== '/message' && <p className="text-sm ml-2">Đăng xuất</p>
            }
              
        </button>
    )
}

export default ButtonLogout