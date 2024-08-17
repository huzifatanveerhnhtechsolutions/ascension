import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar /> <div className="w-[78%] overflow-x-hidden">{children}</div>
      </div>
    </div>
  );
};

export default layout;
