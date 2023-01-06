import React from "react";
import "./sass/main.scss";
import SignUp from "./pages/sign/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="app">
        <Home />
        {/* <SignUp /> */}
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/settings" element={<Settings />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
