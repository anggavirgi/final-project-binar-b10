import React, { useEffect, useState } from "react";
import { FaTelegramPlane, FaStar, FaRegClock, FaBookOpen, FaArrowLeft } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { Modal } from "flowbite-react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { GiPadlock } from "react-icons/gi";
import Onboarding from "../../assets/img/onboarding.png";
import { LayoutUser } from "../../Layout/LayoutUser";
import { useCourseDetail } from "../../services/user/GetCourseDetail";
import { usePostPayment } from "../../services/user/PostPayment";
import { useSelector } from "react-redux";
import { usePutVideo } from "../../services/user/PutVideo";
import { useGetProgress } from "../../services/user/GetProgressCourses";
import { useGetRating } from "../../services/user/GetRating";
import { usePostRating } from "../../services/user/PostRating";

export const Detail = () => {
  const [activeVideoUrl, setActiveVideoUrl] = useState("");
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [completedChapters, setCompletedChapters] = useState([]);
  const [PageNow, setPageNow] = useState(1);
  const [SelctedScore, setSelctedScore] = useState("");
  const [selectedScore, setSelectedScore] = useState(0);
  const [skor, setskor] = useState("");
  const [comment, setcomment] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  const navigate = useNavigate();
  const { state } = useLocation();

  const userData = useSelector((state) => state.user);
  console.log(userData, "user dari reduxxxxx");

  const { mutate: putVideo } = usePutVideo();

  // FETCH DETAIL
  const {
    data: getCourseDetail,
    isSuccess: detailSuccess,
    mutate: refetchCourseDetail,
  } = useCourseDetail({
    course_id: state.courseId,
    account_id: userData.id_user,
  });

  // POST PAYMENT
  const { mutate: getPostPayment, isSuccess: postPaymentSuccess } = usePostPayment();

  // GET PROGRESS COURSE USER
  const { data: progressCourse } = useGetProgress();

  const progress = progressCourse?.data?.data?.result;
  console.log(progress, "progressnyaa");

  // mencari progress dari courseid
  const progressForCurrentCourse = progress?.find((progress) => progress.course_id === state.courseId);
  const completionPercentage = progressForCurrentCourse ? progressForCurrentCourse.percentage : 0;

  //fetch rating
  const { data: ratingCourse } = useGetRating({}, state.courseId, SelctedScore, 10, PageNow);
  console.log(ratingCourse, "rating courseeee");

  //POST RATING
  const { mutate: getPostRating } = usePostRating();

  const dataCourseDetail = getCourseDetail?.data || [];
  console.log(dataCourseDetail, "detailcourse");

  const handleCheckout = () => {
    getPostPayment({
      course_id: dataCourseDetail.course_id,
      metode_pembayaran: "BNI",
    });
  };
  if (postPaymentSuccess) {
    navigate("/kelas/payment", {
      state: {
        courseId: dataCourseDetail.course_id,
      },
    });
  }

  const handleJoinTelegram = () => {
    // Membuka link Telegram pada tab baru
    const telegramUrl = dataCourseDetail?.course.url_gc_tele;
    if (telegramUrl) {
      window.open(telegramUrl, "_blank");
    }
  };

  const handleVideoClick = (video) => {
    if (video.is_preview === false && !dataCourseDetail.sudahBeli) {
      alert("Anda belum membeli kelas ini.");
      return;
    }

    const videoId = video.url_video.split("/").pop();
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    setActiveVideoUrl(embedUrl);
  };

  useEffect(() => {
    if (detailSuccess && getCourseDetail?.data?.course?.Chapter?.length > 0) {
      const firstChapter = getCourseDetail?.data?.course?.Chapter[0];
      if (firstChapter?.Video?.length > 0) {
        const firstVideo = firstChapter.Video[0];
        const firstVideoId = firstVideo.url_video.split("/").pop();
        const firstVideoEmbedUrl = `https://www.youtube.com/embed/${firstVideoId}`;
        setActiveVideoUrl(firstVideoEmbedUrl);
      }
    }
  }, [detailSuccess, getCourseDetail?.data?.Chapter]);

  // useEffect(() => {
  //   refetchCourseDetail();
  // }, []);

  const isVideoDone = (videoId) => {
    const account_id = userData.id_user;
    return dataCourseDetail?.progress?.some((p) => p.video_id === videoId && p.account_id === account_id && p.is_done);
  };

  const handleSelectVideo = (selectedVideo) => {
    const selectedVideoId = selectedVideo.video_id; // Mendapatkan ID dari video yang diklik
    let selectedChapterIndex = -1;
    let selectedVideoIndex = -1;

    // Loop melalui semua bab dan video untuk mencari video yang sesuai dengan ID yang diklik
    dataCourseDetail.course.Chapter.forEach((chapter, chapterIndex) => {
      const videoIndex = chapter.Video.findIndex((video) => video.video_id === selectedVideoId);
      if (videoIndex !== -1) {
        // Jika video ditemukan, set index bab dan index video yang sesuai
        selectedChapterIndex = chapterIndex;
        selectedVideoIndex = videoIndex;
      }
    });

    if (selectedChapterIndex !== -1 && selectedVideoIndex !== -1) {
      // Jika bab dan video yang sesuai ditemukan, atur indeks video aktif dan panggil fungsi handleVideoClick
      setCurrentChapterIndex(selectedChapterIndex);
      setActiveVideoIndex(selectedVideoIndex);
      handleVideoClick(selectedVideo);
    }
  };

  const handleNextVideo = () => {
    const currentChapter = dataCourseDetail.course.Chapter[currentChapterIndex];
    const currentVideo = currentChapter.Video[activeVideoIndex];
    const currentVideoId = currentVideo.video_id;

    putVideo(
      { video_id: currentVideoId },
      {
        onSuccess: () => {
          // Hanya pindah ke video berikutnya jika update berhasil
          if (activeVideoIndex < currentChapter.Video.length - 1) {
            setActiveVideoIndex(activeVideoIndex + 1);
            const nextVideo = currentChapter.Video[activeVideoIndex + 1];
            handleVideoClick(nextVideo);
          } else {
            // Jika sudah mencapai video terakhir di chapter yang sama, periksa apakah chapter ini sudah selesai
            if (!completedChapters.includes(currentChapterIndex)) {
              // Jika chapter belum diselesaikan, tandai chapter ini sebagai selesai
              setCompletedChapters([...completedChapters, currentChapterIndex]);
            }

            // Pindah ke chapter selanjutnya jika ada
            if (currentChapterIndex < dataCourseDetail.course.Chapter.length - 1) {
              setCurrentChapterIndex(currentChapterIndex + 1);
              const nextChapterFirstVideo = dataCourseDetail.course.Chapter[currentChapterIndex + 1].Video[0];
              setActiveVideoIndex(0);
              handleVideoClick(nextChapterFirstVideo);
            }
          }
          refetchCourseDetail();
        },
        onError: (error) => {
          console.error("Error updating video status", error);
        },
      }
    );
  };

  const handleFilterByScore = (score) => {
    setSelctedScore(score);
  };

  const handleStarClick = (score) => {
    setSelectedScore(score);
  };

  const handleRatingSubmit = (e) => {
    e.preventDefault();

    // Pastikan skor dan komentar telah diisi sebelum mengirim rating
    if (selectedScore === 0 || comment.trim() === "") {
      alert("Harap isi skor dan komentar sebelum mengirim rating.");
      return;
    }

    getPostRating({
      course_id: state.courseId,
      skor: selectedScore,
      comment: comment,
    });

    setSelectedScore(0);
    setcomment("");
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`cursor-pointer text-5xl ${selectedScore >= i ? "text-yellow-400" : "text-gray-300"}`} onClick={() => handleStarClick(i)}>
          {selectedScore >= i ? <FaStar /> : <FaStar />}
        </span>
      );
    }
    return stars;
  };

  return (
    <>
      <LayoutUser>
        {/* Modal */}
        {openModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={closeModal}>
            <div className="bg-white p-8 rounded shadow-lg mobile:w-1/2 desktop:w-[45%] desktopfull:w-[40%]" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center flex-col mb-4">
                <span className="text-black font-bold text-2xl">Selangkah lagi menuju</span>
                <span className="text-[#6148FF] font-bold text-2xl">Kelas Premium</span>
              </div>
              {detailSuccess && (
                <div className="flex justify-center">
                  <div className="w-full shadow-xl rounded-3xl sm:w-full md:w-[47%] lg:w-[47%] xl:w-[80%] mb-4 overflow-hidden">
                    <div className="overflow-hidden">
                      <img className="w-full h-40 object-cover" src={dataCourseDetail?.course?.url_image_preview} alt="Course thumbnail" />
                    </div>
                    <div className="px-4 py-5 bg-white rounded-b-3xl shadow-lg">
                      <div className="flex justify-between items-center pt-2">
                        <h4 className="text-xl font-bold text-[#6148FF]">{dataCourseDetail?.course.Kategori?.title}</h4>
                        <div className="flex items-center">
                          <FaStar className="text-yellow-400 mr-1" />
                          <span className=" font-semibold">{dataCourseDetail?.course?.avgRating !== 0 ? Math.floor(dataCourseDetail?.course?.avgRating * 10) / 10 : "-"}</span>
                        </div>
                      </div>
                      <h1 className="font-bold text-lg">{dataCourseDetail?.sudahBeli}</h1>
                      <h4 className="text-lg font-bold">{dataCourseDetail?.course?.title}</h4>
                      <p className="text-md mb-2 font-semibold">by {dataCourseDetail?.course?.Mentor?.name}</p>
                      <div className="text-sm text-gray-600 mb-4 flex gap-10">
                        <div className="flex items-center">
                          <RiShieldStarLine className="text-green-500 mr-2" />
                          <span className="text-[#6148FF] text-sm font-semibold">{dataCourseDetail?.course?.level}</span>
                        </div>
                        <div className="flex items-center">
                          <FaBookOpen className="text-green-500 mr-2" />
                          <span className="text-gray-700 text-sm font-semibold">{dataCourseDetail?.course?.module} Modul</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
                          <div className="bg-[#489CFF] h-7 flex justify-between items-center rounded-full">
                            <span className="ml-5 text-white font-semibold">Beli</span>
                            <span className="text-white font-semibold mr-5">Rp.{dataCourseDetail?.course.harga}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex justify-center">{/* Isi modal di sini sesuai kebutuhan */}</div>
              <div className="flex justify-center mt-4">
                <button className="bg-[#6148FF] h-12 w-1/2 flex justify-center items-center rounded-full" onClick={handleCheckout}>
                  <span className="text-white font-semibold">Beli Sekarang</span>
                  <FaArrowCircleRight className="text-[#EBF3FC] ml-2" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Telegram
        <Modal dismissible show={showTelegramModal} onClose={() => setShowTelegramModal(false)}>
          <Modal.Body>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-[#6148FF] mb-4">OnBoarding...</h1>
              {/* Atur gambar menjadi 50% lebar modal dan tinggi sama dengan lebar */}
        {/* <img
                className="mx-auto" // Center the image
                style={{ width: "50%", height: "auto", aspectRatio: "1 / 1" }} // Set width to 50% and height automatically to maintain the aspect ratio
                src={Onboarding}
                alt="Deskripsi Gambar"
              />
              <h2 className="text-sm font-bold text-black mb-4 mt-4">Persiapkan hal berikut untuk belajar yang maksimal:</h2>
              <h2 className="text-sm text-black">Mempunyai akun Figma atau Install Adobe XD</h2>
              <h2 className="text-sm text-black">Menggunakan internet minimal kecepatan 2Mbps</h2>
              <h2 className="text-sm text-black mb-7">Belajar di tempat yang nyaman</h2>
              <div className="flex justify-center w-full">
                <button className="bg-[#6148FF] w-1/2 text-white rounded-full px-5 py-2.5 text-center mb-2" onClick={() => setShowTelegramModal(false)}>
                  Ikuti Kelas
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal> */}

        <div className="flex gap-10">
          <div className="desktop:w-3/5 desktopfull:w-2/3">
            <div className="mb-6">
              {/* Isi dari bagian dengan latar belakang #EBF3FC */}
              <div className="pt-4">
                <Link to="/kelas" className="hover:underline">
                  <div className="flex items-center mb-4">
                    <FaArrowLeft className="mr-4 text-black" />
                    <h2 className="text-black font-bold">Kelas Lainnya</h2>
                  </div>
                </Link>

                {detailSuccess && (
                  <div className="flex flex-wrap lg:flex-nowrap justify-between items-start">
                    <div className="flex-1">
                      <h1 className="text-3xl font-bold text-[#6148FF] mb-2">{dataCourseDetail.course?.Kategori?.title}</h1>
                      <p className="text-xl text-black mb-1">{dataCourseDetail.course?.title}</p>
                      <p className="text-black mb-3">by {dataCourseDetail.course?.Mentor?.name}</p>
                      <div className="flex flex-wrap items-center mb-4">
                        <div className="flex items-center mr-6">
                          <RiShieldStarLine className="text-[#73CA5C]" />
                          <span className="ml-1 text-[#6148FF] font-semibold">{dataCourseDetail.course?.level}</span>
                        </div>
                        <div className="flex items-center mr-6">
                          <FaBookOpen className="text-[#73CA5C]" />
                          <span className="ml-1 font-semibold">{dataCourseDetail.course?.module} Modul</span>
                        </div>
                      </div>
                      <div className="flex">
                        {dataCourseDetail.sudahBeli && (
                          <button className="flex items-center px-4 py-2 bg-[#73CA5C] text-white rounded-full mr-4" onClick={handleJoinTelegram}>
                            Join Grup Telegram
                            <FaTelegramPlane className="ml-2" />
                          </button>
                        )}

                        {!dataCourseDetail.sudahBeli && (
                          <button className="flex items-center px-4 py-2 bg-[#73CA5C] text-white rounded-full" onClick={() => setOpenModal(true)}>
                            Gabung Kelas
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center ml-4 mt-4 lg:mt-0">
                      <FaStar className="text-yellow-500" />
                      <span className="text-black ml-1">{dataCourseDetail?.course?.avgRating !== 0 ? Math.floor(dataCourseDetail?.course?.avgRating * 10) / 10 : "-"}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Video Section - Adjusted size */}
            <div className="justify-start mb-6">
              <iframe
                className="w-full aspect-video rounded-3xl"
                src={activeVideoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="flex justify-end mt-5 gap-5">
                <Link to="/kelas" className="bg-[#EBF3FC] text-[#6148FF] py-2 px-4 rounded-full shadow-lg w-1/5 text-center">
                  Kelas Lainnya
                </Link>
                {dataCourseDetail.sudahBeli && (
                  <button className="bg-[#6148FF] text-white py-2 px-4 rounded-full shadow-lg w-1/5 text-center" onClick={handleNextVideo}>
                    Next
                  </button>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="">
              <h2 className="text-2xl font-bold mb-4">Tentang Kelas</h2>
              <p className="mb-6 text-lg">{dataCourseDetail.course?.deskripsi}</p>

              <h2 className="text-2xl font-bold mb-4">Kelas Ini Ditujukan Untuk</h2>
              <ul className="list-disc pl-5 mb-6 text-gray-700">{/* List items here */}</ul>
            </div>
            {completionPercentage === 100 && (
              <form onSubmit={handleRatingSubmit} className="w-full max-w-lg">
                <div className="mb-4">
                  <p className="font-bold text-2xl mb-4">Beri Rating Course</p>
                  <div className="flex items-center" aria-label="Beri Rating Course">
                    {renderStars()}
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="comment" className="text-black-300 text-xl font-semibold mb-2 block">
                    Komentar
                  </label>
                  <input
                    id="comment"
                    value={comment}
                    onChange={(e) => setcomment(e.target.value)}
                    placeholder="Tulis komentar..."
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex justify-center mb-5">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full rounded-3xl transition duration-300 ease-in-out"
                  >
                    Kirim Rating
                  </button>
                </div>
              </form>
            )}
            <div>
              <h1 className="text-2xl font-bold mb-4">Review Dari Manusia Yang Sudah Berlangganan</h1>
              <div className="flex gap-5 items-center mb-4">
                <button
                  className={`w-[10%] text-2xl p-2 rounded-full font-semibold text-center flex justify-center items-center ${SelctedScore === "" ? "bg-black text-white" : " bg-slate-300 text-black"}`}
                  onClick={() => handleFilterByScore("")}
                >
                  All
                </button>
                <button
                  className={`w-[10%] text-2xl p-2 rounded-full font-semibold text-center flex justify-center items-center ${SelctedScore === "1" ? "bg-black text-white" : " bg-slate-300 text-black"}`}
                  onClick={() => handleFilterByScore("1")}
                >
                  <FaStar className="text-yellow-400 mr-1" />1
                </button>
                <button
                  className={`w-[10%] text-2xl p-2 rounded-full font-semibold text-center flex justify-center items-center ${SelctedScore === "2" ? "bg-black text-white" : " bg-slate-300 text-black"}`}
                  onClick={() => handleFilterByScore("2")}
                >
                  <FaStar className="text-yellow-400 mr-1" />2
                </button>
                <button
                  className={`w-[10%] text-2xl p-2 rounded-full font-semibold text-center flex justify-center items-center ${SelctedScore === "3" ? "bg-black text-white" : " bg-slate-300 text-black"}`}
                  onClick={() => handleFilterByScore("3")}
                >
                  <FaStar className="text-yellow-400 mr-1" />3
                </button>
                <button
                  className={`w-[10%] text-2xl p-2 rounded-full font-semibold text-center flex justify-center items-center ${SelctedScore === "4" ? "bg-black text-white" : " bg-slate-300 text-black"}`}
                  onClick={() => handleFilterByScore("4")}
                >
                  <FaStar className="text-yellow-400 mr-1" />4
                </button>
                <button
                  className={`w-[10%] text-2xl p-2 rounded-full font-semibold text-center flex justify-center items-center ${SelctedScore === "5" ? "bg-black text-white" : " bg-slate-300 text-black"}`}
                  onClick={() => handleFilterByScore("5")}
                >
                  <FaStar className="text-yellow-400 mr-1" />5
                </button>
              </div>

              <div className="flex justify-between flex-wrap gap-5 w-[90%]">
                {ratingCourse?.data?.rating.length > 0 ? (
                  (() => {
                    const filteredRating = ratingCourse?.data?.rating.filter((rating) => (SelctedScore === "" ? true : rating.skor === parseInt(SelctedScore)));
                    return filteredRating.length > 0 ? (
                      filteredRating.map((rating) => (
                        <div key={rating.rating_id} className="bg-white w-[47%] gap-5 flex flex-col rounded-xl">
                          <div className="flex items-center m-3 ml-5">
                            <label
                              htmlFor="upload"
                              className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center border-2 border-[#6148FF]"
                              style={{
                                backgroundImage: `url(${rating.Account?.url_image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            ></label>
                            <h1 className="font-bold text-lg ml-5">{rating.Account?.nama}</h1>
                          </div>
                          <span className="text-lg m-3 ml-5">{rating.comment}</span>
                          <div className="flex items-center m-3 ml-5">
                            {Array.from({ length: rating.skor }, (_, index) => (
                              <FaStar key={index} className="text-yellow-400 mr-1" />
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="w-[100%] gap-5 flex flex-col rounded-xl">
                        <h1 className="font-bold text-lg">Belum ada review dengan skor {SelctedScore}</h1>
                      </div>
                    );
                  })()
                ) : (
                  <div className="w-[100%] gap-5 flex flex-col rounded-xl">
                    <h1 className="font-bold text-lg">Belum ada review sejauh ini</h1>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Materi Belajar Section */}
          {detailSuccess && (
            <div className="desktop:w-2/5 desktopfull:w-1/3 px-4 overflow-auto">
              <div className="bg-white rounded-lg p-4 shadow-md mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold ">Materi Belajar</h2>
                  <div className="flex items-center w-3/5">
                    <FaRegCheckCircle className="text-green-500 mr-2" />
                    <div className="w-full bg-black rounded-full dark:bg-gray-700">
                      <div className="bg-[#6148FF] h-7 flex items-center rounded-full" style={{ width: `${completionPercentage}%` }}>
                        <span className="ml-2 text-white font-semibold">{`${completionPercentage}% complete`}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {getCourseDetail?.data?.course.Chapter &&
                  getCourseDetail?.data?.course.Chapter.map((chapter, index) => (
                    <div key={chapter?.title}>
                      {index > 0 && <hr className="my-4" />}
                      <h2 className="text-lg font-bold mb-4 text-[#6148FF]">{chapter.title}</h2>
                      <ol className="list-decimal list-inside">
                        {chapter.Video.map((video) => (
                          <li key={video.video_id} className="mb-2 mt-2 flex items-center justify-between" onClick={() => handleSelectVideo(video)}>
                            <div className="flex items-center">
                              <span className="flex items-center justify-center h-6 w-6 bg-blue-100 text-black rounded-full text-xs mr-2">{video.video_id}</span>
                              {video.title}
                            </div>
                            {video.is_preview || dataCourseDetail.sudahBeli === true ? (
                              <FaCirclePlay className={`text-xl ${isVideoDone(video.video_id) ? "text-[#73CA5C]" : "text-[#6148FF]"}`} />
                            ) : (
                              <GiPadlock className="text-xl text-gray-500" />
                            )}
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </LayoutUser>
    </>
  );
};
