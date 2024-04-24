"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { ImSpinner6 } from "react-icons/im";
import UserItem from "@/components/users/user-item";
const SearchModal = () => {
  const [result, setResult] = useState([1]);
  const [searchHistory, setSearchHistory] = useState([1]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col h-full">
      <p className="text-2xl font-semibold pt-4 pb-9 my-3 pl-6 pr-3">
        Tìm kiếm
      </p>
      <form
        action=""
        method="post"
        className="block px-6 border-b-[1px] border-solid border-gray-850 pb-6"
      >
        <div className="relative">
          <input
            type="text"
            id="hs-floating-input-email-value"
            className="peer py-4 pl-4 pr-9 block w-full bg-gray-750 border-gray-200 rounded-lg text-sm placeholder:text-transparent disabled:opacity-50 disabled:pointer-events-none outline-none text-black focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
            placeholder="Tìm kiếm..."
          />
          <label
            htmlFor="hs-floating-input-email-value"
            className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:scale-90
      peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs"
          >
            Tìm kiếm
          </label>
          {loading === false ? (
            <button
              type="button"
              className="absolute top-1/2 -translate-y-1/2 right-2 p-1 text-xs text-gray-600 bg-gray-850 rounded-full"
            >
              <IoClose />
            </button>
          ) : (
            <button
              type="button"
              className="absolute top-1/2 -translate-y-1/2 right-2 p-1 text-xs text-gray-600 bg-gray-850 rounded-full"
            >
              <ImSpinner6 className="animate-spin" />
            </button>
          )}
        </div>
      </form>
      <div className="flex flex-col flex-1 pt-6 overflow-y-auto">
        {result.length > 0 || searchHistory.length > 0 ? (
          <div className="flex-1 flex-col flex w-full h-full">
            <UserItem isLoading={false} type="infor" key={1} />
            <UserItem isLoading={false} type="infor" key={2} />
            <UserItem isLoading={false} type="infor" key={3} />
            <UserItem isLoading={false} type="infor" key={4} />
            <UserItem isLoading={false} type="infor" key={5} />
            <UserItem isLoading={false} type="infor" key={6} />
            {/* <UserItem isLoading={false} type="infor" key={7} />
            <UserItem isLoading={false} type="infor" key={8} />
            <UserItem isLoading={false} type="infor" key={9} />
            <UserItem isLoading={false} type="infor" key={10} />
            <UserItem isLoading={false} type="infor" key={11} />
            <UserItem isLoading={false} type="infor" key={12} />
            <UserItem isLoading={false} type="infor" key={13} /> */}
          </div>
        ) : (
          <>
            <p className="text-base font-semibold px-6">Gần đây</p>
            <div className="flex justify-center items-center flex-1 text-sm text-gray-550 font-semibold">
              Không có nội dung tìm kiếm mới đây
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
