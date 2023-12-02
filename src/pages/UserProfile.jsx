import React, { useState } from "react";
import { GoPencil, GoGear } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

export const UserProfile = () => {
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

  return (
    <div className="w-[900px] bg-indigo-600 rounded-r flex flex-col">
      <div className="flex flex-col items-center mb-6">
        <br></br>
        <div className="text-white text-xl font-bold">Akun</div>
      </div>
      <div className="flex w-[900px] h-[700px] shadow-md">
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
            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mb-2">
              {/* Placeholder for profile picture */}
            </div>
            <p className="text-sm font-semibold text-indigo-600">
              Ubah Foto Profil
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="mb-4">
              <p className="text-black-300">Nama</p>
              <input
                type="text"
                value={name}
                onChange={handleInputChange(setName)}
                placeholder="Nama"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <p className="text-black-300">Email</p>
              <input
                type="email"
                value={email}
                onChange={handleInputChange(setEmail)}
                placeholder="Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <p className="text-black-300">Nomor Telepon</p>
              <input
                type="tel"
                value={phone}
                onChange={handleInputChange(setPhone)}
                placeholder="Nomor Telepon"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <p className="text-black-300">Negara</p>
              <input
                type="text"
                value={country}
                onChange={handleInputChange(setCountry)}
                placeholder="Negara"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <p className="text-black-300">Kota</p>
              <input
                type="text"
                value={city}
                onChange={handleInputChange(setCity)}
                placeholder="Kota"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
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
