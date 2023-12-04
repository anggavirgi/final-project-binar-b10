import React, { useState } from "react";
import { GoPencil, GoGear } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import {
  IoArrowBackOutline,
  IoEyeOffOutline,
  IoEyeOutline,
} from "react-icons/io5";

export const GantiPWUser = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [phone, setPhone] = useState("+62 8121212121");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile saved!");
  };

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
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
              Ubah Password
            </p>
          </div>

          <br></br>

          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="mb-4">
              <label htmlFor="password" className="block text-black-600">
                Masukan Password Lama
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

            <div className="mb-4">
              <label htmlFor="password" className="block text-black-600">
                Masukan Password Baru
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
            <br></br>
            <div className="flex justify-center">
              <br></br>
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full rounded-3xl"
              >
                Simpan Profil Saya
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
