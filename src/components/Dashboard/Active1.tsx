import Logo from "@/components/ui/Logo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type DOB = {
  month: string;
  year: string;
};
type ChildInfo = {
  name: string;
  dob: DOB;
  school: string;
  email: string;
  ascensionDate: string;
};
type Props = {
  handleActive: (e: any) => void;
  childInfo: ChildInfo;
  setChildInfo: React.Dispatch<React.SetStateAction<ChildInfo>>;
};

const Active1 = ({ handleActive, childInfo, setChildInfo }: Props) => {
  return (
    <div className=" relative flex flex-col gap-4 py-8 justify-center w-full items-center overflow-hidden  ">
      <div className=" bg-[#2B3C58] text-white w-full   rounded-[20px] p-8">
        <h1 className="text-4xl font-medium pb-6">Add your child info</h1>
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
          <form onSubmit={handleActive}>
            <div className="relative mb-14 ">
              <label
                className={`absolute left-0 font-medium text-xs  -top-6 transition-all  duration-300  `}
              >
                Child's Name
              </label>
              <input
                placeholder="name
                "
                value={childInfo.name}
                type="text"
                onChange={(e) =>
                  setChildInfo((prev) => ({ ...prev, name: e.target.value }))
                }
                className={`w-full rounded-lg font-poppins text-xs focus:border-blue-400 border-2 px-3 py-3 transition-all outline-none duration-300 text-black `}
              />
            </div>
            <div className="flex justify-between mb-14 space-x-4">
              {/* Month Dropdown */}
              <div className="relative w-1/2">
                <label
                  className={`absolute left-0 font-medium text-xs -top-6 transition-all duration-300`}
                >
                  DOB
                </label>
                <select
                  required
                  value={childInfo.dob.month}
                  onChange={(e) =>
                    setChildInfo((prev) => ({
                      ...prev,
                      dob: { ...prev.dob, month: e.target.value },
                    }))
                  }
                  className={`w-full rounded-lg font-poppins text-xs focus:border-blue-400 border-2 px-3 py-3 transition-all outline-none duration-300 text-black`}
                >
                  <option value="" disabled selected>
                    Month
                  </option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>

              {/* Year Dropdown */}
              <div className="relative w-1/2">
                <select
                  required
                  value={childInfo.dob.year}
                  onChange={(e) =>
                    setChildInfo((prev) => ({
                      ...prev,
                      dob: { ...prev.dob, year: e.target.value },
                    }))
                  }
                  className={`w-full rounded-lg font-poppins text-xs focus:border-blue-400 border-2 px-3 py-3 transition-all outline-none duration-300 text-black`}
                >
                  <option value="" disabled selected>
                    Year
                  </option>
                  {/* You can generate these options dynamically in a real-world application */}
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
                  <option value="2005">2005</option>
                  {/* Add more years as needed */}
                </select>
              </div>
            </div>
            <div className="relative mb-14 ">
              <label
                className={`absolute left-0 font-medium text-xs  -top-6 transition-all  duration-300  `}
              >
                Grade in School
              </label>
              <input
                required
                value={childInfo.school}
                onChange={(e) =>
                  setChildInfo((prev) => ({ ...prev, school: e.target.value }))
                }
                placeholder="School"
                type="text"
                className={`w-full rounded-lg font-poppins text-xs focus:border-blue-400 border-2 px-3 py-3 transition-all outline-none duration-300 text-black `}
              />
            </div>
            <div className="relative mb-14 ">
              <label
                className={`absolute left-0 font-medium text-xs  -top-6 transition-all  duration-300  `}
              >
                Child's email address
              </label>
              <input
                required
                value={childInfo.email}
                onChange={(e) =>
                  setChildInfo((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="email address"
                type="text"
                className={`w-full rounded-lg font-poppins text-xs focus:border-blue-400 border-2 px-3 py-3 transition-all outline-none duration-300 text-black `}
              />
            </div>
            <div className="relative mb-14 ">
              <label
                className={`absolute left-0 font-medium text-xs  -top-6 transition-all  duration-300  `}
              >
                Ascension Date
              </label>
              <input
                required
                value={childInfo.ascensionDate}
                onChange={(e) =>
                  setChildInfo((prev) => ({
                    ...prev,
                    ascensionDate: e.target.value,
                  }))
                }
                placeholder="Ascension Date"
                type="text"
                className={`w-full rounded-lg font-poppins text-xs focus:border-blue-400 border-2 px-3 py-3 transition-all outline-none duration-300 text-black `}
              />
            </div>

            <div className=" flex justify-center mt-16">
              <button
                type="submit"
                // onClick={handleActive}
                className="bg-[#E30613] w-full md:w-[50%] py-3 font-mulish font-bold rounded-full rounded-tl-none"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Active1;
