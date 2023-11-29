import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardAdmin } from "../pages/Admin/DashboardAdmin";
import { ClassAdmin } from "../pages/Admin/ClassAdmin";
import { Class } from "../pages/User/Class";
import Detail from "../pages/User/Detail";
import { Homepage } from "../pages/User/Homepage";

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
      </Routes>
    </BrowserRouter>
  );
};
