import React, { useState } from "react";
import {
  IoArrowBackOutline,
  IoEyeOffOutline,
  IoEyeOutline,
} from "react-icons/io5";

export const ResetPw = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="flex h-screen">
      {/* Bagian Kiri */}
      <div className="w-1/2 bg-gray-100 flex justify-center items-center">
        <div className="p-8 w-3/4">
          <h1 className="text-2xl font-bold mb-4 text-indigo-600">
            Reset Password
          </h1>
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="password" className="block text-black-600">
                Password Baru
              </label>
              <div className="relative">
                <input
                  type={passwordShown ? "text" : "password"}
                  id="pwbaru"
                  name="pwbaru"
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

              <div className="mb-4">
                <label htmlFor="password" className="block text-black-600">
                  Ulangi Password Baru
                </label>
                <div className="relative">
                  <input
                    type={passwordShown ? "text" : "password"}
                    id="ulangpwbaru"
                    name="ulangpwbaru"
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
              Simpan
            </button>
          </form>
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="w-1/2 bg-indigo-600">
        <img
          src="../assets/img/Belajar_white.png"
          alt="Belajar Image"
          className="object-cover w-full h-screen"
        />
      </div>
    </div>
  );
};
