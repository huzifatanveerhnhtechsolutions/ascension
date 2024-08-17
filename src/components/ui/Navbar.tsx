import React from "react";
import Logo from "./Logo";
import { Bell, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./dropdown-menu";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="fixed z-10 bg-[#F5EDDA] w-full">
      <div className="w-[90%] mx-auto flex   justify-between items-center py-2">
        <div className="flex items-center gap-4 lg:justify-between w-full lg:w-[30%] px-8">
          <div className="w-12 h-12">
            <Logo />
          </div>
          <div>
            <h1 className="font-bold">Hello, Lekan</h1>
            <h4 className="text-xs ">Have a nice day</h4>
          </div>
        </div>
        <div className="hidden lg:flex items-center">
          <div className="px-2 flex items-center gap-2">
            <Image
              src={"/assets/Language.png"}
              alt="language"
              width={30}
              height={30}
              className="w-6 h-6"
            />
            <div>
              <ChevronDown size={15} />
            </div>
          </div>
          <div className="px-5 border-l border-r">
            <Bell fill="black" />
          </div>
          <div className="flex px-5 outline-none border-none">
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none border-none">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col  items-start">
                    <h1 className="font-bold">Lekan Okeowo</h1>
                    <h1 className="text-xs">Admin</h1>
                  </div>
                  <div>
                    <ChevronDown size={15} />
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>

                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
