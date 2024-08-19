"use client";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Active1 from "@/components/Dashboard/Active1";
import Active2 from "@/components/Dashboard/Active2";

import { cn } from "@/lib/utils";
import ProgressBar from "@ramonak/react-progress-bar";
import Image from "next/image";
import React, { useState } from "react";

import validateEmail from "@/lib/emailValidator";

type Props = {};

const Home = (props: Props) => {
  const [villagerInputs, setVillagerInputs] = useState([
    { fname: "", email: "" },
  ]);

  const [timeKeeper, setTimeKeeper] = useState({ fname: "", email: "" });

  const [candleReader, setCandleReader] = useState({ fname: "", email: "" });

  const [childInfo, setChildInfo] = useState({
    name: "",
    dob: { month: " ", year: "" },
    school: "",
    email: "",
    ascensionDate: "",
  });

  const MySwal = withReactContent(Swal);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  //next button handler ||  add child info
  const handleActive = (e: any) => {
    e.preventDefault();

    //active 1 means on first form of child info
    if (active === 1) {
      if (
        !childInfo.name ||
        !childInfo.dob ||
        !childInfo.email ||
        !childInfo.ascensionDate ||
        !childInfo.school
      ) {
        return Swal.fire({
          title: "Error",
          text: "Please fill in all the required fields",
          icon: "error",
        });
      }

      const notValidEmail = validateEmail(childInfo.email);
      if (notValidEmail) {
        return Swal.fire({
          title: "Error",
          text: "Invalid email address",
          icon: "error",
        });
      }
    }
    setActive((prev) => prev + 1);
    setProgress((prev) => prev + 50);
  };

  //prev button handler
  const handleActivePrev = () => {
    setActive((prev) => prev - 1);
    setProgress((prev) => prev - 50);
  };

  //form submit handler
  const handleSubmit = (e: any) => {
    e.preventDefault();

    //error handling on second form
    if (
      !timeKeeper.fname ||
      !timeKeeper.email ||
      !candleReader.fname ||
      !candleReader.email
    ) {
      return Swal.fire({
        title: "Error",
        text: "Please fill in all the required fields",
        icon: "error",
      });
    }

    //email validation on second form
    const hasInvalidEmail = villagerInputs.some(
      (val) => validateEmail(val.email) !== null
    );

    if (
      validateEmail(timeKeeper.email) ||
      validateEmail(candleReader.email) ||
      hasInvalidEmail
    ) {
      return Swal.fire({
        title: "Error",
        text: "Invalid email address",
        icon: "error",
      });
    }

    Swal.fire({
      title: "Completed",
      icon: "success",
      showCancelButton: false,
      showConfirmButton: false,
    });
    setChildInfo({
      name: "",
      dob: { month: " ", year: "" },
      school: "",
      email: "",
      ascensionDate: "",
    });

    console.log("data==>", timeKeeper, candleReader, villagerInputs, childInfo);
    setTimeKeeper({ fname: "", email: "" });
    setCandleReader({ fname: "", email: "" });
    setVillagerInputs([{ fname: "", email: "" }]);
    setActive(0);
  };

  return (
    <div className="p-4 flex flex-col pt-[70px]">
      <div>
        <h1 className="font-bold text-[#2B3C58] text-xl">Guardian Dashboard</h1>
      </div>
      {active === 0 && (
        <div className="w-[85%] mx-auto text-white">
          <div className=" flex justify-center items-center h-[40vh]">
            <button
              onClick={handleActive}
              className="bg-[#E30613] px-12 text-xl py-4 font-mulish font-bold rounded-full rounded-tl-none"
            >
              Add Child Info
            </button>
          </div>
          <div className="flex flex-col items-center lg:flex-row border-t border-black justify-between py-12 gap-4">
            <div className="relative">
              <Image
                src={"/assets/Group1.png"}
                alt="asd"
                width={385.85}
                height={257.23}
              />

              <Image
                src={"/assets/arrow.png"}
                alt="asd"
                width={100}
                height={100}
                className="absolute  top-[55%] left-[50%] -translate-y-[50%] -translate-x-[50%]"
              />
            </div>
            <div className="relative">
              <Image
                src={"/assets/Group1.png"}
                alt="asd"
                width={385.85}
                height={257.23}
              />
              <Image
                src={"/assets/arrow.png"}
                alt="asd"
                width={100}
                height={100}
                className="absolute top-[55%] left-[50%] -translate-y-[50%] -translate-x-[50%]"
              />
            </div>
            <div className="relative">
              <Image
                src={"/assets/Group1.png"}
                alt="asd"
                width={385.85}
                height={257.23}
              />
              <Image
                src={"/assets/arrow.png"}
                alt="asd"
                width={100}
                height={100}
                className="absolute top-[55%] left-[50%] -translate-y-[50%] -translate-x-[50%]"
              />
            </div>
          </div>
        </div>
      )}
      {active > 0 && (
        <div className="w-[90%] mx-auto text-white flex flex-col items-center">
          <div className="flex w-full justify-center text-xl items-center my-6 mt-20 gap-4">
            <div
              className={cn(
                " bg-[#2B3C58] h-10 flex justify-center items-center rounded-full w-10",
                active >= 1 && "bg-[#FF0000]"
              )}
            >
              1
            </div>
            <div className="w-[20%] max-w-md  ">
              <ProgressBar
                completed={progress}
                bgColor="#FF0000"
                height="10px"
                baseBgColor="#2B3C58"
                className="h-4"
                customLabel=" ."
              />
            </div>
            <div
              className={cn(
                " bg-[#2B3C58] h-10 flex justify-center items-center rounded-full w-10",
                active === 2 && "bg-[#FF0000]"
              )}
            >
              2
            </div>
          </div>

          {/* Numbers on the progress bar */}
          {/* <div className="absolute inset-0 flex justify-between text-white font-bold text-xs">
              <span className="w-1/3 text-left  bg-red-500 p-2 rounded-full">
                1
              </span>
              <span className="w-1/3 text-center">2</span>
              <span className="w-1/3 text-right">3</span>
            </div> */}

          {/* Increment Progress Button */}
          {/* <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={incrementProgress}
            >
              Increment Progress
            </button> */}

          {active === 1 && (
            <Active1
              handleActive={handleActive}
              childInfo={childInfo}
              setChildInfo={setChildInfo}
            />
          )}
          {active === 2 && (
            <Active2
              handleSubmit={handleSubmit}
              timeKeeper={timeKeeper}
              setTimeKeeper={setTimeKeeper}
              candleReader={candleReader}
              setCandleReader={setCandleReader}
              handleActivePrev={handleActivePrev}
              villagerInputs={villagerInputs}
              setVillagerInputs={setVillagerInputs}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
