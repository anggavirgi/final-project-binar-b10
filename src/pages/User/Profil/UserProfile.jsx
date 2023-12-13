import React, { useState } from "react";
import { GoPencil, GoGear } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { LayoutUser } from "../../../Layout/LayoutUser";
import { SidebarProfil } from "../../../components/Sidebar/SidebarProfil";

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
    <>
      <LayoutUser>
        <div className="w-4/5 mx-auto bg-primary rounded-xl border border-primary">
          <div className="flex flex-col items-center mt-5 mb-6">
            <div className="text-white text-xl font-bold">Akun</div>
          </div>
          <div className="flex shadow-md bg-white">
            {/* Left Side - Menu */}

            <SidebarProfil/>

            {/* Right Side - Profile Form */}

            <div className="w-2/3 p-4">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                  {/* Placeholder for profile picture */}
                </div>
                <p className="text-sm font-semibold text-primary">
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
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <p className="text-black-300">Email</p>
                  <input
                    type="email"
                    value={email}
                    onChange={handleInputChange(setEmail)}
                    placeholder="Email"
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <p className="text-black-300">Nomor Telepon</p>
                  <input
                    type="tel"
                    value={phone}
                    onChange={handleInputChange(setPhone)}
                    placeholder="Nomor Telepon"
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <p className="text-black-300">Negara</p>
                  <input
                    type="text"
                    value={country}
                    onChange={handleInputChange(setCountry)}
                    placeholder="Negara"
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <p className="text-black-300">Kota</p>
                  <input
                    type="text"
                    value={city}
                    onChange={handleInputChange(setCity)}
                    placeholder="Kota"
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex justify-center mb-5">
                  <br></br>
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full rounded-3xl"
                  >
                    Simpan Profil Saya
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </LayoutUser>
    </>
  );
};
