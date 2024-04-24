import { IPOST } from "@/types/posts";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
import { BiSolidMessageRounded } from "react-icons/bi";
const PostMini = ({
  post,
  type = "normal",
  classess,
}: {
  post?: IPOST;
  type: "big" | "normal";
  classess?: string;
}) => {
  return (
    <Link
      href={""}
      className={`relative block w-full overflow-hidden group ${
        type === "big" ? "h-600px" : "h-300px"
      } ${classess}`}
    >
      <Image
        src="https://instagram.fhan2-3.fna.fbcdn.net/v/t51.29350-15/435338555_2206342546424247_7967802739527471377_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.fhan2-3.fna.fbcdn.net&_nc_cat=1&_nc_ohc=wRKGb4eEGTQAb4SB8Cz&edm=AI8qBrIBAAAA&ccb=7-5&ig_cache_key=MzMzOTQ5MjI2MjM1NDE5NzY1MA%3D%3D.2-ccb7-5&oh=00_AfAALwrtqJbOndorKzu7fMgN1kvbkPIPieDJseT-FDIIjg&oe=662E76D7&_nc_sid=469e9a"
        alt="post name"
        height={200}
        width={200}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: "1",
          position: "static",
        }}
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 items-center justify-center bg-[rgba(0,0,0,0.4)] group-hover:flex hidden">
        <div className="text-white flex items-center justify-center text-xl gap-x-5">
          <div className="flex items-center">
            <FaHeart />
            <p className="text-sm ml-1">7.500</p>
          </div>
          <div className="flex items-center">
            <BiSolidMessageRounded />
            <p className="text-sm ml-1">36</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostMini;
