"use client";
import Logo from "@/components/ui/Logo";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
type Villager = {
  fname: string;
  email: string;
};
type CandleR = {
  fname: string;
  email: string;
};
type TimeR = {
  fname: string;
  email: string;
};
type Props = {
  handleSubmit: (e: any) => void;
  handleActivePrev: () => void;
  timeKeeper: TimeR;
  setTimeKeeper: React.Dispatch<React.SetStateAction<TimeR>>;
  candleReader: CandleR;
  setCandleReader: React.Dispatch<React.SetStateAction<CandleR>>;
  setVillagerInputs: React.Dispatch<React.SetStateAction<Villager[]>>;
  villagerInputs: Villager[];
};

const Active2 = ({
  handleSubmit,
  handleActivePrev,
  timeKeeper,
  setTimeKeeper,
  candleReader,
  setCandleReader,
  villagerInputs,
  setVillagerInputs,
}: Props) => {
  const handleAddInput = (e: any) => {
    e.preventDefault();
    if (villagerInputs.length < 24) {
      setVillagerInputs([...villagerInputs, { fname: "", email: "" }]);
    }
  };

  const handleInputChange = (
    index: number,
    field: "fname" | "email",
    value: string
  ) => {
    const newInputs = [...villagerInputs];
    newInputs[index][field] = value;
    setVillagerInputs(newInputs);
  };
  // Start with one pair of inputs

  return (
    <div className=" relative flex flex-col gap-4 py-8 justify-center w-full items-center overflow-hidden  ">
      <div className=" bg-[#2B3C58] text-white w-full   rounded-[20px] p-8">
        <h1 className="text-4xl font-medium pb-6">Add Villagers</h1>
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
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between mb-12 space-x-4 ">
              <div className="relative w-1/2">
                <label
                  className={`absolute left-0 font-medium text-xs  -top-6 transition-all  duration-300  `}
                >
                  Identify Time Keeper
                </label>
                <input
                  placeholder="Full name
                "
                  value={timeKeeper.fname}
                  onChange={(e) =>
                    setTimeKeeper((prev) => ({
                      ...prev,
                      fname: e.target.value,
                    }))
                  }
                  required
                  type="text"
                  className={`w-full rounded-lg font-poppins text-xs focus:border-blue-400 border-2 px-3 py-3 transition-all outline-none duration-300 text-black `}
                />
              </div>
              <div className="relative w-1/2">
                <input
                  placeholder="Email
                "
                  value={timeKeeper.email}
                  onChange={(e) =>
                    setTimeKeeper((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  required
                  type="text"
                  className={`w-full rounded-lg font-poppins text-xs focus:border-blue-400 border-2 px-3 py-3 transition-all outline-none duration-300 text-black `}
                />
              </div>
            </div>

            <div className="flex justify-between mb-14 space-x-4 ">
              <div className="relative w-1/2">
                <label
                  className={`absolute left-0 font-medium text-xs  -top-6 transition-all  duration-300  `}
                >
                  Identify Candle Reader
                </label>
                <input
                  placeholder="Full name
                "
                  value={candleReader.fname}
                  onChange={(e) =>
                    setCandleReader((prev) => ({
                      ...prev,
                      fname: e.target.value,
                    }))
                  }
                  type="text"
                  className={`w-full rounded-lg font-poppins text-xs focus:border-blue-400 border-2 px-3 py-3 transition-all outline-none duration-300 text-black `}
                />
              </div>
              <div className="relative w-1/2">
                <input
                  placeholder="Email
                "
                  value={candleReader.email}
                  onChange={(e) =>
                    setCandleReader((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  type="text"
                  className={`w-full rounded-lg font-poppins text-xs focus:border-blue-400 border-2 px-3 py-3 transition-all outline-none duration-300 text-black `}
                />
              </div>
            </div>
            <div className="w-full h-[.9px] bg-white mb-10"></div>

            <div className="flex flex-col space-y-12">
              {villagerInputs.map((input, index) => (
                <div className="flex justify-between  space-x-4" key={index}>
                  <div className="relative w-1/2">
                    <label
                      className={`absolute left-0 font-medium text-xs -top-6 transition-all duration-300`}
                    >
                      Villager {index + 1}
                    </label>
                    <input
                      placeholder="Full Name"
                      type="text"
                      value={input.fname}
                      required
                      onChange={(e) =>
                        handleInputChange(index, "fname", e.target.value)
                      }
                      className={`w-full rounded-lg font-poppins text-xs focus:border-blue-400 border-2 px-3 py-3 transition-all outline-none duration-300 text-black`}
                    />
                  </div>

                  <div className="relative w-1/2">
                    <label
                      className={`absolute left-0 font-medium text-xs -top-6 transition-all duration-300`}
                    ></label>
                    <input
                      placeholder="Email"
                      type="text"
                      value={input.email}
                      required
                      onChange={(e) =>
                        handleInputChange(index, "email", e.target.value)
                      }
                      className={`w-full rounded-lg font-poppins text-xs focus:border-blue-400 border-2 px-3 py-3 transition-all outline-none duration-300 text-black`}
                    />
                  </div>
                </div>
              ))}

              <button
                onClick={handleAddInput}
                className="bg-black bg-opacity-20 border border-dashed backdrop-blur-xl text-white font-bold py-3 px-4 rounded"
                disabled={villagerInputs.length >= 24}
              >
                Add Villager
              </button>
            </div>
            <div className=" flex justify-center gap-8 mt-16">
              <button
                onClick={handleActivePrev}
                className="bg-gray-500 w-full md:w-[50%] py-3 font-mulish font-bold rounded-full rounded-tl-none"
              >
                Previous
              </button>
              <button
                type="submit"
                // onClick={handleSubmit}
                className="bg-[#E30613] w-full md:w-[50%] py-3 font-mulish font-bold rounded-full rounded-tl-none"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Active2;
