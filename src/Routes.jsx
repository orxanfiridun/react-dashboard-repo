import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainLayout from "./layout";

const MainPage = lazy(() => import("./pages/MainPage"));

const BaseRoutes = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="dashboard" element={<MainPage />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default BaseRoutes;
