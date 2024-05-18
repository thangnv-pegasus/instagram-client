import Link from "next/link";

const LinkForm = () => {
  return (
    <>
      <div className="w-96 text-xs mt-5 text-center">
        <span>
          Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ
          của bạn lên Instagram.{" "}
        </span>
        <Link
          href={"https://www.facebook.com/help/instagram/261704639352628"}
          className="hover:text-sky-600"
        >
          Tìm hiểu thêm
        </Link>
      </div>
      <div className="w-96 mt-5 text-xs text-center leading-4">
        Bằng cách đăng ký, bạn đồng ý với{" "}
        <Link
          href={"https://help.instagram.com/581066165581870/?locale=vi_VN"}
          className="hover:text-sky-600 ml-[2px]"
        >
          Điều khoản
        </Link>
        ,{" "}
        <Link
          href={"https://www.facebook.com/privacy/policy"}
          className="hover:text-sky-600 ml-[2px]"
        >
          Chính sách quyền riêng tư
        </Link>{" "}
        và
        <Link
          href={"https://privacycenter.instagram.com/policies/cookies/"}
          className="hover:text-sky-600 mx-[2px]"
        >
          Chính sách cookie
        </Link>{" "}
        của chúng tôi.
      </div>
    </>
  );
};

export default LinkForm;
