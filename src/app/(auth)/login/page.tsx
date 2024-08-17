import Logo from "@/components/ui/Logo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="h-[100vh] relative flex flex-col gap-4 justify-center items-center overflow-hidden px-8 bg-[#F5EDDA]">
      <div className="absolute top-0 left-0">
        <Image
          src={"/assets/bg.png"}
          alt="bg"
          width={1258.67}
          height={1140}
          className="h-screen w-[60vw]"
        />
      </div>
      <div className="w-28 h-28">
        <Logo />
      </div>
      <div className=" bg-[#2B3C58] text-white w-full md:w-[50%] lg:w-[32%]  rounded-[20px] p-8">
        <div className="flex justify-between items-start">
          <h1 className="text-sm">
            Welcome to <span className="font-semibold">Ascension</span>
          </h1>
          <div className="mt-1 flex flex-col items-start gap-1 text-xs">
            <h5 className=" text-nowrap">No Account ?</h5>
            <Link href={"/sign-up"}>Sign Up</Link>
          </div>
        </div>
        <h1 className="text-4xl font-medium pb-6">Sign in</h1>
        {/* <div className=" text-base flex flex-wrap    justify-center items-center gap-2 py-4">
          <div className="flex items-center group  transition-all duration-300 justify-center text-center px-5 py-4  rounded-[9px] bg-[#E9F1FF] text-[#4285F4]">
            <button className="flex items-center transition-all duration-300 text-sm text-nowrap gap-5">
              <span className="transition-all duration-300">
                <FcGoogle size={24} />
              </span>
              <span className="hidden md:group-hover:block transition-all group-hover:duration-300">
                Sign in with Google
              </span>
            </button>
          </div>
          <div className="flex items-center group transition-all duration-300 justify-center text-center px-5 py-4 rounded-[9px] bg-[#E9F1FF] text-[#4285F4]">
            <button className="flex items-center transition-all duration-300 text-sm text-nowrap gap-5">
              <span className="transition-all duration-300">
                <FaFacebook size={24} color="blue" />
              </span>
              <span className="hidden md:group-hover:block transition-all group-hover:duration-300">
                Sign in with Facebook
              </span>
            </button>
          </div>
          <div className="flex items-center group transition-all duration-300 justify-center text-center px-5 py-4 rounded-[9px] bg-[#E9F1FF] text-[#4285F4]">
            <button className="flex items-center transition-all duration-300 text-sm text-nowrap gap-5">
              <span className="transition-all duration-300">
                <FaApple
                  size={24}
                  className="bg-black text-white rounded-full p-1"
                />
              </span>
              <span className="hidden md:group-hover:block transition-all group-hover:duration-300">
                Sign in with Apple
              </span>
            </button>
          </div>
        </div> */}
        <div className="pt-8">
          <form>
            <div className="relative mb-14 ">
              <label
                className={`absolute left-0 font-medium text-xs  -top-6 transition-all  duration-300  `}
              >
                Enter your username or email address
              </label>
              <input
                placeholder="Username or email address"
                type="text"
                className={`w-full rounded-lg font-poppins text-xs focus:border-blue-400 border-2 px-3 py-3 transition-all outline-none duration-300 text-black `}
              />
            </div>
            <div className="relative ">
              <label
                className={`absolute left-0 font-medium text-xs -top-6 transition-all  duration-300  `}
              >
                Enter your Password
              </label>
              <input
                placeholder="Password"
                type="password"
                className={`w-full rounded-lg font-poppins text-xs focus:border-blue-400 border-2 px-3 py-3 transition-all outline-none duration-300  text-black`}
              />
              <div className="flex justify-end text-xs pt-2 pb-8 text-blue-400">
                <button>Forgot Password</button>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#E30613] w-full text- py-3 font-mulish font-bold rounded-full rounded-tl-none"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
