import React, { type ReactNode } from "react";
import Sidebar from "@/components/sidebar";
import InfoBar from "@/components/infobar";

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex overflow-hidden h-screen ">
      <Sidebar />
      <div className="w-full rounded-l-3xl">
        <InfoBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
