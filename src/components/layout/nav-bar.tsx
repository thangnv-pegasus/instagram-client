"use client";

import Image from "next/image";
import NavItem from "./nav-item";
import instagram from "@/components/logo/instagram.svg";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import { useState } from "react";
import Modal from "./sub-nav/modal";
import { FaInstagram } from "react-icons/fa6";
import { IModal } from "@/types/modal";
import { usePathname } from "next/navigation";

const Bar = () => {
  const pathname = usePathname()
  const [openModal, setOpentModal] = useState<IModal>({
    searchModal: pathname === '/search' ? true : false,
    messageModal: pathname === '/message' ? true : false,
    notifyModal: pathname === '/notify' ? true : false,
  });

  return (
    <div className="fixed w-fit top-0 bottom-0 left-0 h-screen bg-white border-r-[1px] border-solid border-gay-300 p-3 z-50">
      <div className="flex flex-col justify-between h-full">
        <div>
          {openModal.messageModal !== false ||
          openModal.notifyModal !== false ||
          openModal.searchModal !== false ? (
            <Link
              href={"/"}
              className="inline-block text-[32px] mt-5 mb-3 py-2 px-3 transition-all ease-linear hover:scale-105 hover:bg-gray-50 rounded-md"
              title="Trang chủ"
              onClick={() =>
                setOpentModal({
                  messageModal: false,
                  notifyModal: false,
                  searchModal: false,
                })
              }
            >
              <FaInstagram />
            </Link>
          ) : (
            <Link href={"/"} className="block">
              <Image
                priority
                src={instagram}
                alt="Instagram"
                className="w-36 block py-5 mb-4 px-3"
              />
            </Link>
          )}

          <NavItem
            href={"/"}
            name="home"
            title="Trang chủ"
            setOpenModal={setOpentModal}
            openModal={openModal}
          />
          <NavItem
            href={"/search"}
            name="search"
            title="Tìm kiếm"
            setOpenModal={setOpentModal}
            openModal={openModal}
          />
          <NavItem
            href={"/explore"}
            name="explore"
            title="Khám phá"
            setOpenModal={setOpentModal}
            openModal={openModal}
          />
          <NavItem
            href={"/reels"}
            name="reels"
            title="Reels"
            setOpenModal={setOpentModal}
            openModal={openModal}
          />
          <NavItem
            href={"/message"}
            name="message"
            title="Tin nhắn"
            setOpenModal={setOpentModal}
            openModal={openModal}
          />
          <NavItem
            href={"/notify"}
            name="notify"
            title="Thông báo"
            setOpenModal={setOpentModal}
            openModal={openModal}
          />
          <NavItem
            href={"/profile"}
            name="profile"
            title="Trang cá nhân"
            setOpenModal={setOpentModal}
            openModal={openModal}
          />
        </div>
        <button className="flex w-full px-3 py-[10px] transition-all ease-linear items-center my-3 hover:bg-gray-50 group">
          <span className="text-2xl transition-all ease-linear group-hover:scale-105">
            <BiLogOut />
          </span>{" "}
          {openModal.messageModal === false &&
            openModal.notifyModal === false &&
            openModal.searchModal === false && (
              <p className="text-sm ml-2">Đăng xuất</p>
            )}
        </button>
      </div>
      {(
        openModal.notifyModal === true ||
        openModal.searchModal === true) && <Modal openModal = {openModal}/>}
    </div>
  );
};

export default Bar;
