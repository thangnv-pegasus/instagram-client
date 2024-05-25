"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserLogoutBtn = ({
  user,
}: {
  user: { avatar_url: string; nickname: string; fullname: string };
}) => {
  const router = useRouter()
  const handleLogout = async () => {
    const responseNextServer = await fetch("/api/auth/logout", {
      method: "post",
    }).then((res) => res.json());
      router.push('/login')
  };

  return (
    <div className="flex justify-between items-center mb-5">
      <div className="flex items-center">
        <Link
          href={"/profile"}
          className="block rounded-full overflow-hidden border-[1px] border-solid border-gray-300"
        >
          <Image
            src={user.avatar_url || "https://placehold.it/200x200"}
            alt="avatar"
            className="block"
            width={52}
            height={52}
          />
        </Link>
        <div className="pl-2 pr-4 text-sm">
          <Link href={"/profile"} className="block font-semibold leading-4">
            {user.nickname || "nickname"}
          </Link>
          <p className="text-sm text-gray-550">
            {user.fullname || "full name"}
          </p>
        </div>
      </div>
      <button
        className="block text-sky-600 font-medium text-sm cursor-pointer"
        onClick={() => handleLogout()}
      >
        Đăng xuất
      </button>
    </div>
  );
};

export default UserLogoutBtn;
