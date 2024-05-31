import Bar from "@/components/layout/nav-bar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  // trong
  // trang chu, kham pha, reels, trang ca nhan
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    return redirect("/login");
  }
  return (
    <>
      <Bar />

      {children}
    </>
  );
};

export default RootLayout;
