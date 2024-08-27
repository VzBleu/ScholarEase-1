import React from "react"

import RegSideBar from "../common/regsidebar/RegSidebar"

import "./RegProfile.css"
export default function RegProfile() {
    return (
        <div className="RegProfileDiv1">
            <div className="RegProfileDiv1-1">
                <RegSideBar />
            </div>
            <div className="RegProfileDiv1-2">
                <div className="RegProfileDiv1-2-1">
                    profile
                </div>
                <div className="RegProfileDiv1-2-2">
                    Main Info and Personal Info
                </div>
                <div className="RegProfileDiv1-2-3">
                    Education and Scholarship Status
                </div>
            </div>
        </div>
    )
}