import Post from "@/components/post";
import StorySlide from "@/components/slider/story-slide";
import RelatedUser from "@/components/users/related";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Instagram clone",
  description: "Dự án cá nhân",
};

export default function Home() {
  return (
   <div className="pl-64">
     <div className="flex w-full px-28 py-10">
      <div className="flex-1 pr-20">
        <StorySlide />
        <div className="px-10 py-10">
          <Post
            post={{
              author: "ngoc_dan_don",
              created_at: "2h",
              updated_at: "2h",
              image:
                "https://scontent.cdninstagram.com/v/t39.30808-6/436354785_18235525528271226_7935961291011852002_n.jpg?stp=cp6_dst-jpegr_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuaGRyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=eZdypInEfu4Ab76xVGU&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM0NjQzMzMyNjA4MzUxMjY2Mw%3D%3D.2-ccb7-5&oh=00_AfBsL9Xyhau2j_W4GEkrtpCXuHEmjYqfzk5vh3qhfAT6zg&oe=66230C7F&_nc_sid=10d13b",
              total_comment: 100,
              total_like: 999,
              avatar: 'https://scontent.cdninstagram.com/v/t51.2885-19/273129392_633011937907630_8802653196811621690_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=EFzefO0ahBgAb49fe-d&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfAKF4jEO0uQJuM_cHfh6ki0gQYopep7DuxFY4BEEaaOhQ&oe=66231D0F&_nc_sid=10d13b',
              isLike: false,
              isMark: false,
              title: 'Ngọc đần độn không biết thức đêm'
            }}
          />
        </div>
      </div>
      <div className="w-80">
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center">
            <Link
              href={"/profile"}
              className="block rounded-full overflow-hidden border-[1px] border-solid border-gray-300"
            >
              <Image
                src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/434167227_3693817797567291_6964945424826758680_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFIPA-cDY7ur9SirGe0CDYA5Z9FbFzFj4Pln0VsXMWPg3TSlT3AHnyJ0D_dOvblH0Ifhxsn1bTjTnIg6MwSwUHm&_nc_ohc=KrGiwoizLSQAb5j_y2E&_nc_ht=scontent.fhan20-1.fna&oh=00_AfAZ3zCaZ3RvII2fUjNlGdZZ6LFafp20SEitFWIy7pP9Vw&oe=6621B440"
                alt="avatar"
                className="block"
                width={52}
                height={52}
              />
            </Link>
            <div className="pl-2 pr-4 text-sm">
              <Link href={"/profile"} className="block font-semibold leading-4">
                Hello kitty
              </Link>
              <p className="text-sm text-gray-550">Nguyễn Kitty</p>
            </div>
          </div>
          <button className="block text-sky-600 font-medium text-sm">
            Đăng xuất
          </button>
        </div>
        <div className="flex justify-between items-center text-sm py-3">
          <p className="font-medium text-gray-550">Gợi ý cho bạn</p>
          <Link href={"/"} className="block text-xs">
            Xem tất cả
          </Link>
        </div>
        <div>
          <RelatedUser
            user={{
              avatar:
                "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/434167227_3693817797567291_6964945424826758680_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFIPA-cDY7ur9SirGe0CDYA5Z9FbFzFj4Pln0VsXMWPg3TSlT3AHnyJ0D_dOvblH0Ifhxsn1bTjTnIg6MwSwUHm&_nc_ohc=KrGiwoizLSQAb5j_y2E&_nc_ht=scontent.fhan20-1.fna&oh=00_AfAZ3zCaZ3RvII2fUjNlGdZZ6LFafp20SEitFWIy7pP9Vw&oe=6621B440",
              id: 1,
              name: "Chin.Db",
            }}
          />
          <RelatedUser
            user={{
              avatar:
                "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/434167227_3693817797567291_6964945424826758680_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFIPA-cDY7ur9SirGe0CDYA5Z9FbFzFj4Pln0VsXMWPg3TSlT3AHnyJ0D_dOvblH0Ifhxsn1bTjTnIg6MwSwUHm&_nc_ohc=KrGiwoizLSQAb5j_y2E&_nc_ht=scontent.fhan20-1.fna&oh=00_AfAZ3zCaZ3RvII2fUjNlGdZZ6LFafp20SEitFWIy7pP9Vw&oe=6621B440",
              id: 1,
              name: "Chin.Db",
            }}
          />
          <RelatedUser
            user={{
              avatar:
                "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/434167227_3693817797567291_6964945424826758680_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFIPA-cDY7ur9SirGe0CDYA5Z9FbFzFj4Pln0VsXMWPg3TSlT3AHnyJ0D_dOvblH0Ifhxsn1bTjTnIg6MwSwUHm&_nc_ohc=KrGiwoizLSQAb5j_y2E&_nc_ht=scontent.fhan20-1.fna&oh=00_AfAZ3zCaZ3RvII2fUjNlGdZZ6LFafp20SEitFWIy7pP9Vw&oe=6621B440",
              id: 1,
              name: "Chin.Db",
            }}
          />
          <RelatedUser
            user={{
              avatar:
                "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/434167227_3693817797567291_6964945424826758680_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFIPA-cDY7ur9SirGe0CDYA5Z9FbFzFj4Pln0VsXMWPg3TSlT3AHnyJ0D_dOvblH0Ifhxsn1bTjTnIg6MwSwUHm&_nc_ohc=KrGiwoizLSQAb5j_y2E&_nc_ht=scontent.fhan20-1.fna&oh=00_AfAZ3zCaZ3RvII2fUjNlGdZZ6LFafp20SEitFWIy7pP9Vw&oe=6621B440",
              id: 1,
              name: "Chin.Db",
            }}
          />
        </div>
        <div className="flex flex-wrap mt-10 mb-5">
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
        <p className="text-xs text-gray-550 mt-5">© 2024 INSTAGRAM FROM META</p>
      </div>
    </div>
   </div>
  );
}
