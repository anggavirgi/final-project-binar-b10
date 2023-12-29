import React, { useEffect, useRef, useState } from "react";
import { HeaderUser } from "../../components/Header/HeaderUser";
import banner from "../../assets/img/banner1.jpg";
import img1 from "../../assets/img/banner.png";
import { FaStar } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { RiBook3Line } from "react-icons/ri";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useCourse } from "../../services/user/GetCourse";
import { useCategory } from "../../services/user/GetCategory";
import { GoDotFill } from "react-icons/go";
import { BsDot } from "react-icons/bs";
import { MdOutlineSell } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useSalary } from "../../services/user/GetSalary";

export const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dataCourses, setDataCourses] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
  const [dataLevels, setDataLevels] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllCourse, setShowAllCourse] = useState(false);
  const [slideStart, setSlideStart] = useState(true);
  const [slideEnd, setSlideEnd] = useState(false);
  const divRef = useRef(null);

  // const { data: coursesAll, isLoading } = useCourse(
  //   searchQuery,
  //   100,
  //   selectedCategories,
  //   selectedLevels
  // );
  // const { data: levelsAll } = useCourse("", 1000, [], []);
  // const { data: categoryAll } = useCategory(10);

  // useEffect(() => {
  //   if (coursesAll?.data && coursesAll?.data?.course) {
  //     setDataCourses(coursesAll.data.course);
  //   }
  //   if (categoryAll?.data && categoryAll?.data?.category) {
  //     setDataCategories(categoryAll.data.category);
  //   }
  //   if (levelsAll?.data && levelsAll?.data?.course) {
  //     setDataLevels([
  //       ...new Set(levelsAll.data.course.map((course) => course.level)),
  //     ]);
  //   }
  // }, [coursesAll, categoryAll, levelsAll]);

  // const handleCategoryChange = (categoryId) => {
  //   setSelectedCategories((prevCategories) => {
  //     if (prevCategories.includes(categoryId)) {
  //       return prevCategories.filter((id) => id !== categoryId);
  //     } else {
  //       return [...prevCategories, categoryId];
  //     }
  //   });
  // };

  // GET COURSE by Rating
  const { data: getDataCourseByRating } = useCourse(
    "",
    4,
    [],
    [],
    "rating",
    "desc"
  );

  const dataCourseByRating = getDataCourseByRating?.data.course || [];

  // GET COURSE by ID Course
  const [getIdCourse, setIdCourse] = useState(14); // Dipake buat get salary juga
  const { data: getDataCourseById } = useCourse(
    "",
    4,
    [getIdCourse],
    [],
    "rating",
    "desc"
  );

  const dataCoursebyIdCourse = getDataCourseById?.data.course || [];

  // GET SALARY

  const { data: getDataSalary } = useSalary({
    course_id: getIdCourse,
  });

  // const dataSalary = getDataSalary?.data.salary || [];

  console.log(getDataSalary);

  // GET RATING

  return (
    <div className="bg-white">
      <HeaderUser setSearchQuery={setSearchQuery} />
      <div className="flex">
        <div className="relative w-full h-[90dvh]">
          <img
            src={banner}
            alt="banner"
            className="w-full h-[90dvh] object-cover"
          />
          <div className="absolute top-0 w-full h-[90dvh] bg-black/75">
            <div className="absolute right-0 flex justify-center items-center w-1/2 h-[90dvh] text-white">
              <div className="space-y-5 pe-10">
                <div className="flex flex-col gap-1.5 text-5xl tracking-wider font-semibold">
                  <div>Unlock your potential</div>
                  <div className="text-yellow-400">anytime, anywhere</div>
                </div>
                <div className="text-lg">
                  Mulai atau tingkatkan kemampuanmu dalam dunia IT dan
                  mendapatkan setifikasi profesional.
                </div>
                <button className="px-9 py-3.5 bg-primary border-2 border-primary rounded-xl text-lg font-medium hover:border-2 hover:border-primary hover:bg-transparent">
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-16 pt-8 pb-4">
        <div className="text-2xl font-bold text-primary mb-4">
          Kelas Unggulan
        </div>
        <div className="grid grid-cols-4 gap-5 text-sm">
          {dataCourseByRating.map((value, index) => {
            return (
              <div
                className="rounded-3xl shadow-lg hover:shadow-2xl hover:border hover:border-gray-300 hover:scale-105 cursor-pointer"
                key={index}
              >
                <img
                  src={img1}
                  alt=""
                  className="w-full h-[9rem] object-cover rounded-t-3xl"
                />
                <div className="px-3.5 pt-2 pb-5">
                  <div className="text-primary">{value.Kategori.title}</div>
                  <div className="font-bold whitespace-nowrap overflow-hidden text-base">
                    {value.title}
                  </div>
                  <div className="font-medium text-xs">
                    by <span>{value.Mentor.name}</span>
                  </div>
                  <div
                    className={`flex gap-1 items-center text-base font-semibold ${
                      value.harga === 0 ? "text-blue-700" : "text-green-500 "
                    }  mt-2.5 mb-1.5`}
                  >
                    <MdOutlineSell />
                    <span>
                      {value.harga === 0 ? "Gratis" : `Rp ${value.harga}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-0.5 text-xs">
                    <div>{value.level}</div>
                    <BsDot />
                    <div>{value.module} Modul</div>
                    <BsDot />
                    <div>Sertifikasi Profesional</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-16 pt-6 pb-16 text-sm">
        <div className="flex justify-between items-center gap-10 mb-4">
          <div className="text-2xl font-bold text-primary">
            Mulai karir baru anda
          </div>
          <Link
            to={"/kelas"}
            className="flex items-center gap-2 hover:text-gray-400"
          >
            <div>Lihat semua kategori</div>
            <HiArrowLongRight />
          </Link>
        </div>
        <table className="mb-4 w-full text-center">
          <tr>
            <td
              className="pb-2 px-5 text-base font-medium border-b-2 border-gray-300 hover:border-primary cursor-pointer"
              value="14"
              onClick={() => setIdCourse(14)}
            >
              Front-End Developer
            </td>
            <td
              className="pb-2 px-5 text-base font-medium border-b-2 border-gray-300 hover:border-primary cursor-pointer"
              value="15"
              onClick={() => setIdCourse(15)}
            >
              Back-End Developer
            </td>
            <td
              className="pb-2 px-5 text-base font-medium border-b-2 border-gray-300 hover:border-primary cursor-pointer"
              value="1"
              onClick={() => setIdCourse(1)}
            >
              UI / UX Designer
            </td>
            <td
              className="pb-2 px-5 text-base font-medium border-b-2 border-gray-300 hover:border-primary cursor-pointer"
              value="16"
              onClick={() => setIdCourse(16)}
            >
              Machine Learning
            </td>
            <td
              className="pb-2 px-5 text-base font-medium border-b-2 border-gray-300 hover:border-primary cursor-pointer"
              value="4"
              onClick={() => setIdCourse(4)}
            >
              Android Developer
            </td>
            <td
              className="pb-2 px-5 text-base font-medium border-b-2 border-gray-300 hover:border-primary cursor-pointer"
              value="5"
              onClick={() => setIdCourse(5)}
            >
              iOS Developer
            </td>
          </tr>
        </table>
        <div className="p-8 border-2 border-gray-300 rounded-lg">
          <div className="font-semibold text-2xl mb-1.5">Web Developer</div>
          <div className="text-gray-800 mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, eum?
          </div>
          <div className="font-semibold text-base mb-2">Rata - rata gaji</div>
          <div>
            <div className="flex items-center gap-4 mb-2">
              <div className="w-1/3 ps-5 py-2 rounded text-white bg-yellow-400">
                Di Indonesia
              </div>
              <div>Rp.96.000.000 / thn</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4/5 ps-5 py-2 rounded text-white bg-primary">
                Di Luar Negeri
              </div>
              <div>Rp.900.000.000 / thn</div>
            </div>
          </div>
          <hr className="my-7" />
          <div className="grid grid-cols-4 gap-5">
            {dataCoursebyIdCourse.map((value, index) => {
              return (
                <div
                  className="rounded-3xl shadow-lg hover:shadow-2xl hover:border hover:border-gray-300 hover:scale-105 cursor-pointer"
                  key={index}
                >
                  <img
                    src={img1}
                    alt=""
                    className="w-full h-[9rem] object-cover rounded-t-3xl"
                  />
                  <div className="px-3.5 pt-2 pb-5">
                    <div className="text-primary">{value.Kategori.title}</div>
                    <div className="font-bold whitespace-nowrap overflow-hidden text-base">
                      {value.title}
                    </div>
                    <div className="font-medium text-xs">
                      by <span>{value.Mentor.name}</span>
                    </div>
                    <div
                      className={`flex gap-1 items-center text-base font-semibold ${
                        value.harga === 0 ? "text-blue-700" : "text-green-500 "
                      }  mt-2.5 mb-1.5`}
                    >
                      <MdOutlineSell />
                      <span>
                        {value.harga === 0 ? "Gratis" : `Rp ${value.harga}`}
                      </span>
                    </div>
                    <div className="flex items-center text-xs">
                      <div>{value.level}</div>
                      <BsDot />
                      <div>{value.module} Modul</div>
                      <BsDot />
                      <div>Sertifikasi Profesional</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-16 py-8 text-sm text-white text-center bg-blue-900">
        <div className="text-lg text-yellow-300 tracking-wider font-medium mb-3">
          Trusted by 500k+ Students
        </div>
        <div className="text-2xl font-medium tracking-wide mb-3">
          Gabung komunitas LearnWise Sekarang !
        </div>
        <div className="text-lg font-medium text-center px-64 text-gray-300 mb-10">
          LearnWise telah dipercaya dan mendapat review baik dari alumni
          LearnWise dari seluruh Indonesia
        </div>
        <div className="carousel rounded-box w-3/4">
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              alt="Burger"
            />
          </div>
        </div>
      </div>

      {/* <div className="py-6 px-36">
        <div className="flex items-center justify-between px-4">
          <div className="font-bold text-xl">Kategori Belajar</div>
          <button
            className="font-bold text-primary"
            onClick={() => setShowAllCategories(!showAllCategories)}
          >
            {showAllCategories ? "Tampilkan Lebih Sedikit" : "Lihat Semua"}
          </button>
        </div>
        <div className="grid grid-cols-6 gap-6 mt-4 text-sm desktopfull:text-base">
          {dataCategories
            ?.slice(0, showAllCategories ? dataCategories.length : 6)
            .map((category, index) => (
              <div key={index} className="flex flex-col items-center gap-1">
                <img
                  src={category.url_img_preview || img1}
                  alt={category.title}
                  className="w-40 h-40 object-cover rounded-3xl"
                />
                <div className="font-bold">{category.title}</div>
              </div>
            ))}
        </div>
      </div>
      <div className="py-6 px-36">
        <div className="flex items-center justify-between px-4">
          <div className="font-bold text-xl">Kursus Populer</div>
          <button
            className="font-bold text-primary"
            onClick={() => setShowAllCourse(!showAllCourse)}
          >
            {showAllCourse ? "Tampilkan Lebih Sedikit" : "Lihat Semua"}
          </button>
        </div>

        <div className="relative flex items-center mt-4">
          <div
            className={`absolute ${
              slideStart ? "hidden" : "block"
            } w-7 left-1 h-full flex items-center justify-center text-primary bg-white/95 rounded-full shadow-xl hover:bg-primary hover:text-white cursor-pointer`}
          >
            <RiArrowDropLeftLine
              onClick={slideLeft}
              className="w-5 h-5 stroke-1"
            />
          </div>
          <div
            className={`absolute ${
              slideEnd ? "hidden" : "block"
            } w-7 right-0 h-full flex items-center justify-center text-primary bg-white/95 rounded-full shadow-xl hover:bg-primary hover:text-white cursor-pointer`}
          >
            <RiArrowDropRightLine
              onClick={slideRight}
              className="w-5 h-5 stroke-1"
            />
          </div>
          <div
            ref={divRef}
            className="flex justify-between gap-1 px-1 text-black font-bold whitespace-nowrap overflow-x-hidden scroll-smooth rounded-full"
          >
            {dataCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-[#EBF3FC] text-center px-3.5 py-1 rounded-full w-fit cursor-pointer hover:bg-primary hover:text-white ${
                  selectedCategories.includes(category.kategori_id)
                    ? "text-white bg-primary"
                    : "text-black"
                }`}
                onClick={() => handleCategoryChange(category.kategori_id)}
              >
                {category.title}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-4 text-sm desktopfull:text-base">
          {dataCourses
            .slice(0, showAllCourse ? dataCourses.length : 3)
            .map((course, index) => (
              <div key={index} className="rounded-3xl shadow-lg">
                <img
                  src={course.url_img_preview || img1}
                  alt={course.title}
                  className="w-full h-[9rem] object-cover rounded-3xl"
                />
                <div className="px-3 pt-1.5 pb-3">
                  <div className="flex justify-between font-bold">
                    <div className="text-primary">{course.Kategori.title}</div>
                    <div className="flex items-center gap-1">
                      <FaStar className="fill-yellow-400" />
                      <span>
                        {course.avgRating !== 0
                          ? Math.floor(course.avgRating * 10) / 10
                          : "-"}
                      </span>
                    </div>
                  </div>
                  <div className="font-bold whitespace-nowrap overflow-hidden">
                    {course.title}
                  </div>
                  <div className="font-medium">{course.Mentor.name}</div>
                  <div className="flex items-center gap-3 desktopfull:gap-6 my-1 font-medium">
                    <div className="flex items-center gap-1">
                      <RiShieldStarLine className="text-[#73CA5C]" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <RiBook3Line className="text-[#73CA5C]" />
                      <span>{course.modul ? course.modul : "belum ada"}</span>
                    </div>
                  </div>
                  <button className="bg-[#489CFF] rounded-full p-1 px-6 font-medium text-white">
                    {course.harga !== 0 ? `Rp ${course.harga}` : "Gratis"}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div> */}
    </div>
  );
};
