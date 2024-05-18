"use client";

import Link from "next/link";

const Footer = ({classes = ''} : {classes?: string}) => {
  return (
    <>
      <div className={`flex flex-wrap mt-10 mb-5 ${classes}`}>
        <Link
          href={"https://about.instagram.com/"}
          className="block text-xs text-gray-550 relative mr-2 hover:underline my-1"
        >
          Giới thiệu
        </Link>
        <Link
          href={"https://help.instagram.com/"}
          className="block text-xs text-gray-550 relative mr-2 ml-1 after:content-[''] after:absolute after:-left-2 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-1 after:rounded-full after:bg-gray-300
            before:content-[''] before:absolute before:-right-2 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full before:bg-gray-300
            hover:underline my-1"
        >
          Trợ giúp
        </Link>
        <Link
          href={"https://about.instagram.com/blog"}
          className="block text-xs my-1 text-gray-550 relative mr-2 ml-1 hover:underline before:content-[''] before:absolute before:-right-2 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full before:bg-gray-300"
        >
          Báo chí
        </Link>
        <Link
          href={"https://developers.facebook.com/docs/instagram"}
          className="block text-xs text-gray-550 hover:underline relative mr-2 ml-1 before:content-[''] before:absolute before:-right-2 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full before:bg-gray-300 my-1"
        >
          API
        </Link>
        <Link
          href={"https://about.instagram.com/about-us/careers"}
          className="block text-xs text-gray-550 relative mr-2 ml-1 before:content-[''] before:absolute before:-right-2 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full before:bg-gray-300 hover:underline my-1"
        >
          Việc làm
        </Link>
        <Link
          href={
            "https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect"
          }
          className="block text-xs text-gray-550 relative mr-2 ml-1 before:content-[''] before:absolute before:-right-2 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full before:bg-gray-300 hover:underline my-1"
        >
          Quyền riêng tư
        </Link>
        <Link
          href={"https://help.instagram.com/581066165581870/"}
          className="block text-xs text-gray-550 relative mr-2 ml-1 before:content-[''] before:absolute before:-right-2 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full before:bg-gray-300 hover:underline my-1"
        >
          Điều khoản
        </Link>
        <Link
          href={"https://www.instagram.com/explore/locations/"}
          className="block text-xs text-gray-550 relative mr-2 ml-1 before:content-[''] before:absolute before:-right-2 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full before:bg-gray-300 hover:underline my-1"
        >
          Vị trí
        </Link>
        <Link
          href={"https://www.instagram.com/language/preferences/"}
          className="block text-xs text-gray-550 relative mr-2 ml-1 before:content-[''] before:absolute before:-right-2 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full before:bg-gray-300 hover:underline my-1"
        >
          Ngôn ngữ
        </Link>
      </div>
      <p className={`text-xs text-gray-550 mt-5 text-center`}>© 2024 INSTAGRAM FROM META</p>
    </>
  );
};

export default Footer;
