import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./view/register";
import Home from "./../src/view/home";
import LogIn from "./view/logIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
