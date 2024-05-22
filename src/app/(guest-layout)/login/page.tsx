import { Metadata } from "next";
import logo from "@/components/logo/instagram.svg";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import AutoSlide from "@/components/slider/auto-slide";
import Link from "next/link";
import LoginForm from "./login-form";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'
export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Trang đăng nhập",
};
const Page = () => {

  if(cookies().get('token')){
    redirect('/')
  }

  return (
    <div className="flex justify-center items-center h-screen w-full overflow-hidden">
      <div className="relative block bg-homephone bg-homephone_size h-580px w-580px -mr-20 bg-no-repeat">
        <div className="absolute right-0 w-[250px] top-[26px] left-[160px] overflow-hidden rounded-lg">
          <AutoSlide />
        </div>
      </div>
      <div>
        <div className="py-5 px-10 border-[1px] border-solid border-gray-300 rounded-sm">
          <Image
            priority
            src={logo}
            alt="Instagram"
            title="Instagram"
            className="w-44 block mb-10 mt-8 mx-auto"
          />
          <LoginForm />
          <div className="relative w-full py-5">
            <div className="absolute top-1/2 -translate-y-1/2 w-36 h-0.5 bg-gray-300 left-0"></div>
            <p className="text-center text-xs text-gray-600 tracking-widest uppercase">
              Hoặc
            </p>
            <div className="absolute top-1/2 -translate-y-1/2 w-36 h-0.5 bg-gray-300 right-0"></div>
          </div>
          <div className="space-y-3">
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
          <Link
            href={"/forgot-password"}
            className="block w-full text-gray-700 text-center text-xs mt-10 font-medium transition-all ease-linear hover:text-black"
          >
            Quên mật khẩu?
          </Link>
        </div>
        <div className="py-4 mt-5 text-center text-sm border-[1px] border-solid border-gray-300 select-none rounded-sm">
          <span>Bạn chưa có tài khoản ư?</span>
          <Link href={"/register"} className="text-sky-600 ml-1">
            Đăng ký
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
