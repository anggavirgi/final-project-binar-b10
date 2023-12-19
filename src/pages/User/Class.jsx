import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaStar, FaRegClock, FaBookOpen } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import { HeaderUser } from "../../components/Header/HeaderUser";
import { useNavigate } from "react-router-dom";
import { getCourse } from "../../redux/action/courseee";
import { useGetCourses } from "../../services/get-data-course-dua";
import { useGetCategories } from "../../services/get-data-categories";

export const Class = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [dataCourses, setDataCourses] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
  const [dataLevels, setDataLevels] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);

  const { data: coursesAll, isLoading } = useGetCourses(searchQuery, 100, selectedCategories, selectedLevels);
  const { data: levelsAll } =  useGetCourses("", 1000, [], []);
  const { data: categoryAll } = useGetCategories(10);
  
  useEffect(() => {
    if(coursesAll?.data && coursesAll?.data?.course) {
      setDataCourses(coursesAll.data.course);
    }
    if(categoryAll?.data && categoryAll?.data?.category) {
      setDataCategories(categoryAll.data.category);
    }
    if(levelsAll?.data && levelsAll?.data?.course) {
      setDataLevels([...new Set(levelsAll.data.course.map(course => course.level))]);
    }
  }, [coursesAll, categoryAll, levelsAll]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }

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

  return (
    <div>
      <HeaderUser />
      <div className="bg-[#EBF3FC] min-h-screen">
        {/* Container */}
        <div className="mx-auto p-8">
          {/* Title and Search */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-4xl font-bold text-gray-700">Kelas Berjalan</h2>
            <div className="relative">
              <input
                type="text"
                value={ searchQuery }
                onChange={ handleSearchChange }
                className="h-10 pl-10 pr-5 rounded-lg z-0 focus:shadow focus:outline-none"
                placeholder="Cari Kelas..."
              />
              <div className="absolute top-0 right-4 h-full flex items-center mr-2">
                {/* Search icon with circular background */}
                <div className="rounded-full border-2 border-gray-300 p-2 bg-[#6148FF]">
                  <FaSearch className="text-white h-4 w-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex flex-wrap justify-between">
            {/* Filter section */}
            <div className="w-full md:w-1/4 sm:w-1/2 lg:w-1/5 mb-4 md:mb-0">
              <div className="p-6 pl-8 bg-white rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">Filter</h3>
                <div className="space-y-4">
                  <label className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      id="some_id"
                      className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                    />
                    <span className="">Paling Baru</span>
                  </label>
                  <label className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      id="some_id"
                      className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                    />
                    <span className="">Paling Populer</span>
                  </label>
                  <label className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      id="some_id"
                      className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                    />
                    <span className="">Promo</span>
                  </label>
                  <h2 className="text-xl font-bold mt-6 mb-2">Kategori</h2>
                  { dataCategories?.map((category) => (
                    <label 
                      className="flex gap-2 items-center"
                      key={ category.kategori_id }>
                      <input
                        type="checkbox"
                        id={`category_${category.kategori_id}`}
                        onChange={() => handleCategoryChange(category.kategori_id)}
                        checked={selectedCategories.includes(category.kategori_id)}
                        className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                      />
                      <span className=""> {category.title} </span>
                    </label>
                  )) }
                  <h2 className="text-xl font-bold mt-6 mb-2">
                    Level Kesulitan
                  </h2>
                  { dataLevels?.map(level => (
                    <label 
                      className="flex gap-2 items-center"
                      key={ level }>
                      <input
                        type="checkbox"
                        id={`${level}`}
                        onChange={() => handleLevelChange(level)}
                        checked={selectedLevels.includes(level)}
                        className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                      />
                      <span className=""> {level} </span>
                    </label>
                  )) }
                  
                  <div className="w-full flex justify-center">
                    <button 
                      className="mt-4 font-bold text-lg text-red-500 hover:underline"
                      onClick={handleClearFilters}>
                      Hapus Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Courses section */}
            <div className="w-full md:w-3/4">
              <div className="flex flex-wrap justify-between">
                {/* Tabs */}
                <div className="w-full mb-4">
                  <div className="flex space-x-2">
                    <button key="all" className="text-purple-500 bg-white px-4 py-2 rounded-lg w-[20%]">
                      All
                    </button>
                    <button key="in_progress" className="bg-[#6148FF] text-white px-4 py-2 rounded-lg shadow w-[50%]">
                      In Progress
                    </button>
                    <button key="selesai" className="text-purple-500 bg-white px-4 py-2 rounded-lg shadow w-[30%]">
                      Selesai
                    </button>
                  </div>
                </div>
                {/* show spinner when load data */}
                {isLoading && 
                  <div className="w-full flex items-center justify-center mt-4">
                    <div>
                      <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                </div>
                }
                {/* {render courses} */}
                { !isLoading && dataCourses?.map((course) => (
                  <div 
                    key={ course.id }
                    className="w-full shadow-xl rounded-3xl sm:w-full md:w-[47%] lg:w-[47%] xl:w-[48%] mb-4 overflow-hidden cursor-pointer"
                    onClick={() => navigate("/detail")}
                    onKeyDown={() => {}}
                  >
                  <div className="overflow-hidden">
                    <img
                      className="w-full h-40 object-cover"
                      src="https://via.placeholder.com/150"
                      alt="Course thumbnail"
                    />
                  </div>
                  <div className="px-4 py-5 bg-white rounded-b-3xl shadow-lg">
                    <div className="flex justify-between items-center pt-2">
                      <h4 className="text-lg font-bold text-[#6148FF]">
                        {course.Kategori.title}
                      </h4>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-500 mr-1" />
                        <span className="text-purple-600 font-semibold">
                          { parseFloat(course.avgRating).toFixed(1) }
                        </span>
                      </div>
                    </div>
                    <h1 className="font-bold text-lg">{ course.title }</h1>
                    <p className="text-sm mb-2">{ course.Mentor.name }</p>
                    <div className="text-sm text-gray-600 mb-4 flex justify-between">
                      <div className="flex items-center">
                        <RiShieldStarLine className="text-green-500 mr-2" />
                        <span className="text-[#6148FF] text-sm font-semibold">
                          { course.level }
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FaBookOpen className="text-green-500 mr-2" />
                        <span className="text-gray-700 text-sm font-semibold">
                          10 Modul
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FaRegClock className="text-green-500 mr-2" />
                        <span className="text-gray-700 text-sm font-semibold">
                          120 Menit
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaRegCheckCircle className="text-green-500 mr-2" />
                      <div className="w-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
                        <div
                          className="bg-[#6148FF] h-7 flex items-center rounded-full"
                          style={{ width: "70%" }}
                        >
                          <span className="ml-2 text-white font-semibold">
                            70% complete
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
