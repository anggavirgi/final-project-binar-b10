import React from "react";
import { GoPencil, GoGear } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaStar, FaRegClock, FaBookOpen } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";

export const RiwayatUser = () => {
  return (
    <div className="w-screen flex justify-center items-center">
      <div className="w-[900px] bg-indigo-600 rounded-r flex flex-col">
        <div className="flex flex-col items-center mb-6">
          <br></br>
          <div className="text-white text-xl font-bold">Akun</div>
        </div>
        <div className="flex w-[900px] h-[500px] shadow-md">
          {/* Left Side - Menu */}
          <div className="w-1/3 bg-white shadow rounded-l p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center text-indigo-600 mb-4">
                <GoPencil className="text-lg" />
                <span className="ml-2">Profil Saya</span>
              </div>
              <hr className="mb-4" />

              <div className="flex items-center text-indigo-600 mb-4">
                <GoGear className="text-lg" />
                <span className="ml-2 text-black">Ubah Password</span>
              </div>
              <hr className="mb-4" />

              <div className="flex items-center text-indigo-600 mb-4">
                <BsCart3 className="text-lg" />
                <span className="ml-2 text-black">Riwayat Pembayaran</span>
              </div>
              <hr className="mb-4" />

              <div className="flex items-center text-indigo-600 mb-4">
                <BiLogOut className="text-lg" />
                <span className="ml-2 text-black">Keluar</span>
              </div>
              <hr className="mb-4" />
            </div>
            <div className="text-center">
              <span className="text-sm">Version 1.1.0</span>
            </div>
          </div>

          {/* Right Side - Profile Form */}

          <div className="flex-1 bg-white rounded p-4">
            <div className="flex flex-col items-center mb-6">
              <p className="font-semibold text-black text-3xl font-bold">
                Riwayat Pembayaran
              </p>
            </div>

            <br></br>

            <div className="w-full  shadow-xl rounded-3xl sm:w-full md:w-[90%] lg:w-[90%] xl:w-[90%] mb-4 overflow-hidden">
              <div className="overflow-hidden w-full">
                <img
                  className="w-full h-40"
                  src="https://via.placeholder.com/150"
                  alt="Course thumbnail"
                />
              </div>
              <div className="px-4 py-5 rounded-b-3xl shadow-lg w-full">
                <div className="flex justify-between items-center pt-2">
                  <h4 className="text-lg font-bold text-[#6148FF]">
                    UI/UX Design
                  </h4>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-500 mr-1" />
                    <span className="text-purple-600 font-semibold">4.7</span>
                  </div>
                </div>
                <h1 className="font-bold text-lg">
                  Belajar Web Designer dengan Figma
                </h1>
                <p className="text-sm mb-2">by Angela Doe</p>
                <div className="text-sm text-gray-600 mb-4 flex justify-between">
                  <div className="flex items-center">
                    <RiShieldStarLine className="text-green-500 mr-2" />
                    <span className="text-[#6148FF] text-sm font-semibold">
                      Intermediate Level
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaBookOpen className="text-green-500 mr-2" />
                    <span className="text-gray-700 text-sm font-semibold">
                      10 Modul
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaRegClock className="text-green-500 mr-2" />
                    <span className="text-gray-700 text-sm font-semibold">
                      120 Menit
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaRegCheckCircle className="text-green-500 mr-2" />
                  <div className="w-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div
                      className="bg-[#6148FF] h-7 flex items-center rounded-full"
                      style={{ width: "70%" }}
                    >
                      <span className="ml-2 text-white font-semibold">
                        70% complete
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
