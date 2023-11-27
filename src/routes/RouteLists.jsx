import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardAdmin } from "../pages/Admin/DashboardAdmin";
import { ClassAdmin } from "../pages/Admin/ClassAdmin";

export const RouteLists = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/kelolakelas" element={<ClassAdmin />} />
      </Routes>
    </BrowserRouter>
  );
};
