import React, { useEffect, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import { BsList } from "react-icons/bs";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CookieStorage, CookiesKeys } from "../../utils/cookies";
import { getDataMe } from "../../redux/actions/meAction";
import { Sidebar } from "../Sidebar/SidebarUser";

export const HeaderUser = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const [showSearchBar, setShowSearchBar] = useState(false);

  const navigate = useNavigate();
  // const { pathname } = useLocation();
  const token = CookieStorage.get(CookiesKeys.AuthToken);
  const isUserAuthenticated = !!token;
  // const isUserAuthenticated = true;

  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    getDataMe();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Close the sidebar when the window is resized
  useEffect(() => {
    setShowSearchBar(location.pathname === '/home');

    const handleResize = () => {
      if (isMobile && isSidebarOpen) {
        closeSidebar();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [location, isMobile, isSidebarOpen]);


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
    <div className={`flex justify-between items-center px-6 md:px-36 text-white ${isMobile ? 'py-2':'bg-primary py-5'}`}>
      <div className={`flex  ${isMobile ? 'flex-col w-full':'items-center gap-16 w-1/2'}`}>
        
        {!isMobile && (
        <div
          className="font-bold text-center text-2xl cursor-pointer"
          onClick={() => navigate("/home")}
        >LOGO
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
        <div className={`flex items-center ${!showSearchBar && 'mt-3'}`}>
          <button onClick={toggleSidebar} className="text-white focus:outline-none lg:hidden ps-4">
            <BsList className={`text-2xl ${isSidebarOpen ? 'text-white' : 'text-black'}`} />
          </button>
          {isSidebarOpen && <div className="fixed top-0 right-0 h-screen bg-gray-800" onClick={closeSidebar} />}
          <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} isUserAuthenticated={isUserAuthenticated} />
        </div>
      )}

      { !isMobile ? ( 
        isUserAuthenticated ? (
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
      )
      ):(<></>)
    }
    </div>
  );
};
