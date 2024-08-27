import React from "react"
import RegSideBar from "../common/regsidebar/RegSidebar"
import Profile from "../common/regprofile/regprofile"

import "./RegHome.css"
import "../common/allReg.css"

export default function RegHome() {
    return (
        <div className="RegHomeDiv1 ">
            <div className="RegHomeDiv1-1 ">
                <RegSideBar />
            </div>
            <div className="RegHomeDiv1-2 ">
                <div className="RegHomeDiv1-2-1 ">
                    <Profile />
                </div>
                <div className="RegHomeDiv1-2-2 ">
                    <div className="RegHomeDiv1-2-2-1 ">
                        update goes here
                        <div className="RegHomeDiv1-2-2-1-1">
                            total scholars
                        </div>
                        <div className="RegHomeDiv1-2-2-1-1">
                            total applicants
                        </div>
                    </div>
                    <div className="RegHomeDiv1-2-2-2 ">
                        mission goes here
                    </div>
                </div>
                <div className="RegHomeDiv1-2-3 ">
                    chart
                </div>
            </div>
        </div>
    )
}