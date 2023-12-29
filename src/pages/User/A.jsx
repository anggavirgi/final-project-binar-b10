import React from "react";

export const A = () => {
  return (
    <div>
      <HeaderUser />
      <div className="bg-[#EBF3FC] min-h-screen">
        {/* Container */}
        <div className="mx-auto p-8">
          {/* Title and Search */}

          {/* Main content */}
          <div className="flex flex-wrap justify-between">
            {/* new filter */}
            <div className="h-fit desktop:1/4 desktopfull:w-1/5 px-7 py-5 bg-white rounded-xl shadow">
              <h3 className="flex items-center gap-2 text-lg font-bold pl-8 mb-2">
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
                  {dataLevels?.map((level) => (
                    <label className="flex gap-2 items-center" key={level}>
                      <input
                        type="checkbox"
                        id={`${level}`}
                        onChange={() => handleLevelChange(level)}
                        checked={selectedLevels.includes(level)}
                        className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-lg bg-[#E8F1FF] checked:bg-[#6148FF] checked:border-0"
                      />
                      <span className=""> {level} </span>
                    </label>
                  ))}
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

            {/* Courses section */}
            <div className="w-full md:w-3/4">
              <div className="flex flex-wrap justify-between">
                {/* Tabs */}
                {/* <div className="w-full mb-4">
                  <div className="flex space-x-2">
                    <button
                      key="all"
                      className="text-purple-500 bg-white px-4 py-2 rounded-lg w-[20%]"
                    >
                      All
                    </button>
                    <button
                      key="in_progress"
                      className="bg-[#6148FF] text-white px-4 py-2 rounded-lg shadow w-[50%]"
                    >
                      In Progress
                    </button>
                    <button
                      key="selesai"
                      className="text-purple-500 bg-white px-4 py-2 rounded-lg shadow w-[30%]"
                    >
                      Selesai
                    </button>
                  </div>
                </div> */}

                <div className="w-full mb-4">
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
                </div>
                {/* spinner when load data */}
                {isLoading && (
                  <div className="w-full flex items-center justify-center mt-4">
                    <div>
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
                {/* {render courses} */}
                {!isLoading &&
                  dataCourses?.map((course) => (
                    <div
                      key={course.id}
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
                              {parseFloat(course.avgRating).toFixed(1)}
                            </span>
                          </div>
                        </div>
                        <h1 className="font-bold text-lg">{course.title}</h1>
                        <p className="text-sm mb-2">{course.Mentor.name}</p>
                        <div className="text-sm text-gray-600 mb-4 flex justify-between">
                          <div className="flex items-center">
                            <RiShieldStarLine className="text-green-500 mr-2" />
                            <span className="text-[#6148FF] text-sm font-semibold">
                              {course.level}
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

        {/* <div className="relative flex desktop:gap-10 desktopfull:gap-14"> */}
        {/* FILTER */}

        {/* BODY */}
        {/* <div className="desktop:w-3/4 desktopfull:w-4/5">
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
            </div> */}
        {/* <div className="grid grid-cols-2 gap-5 gap-y-7">
              {dataCourses.map((value, index) => {
                return (
                  <div
                    className="rounded-3xl bg-white shadow-lg"
                    key={index}
                    // onClick={() => handleDetail(value.course_id)}
                  > */}
        {/* <img
                      src={img1}
                      alt="img1"
                      className="w-full h-[9rem] object-cover rounded-3xl"
                    /> */}
        {/* <div className="flex flex-col gap-1 px-3 pt-3 pb-4">
                      <div className="flex justify-between font-bold">
                        <div className="text-primary">
                          {value.Kategori.title}
                        </div>
                        <div className="flex items-center gap-1">
                          <FaStar className="fill-yellow-400" />
                          <span>4.7</span>
                        </div>
                      </div>
                      <div className="font-bold whitespace-nowrap overflow-hidden">
                        {value.title}
                      </div>
                      <div className="font-medium">by {value.Mentor.name}</div>
                      <div className="flex items-center gap-3 desktopfull:gap-6 font-medium my-1">
                        <div className="flex items-center gap-1">
                          <RiShieldStarLine className="text-[#73CA5C]" />
                          <span>{value.level}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <RiBook3Line className="text-[#73CA5C]" />
                          <span>10 Modul</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaClock className="stroke-[#73CA5C]" />
                          <span>120 Menit</span>
                        </div>
                      </div>
                      <button className="bg-[#489CFF] rounded-full p-1 px-6 font-medium text-white">
                        Rp {value.harga}
                      </button>
                    </div>
                  </div> */}
        {/* );
              })}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
