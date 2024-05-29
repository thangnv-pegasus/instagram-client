"use client";
import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { AiOutlineCompass } from "react-icons/ai";
import { FaClapperboard } from "react-icons/fa6";
import { CgClapperBoard } from "react-icons/cg";
import { RiMessengerLine } from "react-icons/ri";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { IModal } from "@/types/modal";

interface INavItem {
  name:
    | "home"
    | "search"
    | "explore"
    | "reels"
    | "message"
    | "notify"
    | "profile";
  href: string;
  classess?: string;
  title: string;
  setOpenModal: React.Dispatch<React.SetStateAction<IModal>>;
  openModal: IModal;
}

const NavItem = ({
  href,
  name,
  title,
  classess = "",
  setOpenModal,
  openModal,
}: INavItem) => {
  const path = usePathname();
  

  const handleModal = () => {
    if (
      name === "home" ||
      name === "explore" ||
      name === "profile" ||
      name === "reels"
    ) {
      setOpenModal({
        searchModal: false,
        messageModal: false,
        notifyModal: false,
      });
    } else if (name === "search") {
      setOpenModal((pre) => ({
        messageModal: false,
        notifyModal: false,
        searchModal: true,
      }));
    } else if (name === "message") {
      setOpenModal((pre) => ({
        searchModal: false,
        notifyModal: false,
        messageModal: true,
      }));
    } else if (name === "notify") {
      setOpenModal((pre) => ({
        searchModal: false,
        messageModal: false,
        notifyModal: true,
      }));
    }
  };

  const CustomComponent =
    href === "/search" || href === "/notify" ? "div" : Link;

  return (
    <CustomComponent
      href={href}
      className={`flex w-fit items-center px-3 cursor-pointer transtion-all ease-linear py-[10px] rounded-md hover:bg-gray-50 my-3 group ${classess}`}
      onClick={() => handleModal()}
      title={title}
    >
      <span className="text-2xl w-fit transition-all ease-linear group-hover:scale-105">
        {path === href ? (
          <Icon name={name} style="solid" />
        ) : (
          <Icon name={name} style="regular" />
        )}
      </span>
      {openModal.messageModal === false &&
        openModal.notifyModal === false &&
        openModal.searchModal === false && (
          <p className={`ml-2 text-sm w-32 ${path === href && "font-bold"}`}>
            {title}
          </p>
        )}
    </CustomComponent>
  );
};

const Icon = ({
  name,
  style,
}: {
  name: string;
  style: "solid" | "regular";
}) => {
  if (name === "home") {
    if (style === "solid") {
      return <GoHomeFill />;
    } else {
      return <GoHome />;
    }
  } else if (name === "search") {
    if (style === "solid") {
      return <FaSearch />;
    }
    return <IoSearchOutline />;
  } else if (name === "explore") {
    if (style === "solid") {
      return <FaCompass />;
    }
    return <AiOutlineCompass />;
  } else if (name === "reels") {
    if (style === "solid") {
      return <FaClapperboard />;
    }
    return <CgClapperBoard />;
  } else if (name === "message") {
    if (style === "solid") {
      return <FaFacebookMessenger />;
    }
    return <RiMessengerLine />;
  } else if (name === "notify") {
    if (style === "solid") {
      return <FaHeart />;
    }
    return <FaRegHeart />;
  } else if (name === "profile") {
    if (style === "solid") {
      return <FaUserCircle />;
    }
    return <FaRegCircleUser />;
  }
};

export default NavItem;
