import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import HistoryPage from "./Pages/HistoryPage";
import HomePage from "./Pages/HomePage";

const App = () => {
  return (
    <div className="h-screen w-full bg-[#e7e9eb]">
      <div className="">
        <Navbar />
      </div>
      <>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/History" element={<HistoryPage />} />
        </Routes>
      </>
    </div>
  );
};

export default App;
