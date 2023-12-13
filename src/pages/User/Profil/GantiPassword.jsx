import React, { useState } from "react";
import { GoPencil, GoGear } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { LayoutUser } from "../../../Layout/LayoutUser";
import { SidebarProfil } from "../../../components/Sidebar/SidebarProfil";

export const GantiPassword = () => {
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
    <>
      <LayoutUser>
        <div className="w-4/5 mx-auto bg-primary rounded-xl border border-primary">
          <div className="flex flex-col items-center mt-5 mb-6">
            <div className="text-white text-xl font-bold">Akun</div>
          </div>
          <div className="flex shadow-md bg-white">
            {/* Left Side - Menu */}

            <SidebarProfil />

            {/* Right Side - Profile Form */}

            <div className="w-2/3 rounded p-4">
              <div className="flex flex-col items-center mb-6">
                <p className="text-black text-2xl font-bold">Ubah Password</p>
              </div>

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
                      className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
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
                      className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
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
                      className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
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
                <div className="flex justify-center mb-5">
                  <br></br>
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full rounded-lg"
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
