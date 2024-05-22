import Image from "next/image";
import instagram from "@/components/logo/instagram.svg";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import RegisterForm from "./resgister-form";
import LinkForm from "./form-link";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Đăng ký",
  description: "Trang đăng ký",
};
if (cookies().get("token")) {
  redirect("/");
}
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
          <RegisterForm>
            <LinkForm />
          </RegisterForm>
        </div>
        <div className="py-4 text-center border-[1px] border-solid border-gray-300 mt-5 text-sm">
          Bạn đã có tài khoản?{" "}
          <Link href={"/login"} className="font-medium hover:text-sky-600">
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
