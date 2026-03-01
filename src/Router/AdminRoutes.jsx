import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Login from "../Admin/Login";
import AdminLayout from "../Admin/Layout";
import Dashboard from "../Admin/Dashboard";
import Slides from "../Admin/Slides";
import Portfolio from "../Admin/Portfolio";
import Qualifications from "../Admin/Qualifications";
import Messages from "../Admin/Messages";
import Contact from "../Admin/Contact";
import PublicHome from "../Public/PublicHome";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  return token ? children : <Navigate to="/admin" />;
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicHome />} />
      <Route path="/admin" element={<Login />} />
      <Route path="/admin/dashboard" element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
        <Route index element={<Dashboard />} />
        <Route path="slides" element={<Slides />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="qualifications" element={<Qualifications />} />
        <Route path="contact" element={<Contact />} />
        <Route path="messages" element={<Messages />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
