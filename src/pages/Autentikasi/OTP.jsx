import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import belajar from "../../assets/img/Belajar_white.png";

export const OTP = () => {
  return (
    <div className="flex flex-wrap h-screen">
      {/* Kolom Pertama */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 flex flex-col items-center shadow-lg w-full max-w-md">
          <div className="flex items-center justify-between w-full mb-8">
            <a href="#" className="text-black hover:text-indigo-600">
              <IoArrowBackOutline className="h-6 w-6" />
            </a>
          </div>

          <h2 className="text-3xl mb-2 text-indigo-600 text-center font-bold">
            Masukkan OTP
          </h2>
          <p className="mb-8 text-sm text-gray-500 text-center">
            Ketik 6 digit kode yang dikirimkan ke j****@gmail.com
          </p>

          <div className="flex justify-center gap-2 mb-8">
            <input
              type="text"
              className="form-input rounded-2xl text-center text-xl w-10 h-10 px-2 py-2 border-2 border-indigo-600"
              maxLength="1"
            />
            <input
              type="text"
              className="form-input rounded-2xl text-center text-xl w-10 h-10 px-2 py-2 border-2 border-indigo-600"
              maxLength="1"
            />
            <input
              type="text"
              className="form-input rounded-2xl text-center text-xl w-10 h-10 px-2 py-2 border-2 border-indigo-600"
              maxLength="1"
            />
            <input
              type="text"
              className="form-input rounded-2xl text-center text-xl w-10 h-10 px-2 py-2 border-2 border-indigo-600"
              maxLength="1"
            />
            <input
              type="text"
              className="form-input rounded-2xl text-center text-xl w-10 h-10 px-2 py-2 border-2 border-indigo-600"
              maxLength="1"
            />
            <input
              type="text"
              className="form-input rounded-2xl text-center text-xl w-10 h-10 px-2 py-2 border-2 border-indigo-600"
              maxLength="1"
            />
          </div>

          <button className="text-indigo-600 hover:text-indigo-700 text-sm mb-4">
            Kirim Ulang OTP dalam 60 detik
          </button>

          <button className="bg-indigo-600 hover:indigo-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline">
            Simpan
          </button>
        </div>
      </div>

      <div className="w-1/2 bg-indigo-600 flex flex-col items-center justify-center">
        {/* Pastikan path ke gambar sudah benar */}
        <img
          src={belajar}
          alt="Belajar"
          className="object-cover w-1/2"
        />
      </div>
    </div>
  );
};
