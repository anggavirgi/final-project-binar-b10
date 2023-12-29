import React, { useEffect, useState } from "react";
import { FiChevronDown, FiLogIn } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CookieStorage, CookiesKeys } from "../../utils/cookies";
import { useDispatch, useSelector } from "react-redux";
import { getDataMe } from "../../redux/actions/meAction";

export const HeaderUser = ({ setSearchQuery }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [getHandleDropwdown, setHandleDropdown] = useState(false);
  const [searchQueryLocal, setSearchQueryLocal] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(searchQueryLocal);
    }
  };

  const handleChange = (e) => {
    setSearchQueryLocal(e.target.value);
  };

  const token = CookieStorage.get(CookiesKeys.AuthToken);

  useEffect(() => {
    if(token){
      dispatch(getDataMe());
    }
  }, [token]);

  const handleLogout = () => {
    CookieStorage.remove(CookiesKeys.AuthToken);
    window.location.href = "/home";
  };

  return (
    <div className="flex justify-between items-center px-36 py-3 bg-white">
      <div className="flex items-center gap-16 w-1/2">
        <div
          className="font-bold text-center text-2xl cursor-pointer text-primary"
          onClick={() => navigate("/home")}
        >
          LearnWise
        </div>
        <div className="relative flex items-center w-full">
          <input
            type="text"
            placeholder="cari kursus.."
            className="border-grey-500 rounded-full text-sm ps-6 pe-16 py-2.5 text-black w-full"
            value={searchQueryLocal}
            onChange={handleChange}
            onKeyDown={handleSearch}
          />
          <button
            className="absolute right-4 text-primary"
            onClick={() => setSearchQuery(searchQueryLocal)}
          >
            <BiSearchAlt className="w-5 h-5" />
          </button>
        </div>
      </div>
      {token ? (
        <div className="relative flex items-center gap-4">
          <Link
            className="px-4 py-1 cursor-pointer hover:bg-primary hover:text-white hover:rounded-full"
            to={"/kelas"}
          >
            Kelas
          </Link>
          <Link
            className="px-4 py-1 cursor-pointer hover:bg-primary hover:text-white hover:rounded-full"
            to={"/notifikasi"}
          >
            <LuBell className="w-6 h-6 stroke-1" />
          </Link>
          <div
            className="flex gap-1 px-4 py-1 cursor-pointer hover:bg-primary hover:text-white hover:rounded-full"
            onClick={() =>
              getHandleDropwdown
                ? setHandleDropdown(false)
                : setHandleDropdown(true)
            }
          >
            <FiUser className="w-6 h-6 stroke-1" />
            <FiChevronDown className="w-6 h-6 stroke-1" />
          </div>
          <div
            className={`${
              getHandleDropwdown ? "flex flex-col" : "hidden"
            } absolute top-10 right-0 z-10 text-sm rounded-lg bg-white border border-grey-100`}
          >
            <Link
              className="ps-4 pe-16 py-3 hover:bg-gray-100 cursor-pointer"
              to={"/profil"}
            >
              Edit Profil
            </Link>
            <Link
              className="ps-4 pe-16 py-3 hover:bg-gray-100 cursor-pointer"
              to={"/kelas"}
            >
              Kelas Saya
            </Link>
            <Link
              className="ps-4 pe-16 py-3 hover:bg-gray-100 cursor-pointer"
              onClick={handleLogout}
            >
              Keluar
            </Link>
          </div>
        </div>
      ) : (
        <Link
          className="flex items-center gap-2 px-4 py-1 cursor-pointer hover:bg-primary hover:text-white hover:rounded-full"
          to={"/login"}
        >
          <FiLogIn className="stroke-1"/>
          <span>Masuk</span>
        </Link>
      )}
    </div>
  );
};
