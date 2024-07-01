import React from "react"
import Navbar from "../../components/Navbar/navbar"
import Header from "./components/header"
import Body from "./components/body"
import Footer from "../../components/Footer/footer"
import "./components/homepage.css"

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <Header />
            <Body />
            <Footer />
        </div>
    )
}