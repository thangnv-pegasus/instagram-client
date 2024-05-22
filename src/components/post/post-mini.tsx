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
        src="https://placehold.it/200x200"
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
