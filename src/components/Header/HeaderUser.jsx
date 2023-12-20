import React, { useEffect, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CookieStorage, CookiesKeys } from "../../utils/cookies";
import { useDispatch, useSelector } from "react-redux";
import { getDataMe } from "../../redux/actions/meAction";

export const HeaderUser = () => {
  const navigate = useNavigate();
  // const { pathname } = useLocation();
  const token = CookieStorage.get(CookiesKeys.AuthToken);

  useEffect(() => {
    getDataMe();
  }, []);

  // const subpage = pathname.split("/")?.[1];
  // const activePage = (page = null) => {
  //   let classes;
  //   if (page === subpage) {
  //     classes = "bg-red-500";
  //   } else {
  //     classes = "bg-blue-900";
  //   }

  //   return classes;
  // };

  return (
    <div className="flex justify-between items-center px-36 py-5 bg-primary text-white">
      <div className="flex items-center gap-16 w-1/2">
        <div
          className="font-bold text-center text-2xl cursor-pointer"
          onClick={() => navigate("/home")}
        >
          LOGO
        </div>
        <div className="relative flex items-center w-full">
          <input
            type="text"
            placeholder="cari kursus.."
            className="border-gray-300 rounded-xl text-sm ps-6 pe-16 py-4 text-black w-full"
          />
          <button className="absolute p-2 rounded-xl bg-primary hover:bg-purple-800 right-4">
            <BiSearchAlt className="w-4 h-4" />
          </button>
        </div>
      </div>
      {token ? (
        <div className="relative flex items-center gap-8 font-medium">
          <Link
            className="px-6 py-1 bg-[#489CFF] rounded-xl cursor-pointer hover:bg-white hover:text-[#489CFF]"
            to={"/kelas"}
          >
            Kelas
          </Link>
          {/* <Link className={activePage("notifikasi")} to={"/notifikasi"}> */}
          <Link to={"/notifikasi"}>
            <LuBell className="w-6 h-6" />
          </Link>
          <Link to={"/profil"}>
            <FiUser className="w-6 h-6 cursor-pointer" />
          </Link>
        </div>
      ) : (
        <Link
          className="flex items-center gap-1.5 cursor-pointer"
          to={"/login"}
        >
          <FiLogIn />
          <span className="font-medium">Masuk</span>
        </Link>
      )}
    </div>
  );
};
