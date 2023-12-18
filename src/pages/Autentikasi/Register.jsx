import React, { useState } from "react";
import BelajarImage from "../../assets/img/Belajar_white.png";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import belajar from "../../assets/img/Belajar_white.png";

export const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="flex h-screen">
      {/* Bagian Kiri */}
      <div className="w-1/2 bg-gray-100 flex justify-center items-center">
        <div className="p-8 w-3/4">
          <h1 className="text-2xl font-bold mb-4 text-indigo-600">Daftar</h1>
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="nama" className="block text-black-600">
                Nama
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 rounded-2xl"
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-black-600">
                Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 rounded-2xl"
                  autoComplete="off"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="notelp" className="block text-black-600">
                  Nomor Telepon
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="notelp"
                    name="notelp"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 rounded-2xl"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-black-600">
                  Buat Password
                </label>
                <div className="relative">
                  <input
                    type={passwordShown ? "text" : "password"}
                    id="password"
                    name="password"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 rounded-2xl"
                    autoComplete="off"
                  />
                  <span
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordShown ? <IoEyeOutline /> : <IoEyeOffOutline />}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-blue-600 text-white font-semibold rounded-2xl py-2 px-4 w-full mb-4"
            >
              Masuk
            </button>
          </form>

          <div className="">
            <p>
              Sudah punya akun?{" "}
              <a href="#" className="hover:underline text-indigo-600">
                Masuk disini
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bagian Kanan */}
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
