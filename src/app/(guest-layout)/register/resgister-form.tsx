"use client";

import { IREGISTER } from "@/types/auth-error";
import { FormEvent, useEffect, useRef, useState } from "react";
import { ReactNode } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line @next/next/no-async-client-component
const RegisterForm = async ({ children }: { children: ReactNode }) => {
  const accountRef = useRef<HTMLInputElement>(null);
  const fullnameRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null)
  const [errors, setErrors] = useState<IREGISTER>();

  const handleForm = async (event: FormEvent) => {
    event.preventDefault();
    formRef.current?.reset()
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/register`,
      {
        method: "post",
        body: JSON.stringify({
          account_name: accountRef?.current?.value,
          fullname: fullnameRef?.current?.value,
          nickname: nicknameRef?.current?.value,
          password: passwordRef?.current?.value,
        }),
        headers: {
          "Content-Type": "Application/json",
        },
      }
    ).then((res) => res.json());

    if (response?.status === 500) {
      setErrors(response.error);
    } else {
      setErrors({});
      toast.success("Đăng kí tài khoản thành công!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    
  };

  return (
    <>
      <form
        onSubmit={(e: FormEvent) => handleForm(e)}
        method="post"
        className="block space-y-3 w-96"
        ref={formRef}
      >
        <div className="relative">
          <input
            type="text"
            id="phone-or-mail"
            name="phone-or-mail"
            ref={accountRef}
            className="peer w-full p-4 text-sm block bg-gray-650 border-gray-300 border-solid border-[1px] rounded-lg placeholder:text-transparent 
                disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
            placeholder="Số điện thoại hoặc email"
          />
          <label
            htmlFor="phone-or-mail"
            className="absolute top-0 text-sm start-0 p-4 h-full text-gray-600 truncate text-gray-[#444] pointer-events-none transition
              ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none 
              peer-focus:text-xs peer-focus:-translate-y-2 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs 
              peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-gray-500"
          >
            Số điện thoại hoặc email
          </label>
          {errors?.account_name && (
            <p className="mt-1 text-xs ml-1 text-red-600">
              {errors?.account_name[0]}
            </p>
          )}
        </div>
        <div className="relative">
          <input
            type="text"
            id="hs-floating-input-fullname"
            name="fullname"
            ref={fullnameRef}
            className="peer w-full p-4 text-sm block bg-gray-650 border-gray-300 border-solid border-[1px] rounded-lg placeholder:text-transparent 
                disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
            placeholder="Tên đầy đủ"
          />
          <label
            htmlFor="hs-floating-input-fullname"
            className="absolute top-0 text-sm start-0 p-4 h-full text-gray-600 truncate text-gray-[#444] pointer-events-none transition
              ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none 
              peer-focus:text-xs peer-focus:-translate-y-2 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs 
              peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-gray-500"
          >
            Tên đầy đủ
          </label>
          {errors?.fullname && (
            <p className="mt-1 text-xs ml-1 text-red-600">
              {errors?.fullname[0]}
            </p>
          )}
        </div>
        <div className="relative">
          <input
            type="text"
            id="hs-floating-input-username"
            name="username"
            ref={nicknameRef}
            className="peer w-full p-4 text-sm block bg-gray-650 border-gray-300 border-solid border-[1px] rounded-lg placeholder:text-transparent 
                disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
            placeholder="Tên người dùng"
          />
          <label
            htmlFor="hs-floating-input-username"
            className="absolute top-0 text-sm start-0 p-4 h-full text-gray-600 truncate text-gray-[#444] pointer-events-none transition
              ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none 
              peer-focus:text-xs peer-focus:-translate-y-2 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs 
              peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-gray-500"
          >
            Tên người dùng
          </label>
          {errors?.nickname && (
            <p className="mt-1 text-xs ml-1 text-red-600">
              {errors?.nickname[0]}
            </p>
          )}
        </div>
        <div className="relative">
          <input
            type="password"
            id="hs-floating-input-password"
            name="password"
            ref={passwordRef}
            className="peer w-full p-4 text-sm block bg-gray-650 border-gray-300 border-solid border-[1px] rounded-lg placeholder:text-transparent 
                disabled:opacity-50 disabled:pointer-events-none 
                focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
            placeholder="Mật khẩu"
          />
          <label
            htmlFor="hs-floating-input-password"
            className="absolute top-0 text-sm start-0 p-4 h-full text-gray-600 truncate text-gray-[#444] pointer-events-none transition
              ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none 
              peer-focus:text-xs peer-focus:-translate-y-2 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs 
              peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-gray-500"
          >
            Mật khẩu
          </label>
          {errors?.password && (
            <p className="mt-1 text-xs ml-1 text-red-600">
              {errors?.password[0]}
            </p>
          )}
        </div>
        {children}
        <button
          type="submit"
          className="block w-full select-none py-3 text-center bg-sky-500 text-white text-sm rounded-md"
        >
          Đăng ký
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
};

export default RegisterForm;
