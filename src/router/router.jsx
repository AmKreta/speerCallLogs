import React from "react";
import { Routes, Route } from "react-router-dom";
import Activity from "../pages/activity/activity.page.jsx";
import Archive from "../pages/archive/archive.page.jsx";

export const ROUTES_OBJ = {
  ACTIVITY: { path: "/", element: <Activity /> },
  ARCHIVE: { path: "/archive", element: <Archive /> },
};

const Router = () => (
  <Routes>
    {Object.keys(ROUTES_OBJ).map((routeKey, index) => (
      <Route
        key={index}
        path={ROUTES_OBJ[routeKey].path}
        element={ROUTES_OBJ[routeKey].element}
      />
    ))}
  </Routes>
);

export default Router;
