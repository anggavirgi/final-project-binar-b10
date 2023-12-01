import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardAdmin } from "../pages/Admin/DashboardAdmin";
import { ClassAdmin } from "../pages/Admin/ClassAdmin";
import { Class } from "../pages/User/Class";
import Detail from "../pages/User/Detail";
import { Payment } from "../pages/User/Payment";
import { Berhasil } from "../pages/User/Berhasil";

export const RouteLists = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/kelolakelas" element={<ClassAdmin />} />
        <Route path="/kelas" element={<Class />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/berhasil" element={<Berhasil />} />
      </Routes>
    </BrowserRouter>
  );
};
