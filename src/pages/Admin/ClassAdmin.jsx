import React from "react";
import { LayoutAdmin } from "../../Layout/LayoutAdmin";
import { CardAdmin } from "../../components/Card/CardAdmin";
import { HiSearch } from "react-icons/hi";
import { CiFilter } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

export const ClassAdmin = () => {
  return (
    <>
      <LayoutAdmin>
        <div className="flex flex-col gap-7">
          <CardAdmin />
          <div>
            <div className="flex justify-between items-center">
              <div className="font-bold text-xl">Kelola Kelas</div>
              <div className="flex items-center gap-6 text-primary">
                <div className="flex items-center gap-1 text-lg border text-white bg-primary border-primary rounded-2xl px-4 py-0.5 cursor-pointer">
                  <CiCirclePlus className="stroke-1 text-xl" />
                  <span className="font-semibold">Tambah</span>
                </div>
                <div className="flex items-center gap-1 text-lg border border-primary rounded-2xl px-4 py-0.5 cursor-pointer">
                  <CiFilter className="stroke-1 text-xl" />
                  <span className="font-semibold">Filter</span>
                </div>
                <div>
                  <HiSearch className="text-[1.7rem] cursor-pointer" />
                </div>
              </div>
            </div>
            <table className="text-sm w-full mt-3 text-left">
              <thead className="bg-[#EBF3FC]">
                <tr>
                  <th className="ps-2 py-2.5">Kode Kelas</th>
                  <th className="py-2.5">Kategori</th>
                  <th className="py-2.5">Nama Kelas</th>
                  <th className="py-2.5">Tipe Kelas</th>
                  <th className="py-2.5">Level</th>
                  <th className="py-2.5">Harga Kelas</th>
                  <th className="py-2.5">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="ps-2 py-3">WD1123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">GRATIS</td>
                  <td className="py-3">Beginner</td>
                  <td className="py-3">Rp 349,000</td>
                  <td>
                    <div className="flex items-center gap-2 text-white">
                      <button className="bg-primary font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">Ubah</button>
                      <button className="bg-red-500 font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">Hapus</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">WD1123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">GRATIS</td>
                  <td className="py-3">Beginner</td>
                  <td className="py-3">Rp 349,000</td>
                  <td>
                    <div className="flex items-center gap-2 text-white">
                      <button className="bg-primary font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">Ubah</button>
                      <button className="bg-red-500 font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">Hapus</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">WD1123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">GRATIS</td>
                  <td className="py-3">Beginner</td>
                  <td className="py-3">Rp 349,000</td>
                  <td>
                    <div className="flex items-center gap-2 text-white">
                      <button className="bg-primary font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">Ubah</button>
                      <button className="bg-red-500 font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">Hapus</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">WD1123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">GRATIS</td>
                  <td className="py-3">Beginner</td>
                  <td className="py-3">Rp 349,000</td>
                  <td>
                    <div className="flex items-center gap-2 text-white">
                      <button className="bg-primary font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">Ubah</button>
                      <button className="bg-red-500 font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">Hapus</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">WD1123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">GRATIS</td>
                  <td className="py-3">Beginner</td>
                  <td className="py-3">Rp 349,000</td>
                  <td>
                    <div className="flex items-center gap-2 text-white">
                      <button className="bg-primary font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">Ubah</button>
                      <button className="bg-red-500 font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">Hapus</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">WD1123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">GRATIS</td>
                  <td className="py-3">Beginner</td>
                  <td className="py-3">Rp 349,000</td>
                  <td>
                    <div className="flex items-center gap-2 text-white">
                      <button className="bg-primary font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">Ubah</button>
                      <button className="bg-red-500 font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">Hapus</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">WD1123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">GRATIS</td>
                  <td className="py-3">Beginner</td>
                  <td className="py-3">Rp 349,000</td>
                  <td>
                    <div className="flex items-center gap-2 text-white">
                      <button className="bg-primary font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">Ubah</button>
                      <button className="bg-red-500 font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">Hapus</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">WD1123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">GRATIS</td>
                  <td className="py-3">Beginner</td>
                  <td className="py-3">Rp 349,000</td>
                  <td>
                    <div className="flex items-center gap-2 text-white">
                      <button className="bg-primary font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">Ubah</button>
                      <button className="bg-red-500 font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">Hapus</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">WD1123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">GRATIS</td>
                  <td className="py-3">Beginner</td>
                  <td className="py-3">Rp 349,000</td>
                  <td>
                    <div className="flex items-center gap-2 text-white">
                      <button className="bg-primary font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">Ubah</button>
                      <button className="bg-red-500 font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">Hapus</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">WD1123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">GRATIS</td>
                  <td className="py-3">Beginner</td>
                  <td className="py-3">Rp 349,000</td>
                  <td>
                    <div className="flex items-center gap-2 text-white">
                      <button className="bg-primary font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">Ubah</button>
                      <button className="bg-red-500 font-medium rounded-2xl py-0.5 px-2.5 cursor-pointer">Hapus</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </LayoutAdmin>
    </>
  );
};
