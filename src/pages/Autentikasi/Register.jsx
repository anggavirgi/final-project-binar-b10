import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import belajar from "../../assets/img/Belajar_white.png";
import { useRegisterUser } from "../../services/auth/register_user";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [no_telp, setno_telp] = useState("");
  const [ConfirmationPassword, setConfirmationPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [RegisterError, setRegisterError] = useState(null);
  const [registeredEmail, setRegisteredEmail] = useState("");
  const navigate = useNavigate();

  const {
    mutate: register,
    isError,
    error,
  } = useRegisterUser({
    onError: (error) => {
      setRegisterError(error);
    },
  });

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "nama") {
        setUsername(e.target.value);
      }
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
      if (e.target.id === "no_telp") {
        setno_telp(e.target.value);
      }
      if (e.target.id === "ConfirmationPassword") {
        setConfirmationPassword(e.target.value);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Melakukan operasi pendaftaran
      await register({
        email: Email,
        nama: Username,
        password: Password,
        no_telp: no_telp,
        ConfirmationPassword: ConfirmationPassword,
      });

      // Jika pendaftaran berhasil, navigasi ke halaman lain
      navigate("/otp", {
        state: {
          registerEmail: Email,
        },
      });
    } catch (error) {
      // Tangani kesalahan jika pendaftaran gagal
      console.error("Gagal mendaftar:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div className={`flex ${isMobile ? "flex-col h-screen items-center" : "h-screen"}`}>
      {/* Bagian Kiri */}
      <div className={`w-full bg-gray-100 ${isMobile ? "h-full flex-grow flex items-center" : " flex justify-center items-center"}`}>
        <div className={`p-8 ${isMobile ? "w-full" : "w-3/4"}`}>
          <h1 className="text-2xl font-bold mb-4 text-indigo-600">Daftar</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="nama" className="block text-black-600">
                Nama
              </label>
              <input type="text" id="nama" name="nama" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" onChange={handleInput} required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-black-600">
                Email
              </label>
              <div className="relative">
                <input type="text" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" onChange={handleInput} required />
              </div>

              <div className="mb-4">
                <label htmlFor="notelp" className="block text-black-600">
                  Nomor Telepon
                </label>
                <div className="relative">
                  <input type="text" id="no_telp" name="notelp" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" onChange={handleInput} required />
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
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    autoComplete="off"
                    onChange={handleInput}
                    required
                  />
                  <span className="absolute right-3 top-3 cursor-pointer" onClick={togglePasswordVisibility}>
                    {passwordShown ? <IoEyeOutline /> : <IoEyeOffOutline />}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-black-600">
                  Konfirmasi Password
                </label>
                <div className="relative">
                  <input
                    type={passwordShown ? "text" : "password"}
                    id="ConfirmationPassword"
                    name="password"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    autoComplete="off"
                    onChange={handleInput}
                    required
                  />
                  <span className="absolute right-3 top-3 cursor-pointer" onClick={togglePasswordVisibility}>
                    {passwordShown ? <IoEyeOutline /> : <IoEyeOffOutline />}
                  </span>
                </div>
              </div>
            </div>
            {isError && <div className="text-red-500 text-center mb-4">{error.message}</div>}
            <button type="submit" className="bg-indigo-600 hover:bg-blue-600 text-white font-semibold rounded-2xl py-2 px-4 w-full mb-4">
              Daftar
            </button>
          </form>

          <div>
            <p className={`mb-5 ${isMobile ? "mt-auto text-center absolute inset-x-0 bottom-0" : ""}`}>
              Sudah punya akun?{" "}
              <Link to={"/login"} className="hover:underline text-indigo-600">
                Masuk disini
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Bagian Kanan */}
      {!isMobile && (
        <div className="w-1/2 bg-indigo-600 hidden md:flex flex flex-col items-center justify-center">
          {/* Pastikan path ke gambar sudah benar */}
          <img src={belajar} alt="Belajar" className="object-cover w-1/2" />
        </div>
      )}
    </div>
  );
};
