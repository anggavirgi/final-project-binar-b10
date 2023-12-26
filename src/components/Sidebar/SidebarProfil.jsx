import React from "react";
import { GoPencil, GoGear } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

export const SidebarProfil = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className={`p-4 flex flex-col ${isMobile ? 'w-full' : 'w-1/3'}`}>
      <div className="text-primary">
        <div className="flex gap-2.5 items-center cursor-pointer">
          <GoPencil className="text-lg" />
          <span className="text-black font-semibold hover:text-primary">
            <Link
              className="block cursor-pointer"
              to={"/profil?edit=true"}
            >
              Profil Saya
            </Link>
          </span>
        </div>
        <hr className="my-4" />

        <div className="flex gap-2 items-center cursor-pointer">
          <GoGear className="text-lg" />
          <span className="text-black font-semibold hover:text-primary">
            <Link
              className="block cursor-pointer"
              to={"/profil/gantipassword"}
            >
              Ubah Password
            </Link>
          </span>
        </div>
        <hr className="my-4" />

        <div className="flex gap-2 items-center cursor-pointer">
          <BsCart3 className="text-lg" />
          <span className="text-black font-semibold hover:text-primary">
          <Link
              className="block cursor-pointer"
              to={"/profil/riwayat"}
            >
              Riwayat Pembayaran
            </Link>
          </span>
        </div>
        <hr className="my-4" />

        <div className="flex gap-2 items-center cursor-pointer">
          <BiLogOut className="text-lg" />
          <span className="text-black font-semibold hover:text-primary">
            Keluar
          </span>
        </div>
        <hr className="my-4" />
      </div>
      <div className="text-center">
        <span className="text-xs">Version 1.1.0</span>
      </div>
    </div>
  );
};
