import React, { useEffect, useState } from "react";
import { FiChevronDown, FiLogIn } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import { BsList } from "react-icons/bs";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CookieStorage, CookiesKeys } from "../../utils/cookies";
import { getDataMe } from "../../redux/actions/meAction";
import { Sidebar } from "../Sidebar/SidebarUser";
import { useDispatch } from "react-redux";

export const HeaderUser = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const [getHandleDropwdown, setHandleDropdown] = useState(false);

  const [showSearchBar, setShowSearchBar] = useState(false);

  const navigate = useNavigate();
  // const { pathname } = useLocation();
  const token = CookieStorage.get(CookiesKeys.AuthToken);
  const isUserAuthenticated = !!token;
  // const isUserAuthenticated = true;

  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    if (token) {
      dispatch(getDataMe());
    }
  }, [token]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Close the sidebar when the window is resized
  useEffect(() => {
    setShowSearchBar(location.pathname === "/home");

    const handleResize = () => {
      if (isMobile && isSidebarOpen) {
        closeSidebar();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location, isMobile, isSidebarOpen]);

  const handleLogout = () => {
    CookieStorage.remove(CookiesKeys.AuthToken);
    window.location.href = "/home";
  };

  return (
    <div
      className={`flex justify-between items-center px-6 md:px-36 text-white bg-white ${
        isMobile ? "py-2" : "py-5"
      }`}
    >
      <div
        className={`flex  ${
          isMobile ? "flex-col w-full" : "items-center gap-16 w-1/2"
        }`}
      >
        {!isMobile && (
          <div>
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
              />
              <button className="absolute right-4 text-primary">
                <BiSearchAlt className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
        {showSearchBar && (
          <div className="relative flex items-center w-full">
            <input
              type="text"
              placeholder="cari kursus.."
              className="border-gray-300 rounded-xl text-sm md:text-base lg:text-lg xl:text-xl ps-4 md:ps-6 pe-2 md:pe-16 py-2 md:py-4 text-black w-full"
            />
            <button className="absolute p-2 rounded-xl bg-primary hover:bg-purple-800 right-1 md:right-6">
              <BiSearchAlt className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>
        )}
      </div>
      {isMobile <= 768 && (
        <div className={`flex items-center ${!showSearchBar && "mt-3"}`}>
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none lg:hidden ps-4"
          >
            <BsList
              className={`text-2xl ${
                isSidebarOpen ? "text-white" : "text-black"
              }`}
            />
          </button>
          {isSidebarOpen && (
            <div
              className="fixed top-0 right-0 h-screen bg-gray-800"
              onClick={closeSidebar}
            />
          )}
          <Sidebar
            isOpen={isSidebarOpen}
            onToggle={toggleSidebar}
            isUserAuthenticated={isUserAuthenticated}
          />
        </div>
      )}

      {!isMobile ? (
        isUserAuthenticated ? (
          <div className="relative flex items-center gap-8 font-medium">
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
            <FiLogIn className="stroke-1" />
            <span>Masuk</span>
          </Link>
        )
      ) : (
        <></>
      )}
    </div>
  );
};
