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
      <div className="flex gap-4">
        <div className="w-[15%] lg:w-[22%]">
          <Sidebar />
        </div>{" "}
        <div className="w-[78%] overflow-x-hidden">{children}</div>
      </div>
    </div>
  );
};

export default layout;
