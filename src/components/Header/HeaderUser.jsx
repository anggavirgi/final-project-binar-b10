import React, { useEffect, useState } from "react";
import { FiChevronDown, FiLogIn } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { LuBell } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CookieStorage, CookiesKeys } from "../../utils/cookies";
import { useDispatch, useSelector } from "react-redux";
import { getDataMe } from "../../redux/actions/meAction";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

export const HeaderUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [getHandleDropwdown, setHandleDropdown] = useState(false);
  const [getBurger, setBurger] = useState(false);

  const searchValue = localStorage.getItem("searchValues")
    ? localStorage.getItem("searchValues")
    : "";

  const [getSearch, setSearch] = useState(searchValue);

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      localStorage.setItem("searchValues", getSearch);
      navigate("/kelas", {
        state: {
          search: getSearch,
        },
      });
    }
  };

  useEffect(() => {
    if (location.pathname !== "/kelas" || location.state === null) {
      setSearch("");
      localStorage.removeItem("searchValues");
    }
  }, [location.pathname, location.state, searchValue]);

  const token = CookieStorage.get(CookiesKeys.AuthToken);

  useEffect(() => {
    if (token) {
      dispatch(getDataMe());
    }
  }, [token]);

  const { name, email, url } = useSelector((state) => state.user);

  const handleLogout = () => {
    CookieStorage.remove(CookiesKeys.AuthToken);
    window.location.href = "/home";
  };

  return (
    <div className="mobile:relative desktop:static desktopfull:static mobile:p-0 desktop:px-36 desktopfull:px-36 desktop:py-3 desktopfull:py-3 bg-white">
      <div
        onClick={() => setBurger(false)}
        className={`${
          getBurger ? "mobile:block" : "mobile:hidden"
        } mobile:fixed z-20 desktop:hidden desktopfull:hidden bg-black/20 h-[100dvh] w-[100dvh]`}
      ></div>
      <div className="mobile:flex items-center justify-center relative desktop:hidden desktopfull:hidden py-3">
        <div
          className="font-bold text-center text-2xl cursor-pointer text-primary"
          onClick={() => navigate("/home")}
        >
          LearnWise
        </div>
        <RxHamburgerMenu
          onClick={() => setBurger(true)}
          className="absolute z-50 right-4 cursor-pointer"
        />
      </div>
      <div
        className={`mobile:fixed desktop:static desktopfull:static mobile:z-20 mobile:top-0 ${
          getBurger ? "mobile:flex" : "mobile:hidden"
        } desktop:flex desktopfull:flex mobile:flex-col desktop:flex-row desktopfull:flex-row desktop:justify-between desktopfull:justify-between items-center mobile:bg-white desktop:bg-transparent desktopfull:bg-transparent mobile:py-5 desktop:py-0 desktopfull:py-0 mobile:w-3/4 desktop:w-full desktopfull:w-ful mobile:h-full desktop:h-auto desktopfull:h-auto`}
      >
        <div className="flex mobile:flex-col desktop:flex-row desktopfull:flex-row items-center mobile:gap-5 desktop:gap-16 desktopfull:gap-16 mobile:4/5 desktop:w-1/2 desktopfull:1/2">
          <div className="relative w-full">
            <div
              className="font-bold text-center text-2xl cursor-pointer text-primary"
              onClick={() => navigate("/home")}
            >
              LearnWise
            </div>
            <RxCross2
              className="w-5 h-5 absolute mobile:block desktop:hidden desktopfull:hidden right-0 top-0 translate-y-1/2 cursor-pointer"
              onClick={() => setBurger(false)}
            />
          </div>
          <div className="relative flex items-center w-full">
            <input
              type="text"
              placeholder="Cari kursus..."
              className="border-grey-500 rounded-full text-sm ps-6 pe-16 py-2.5 text-black mobile:w-full desktop:w-[400px] desktopfull:w-[400px]"
              value={getSearch}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearch}
            />
            <button
              onClick={handleSearch}
              className="absolute right-4 text-primary"
            >
              <BiSearchAlt className="w-5 h-5" />
            </button>
          </div>
        </div>

        {token ? (
          <div className="relative flex items-center mobile:flex-col desktop:flex-row desktopfull:flex-row mobile:mt-5 desktop:mt-0 desktopfull:mt-0 desktop:gap-5 desktopfull:gap-5 mobile:gap-0 mobile:w-full desktop:w-auto desktopfull:w-auto mobile:text-sm desktop:text-base desktopfull:text-base">
            <div className="mobile:flex mobile:flex-col mobile:gap-1.5 border-b border-gray-300 w-full desktop:hidden desktopfull:hidden mobile:pb-3 text-center desktop:pb-0 desktopfull:pb-0 ">
              <img
                src={url}
                alt="profilepicture"
                className="w-8 h-8 object-cover rounded-full mx-auto text-center"
              />
              <div>{name}</div>
              <div>{email}</div>
            </div>
            <Link
              className="desktop:px-5 desktopfull:px-5 desktop:py-2 desktopfull:py-2 cursor-pointer hover:bg-primary hover:text-white hover:rounded-lg mobile:border-b desktop:border-0 desktopfull:border-0 mobile:border-gray-300 mobile:w-full desktop:w-auto desktopfull:w-auto mobile:py-3 mobile:text-center text-semibold"
              to={"/kelas"}
            >
              Kelas
            </Link>
            <Link
              className="desktop:px-5 desktopfull:px-5 desktop:py-2 desktopfull:py-2 cursor-pointer hover:bg-primary hover:text-white hover:rounded-lg mobile:border-b desktop:border-0 desktopfull:border-0 mobile:border-gray-300 mobile:w-full desktop:w-auto desktopfull:w-auto mobile:py-3 mobile:text-center text-semibold"
              to={"/notifikasi"}
            >
              <LuBell className="mobile:hidden desktop:block desktopfull:block w-6 h-6 stroke-1" />
              <div className="mobile:block desktop:hidden desktopfull:hidden">
                Notifikasi
              </div>
            </Link>
            <div
              className="mobile:hidden desktop:flex desktopfull:flex items-center gap-1 px-5 py-1 cursor-pointer hover:bg-primary hover:text-white hover:rounded-lg"
              onClick={() =>
                getHandleDropwdown
                  ? setHandleDropdown(false)
                  : setHandleDropdown(true)
              }
            >
              <div>
                <img
                  src={url}
                  alt="profilepicture"
                  className="w-8 h-8 object-cover rounded-full"
                />
              </div>
              <div className="ms-2">{name}</div>
              <FiChevronDown className="w-5 h-5 stroke-1 mt-1" />
            </div>
            <div
              className={`${
                getHandleDropwdown
                  ? "desktop:flex desktop:flex-col desktopfull:flex desktopfull:flex-col"
                  : "desktop:hidden desktopfull:hidden"
              } mobile:hidden absolute top-10 right-0 z-10 text-sm rounded-lg bg-white border border-grey-100`}
            >
              <div className="px-4 py-3 text-xs text-slate-400 border-b border-slate-300">
                {email}
              </div>
              <Link
                className="ps-4 pe-16 py-3 hover:bg-gray-100 cursor-pointer"
                to={"/profil"}
              >
                Edit Profil
              </Link>
              <Link
                className="ps-4 pe-16 py-3 hover:bg-gray-100 cursor-pointer"
                to={"/kelassaya"}
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
            <div
              className={`mobile:flex mobile:flex-col desktop:hidden desktopfull:hidden mobile:static desktop:absolute desktopfull:absolute top-10 right-0 z-10 text-sm rounded-lg bg-white mobile:border desktop:border desktopfull:border desktop:border-grey-100 desktopfull:border-grey-100 mobile:w-full desktop:w-auto desktopfull:w-auto mobile:mt-5 desktop:mt-0 desktopfull:mt-0`}
            >
              <div className="mobile:hidden desktop:block desktopfull:block px-4 py-3 text-xs text-slate-400 border-b border-slate-300">
                {email}
              </div>
              <Link
                className="mobile:ps-0 desktop:ps-4 desktopfull:ps-4 mobile:pe-0 desktop:pe-16 desktopfull:pe-16 py-3 mobile:hover:bg-primary mobile:hover:text-white hover:bg-gray-100 cursor-pointer mobile:w-full desktop:w-auto desktopfull:w-auto mobile:text-center mobile:border-b mobile:border-gray-300"
                to={"/profil"}
              >
                Edit Profil
              </Link>
              <Link
                className="mobile:ps-0 desktop:ps-4 desktopfull:ps-4 mobile:pe-0 desktop:pe-16 desktopfull:pe-16 py-3 mobile:hover:bg-primary mobile:hover:text-white hover:bg-gray-100 cursor-pointer mobile:w-full desktop:w-auto desktopfull:w-auto mobile:text-center mobile:border-b mobile:border-gray-300"
                to={"/kelassaya"}
              >
                Kelas Saya
              </Link>
              <Link
                className="mobile:ps-0 desktop:ps-4 desktopfull:ps-4 mobile:pe-0 desktop:pe-16 desktopfull:pe-16 py-3 mobile:hover:bg-primary mobile:hover:text-white hover:bg-gray-100 cursor-pointer mobile:w-full desktop:w-auto desktopfull:w-auto mobile:text-center"
                onClick={handleLogout}
              >
                Keluar
              </Link>
            </div>
          </div>
        ) : (
          <div className="mobile:w-full desktop:w-auto desktopfull:w-auto">
            <Link
              className="mobile:block desktop:hidden desktopfull:hidden mt-3 w-full px-4 py-1 cursor-pointer hover:bg-primary hover:text-white hover:rounded-lg mobile:border-b desktop:border-0 desktopfull:border-0 mobile:border-gray-300 mobile:w-full desktop:w-auto desktopfull:w-auto mobile:py-3 mobile:text-center"
              to={"/kelas"}
            >
              Kelas
            </Link>
            <Link
              className="flex items-center mobile:justify-center desktop:justify-normal desktopfull:justify-normal gap-2 px-4 mobile:py-3 desktop:py-1 desktopfull:py-1 cursor-pointer hover:bg-primary hover:text-white hover:rounded"
              to={"/login"}
            >
              <FiLogIn className="stroke-1" />
              <span>Masuk</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
