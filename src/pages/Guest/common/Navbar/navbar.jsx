import React from "react"
import { Link } from "react-router-dom"

import "./navbar.css"

export default function Navbar() {
    return (
        <nav>
            <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1719735599/Ph_seal_bulacan_malolos_400x400_nkfoxm.png" alt="" />
            <div className="navADiv">
                <span><Link className="removeDeco white" to="/">Home</Link></span>
                <span><Link className="removeDeco white" to="/about">About Us</Link></span >
                <span><a className="removeDeco white" href="#contacts">Contact Us</a></span >
                <button className="loginBtn"><Link className="removeDeco white" to="/login">Login</Link></button>
                <button className="signupBtn"><Link className="removeDeco white" to="/signup">Sign-up</Link></button>
            </div>
        </nav>
    )
}