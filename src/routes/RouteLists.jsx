import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginUser } from "../pages/LoginUser";

import { Register } from "../pages/Register";
import OTP from "../pages/OTP";
import { ResetPw } from "../pages/ResetPw";
import { UserProfile } from "../pages/UserProfile";
import { Notif } from "../pages/Notif";
import { GantiPWUser } from "../pages/GantiPWUser";
import { RiwayatUser } from "../pages/RiwayatUser";

export const RouteLists = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/1" element={<OTP />} />
        <Route path="/2" element={<Register />} />
        <Route path="/3" element={<ResetPw />} />
        <Route path="/4" element={<UserProfile />} />
        <Route path="/5" element={<Notif />} />
        <Route path="/6" element={<GantiPWUser />} />
        <Route path="/7" element={<RiwayatUser />} />
      </Routes>
    </BrowserRouter>
  );
};
