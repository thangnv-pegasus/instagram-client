import Link from "next/link";
import Avatar from "./avatar";

const UserNoti = () => {
  return (
    <div className="flex items-center py-3 px-6 text-sm cursor-pointer transition-all ease-linear hover:bg-gray-150">
      <Avatar type="no-border" size="small" />
      <div className="flex-1 flex items-center flex-wrap ml-2 select-none pr-5">
        <p>
          <Link href={""} className="font-semibold mr-1">
            only_cosimaa
          </Link>
          Đã bắt đầu theo dõi bạn. <span className="text-gray-550">1 tuần</span>
        </p>
      </div>
      <button className="bg-sky-500 text-white py-1 text-sm px-4 rounded-lg">
        Theo dõi
      </button>
    </div>
  );
};

export default UserNoti;
