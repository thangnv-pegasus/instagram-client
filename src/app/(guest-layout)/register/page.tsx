import Image from "next/image";
import instagram from "@/components/logo/instagram.svg";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
const Page = () => {
  return (
    <div className="flex justify-center my-10 rounded-sm">
      <div className="">
        <div className="px-10 py-5 border-[1px] border-solid border-gray-300">
          <Image
            src={instagram}
            alt="Logo"
            className="block w-44 mx-auto mb-2"
          />
          <p className="text-gray-500 font-semibold text-center">
            Đăng ký để xem ảnh và video từ bạn bè.
          </p>
          <div className="space-y-3 mt-10">
            <button className="block w-full relative bg-gray-150 px-2 py-3 transition-all ease-linear hover:bg-neutral-200 rounded-md">
              <span className="absolute top-1/2 left-0 -translate-y-1/2 py-2 px-3 text-lg select-none text-sky-600">
                <FaFacebook />
              </span>
              <p className="text-xs font-semibold">Tiếp tục với Facebook</p>
            </button>
            <button className="block w-full relative bg-gray-150 px-2 py-3 transition-all ease-linear hover:bg-neutral-200 rounded-md">
              <span className="absolute top-1/2 left-0 -translate-y-1/2 py-2 px-3 text-lg select-none text-sky-600">
                <FcGoogle />
              </span>
              <p className="text-xs font-semibold">Tiếp tục với google</p>
            </button>
          </div>
          <div className="relative w-full py-5">
            <div className="absolute top-1/2 -translate-y-1/2 w-36 h-0.5 bg-gray-300 left-0"></div>
            <p className="text-center text-xs text-gray-600 tracking-widest uppercase">
              Hoặc
            </p>
            <div className="absolute top-1/2 -translate-y-1/2 w-36 h-0.5 bg-gray-300 right-0"></div>
          </div>
          <form action="" method="post" className="block space-y-3 w-96">
            <div className="relative">
              <input
                type="text"
                id="phone-or-mail"
                className="peer w-full p-4 text-sm block bg-gray-650 border-gray-300 border-solid border-[1px] rounded-lg placeholder:text-transparent 
                disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                placeholder="Số điện thoại hoặc email"
              />
              <label
                htmlFor="phone-or-mail"
                className="absolute top-0 text-sm start-0 p-4 h-full text-gray-600 truncate text-gray-[#444] pointer-events-none transition
              ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none 
              peer-focus:text-xs peer-focus:-translate-y-2 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs 
              peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-gray-500"
              >
                Số điện thoại hoặc email
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="hs-floating-input-fullname"
                className="peer w-full p-4 text-sm block bg-gray-650 border-gray-300 border-solid border-[1px] rounded-lg placeholder:text-transparent 
                disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                placeholder="Tên đầy đủ"
              />
              <label
                htmlFor="hs-floating-input-fullname"
                className="absolute top-0 text-sm start-0 p-4 h-full text-gray-600 truncate text-gray-[#444] pointer-events-none transition
              ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none 
              peer-focus:text-xs peer-focus:-translate-y-2 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs 
              peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-gray-500"
              >
                Tên đầy đủ
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="hs-floating-input-username"
                className="peer w-full p-4 text-sm block bg-gray-650 border-gray-300 border-solid border-[1px] rounded-lg placeholder:text-transparent 
                disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                placeholder="Tên người dùng"
              />
              <label
                htmlFor="hs-floating-input-username"
                className="absolute top-0 text-sm start-0 p-4 h-full text-gray-600 truncate text-gray-[#444] pointer-events-none transition
              ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none 
              peer-focus:text-xs peer-focus:-translate-y-2 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs 
              peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-gray-500"
              >
                Tên người dùng
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                id="hs-floating-input-password"
                className="peer w-full p-4 text-sm block bg-gray-650 border-gray-300 border-solid border-[1px] rounded-lg placeholder:text-transparent 
                disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                placeholder="Mật khẩu"
              />
              <label
                htmlFor="hs-floating-input-password"
                className="absolute top-0 text-sm start-0 p-4 h-full text-gray-600 truncate text-gray-[#444] pointer-events-none transition
              ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none 
              peer-focus:text-xs peer-focus:-translate-y-2 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs 
              peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-gray-500"
              >
                Mật khẩu
              </label>
            </div>
            <div className="w-96 text-xs mt-5 text-center">
              <span>
                Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin
                liên hệ của bạn lên Instagram.{" "}
              </span>
              <Link href={""} className="hover:text-sky-600">
                Tìm hiểu thêm
              </Link>
            </div>
            <div className="w-96 mt-5 text-xs text-center leading-4">
              Bằng cách đăng ký, bạn đồng ý với{" "}
              <Link href={""} className="hover:text-sky-600 ml-[2px]">
                Điều khoản
              </Link>
              ,{" "}
              <Link href={""} className="hover:text-sky-600 ml-[2px]">
                Chính sách quyền riêng tư
              </Link>{" "}
              và
              <Link href={""} className="hover:text-sky-600 mx-[2px]">
                Chính sách cookie
              </Link>{" "}
              của chúng tôi.
            </div>
            <button
              type="submit"
              className="block w-full select-none py-3 text-center bg-sky-500 text-white text-sm rounded-md"
            >
              Đăng ký
            </button>
          </form>
        </div>
        <div className="py-4 text-center border-[1px] border-solid border-gray-300 mt-5 text-sm">
          Bạn đã có tài khoản? <Link href={"/login"} className="font-medium hover:text-sky-600">Đăng nhập</Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
