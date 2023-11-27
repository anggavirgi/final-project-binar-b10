import React, { useState } from "react";
import { FaTelegramPlane, FaStar, FaRegClock, FaBookOpen, FaArrowLeft } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { Modal } from "flowbite-react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";

export const Detail = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Modal */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <div className="flex items-center flex-col m-4">
          <span className="text-black font-bold text-2xl">Selangkah lagi menuju</span>
          <span className="text-[#6148FF] font-bold text-2xl">Kelas Premium</span>
        </div>
        <div className="flex justify-center">
          <div className="w-full shadow-xl rounded-3xl sm:w-full md:w-[47%] lg:w-[47%] xl:w-[80%] mb-4 overflow-hidden">
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
                <div className="w-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div className="bg-[#6148FF] h-7 flex justify-between items-center rounded-full">
                    <span className="ml-2 text-white font-semibold">Beli</span>
                    <span className="text-white font-semibold mr-2">Rp.349.000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal.Footer className="flex justify-center">
          <button className="bg-[#6148FF] h-12 w-1/2 flex justify-center items-center rounded-full" onClick={() => setOpenModal(false)}>
            <span className="text-white font-semibold">Beli Sekarang</span>
            <FaArrowCircleRight className="text-[#EBF3FC] ml-2" />
          </button>
        </Modal.Footer>
      </Modal>

      <div className="bg-[#EBF3FC] mb-6">
        <div className="relative pl-28">
          {/* Isi dari bagian dengan latar belakang #EBF3FC */}
          <div className="pt-4">
            <Link to="/beranda" className="hover:underline">
              <div className="flex items-center mb-4">
                <FaArrowLeft className="mr-4 text-black" />
                <h2 className="text-black font-bold">Kelas Lainnya</h2>
              </div>
            </Link>

            <div className="flex flex-wrap w-1/2 lg:flex-nowrap justify-between items-start">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-[#6148FF] mb-2">UI/UX Design</h1>
                <p className="text-xl text-black mb-1">Intro to Basic of User Interaction Design</p>
                <p className="text-black mb-3">by Simon Doe</p>
                <div className="flex flex-wrap items-center mb-4">
                  <div className="flex items-center mr-6">
                    <RiShieldStarLine className="text-[#73CA5C]" />
                    <span className="ml-1 text-[#6148FF]">Beginner Level</span>
                  </div>
                  <div className="flex items-center mr-6">
                    <FaBookOpen className="text-[#73CA5C]" />
                    <span className="ml-1">5 Modul</span>
                  </div>
                  <div className="flex items-center">
                    <FaRegClock className="text-[#73CA5C]" />
                    <span className="ml-1">45 Menit</span>
                  </div>
                </div>
                <div className="flex">
                  <button className="flex items-center px-4 py-2 bg-[#73CA5C] text-white rounded-full mr-4">
                    Join Grup Telegram
                    <FaTelegramPlane className="ml-2" />
                  </button>
                  <button className="flex items-center px-4 py-2 bg-[#73CA5C] text-white rounded-full" onClick={() => setOpenModal(true)}>
                    Gabung Kelas
                  </button>
                </div>
              </div>
              <div className="flex items-center ml-4 mt-4 lg:mt-0">
                <FaStar className="text-yellow-500" />
                <span className="text-black ml-1">5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Materi Belajar Section */}
      <div className="absolute top-14 right-4 lg:right-96 z-10 w-full lg:w-1/3 xl:w-1/4 px-4 overflow-auto">
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold ">Materi Belajar</h2>
            <div className="flex items-center w-1/2">
              <FaRegCheckCircle className="text-green-500 mr-2" />
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-[#6148FF] h-7 flex items-center rounded-full" style={{ width: "70%" }}>
                  <span className="ml-2 text-white font-semibold">70% complete</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 1 */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-800 font-semibold">Chapter 1 - Pendahuluan</p>
              <span className="text-sm bg-purple-500 text-white py-1 px-3 rounded-full">60 Menit</span>
            </div>
            <ol className="list-decimal list-inside">
              <li className="mb-2 flex items-center">
                <span className="flex items-center justify-center h-6 w-6 bg-blue-100 text-black rounded-full text-xs mr-2">1</span>
                Tujuan Mengikuti Kelas Design System
              </li>
              <hr />
              <li className="mb-2 flex items-center">
                <span className="flex items-center justify-center h-6 w-6 bg-blue-100 text-black rounded-full text-xs mr-2">2</span>
                Pengenalan Design System
              </li>
              <hr />
              <li className="mb-2 flex items-center">
                <span className="flex items-center justify-center h-6 w-6 bg-blue-100 text-black rounded-full text-xs mr-2">3</span>
                Contoh Dalam Membangun Design System
              </li>
              <hr />
            </ol>
          </div>

          {/* Chapter 2 */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-700 font-semibold">Chapter 2 - Memulai Desain</p>
              <span className="text-sm bg-purple-500 text-white py-1 px-3 rounded-full">120 Menit</span>
            </div>
            <ol className="list-decimal list-inside">
              <li className="mb-2 flex items-center">
                <span className="flex items-center justify-center h-6 w-6 bg-blue-100 text-black rounded-full text-xs mr-2">4</span>
                Color Palette
              </li>
              <hr />
              <li className="mb-2 flex items-center">
                <span className="flex items-center justify-center h-6 w-6 bg-blue-100 text-black rounded-full text-xs mr-2">5</span>
                Typography, Layout dan Grid
              </li>
              <hr />
              <li className="mb-2 flex items-center">
                <span className="flex items-center justify-center h-6 w-6 bg-blue-100 text-black rounded-full text-xs mr-2">6</span>
                Membuat Components
              </li>
              <hr />
              <li className="mb-2 flex items-center">
                <span className="flex items-center justify-center h-6 w-6 bg-blue-100 text-black rounded-full text-xs mr-2">7</span>
                Membuat Components
              </li>
              <hr />
              <li className="mb-2 flex items-center">
                <span className="flex items-center justify-center h-6 w-6 bg-blue-100 text-black rounded-full text-xs mr-2">8</span>
                Membuat Components
              </li>
              <hr />
              <li className="mb-2 flex items-center">
                <span className="flex items-center justify-center h-6 w-6 bg-blue-100 text-black rounded-full text-xs mr-2">9</span>
                Membuat Components
              </li>
              <hr />
            </ol>
          </div>
        </div>
      </div>

      {/* Video Section - Adjusted size */}
      <div className="flex justify-start mb-6 pl-28">
        <iframe
          className="w-11/12 md:w-3/4 lg:w-1/2 xl:w-2,5/5 aspect-video rounded-3xl" // This line controls the width at different breakpoints
          src="https://www.youtube.com/embed/pI4ELkxxMGM?si=KM2w3EAICG6GZpVD"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Content Section */}
      <div className="pl-28">
        <h2 className="text-2xl font-bold mb-4">Tentang Kelas</h2>
        <p className="text-gray-700 mb-6">{/* Content text here */}</p>

        <h2 className="text-2xl font-bold mb-4">Kelas Ini Ditujukan Untuk</h2>
        <ul className="list-disc pl-5 mb-6 text-gray-700">{/* List items here */}</ul>
      </div>
    </div>
  );
};

export default Detail;
