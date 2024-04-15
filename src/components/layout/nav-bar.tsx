import Image from "next/image";
import NavItem from "./nav-item";
import instagram from "@/components/logo/instagram.svg";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";

const Bar = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 h-screen bg-white w-64 border-r-[1px] border-solid border-gay-300 p-3">
      <div className="flex flex-col justify-between h-full">
        <div>
          <Link href={"/"} className="block">
            <Image
              priority
              src={instagram}
              alt="Instagram"
              className="w-36 block py-5 mb-4 px-3"
            />
          </Link>
          <NavItem href={"/"} name="home" title="Trang chủ" />
          <NavItem href={"/search"} name="search" title="Tìm kiếm" />
          <NavItem href={"/explore"} name="explore" title="Khám phá" />
          <NavItem href={"/reels"} name="reels" title="Reels" />
          <NavItem href={"/message"} name="message" title="Tin nhắn" />
          <NavItem href={"/notify"} name="notify" title="Thông báo" />
          <NavItem href={"/profile"} name="profile" title="Trang cá nhân" />
        </div>
        <button className="flex w-full px-3 py-[10px] transition-all ease-linear items-center my-3 hover:bg-gray-50 group">
          <span className="text-2xl transition-all ease-linear group-hover:scale-105">
            <BiLogOut />
          </span>{" "}
          <p className="text-sm ml-2">Đăng xuất</p>
        </button>
      </div>
    </div>
  );
};

export default Bar;
