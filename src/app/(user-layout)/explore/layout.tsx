import { Metadata } from "next";
import { Inter } from "next/font/google";

const inner = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khám phá",
  description: "Dự án cá nhân",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;
