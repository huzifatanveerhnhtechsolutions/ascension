"use client";

import { cn } from "@/lib/utils";
import {
  CircleHelp,
  Command,
  Gift,
  LogOut,
  Network,
  Phone,
  PhoneCall,
  ScrollText,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBookReader } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";
import { IoMdLogOut } from "react-icons/io";

type Props = {};

const routes = [
  {
    path: "/",
    label: "Dashboard",
    icon: <Command />,
  },
  {
    path: "/child",
    label: "Child",
    icon: <FaBookReader size={20} />,
  },
  {
    path: "/villager",
    label: "Villager",
    icon: <Network />,
  },
  {
    path: "/rules",
    label: "Ascension Rules",
    icon: <ScrollText />,
  },
  {
    path: "/shop",
    label: "Shop",
    icon: <Gift />,
  },
  {
    path: "/about",
    label: "About Us",
    icon: <CircleHelp />,
  },
  {
    path: "/contact",
    label: "Contact Us",
    icon: <PhoneCall />,
  },
  {
    path: "/faq",
    label: "FAQ",
    icon: <CircleHelp />,
  },
  {
    path: "/program",
    label: "Foster Ascension Program",
    icon: <Settings />,
  },
  {
    path: "/testimonials",
    label: "Testimonials",
    icon: <GiStarsStack size={20} />,
  },
  {
    path: "/logout",
    label: "Logout",
    icon: <IoMdLogOut size={25} />,
  },
];

const Sidebar = (props: Props) => {
  const pathname = usePathname();
  return (
    <div className=" ">
      <div className="bg-[#2B3C58] py-8 px-8 fixed w-[15%] lg:w-[22%]  text-white h-screen top-[6%] scrollbar-none  overflow-y-auto">
        {routes.map((r, idx) => (
          <Link href={r.path} key={idx}>
            <div
              className={cn(
                "flex w-auto my-4 text-gray-400 text-sm items-center justify-center",
                pathname === r.path ? "border-b border-red-600 text-white" : ""
              )}
            >
              <div className="flex items-center justify-center lg:justify-start w-full py-2 font-semibold gap-2">
                <div className="w-8">{r.icon}</div>

                <div className="hidden lg:block">{r.label}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
