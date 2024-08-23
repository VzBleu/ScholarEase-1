import React from "react"
import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/Guest/Homepage/Homepage"
import SignUp from "./pages/Guest/Sign-Up/SignUp"
import AboutUs from "./pages/Guest/About Us/AboutUs"
import Login from "./pages/Guest/Login/Login"
import "./App.css"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}