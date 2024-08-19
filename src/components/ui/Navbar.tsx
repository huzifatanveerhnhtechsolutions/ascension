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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import { FiAlignRight } from "react-icons/fi";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="fixed z-10 bg-[#F5EDDA] w-full border-b border-gray-400">
      <div className="w-[90%] mx-auto flex   justify-between items-center py-2">
        <div className="flex items-center gap-4 lg:justify-between w-full lg:w-[30%] md:px-8">
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
              <DropdownMenuContent className="bg-[#F5EDDA]">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>

                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="lg:hidden ">
          <Sheet>
            <SheetTrigger asChild>
              <FiAlignRight size={25} />
            </SheetTrigger>
            <SheetContent className="text-white bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border-l border-gray-100">
              <SheetHeader>
                <SheetTitle className="text-4xl font-saira flex items-center gap-4">
                  <div className="w-12 h-12 ">
                    <Logo />
                  </div>
                  <span className="text-lg">Ascension</span>
                </SheetTitle>
                <div className="flex flex-col justify-evenly mt-14 items-center py-4 text-lg h-[50vh]">
                  <SheetDescription className="flex flex-col items-center gap-4">
                    <SheetClose>
                      <>
                        <>Home</>
                      </>
                    </SheetClose>
                    <SheetClose asChild>
                      <> Network side</>
                    </SheetClose>
                    <SheetClose asChild>
                      <> LLM</>
                    </SheetClose>

                    <SheetClose asChild>
                      <> University Side</>
                    </SheetClose>

                    <SheetClose asChild>
                      <> Blogs</>
                    </SheetClose>
                    <SheetClose asChild>
                      <> ProgramAI</>
                    </SheetClose>
                    <SheetClose asChild>
                      <> Login</>
                    </SheetClose>
                    <SheetClose asChild>
                      <>
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </>
                    </SheetClose>
                  </SheetDescription>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
