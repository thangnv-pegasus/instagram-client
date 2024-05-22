import Image from "next/image";
import Link from "next/link";
import Avatar from "./avatar";

const UserItem = ({
  isLoading = false,
  type = "infor",
}: {
  isLoading: boolean;
  type: "infor" | "follow";
}) => {
  const CustomComponent = type === "infor" ? Link : "div";

  return (
    <CustomComponent
      href={""}
      className="flex justify-between w-full hover:bg-gray-750 px-6 py-2"
    >
      <div className="flex items-center">
        <Avatar type="no-border" size="small"/>
        <div className="ml-2">
          <Link href={""} className="block text-sm font-semibold">
            chin_db
          </Link>
          <div className="flex items-center text-xs text-gray-550 mt-[2px]">
            <p>ĐỖ BỐN MƯƠI</p> <p>-</p> <p>123 người theo dõi</p>
          </div>
        </div>
      </div>
      {type === "follow" && <button>Theo dõi</button>}
    </CustomComponent>
  );
};

export default UserItem;
