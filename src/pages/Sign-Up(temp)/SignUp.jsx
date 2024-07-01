import React from "react"
import Navbar from "../../components/Navbar/navbar"
import PopUp from "./components/pop-up"
import Footer from "../../components/Footer/footer"
import "./components/signup.css"

export default function SignUp() {
    return (
        <div>
            <Navbar />
            <div className="popUpSuperDiv">
                <PopUp />
            </div>
            <div className="signUpContentDiv">
            </div>
            <Footer />
        </div>
    )
}