import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LayoutAdmin } from "../../Layout/LayoutAdmin";
import { IoIosArrowRoundBack } from "react-icons/io";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import { useGetChapter } from "../../services/admin/GetChapter";
import { RxCross2 } from "react-icons/rx";
import { usePostChapter } from "../../services/admin/PostChapter";
import { usePutChapter } from "../../services/admin/PutChapter";
import { useGetVideo } from "../../services/admin/GetVideo";
import { usePostVideo } from "../../services/admin/PostVideo";
import { usePutVideo } from "../../services/admin/PutVideo";

export const AddVideo = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [getIdChapter, setIdChapter] = useState();
  const [getAddChapter, setAddChapter] = useState(false);
  const [getEditChapter, setEditChapter] = useState(false);
  const [getDeleteChapter, setDeleteChapter] = useState(false);
  const [getInputChapter, setInputChapter] = useState("");

  // GET CHAPTER
  const { data: getChapter } = useGetChapter({
    course_id: state.course_id,
  });

  const dataChapter = getChapter?.data || [];

  // POST CHAPTER
  const { mutate: postChapter } = usePostChapter();

  // HANDLE SAVE ADD CHAPTER
  const handleAddChapter = (e) => {
    if (e.key === "Enter") {
      postChapter({
        chapter_title: getInputChapter,
        course_id: state.course_id,
        video_id: 0,
      });
    }
  };

  // PUT CHAPTER
  const { mutate: putChapter } = usePutChapter({
    course_id: state.course_id,
  });

  // HANDLE BTN EDIT CHAPTER
  const handleBtnEditChapter = (id) => {
    setEditChapter(true);
    setIdChapter(id);
  };

  // HANDLE SAVE EDIT CHAPTER
  const handleEditChapter = (e) => {
    // if (e.key === "Enter") {
    //   putChapter({
    //     chapter_title: getInputChapter,
    //     course_id: state.course_id,
    //     video_id: 0,
    //   });
    // }
  };

  // HANDLE DELETE CHAPTER
  const handleDeleteChapter = () => {};

  // API VIDEO
  const [getCloseAddEdit, setCloseAddEdit] = useState(false);
  const [getVideoChapter, setVideoChapter] = useState([]);
  const [getVideoId, setVideoId] = useState();
  const [getAddEdit, setAddEdit] = useState();

  const [getTitleVideo, setTitleVideo] = useState("");
  const [getDeskripsiVideo, setDeskripsiVideo] = useState("");
  const [getUrlVideo, setUrlVideo] = useState("");
  const [getPreviewVideo, setPreviewVideo] = useState();

  // GET VIDEO PER CHAPTER
  const { data: getVideoPerChapter, isSuccess: successVideoChapter } =
    useGetVideo({
      limit: 50,
    });

  const dataVideoChapter = getVideoPerChapter?.data?.video || [];

  const handleVideoPerChapter = (idChapter) => {
    setIdChapter(idChapter);
    if (successVideoChapter) {
      const videoChapter = dataVideoChapter?.filter((value) => {
        if (value.chapter_id === idChapter) {
          return { ...value };
        }
      });

      setVideoChapter(videoChapter);
    }
  };

  // POST VIDEO PER CHAPTER
  const { mutate: postVideo, data: getDataVideo } = usePostVideo();
  console.log(
    "🚀 ~ file: AddVideo.jsx:106 ~ AddVideo ~ getDataVideo:",
    getDataVideo
  );

  // HANDLE ADD VIDEO
  const handleAddVideo = () => {
    setAddEdit(true);
    setCloseAddEdit(true);
    setTitleVideo("");
    setUrlVideo("");
    setDeskripsiVideo("");
    setPreviewVideo();
  };

  // HANDLE BTN SIMPAN ADD VIDEO
  const handleBtnSimpanVideo = () => {
    postVideo({
      chapter_id: getIdChapter,
      title: getTitleVideo,
      deskripsi: getDeskripsiVideo,
      url_video: getUrlVideo,
      is_preview: getPreviewVideo,
    });
  };

  // PUT VIDEO PER CHAPTER
  const { mutate: putVideo } = usePutVideo({
    video_id: getVideoId,
  });

  // HANDLE EDIT VIDEO
  const handleEditVideo = (id) => {
    setVideoId(id);
    setAddEdit(false);
    setCloseAddEdit(true);
  };

  // HANDLE BTN SIMPAN ADD VIDEO
  const handleBtnEditVideo = () => {
    putVideo({
      chapter_id: getIdChapter,
      title: getTitleVideo,
      deskripsi: getDeskripsiVideo,
      url_video: getUrlVideo,
      is_preview: getPreviewVideo,
    });
  };

  // DELETE VIDEO PER CHAPTER

  return (
    <>
      <LayoutAdmin>
        <div className="text-sm">
          <div className="flex items-center justify-between">
            <div
              onClick={() => navigate("/admin/kelolakelas")}
              className="flex items-center gap-2 cursor-pointer hover:text-gray-400"
            >
              <IoIosArrowRoundBack />
              <div>Kembali</div>
            </div>
            <div className="flex items-center gap-1.5">
              <div
                onClick={() => navigate("/admin/kelolakelas")}
                className="cursor-pointer hover:text-gray-400"
              >
                Kelola Kelas
              </div>
              <div>/</div>
              <div className="text-primary">Add Video</div>
            </div>
          </div>

          <div className="w-full flex gap-4 mt-4">
            <div className={`${getCloseAddEdit ? "w-1/4" : "w-1/2"}`}>
              <div className="bg-primary text-white rounded ps-2 text-lg font-semibold">
                Chapter
              </div>
              <div className="mt-1 font-medium text-sm px-1">
                <div
                  className={`text-center py-2 ${
                    dataChapter.length === 0 ? "block" : "hidden"
                  }`}
                >
                  Belum ada video.
                </div>
                {dataChapter.map((value, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => handleVideoPerChapter(value.chapter_id)}
                      className="py-2 border-b border-gray-300"
                    >
                      {getEditChapter && getIdChapter === value.chapter_id ? (
                        <div className="relative flex items-center border-b border-gray-300">
                          <input
                            type="text"
                            placeholder="new chapter"
                            className="py-2 border-none !ring-0"
                            onChange={(e) => setInputChapter(e.target.value)}
                            onKeyDown={handleEditChapter}
                          />
                          <div
                            onClick={() => setEditChapter(false)}
                            className="absolute right-2.5 cursor-pointer hover:text-gray-700"
                          >
                            <RxCross2 />
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-between gap-2 items-center">
                          <div className="cursor-pointer hover:text-gray-400 whitespace-nowrap overflow-hidden">
                            {value.title}
                          </div>
                          <div className="flex gap-2 items-center">
                            <HiOutlinePencilAlt
                              onClick={() =>
                                handleBtnEditChapter(value.chapter_id)
                              }
                              className="w-5 h-5 cursor-pointer text-yellow-400 hover:text-yellow-300"
                            />
                            <HiOutlineTrash
                              onClick={() =>
                                handleDeleteChapter(value.chapter_id)
                              }
                              className="w-5 h-5 cursor-pointer text-red-400 hover:text-red-300"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
                {getAddChapter && (
                  <div className="relative flex items-center border-b border-gray-300">
                    <input
                      type="text"
                      placeholder="new chapter"
                      className="py-2 border-none !ring-0"
                      onChange={(e) => setInputChapter(e.target.value)}
                      onKeyDown={handleAddChapter}
                    />
                    <div
                      onClick={() => setAddChapter(false)}
                      className="absolute right-2.5 cursor-pointer hover:text-gray-700"
                    >
                      <RxCross2 />
                    </div>
                  </div>
                )}
                <div
                  onClick={() => setAddChapter(!getAddChapter ? true : true)}
                  className="flex items-center justify-center gap-2 w-fit mx-auto mt-2 px-3 py-1.5 rounded cursor-pointer bg-green-400 text-white hover:text-gray-300"
                >
                  <div>Tambah chapter</div>
                  <BiPlus />
                </div>
              </div>
            </div>
            <div className={`${getCloseAddEdit ? "w-1/4" : "w-1/2"}`}>
              <div className="bg-primary text-white rounded ps-2 text-lg font-semibold">
                Video
              </div>
              <div className="mt-1 font-medium text-sm">
                <div
                  className={`text-center py-2 ${
                    getVideoChapter.length === 0 ? "block" : "hidden"
                  }`}
                >
                  Belum ada video.
                </div>
                {getVideoChapter.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center gap-2 py-2 border-b border-gray-300"
                    >
                      <div className="whitespace-nowrap overflow-hidden">
                        {value.title}
                      </div>
                      <div className="flex gap-2 items-center">
                        <HiOutlinePencilAlt
                          onClick={() => handleEditVideo(value.video_id)}
                          className="w-5 h-5 cursor-pointer text-yellow-400 hover:text-yellow-300"
                        />
                        <HiOutlineTrash className="w-5 h-5 cursor-pointer text-red-400 hover:text-red-300" />
                      </div>
                    </div>
                  );
                })}
                <div
                  onClick={() => handleAddVideo()}
                  className={`${
                    getIdChapter ? "flex" : "hidden"
                  } items-center justify-center gap-2 w-fit mx-auto mt-2 px-3 py-1.5 rounded cursor-pointer bg-green-400 text-white hover:text-gray-300`}
                >
                  <div>Tambah Video</div>
                  <BiPlus />
                </div>
              </div>
            </div>
            <div className={`${getCloseAddEdit ? "w-1/2 block" : "hidden"}`}>
              <div className="flex justify-between items-center bg-primary text-white rounded px-2 text-lg font-semibold">
                <div>{getAddEdit ? "Add Video" : "Edit Video"}</div>
                <RxCross2
                  className="cursor-pointer hover:text-gray-400"
                  onClick={() => setCloseAddEdit(false)}
                />
              </div>
              <div className="mt-2.5 px-2 space-y-2 font-medium text-sm">
                <div className="flex flex-col gap-1">
                  <label htmlFor="judul">Judul</label>
                  <input
                    type="text"
                    placeholder="masukkan judul"
                    id="judul"
                    value={getTitleVideo}
                    onChange={(e) => setTitleVideo(e.target.value)}
                    className="w-full px-4 py-1.5 text-sm rounded"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="deskripsi">deskripsi</label>
                  <input
                    type="text"
                    placeholder="masukkan deskripsi"
                    id="deskripsi"
                    value={getDeskripsiVideo}
                    onChange={(e) => setDeskripsiVideo(e.target.value)}
                    className="w-full px-4 py-1.5 text-sm rounded"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="link">Link Video</label>
                  <input
                    type="text"
                    placeholder="masukkan link video"
                    id="link"
                    value={getUrlVideo}
                    onChange={(e) => setUrlVideo(e.target.value)}
                    className="w-full px-4 py-1.5 text-sm rounded"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="preview">Is_preview</label>
                  <select
                    name="preview"
                    id="preview"
                    onChange={(e) => setPreviewVideo(e.target.value)}
                    className="w-full px-4 py-1.5 text-sm rounded"
                  >
                    <option value="false">Lock</option>
                    <option value="true">Open</option>
                  </select>
                </div>

                <div className="flex justify-end gap-3">
                  {getAddEdit ? (
                    <button
                      onClick={() => handleBtnSimpanVideo()}
                      className="bg-primary text-white px-4 py-1.5 hover:text-gray-400 rounded"
                    >
                      Simpan
                    </button>
                  ) : (
                    <button
                      onClick={() => handleBtnEditVideo()}
                      className="bg-primary text-white px-4 py-1.5 hover:text-gray-400 rounded"
                    >
                      Ubah
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutAdmin>
    </>
  );
};
