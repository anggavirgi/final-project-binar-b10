import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaStar, FaRegClock, FaBookOpen } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";

export const Class = () => {
  return (
    <div className="bg-[#EBF3FC] min-h-screen">
      {/* Container */}
      <div className="mx-auto p-8">
        {/* Title and Search */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold text-gray-700">Kelas Berjalan</h2>
          <div className="relative">
            <input type="text" className="h-10 pl-10 pr-5 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Cari Kelas..." />
            <div className="absolute top-0 right-4 h-full flex items-center mr-2">
              {/* Search icon with circular background */}
              <div className="rounded-full border-2 border-gray-300 p-2 bg-[#6148FF]">
                <FaSearch className="text-white h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-wrap justify-between">
          {/* Filter section */}
          <div className="w-full md:w-1/4 sm:w-1/2 lg:w-1/5 mb-4 md:mb-0">
            <div className="p-6 pl-8 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Filter</h3>
              <div className="space-y-4">
                <label className="flex gap-2 items-center">
                  <input type="checkbox" id="some_id" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0" />
                  <span className="">Paling Baru</span>
                </label>
                <label className="flex gap-2 items-center">
                  <input type="checkbox" id="some_id" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0" />
                  <span className="">Paling Populer</span>
                </label>
                <label className="flex gap-2 items-center">
                  <input type="checkbox" id="some_id" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0" />
                  <span className="">Promo</span>
                </label>
                <h2 className="text-xl font-bold mt-6 mb-2">Kategori</h2>
                <label className="flex gap-2 items-center">
                  <input type="checkbox" id="some_id" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0" />
                  <span className="">UI/UX Design</span>
                </label>
                <label className="flex gap-2 items-center">
                  <input type="checkbox" id="some_id" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0" />
                  <span className="">Web Development</span>
                </label>
                <label className="flex gap-2 items-center">
                  <input type="checkbox" id="some_id" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0" />
                  <span className="">Android Development</span>
                </label>
                <label className="flex gap-2 items-center">
                  <input type="checkbox" id="some_id" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0" />
                  <span className="">Data Science</span>
                </label>
                <label className="flex gap-2 items-center">
                  <input type="checkbox" id="some_id" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0" />
                  <span className="">Business Intelligence</span>
                </label>
                <h2 className="text-xl font-bold mt-6 mb-2">Level Kesulitan</h2>
                <label className="flex gap-2 items-center">
                  <input type="checkbox" id="some_id" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0" />
                  <span className="">Semua Level</span>
                </label>
                <label className="flex gap-2 items-center">
                  <input type="checkbox" id="some_id" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0" />
                  <span className="">Beginner Level</span>
                </label>
                <label className="flex gap-2 items-center">
                  <input type="checkbox" id="some_id" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0" />
                  <span className="">Intermediate Level</span>
                </label>
                <label className="flex gap-2 items-center">
                  <input type="checkbox" id="some_id" className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0" />
                  <span className="">Advanced Level</span>
                </label>
                <div className="w-full flex justify-center">
                  <button className="mt-4 font-bold text-lg text-red-500 hover:underline">Hapus Filter</button>
                </div>
              </div>
            </div>
          </div>

          {/* Courses section */}
          <div className="w-full md:w-3/4">
            <div className="flex flex-wrap justify-between">
              {/* Tabs */}
              <div className="w-full mb-4">
                <div className="flex space-x-2">
                  <button className="text-purple-500 bg-white px-4 py-2 rounded-lg w-[20%]">All</button>
                  <button className="bg-[#6148FF] text-white px-4 py-2 rounded-lg shadow w-[50%]">In Progress</button>
                  <button className="text-purple-500 bg-white px-4 py-2 rounded-lg shadow w-[30%]">Selesai</button>
                </div>
              </div>

              <div className="w-full shadow-xl rounded-3xl sm:w-full md:w-[47%] lg:w-[47%] xl:w-[48%] mb-4 overflow-hidden">
                <div className="overflow-hidden">
                  <img className="w-full h-40 object-cover" src="https://via.placeholder.com/150" alt="Course thumbnail" />
                </div>
                <div className="px-4 py-5 bg-white rounded-b-3xl shadow-lg">
                  <div className="flex justify-between items-center pt-2">
                    <h4 className="text-lg font-bold text-[#6148FF]">UI/UX Design</h4>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-500 mr-1" />
                      <span className="text-purple-600 font-semibold">4.7</span>
                    </div>
                  </div>
                  <h1 className="font-bold text-lg">Belajar Web Designer dengan Figma</h1>
                  <p className="text-sm mb-2">by Angela Doe</p>
                  <div className="text-sm text-gray-600 mb-4 flex justify-between">
                    <div className="flex items-center">
                      <RiShieldStarLine className="text-green-500 mr-2" />
                      <span className="text-[#6148FF] text-sm font-semibold">Intermediate Level</span>
                    </div>
                    <div className="flex items-center">
                      <FaBookOpen className="text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm font-semibold">10 Modul</span>
                    </div>
                    <div className="flex items-center">
                      <FaRegClock className="text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm font-semibold">120 Menit</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaRegCheckCircle className="text-green-500 mr-2" />
                    <div className="w-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
                      <div className="bg-[#6148FF] h-7 flex items-center rounded-full" style={{ width: "70%" }}>
                        <span className="ml-2 text-white font-semibold">70% complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full shadow-xl rounded-3xl sm:w-full md:w-[47%] lg:w-[47%] xl:w-[48%] mb-4 overflow-hidden">
                <div className="rounded-lg overflow-hidden">
                  <img className="w-full h-40 object-cover" src="https://via.placeholder.com/150" alt="Course thumbnail" />
                </div>
                <div className="px-4 py-5 bg-white rounded-b-3xl shadow-lg">
                  <div className="flex justify-between items-center pt-2">
                    <h4 className="text-lg font-bold text-[#6148FF]">UI/UX Design</h4>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-500 mr-1" />
                      <span className="text-purple-600 font-semibold">4.7</span>
                    </div>
                  </div>
                  <h1 className="font-bold text-lg">Belajar Web Designer dengan Figma</h1>
                  <p className="text-sm mb-2">by Angela Doe</p>
                  <div className="text-sm text-gray-600 mb-4 flex justify-between">
                    <div className="flex items-center">
                      <RiShieldStarLine className="text-green-500 mr-2" />
                      <span className="text-[#6148FF] text-sm font-semibold">Intermediate Level</span>
                    </div>
                    <div className="flex items-center">
                      <FaBookOpen className="text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm font-semibold">10 Modul</span>
                    </div>
                    <div className="flex items-center">
                      <FaRegClock className="text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm font-semibold">120 Menit</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaRegCheckCircle className="text-green-500 mr-2" />
                    <div className="w-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
                      <div className="bg-[#6148FF] h-7 flex items-center rounded-full" style={{ width: "70%" }}>
                        <span className="ml-2 text-white font-semibold">70% complete</span>
                      </div>
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
