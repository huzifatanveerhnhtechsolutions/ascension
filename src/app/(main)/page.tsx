"use client";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Active1 from "@/components/Dashboard/Active1";
import Active2 from "@/components/Dashboard/Active2";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import ProgressBar from "@ramonak/react-progress-bar";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const Home = (props: Props) => {
  const [villagerInputs, setVillagerInputs] = useState([
    { name: "", secondName: "" },
  ]);
  const MySwal = withReactContent(Swal);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const handleActive = () => {
    setActive((prev) => prev + 1);
    setProgress((prev) => prev + 50);
  };
  const handleActivePrev = () => {
    setActive((prev) => prev - 1);
    setProgress((prev) => prev - 50);
  };

  const handleSubmit = () => {
    Swal.fire({
      title: "Completed",
      icon: "success",
      showCancelButton: false,
      showConfirmButton: false,
    });
  };

  return (
    <div className="p-4 flex flex-col pt-[66px]">
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
            <div>
              <Image
                src={"/assets/Group1.png"}
                alt="asd"
                width={385.85}
                height={257.23}
              />
            </div>
            <div>
              <Image
                src={"/assets/Group1.png"}
                alt="asd"
                width={385.85}
                height={257.23}
              />
            </div>
            <div>
              <Image
                src={"/assets/Group1.png"}
                alt="asd"
                width={385.85}
                height={257.23}
              />
            </div>
          </div>
        </div>
      )}
      {active > 0 && (
        <div className="w-[90%] mx-auto text-white flex flex-col items-center">
          <div className="w-full max-w-md my-6">
            <ProgressBar
              completed={progress}
              bgColor="#FF0000"
              className="h-4"
            />
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

          {active === 1 && <Active1 handleActive={handleActive} />}
          {active === 2 && (
            <Active2
              handleSubmit={handleSubmit}
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
