import React from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Reserve from "./pages/reserve/Reserve";
import { Route, Routes } from "react-router-dom"
import "./App.css";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </>
  );
}

export default App;
