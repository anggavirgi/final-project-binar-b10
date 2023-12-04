import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardAdmin } from "../pages/Admin/DashboardAdmin";
import { ClassAdmin } from "../pages/Admin/ClassAdmin";
import { Class } from "../pages/User/Class";
import { Homepage } from "../pages/User/Homepage";
import Detail from "../pages/User/Detail";

export const RouteLists = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* USER */}
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/kelas" element={<Class />} />
        <Route path="/detail" element={<Detail />} />

        {/* ADMIN */}
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/kelolakelas" element={<ClassAdmin />} />
        <Route path="/kelas" element={<Class />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};
