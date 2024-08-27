import React from "react"

import RegSideBar from "../common/regsidebar/RegSidebar"

import "./RegApplication.css"
export default function RegApplication5() {
    return (
        <div className="RegApplicationDiv1">
            <div className="RegApplicationDiv1-1">
                <RegSideBar />
            </div>
            <div className="RegApplicationDiv1-2">
                <div className="RegApplicationDiv1-2-1">
                    profile
                </div>
                <div className="RegApplicationDiv1-2-2">
                    Documents
                </div>
                <div className="RegApplicationDiv1-2-3">
                    <button>Previous</button>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}