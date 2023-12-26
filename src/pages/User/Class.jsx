import React, { useEffect, useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import { BsList } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/SidebarUser";
import { FaStar, FaFilter } from "react-icons/fa";
import { RiShieldStarLine, RiBook3Line } from "react-icons/ri";
import { useCourse } from "../../services/user/GetCourse";
import { useCategory } from "../../services/user/GetCategory";
import { HeaderUser } from "../../components/Header/HeaderUser";
import { BiSearchAlt } from "react-icons/bi";
import img1 from "../../assets/img/img1.png";
import { LuClock } from "react-icons/lu";
import { CookieStorage, CookiesKeys } from "../../utils/cookies";

export const Class = () => {
  const navigate = useNavigate();
  // const { pathname } = useLocation();
  const token = CookieStorage.get(CookiesKeys.AuthToken);
  const isUserAuthenticated = !!token;
  // const isUserAuthenticated = true;
  const [searchQuery, setSearchQuery] = useState("");
  const [dataCourses, setDataCourses] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
  const [dataLevels, setDataLevels] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);

  const { data: coursesAll, isLoading } = useCourse(
    searchQuery,
    100,
    selectedCategories,
    selectedLevels
  );
  const { data: levelsAll } = useCourse("", 1000, [], []);
  const { data: categoryAll } = useCategory(10);

  const isMobile = window.innerWidth <= 768;
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (coursesAll?.data && coursesAll?.data?.course) {
      setDataCourses(coursesAll.data.course);
    }
    if (categoryAll?.data && categoryAll?.data?.category) {
      setDataCategories(categoryAll.data.category);
    }
    if (levelsAll?.data && levelsAll?.data?.course) {
      setDataLevels([
        ...new Set(levelsAll.data.course.map((course) => course.level)),
      ]);
    }
  }, [coursesAll, categoryAll, levelsAll]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(categoryId)) {
        return prevCategories.filter((id) => id !== categoryId);
      } else {
        return [...prevCategories, categoryId];
      }
    });
  };

  const handleLevelChange = (level) => {
    setSelectedLevels((prevLevels) => {
      if (prevLevels.includes(level)) {
        return prevLevels.filter((lv) => lv !== level);
      } else {
        return [...prevLevels, level];
      }
    });
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedLevels([]);
  };

  const handleToDetail = (id) => {
    navigate("/kelas/detail", {
      state: {
        courseId: id,
      },
    });
  };
  
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Close the sidebar when the window is resized
  useEffect(() => {
    const handleResize = () => {
      if (isMobile && isSidebarOpen) {
        closeSidebar();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, isSidebarOpen]);

  const [isFilterOpen, setFilterOpen] = useState(false);

  const openFilter = () => {
    setFilterOpen(true);
  };

  const closeFilter = () => {
    setFilterOpen(false);
  };

  return (
    <>
      <div className='bg-[#EBF3FC] min-h-screen'>
        {!isMobile ? (<HeaderUser/>) : (
              <div className={`flex justify-between items-center px-6 md:px-36 text-white ${isMobile ? 'py-2':'bg-primary py-5'}`}>
              <div className={`flex  ${isMobile ? 'flex-col w-full':'items-center gap-16 w-1/2'}`}>
                
                {!isMobile && (
                <div
                  className="font-bold text-center text-2xl cursor-pointer"
                  onClick={() => navigate("/home")}
                >LOGO
                </div>
                )}
                <div className="relative flex items-center w-full">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Cari Kelas.."
                    className="border-gray-300 rounded-xl text-sm md:text-base lg:text-lg xl:text-xl ps-4 md:ps-6 pe-2 md:pe-16 py-2 md:py-4 text-black w-full"
                  />
                  <button className="absolute p-2 rounded-xl bg-primary hover:bg-purple-800 right-1 md:right-6">
                    <BiSearchAlt className="w-4 h-4 md:w-6 md:h-6" />
                  </button>
                </div>
              </div>
              {isMobile <= 768 && (
                <div className="flex items-center">
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
        )}
        <div className='desktop:px-28 desktopfull:px-36 py-8 text-sm'>
          {/* Title and Search */}
          {!isMobile ? (
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-700">Kelas Berjalan</h2>
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="ps-6 pr-16 py-2 rounded-full focus:shadow focus:outline-none"
                placeholder="Cari Kelas..."
              />
              {/* Search icon with circular background */}
              <div className="absolute right-5 rounded-xl p-2 bg-[#6148FF] cursor-pointer">
                <BiSearchAlt className="text-white h-4 w-4" />
              </div>
            </div>
          </div>
          ) : (
            <div className="flex items-center justify-between px-4 mb-4">
              <div className="font-bold text-lg">Kelas Berjalan</div>
              <div className="font-bold text-primary" onClick={openFilter}>Filter</div>
            </div>
          )}

          <div className="w-full flex desktop:gap-10 desktopfull:gap-14">
            {/* FILTER */}
            {!isMobile && (
            <div className="h-fit desktop:1/4 desktopfull:w-1/5 px-7 py-5 bg-white rounded-xl shadow">
              <h3 className="flex items-center gap-2 text-lg font-bold mb-2">
                <FaFilter className="w-3 h-3" />
                <span>FILTER</span>
              </h3>
              <div className="flex flex-col gap-4 whitespace-nowrap overflow-x-hidden">
                <div className="space-y-3 px-1.5">
                  <h4 className="text-base font-bold text-primary -pt-3">
                    Jenis
                  </h4>
                  <label className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      id="some_id"
                      className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                    />
                    <span className="">Paling Baru</span>
                  </label>
                  <label className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      id="some_id"
                      className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                    />
                    <span className="">Paling Populer</span>
                  </label>
                  <label className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      id="some_id"
                      className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                    />
                    <span className="">Promo</span>
                  </label>
                </div>
                <div className="space-y-3 px-1.5">
                  <h4 className="text-base font-bold text-primary -pt-3">
                    Kategori
                  </h4>
                  {dataCategories.map((category) => {
                    return (
                      <div
                        className="flex gap-2 items-center"
                        key={category.kategori_id}
                      >
                        <input
                          type="checkbox"
                          id={`category_${category.kategori_id}`}
                          onChange={() =>
                            handleCategoryChange(category.kategori_id)
                          }
                          checked={selectedCategories.includes(
                            category.kategori_id
                          )}
                          className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                        />
                        <span className="">{category.title}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="space-y-3 px-1.5">
                  <h4 className="text-base font-bold text-primary -pt-3">
                    Level Kesulitan
                  </h4>
                  {dataLevels?.map((level) => {
                    return (
                      <div className="flex gap-2 items-center">
                        <input
                          type="checkbox"
                          id={level}
                          onChange={() => handleLevelChange(level)}
                          checked={selectedLevels.includes(level)}
                          className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                        />
                        <span className="">{level}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="w-full flex justify-center mt-2">
                  <button
                    className="font-bold text-red-500 hover:underline"
                    onClick={handleClearFilters}
                  >
                    Hapus Filter
                  </button>
                </div>
              </div>
            </div>
            )}
            {/* FILTER Mobile */}
            {isMobile && (
              <>
                <div
                  className="fixed inset-0 bg-black bg-opacity-40 z-50"
                  style={{ display: isFilterOpen ? "block" : "none" }}
                  onClick={closeFilter}
                ></div>
                <div
                  className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl transform ${
                    isFilterOpen ? "translate-y-0" : "translate-y-full"
                  } transition-transform ease-in-out duration-300 overflow-hidden z-50`}
                  style={{ maxHeight: "75vh" }}
                >
                  <div className="flex justify-between items-center px-5 py-3 border-b">
                    <FaFilter className="w-3 h-3" />
                    <span className="font-bold text-lg">Filter</span>
                    <button onClick={closeFilter}>
                      <span className="text-gray-500 text-xl">X</span>
                    </button>
                  </div>
                    <div className="gap-4 whitespace-nowrap overflow-y-auto px-4" style={{ maxHeight: "60vh" }}>
                      <div className="space-y-3 px-1.5 pt-4">
                        <h4 className="text-base font-bold text-primary -pt-3">
                          Jenis
                        </h4>
                        <label className="flex gap-2 items-center">
                          <input
                            type="checkbox"
                            id="some_id"
                            className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                          />
                          <span className="">Paling Baru</span>
                        </label>
                        <label className="flex gap-2 items-center">
                          <input
                            type="checkbox"
                            id="some_id"
                            className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                          />
                          <span className="">Paling Populer</span>
                        </label>
                        <label className="flex gap-2 items-center">
                          <input
                            type="checkbox"
                            id="some_id"
                            className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                          />
                          <span className="">Promo</span>
                        </label>
                      </div>
                      <div className="space-y-3 px-1.5 pt-4">
                        <h4 className="text-base font-bold text-primary -pt-3">
                          Kategori
                        </h4>
                        {dataCategories.map((category) => {
                          return (
                            <div
                              className="flex gap-2 items-center"
                              key={category.kategori_id}
                            >
                              <input
                                type="checkbox"
                                id={`category_${category.kategori_id}`}
                                onChange={() =>
                                  handleCategoryChange(category.kategori_id)
                                }
                                checked={selectedCategories.includes(
                                  category.kategori_id
                                )}
                                className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                              />
                              <span className="">{category.title}</span>
                            </div>
                          );
                        })}
                      </div>
                      <div className="space-y-3 px-1.5 pt-4">
                        <h4 className="text-base font-bold text-primary -pt-3">
                          Level Kesulitan
                        </h4>
                        {dataLevels?.map((level) => {
                          return (
                            <div className="flex gap-2 items-center">
                              <input
                                type="checkbox"
                                id={level}
                                onChange={() => handleLevelChange(level)}
                                checked={selectedLevels.includes(level)}
                                className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                              />
                              <span className="">{level}</span>
                            </div>
                          );
                        })}
                      </div>
                      <div className="w-full flex justify-center mt-2">
                        <button
                          className="font-bold text-red-500 hover:underline mb-5"
                          onClick={handleClearFilters}
                        >
                          Hapus Filter
                        </button>
                      </div>
                    </div>
                </div>
              </>
            )}
            {/* BODY */}
            <div className={`${isMobile ? 'w-full px-3':'desktop:w-3/4 desktopfull:w-4/5 '}`}>
              <div className="grid grid-cols-3 gap-4 mb-7 text-center">
                <div className="py-2 font-semibold text-gray-600 hover:text-white rounded-full bg-white hover:bg-primary cursor-pointer shadow">
                  All
                </div>
                <div className="py-2 font-semibold text-gray-600 hover:text-white rounded-full bg-white hover:bg-primary cursor-pointer shadow">
                  Kelas Premium
                </div>
                <div className="py-2 font-semibold text-gray-600 hover:text-white rounded-full bg-white hover:bg-primary cursor-pointer shadow">
                  Kelas Gratis
                </div>
              </div>
              {/* spinner when load data */}
              {isLoading && (
                <div className="w-full flex items-center justify-center mt-4">
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-7">
                {/* {render courses} */}
                {!isLoading &&
                  dataCourses?.map((course) => {
                    return (
                      <div
                        key={course.course_id}
                        className="rounded-3xl bg-white shadow-lg"
                        onClick={() => handleToDetail(course.course_id)}
                        onKeyDown={() => {}}
                      >
                        <img
                          src={img1}
                          alt="img1"
                          className="w-full h-[9rem] object-cover rounded-3xl"
                        />
                        <div className="flex flex-col gap-1 px-3 pt-3 pb-4">
                          <div className="flex justify-between font-bold">
                            <div className="text-primary">
                              {course.Kategori.title}
                            </div>
                            <div className="flex items-center gap-1">
                              <FaStar className="fill-yellow-400" />
                              <span>
                                {parseFloat(course.avgRating).toFixed(1)}
                              </span>
                            </div>
                          </div>
                          <div className="font-bold whitespace-nowrap overflow-hidden">
                            {course.title}
                          </div>
                          <div className="font-medium">
                            by {course.Mentor.name}
                          </div>
                          <div className="flex items-center gap-3 desktopfull:gap-6 font-medium my-1">
                            <div className="flex items-center gap-1">
                              <RiShieldStarLine className="text-[#73CA5C]" />
                              <span>{course.level}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <RiBook3Line className="text-[#73CA5C]" />
                              <span>10 Modul</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <LuClock className="stroke-[#73CA5C]" />
                              <span>120 Menit</span>
                            </div>
                          </div>
                          <button className="bg-[#489CFF] rounded-full p-1 px-6 font-medium text-white">
                            Rp {course.harga}
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
