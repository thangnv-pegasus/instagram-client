"use client";
import "react-toastify/dist/ReactToastify.css";
import { FormEvent, useRef } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const accountRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/login`,
      {
        method: "post",
        body: JSON.stringify({
          account_name: accountRef.current?.value,
          password: passwordRef.current?.value,
        }),
        headers: {
          "Content-Type": "Application/json",
        },
      }
    ).then((res) => res.json());
    if (response?.status === 404) {
      toast.error("Thông tin đăng nhập sai!", {
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
    } else if (response?.status === 200) {
      const res2 = await fetch("/api/auth", {
        method: "POST",
        body: JSON.stringify({
          token: response?.token,
        }),
        headers: {
          "Content-Type": "Application/json",
        },
      }).then((res) => {
        router.push("/");
        return res.json();
      });
    }
  };

  return (
    <>
      <form
        action=""
        method="post"
        className="block space-y-4"
        onSubmit={(e) => handleLogin(e)}
        ref={formRef}
      >
        <div className="relative">
          <input
            type="text"
            id="hs-floating-input-username"
            name="account"
            ref={accountRef}
            className="peer p-4 text-sm w-96 block bg-gray-650 border-gray-300 border-solid border-[1px] rounded-lg placeholder:text-transparent 
            disabled:opacity-50 disabled:pointer-events-none 
            focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
            placeholder="Số điện thoại, tên người dùng hoặc email"
          />
          <label
            htmlFor="hs-floating-input-username"
            className="absolute top-0 text-sm start-0 p-4 h-full text-gray-600 truncate text-gray-[#444] pointer-events-none transition
          ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none 
          peer-focus:text-xs peer-focus:-translate-y-2 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs 
          peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:text-gray-500"
          >
            Số điện thoại, tên người dùng hoặc email
          </label>
        </div>
        <div className="relative">
          <input
            type="password"
            id="hs-floating-input-password"
            name="password"
            ref={passwordRef}
            className="peer p-4 text-sm w-96 block bg-gray-650 border-gray-300 border-solid border-[1px] rounded-lg placeholder:text-transparent 
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
        </div>
        <button
          type="submit"
          className="block w-full select-none py-3 text-center bg-sky-500 text-white text-sm rounded-md"
        >
          Đăng nhập
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
        transition={Bounce}
      />
    </>
  );
};

export default LoginForm;
