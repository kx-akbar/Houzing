import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<h1>Home</h1>} />
          <Route path="proporties" element={<h1>Proporties</h1>} />
          <Route path="*" element={<h1>404 NOT FOUND PAGES</h1>} />
          {/* <Route path="/" element={<Navigate to={'/home'} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Root;
