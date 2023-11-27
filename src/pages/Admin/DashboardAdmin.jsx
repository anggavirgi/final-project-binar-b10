import React from "react";
import { LayoutAdmin } from "../../Layout/LayoutAdmin";
import { CardAdmin } from "../../components/Card/CardAdmin";
import { HiSearch } from "react-icons/hi";
import { CiFilter } from "react-icons/ci";

export const DashboardAdmin = () => {
  return (
    <>
      <LayoutAdmin>
        <div className="flex flex-col gap-7">
          <CardAdmin />
          <div>
            <div className="flex justify-between items-center">
              <div className="font-bold text-xl">Status Pembayaran</div>
              <div className="flex items-center gap-6 text-primary">
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
                  <th className="ps-2 py-2.5">ID</th>
                  <th className="py-2.5">Kategori</th>
                  <th className="py-2.5">Kelas Premium</th>
                  <th className="py-2.5">Status</th>
                  <th className="py-2.5">Metode Pembayaran</th>
                  <th className="py-2.5">Tanggal Bayar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
                <tr>
                  <td className="ps-2 py-3">Johndoe123</td>
                  <td className="py-3">Web Development</td>
                  <td className="py-3">HTML dan CSS dalam seminggu</td>
                  <td className="py-3 font-bold">SUDAH BAYAR</td>
                  <td className="py-3">Credit Card</td>
                  <td className="py-3">20 Sep, 2023 at 2:00 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </LayoutAdmin>
    </>
  );
};
