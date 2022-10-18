import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

function MainLayout() {
  return (
    <div className="App">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
