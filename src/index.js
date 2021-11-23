import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import House from "./pages/House";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="house/*" element={<House />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
