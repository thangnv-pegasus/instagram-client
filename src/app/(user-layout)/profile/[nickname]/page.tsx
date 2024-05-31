/* eslint-disable import/no-anonymous-default-export */
import Avatar from "@/components/users/avatar";
import Footer from "@/components/layout/footer";
import { cookies } from "next/headers";
import FeatureStory from "@/components/slider/feature-story";
import PostSection from "@/components/post/my-posts/post-section";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: 'Thông tin cá nhân',
  description: ''
}

// eslint-disable-next-line react/display-name
export default async function ({ params }: { params: { nickname: string } }) {
  const cookie = cookies();
  const token = cookie.get("token")?.value;
  const fetchApi = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_API}/profile?nickname=${params.nickname}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  // const res = await fetchApi.json();
  const { user, followers, mefollow } =await fetchApi.json()

  return (
    <div className="pl-64">
      <div className="px-52 py-9">
        <div className="flex items-center mb-11">
          <Avatar type="no-border" size="big" />
          <div className="flex-auto px-20">
            <div className="flex items-center justify-between select-none pb-2">
              <div className="text-xl font-medium flex items-center">
                {" "}
                <p className="mr-2">{user.nickname}</p>
                {user?.is_real == 1 && (
                  <span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Đã xác minh"
                      className="x1lliihq x1n2onr6"
                      fill="rgb(0, 149, 246)"
                      height="18"
                      role="img"
                      viewBox="0 0 40 40"
                      width="18"
                    >
                      <title>Đã xác minh</title>
                      <path
                        d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                        fillRule="evenodd"
                        fill="#0095F6"
                      ></path>
                    </svg>
                  </span>
                )}
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  className="bg-gray-750 text-black text-sm py-1 px-4 mx-4 rounded-md font-semibold"
                >
                  Chỉnh sửa trang cá nhân
                </button>
                <button
                  type="button"
                  className="bg-gray-750 text-black text-sm py-1 px-4 mx-4 rounded-md font-semibold"
                >
                  Xem kho lưu trữ
                </button>
              </div>
            </div>
            <div className="flex py-2 text-sm justify-between select-none">
              <p>
                <span className="font-semibold">{user.post_length}</span> bài
                viết
              </p>
              <p>
                <span className="font-semibold"> {followers.length} </span>{" "}
                người theo dõi
              </p>
              <p>
                Đang theo dõi{" "}
                <span className="font-semibold">{mefollow.length}</span> người
                dùng
              </p>
            </div>
            <div className="py-2 text-sm select-none">
              <p className="font-semibold">{user.fullname}</p>
              <p>{user.bio ?? "Chưa thiết lập"}</p>
            </div>
          </div>
        </div>
        <div className="select-none mb-11">
          <FeatureStory />
        </div>

        <PostSection user={user} />
        <Footer classes="justify-center" />
      </div>
    </div>
  );
}

// export default Page;
