import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoute from "../Admin/AdminRoute";
import UserRoute from "../User/UserRoute";
import GuestHome from "./GuestHome";
import Login from "./Login";
import UserRegistration from "./UserRegistration";

export default function GuestRoute() {
  return (
    <Routes>
      <Route path="/" element={<GuestHome />}/>
      <Route path="/registration" element={<UserRegistration />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/admin/*" element={<AdminRoute />}/>
      <Route path="/user/*" element={<UserRoute />}/>
    </Routes>
  );
}
