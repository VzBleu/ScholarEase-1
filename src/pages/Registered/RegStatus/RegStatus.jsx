import React from "react"

import RegSideBar from "../common/regsidebar/RegSidebar"

import "./RegStatus.css"
export default function RegStatus() {
    return (
        <div className="RegStatusDiv1">
            <div className="RegStatusDiv1-1">
                <RegSideBar />
            </div>
            <div className="RegStatusDiv1-2">
                <div className="RegStatusDiv1-2-1">
                    profile
                </div>
                <div className="RegStatusDiv1-2-2">
                    Current Status
                </div>
                <div className="RegStatusDiv1-2-3">
                    Application Details
                </div>
            </div>
        </div>
    )
}