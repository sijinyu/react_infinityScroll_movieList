import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutRoute from "./LayoutRoute";
import { Movies, Favorite } from "@pages";

export default function Router() {
  return (
    <Routes>
      <Route element={<LayoutRoute />}>
        <Route path="/" element={<Movies />} />
        <Route path="/favorite" element={<Favorite />} />
      </Route>
    </Routes>
  );
}
