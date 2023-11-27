import React from "react";

export const SidebarAdmin = () => {
  return <div className="fixed w-[250px] h-full bg-primary flex flex-col">
    <div className="font-bold text-center py-12 text-white text-2xl">
      LOGO
    </div>
    <div className="flex flex-col text-white font-semibold">
      <a href="/admin" className="ps-10 py-3.5 hover:bg-[#489CFF]">Dashboard</a>
      <a href="/kelolakelas" className="ps-10 py-3.5 hover:bg-[#489CFF]">Kelola Kelas</a>
      <a href="/logout" className="ps-10 py-3.5 hover:bg-[#489CFF]">Keluar</a>
    </div>
  </div>;
};
