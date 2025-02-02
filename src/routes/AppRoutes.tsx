import React from "react";
import { Routes, Route } from "react-router-dom";
import List from "../pages/List";
import MainLayout from "../components/layouts/MainLayout";
import Login from "../pages/Login";
import DataList from "../pages/DataList";


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<DataList />} />
      </Route>

      <Route index  path="/login" element={<Login />} />

    </Routes>
  );
};

export default AppRoutes;
