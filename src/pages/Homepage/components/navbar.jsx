import React from "react"
import "./homepage.css"

export default function Navbar() {
    return (
        <nav>
            <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1719735599/Ph_seal_bulacan_malolos_400x400_nkfoxm.png" alt="" />
            <div className="navADiv">
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Contact Us</a>
                <button className="loginBtn">Log-in</button>
                <button className="signupBtn">Sign-up</button>
            </div>
        </nav>
    )
}