import React from "react"
import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/Guest/Homepage/Homepage"
import SignUp from "./pages/Guest/Sign-Up/SignUp"
import AboutUs from "./pages/Guest/About Us/AboutUs"
import Login from "./pages/Guest/Login/Login"

import RegHome from "./pages/Registered/RegHome/RegHome"
import RegApplication1 from "./pages/Registered/RegApplication/RegApplication1"
import RegApplication2 from "./pages/Registered/RegApplication/RegApplication2"
import RegApplication3 from "./pages/Registered/RegApplication/RegApplication3"
import RegApplication4 from "./pages/Registered/RegApplication/RegApplication4"
import RegApplication5 from "./pages/Registered/RegApplication/RegApplication5"
import RegStatus from "./pages/Registered/RegStatus/RegStatus"
import RegProfile from "./pages/Registered/RegProfile/RegProfile"
import RegFAQs from "./pages/Registered/RegFAQs/RegFAQs"
import RegFeedbacks from "./pages/Registered/RegFeedbacks/RegFeedback"

import "./App.css"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/regDashboard" element={<RegHome />} />
        <Route path="/regFAQs" element={<RegFAQs />} />
        <Route path="/regFeedbacks" element={<RegFeedbacks />} />
        <Route path="/regApplication" element={<RegApplication1 />} />
        <Route path="/regStatus" element={<RegStatus />} />
        <Route path="/regProfile" element={<RegProfile />} />
      </Routes>
    </div>
  )
}