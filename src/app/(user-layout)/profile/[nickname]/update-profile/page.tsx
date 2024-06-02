"use client";

import UpdateProfileSkeleton from "@/components/users/update-profile-skeleton";
import { IErrorUpdateProfile, IProfile } from "@/types/profile";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendarOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Page = ({ params }: { params: { nickname: string } }) => {
  const [user, setUser] = useState<IProfile>();
  const [bio, setBio] = useState("");
  const [nickname, setNickname] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [sex, setSex] = useState("male");
  const [error, setError] = useState<IErrorUpdateProfile>();
  const getProfile = async () => {
    try {
      const fetchData = await fetch(
        `/api/user/profile?nickname=${params.nickname}`,
        {
          method: "get",
        }
      );
      const response = await fetchData.json();
      setUser(response.user);
      setBio(response.user.bio);
      setNickname(response.user.nickname);
      setFullname(response.user.fullname);
      setStartDate(response.user.data_of_birth);
      setEmail(response.user.email);
      setPhone(response.user.phone);
      setSex(response.user.sex);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const showToast = () => {
    toast.success('Cập nhật hồ sơ thành công!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    const fetchData = await fetch("/api/user/profile", {
      method: "PATCH",
      body: JSON.stringify({
        nickname,
        fullname,
        bio,
        email,
        phone,
        dob: startDate,
        sex,
      }),
    });
    const response = await fetchData.json();
    console.log(response);
    if (response.status === 500) {
      setError(response.error);
    } else {
      showToast()
    }
  };

  useEffect(() => {
    getProfile();
  }, [params.nickname]);

  return (
    <div>
      <div className="pl-64 pr-80 py-9">
        <h2 className="text-xl font-semibold py-3 mb-5">
          Chỉnh sửa trang cá nhân
        </h2>
        {loading ? (
          <UpdateProfileSkeleton />
        ) : (
          <form action="" method="post" onSubmit={(e) => handleUpdate(e)}>
            <div className="bg-gray-150 flex items-center justify-between p-4 rounded-lg my-5">
              <div className="flex items-center">
                <div className="w-14 h-14 overflow-hidden rounded-full">
                  <Image
                    src={user?.avatar_url ?? "https://placehold.it/100x100"}
                    alt={user?.nickname ?? "avatar"}
                    width={100}
                    height={100}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <div className="text-sm pl-3">
                  <p className="font-bold">{user?.nickname}</p>
                  <p>{user?.fullname}</p>
                </div>
              </div>
              <button
                type="button"
                className="bg-sky-500 text-white rounded-md px-5 py-2 text-sm"
              >
                Đổi ảnh
              </button>
            </div>
            <div className="my-5">
              <label htmlFor="nickname" className="block font-bold mb-2">
                Tên tài khoản
              </label>
              <input
                type="text"
                name=""
                id="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="block w-full border-[1px] border-solid border-gray-850 outline-none rounded-md px-5 py-2 text-sm"
              />
              {error?.nickname && (
                <p className="text-red-500 text-xs italic mt-1">
                  {error.nickname.join(",")}
                </p>
              )}
            </div>
            <div className="my-5">
              <label htmlFor="fullname" className="block font-bold mb-2">
                Họ tên đầy đủ
              </label>
              <input
                type="text"
                name=""
                id="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="block w-full border-[1px] border-solid border-gray-850 outline-none rounded-md px-5 py-2 text-sm"
              />
              {error?.fullname && (
                <p className="text-red-500 text-xs italic mt-1">
                  {error.fullname.join(",")}
                </p>
              )}
            </div>
            <div className="my-5">
              <label htmlFor="bio" className="block font-bold mb-2">
                Tiểu sử
              </label>
              <input
                type="text"
                name=""
                id="bio"
                value={bio ?? ""}
                onChange={(e) => setBio(e.target.value)}
                className="block w-full border-[1px] border-solid border-gray-850 outline-none rounded-md px-5 py-2 text-sm"
              />
              {error?.bio && (
                <p className="text-red-500 text-xs italic mt-1">
                  {error.bio.join(",")}
                </p>
              )}
            </div>
            <div className="my-5">
              <label htmlFor="email" className="block font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name=""
                id="email"
                value={email ?? ""}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full border-[1px] border-solid border-gray-850 outline-none rounded-md px-5 py-2 text-sm"
              />
              {error?.email && (
                <p className="text-red-500 text-xs italic mt-1">
                  {error.email.join(",")}
                </p>
              )}
            </div>
            <div className="my-5">
              <label htmlFor="phone" className="block font-bold mb-2">
                Số điện thoại
              </label>
              <input
                type="text"
                name=""
                id="phone"
                value={phone ?? ""}
                onChange={(e) => setPhone(e.target.value)}
                className="block w-full border-[1px] border-solid border-gray-850 outline-none rounded-md px-5 py-2 text-sm"
              />
              {error?.phone && (
                <p className="text-red-500 text-xs italic mt-1">
                  {error.phone.join(",")}
                </p>
              )}
            </div>
            <div className="my-5">
              <label htmlFor="date-of-birth" className="block font-bold mb-2">
                Ngày sinh
              </label>
              <DatePicker
                selected={startDate}
                showIcon
                icon={<IoCalendarOutline />}
                onChange={(date: Date) => setStartDate(date)}
                className="border-[1px] border-solid border-gray-850 rounded-md"
                dateFormat="dd/MM/yyyy"
              />
              {error?.dob && (
                <p className="text-red-500 text-xs italic mt-1">
                  {error.dob.join(",")}
                </p>
              )}
            </div>
            <div className="my-5">
              <label
                htmlFor="sex"
                className="block mb-2 text-base font-bold text-gray-900"
              >
                Giới tính
              </label>
              <select
                id="sex"
                className="bg-gray-150 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              >
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
              </select>
            </div>
            <div className="flex justify-end w-full py-5">
              <button
                type="submit"
                className="w-60 py-2 bg-sky-500 text-white rounded-md"
              >
                Gửi
              </button>
            </div>
          </form>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Page;
