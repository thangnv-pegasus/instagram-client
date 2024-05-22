import Footer from "@/components/layout/footer";
import Post from "@/components/post";
import StorySlide from "@/components/slider/story-slide";
import RelatedUser from "@/components/users/related";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { IRecommendUser } from "@/types/home";
import { Key } from "react";
import UserLogoutBtn from "@/components/button/user-logout";
import ListPost from "@/components/post/list-post";
export const metadata: Metadata = {
  title: "Instagram clone",
  description: "Dự án cá nhân",
};

export default async function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return redirect("/login");
  }
  const fetchApi = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/home`, {
    method: "get",
    headers: {
      Authorization: "Bearer " + cookieStore.get("token")?.value,
    },
  }).then((res) => res.json());
  // console.log("recommend", fetchApi?.recommnedUsers);
  return (
    <div className="pl-64">
      <div className="flex w-full px-28 py-10">
        <div className="w-730px pr-20">
          <div className="w-full overflow-hidden">
            <StorySlide />
          </div>
          <div className="px-10 py-10">
            <ListPost />
          </div>
        </div>
        <div className="flex-1">
          <UserLogoutBtn
            user={{
              avatar_url: fetchApi.user.avatar_url,
              fullname: fetchApi?.user.fullname,
              nickname: fetchApi?.user.nickname,
            }}
          />
          <div className="flex justify-between items-center text-sm py-3">
            <p className="font-medium text-gray-550">Gợi ý cho bạn</p>
            <Link href={"/"} className="block text-xs">
              Xem tất cả
            </Link>
          </div>
          <div>
            {Array.isArray(fetchApi.recommnedUsers) &&
              fetchApi.recommnedUsers.map(
                (item: IRecommendUser, index: Key) => {
                  return (
                    <RelatedUser
                      key={index}
                      user={{
                        avatar: item.avatar_url,
                        id: item.user_id,
                        name: item.nickname,
                      }}
                    />
                  );
                }
              )}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
