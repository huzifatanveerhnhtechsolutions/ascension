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
    icon: <Phone />,
  },
  {
    path: "/villager",
    label: "Villager",
    icon: <Network />,
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
    path: "/rules",
    label: "Ascension Rules",
    icon: <ScrollText />,
  },
  {
    path: "/testimonials",
    label: "Testimonials",
    icon: <Phone />,
  },
  {
    path: "/logout",
    label: "Logout",
    icon: <LogOut />,
  },
];

const Sidebar = (props: Props) => {
  const pathname = usePathname();
  return (
    <div className="bg-[#2B3C58] w-[15%] lg:w-[22%] py-8 px-8 sticky top-[10%] text-white h-screen pt-16 scrollbar-none  overflow-y-auto">
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
  );
};

export default Sidebar;
