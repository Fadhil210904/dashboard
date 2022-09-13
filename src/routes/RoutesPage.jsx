import React from "react";
import Sidebar from "../components/Sidebar";
import { Routes, Route } from "react-router-dom";
import { listRoutes } from "./listRoutes";
const RoutesPage = () => {
  return (
    <Sidebar>
      <div>
        <Routes>
          {listRoutes.map((respon, key) => (
            <Route key={key} path={respon.path} element={respon.component} />
          ))}
        </Routes>
      </div>
    </Sidebar>
  );
};

export default RoutesPage;
