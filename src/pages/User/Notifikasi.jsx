import React, { useEffect, useState } from "react";
import { GoBellFill, GoArrowLeft, GoArrowRight, GoSync } from "react-icons/go";
import { useNotifikasi } from "../../services/User Profile/notifikasi_user";

export const Notifikasi = () => {
  const [notifikasi, setNotifikasi] = useState([]);
  const [page, setPage] = useState(1); // Menyimpan halaman saat ini
  const [isLoading, setIsLoading] = useState(false); // Menyimpan status loading
  const [cachedData, setCachedData] = useState({}); // Menyimpan data notifikasi sebelumnya
  const { data, error, refetch } = useNotifikasi({ limit: 10, page }); // Menggunakan "page" dalam pemanggilan API

  useEffect(() => {
    if (data && data.data.notificationsWithType) {
      const mappedNotifications = data.data.notificationsWithType.map((notif) => ({
        jenis: notif.notificationType || "Notifikasi",
        judul: notif.title || "",
        isi: notif.deskripsi || "",
        waktu: notif.timestamp || "",
        status: notif.is_read ? "bg-green-400" : "bg-rose-500",
      }));

      setIsLoading(false);

      // Menyimpan data notifikasi ke dalam cache
      setCachedData((prevData) => ({
        ...prevData,
        [page]: mappedNotifications,
      }));

      setNotifikasi(mappedNotifications);
    }
  }, [data, page]);

  const loadNextPage = async () => {
    if (isLoading) return;

    setIsLoading(true);

    const nextPage = page + 1;

    // Cek apakah data notifikasi untuk halaman tersebut sudah ada di cache
    if (cachedData[nextPage]) {
      setNotifikasi(cachedData[nextPage]);
      setPage(nextPage);
      setIsLoading(false);
    } else {
      const response = await refetch({ limit: 10, page: nextPage });

      if (!response.error) {
        setPage(nextPage);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    }
  };

  const loadPreviousPage = async () => {
    if (isLoading) return;

    if (page > 1) {
      setIsLoading(true);

      const prevPage = page - 1;

      // Cek apakah data notifikasi untuk halaman tersebut sudah ada di cache
      if (cachedData[prevPage]) {
        setNotifikasi(cachedData[prevPage]);
        setPage(prevPage);
        setIsLoading(false);
      } else {
        const response = await refetch({ limit: 10, page: prevPage });

        if (!response.error) {
          setPage(prevPage);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      }
    }
  };

  return (
    <div className="w-[900px] h-[512px] shadow flex flex-col justify-start items-start">
      <div className="w-full h-[62px] p-6 bg-indigo-600 rounded-tl-2xl rounded-tr-2xl flex flex-col justify-start items-center gap-6">
        <div className="text-white text-xl font-bold font-[Montserrat] leading-[14px]">Notifikasi</div>
      </div>
      <div className="w-full flex-grow p-6 rounded-bl-2xl rounded-br-2xl border border-indigo-600 flex flex-col justify-start items-center gap-6 overflow-y-auto">
        {notifikasi.map((notif, index) => (
          <div key={index} className="w-full flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch flex justify-start items-start gap-4">
              <GoBellFill className="text-indigo-600 w-6 h-6" />
              <div className="flex-grow flex flex-col justify-start items-start gap-1">
                <div className="self-stretch flex justify-start items-center gap-2">
                  <div className="flex-grow text-indigo-600 text-xs font-normal font-[Montserrat]">{notif.jenis}</div>
                  <div className="text-zinc-500 text-[10px] font-semibold font-[Montserrat]">{notif.waktu}</div>
                  <div className={`w-2 h-2 ${notif.status} rounded-full`} />
                </div>
                <div className="self-stretch text-black text-[10px] font-semibold font-[Montserrat]">
                  {notif.judul} {notif.isi}
                </div>
                <div className="text-zinc-500 text-[10px] font-normal font-[Montserrat]">Syarat dan Ketentuan berlaku!</div>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="mt-4 text-indigo-600 flex items-center">
            <GoSync className="animate-spin w-4 h-4 mr-2" />
            Loading...
          </div>
        )}
        <div className="flex justify-between mt-4 gap-4">
          <button onClick={loadPreviousPage} className={`bg-indigo-600 text-white px-4 py-2 rounded ${isLoading ? "opacity-50" : ""}`} disabled={isLoading}>
            <GoArrowLeft className="w-4 h-4" />
          </button>
          <button onClick={loadNextPage} className={`bg-indigo-600 text-white px-4 py-2 rounded ${isLoading ? "opacity-50" : ""}`} disabled={isLoading}>
            <GoArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
