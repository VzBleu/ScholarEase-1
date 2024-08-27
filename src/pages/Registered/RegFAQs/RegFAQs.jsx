import React from "react"

import RegSideBar from "../common/regsidebar/RegSidebar"
import "./RegFAQs.css"
export default function RegFAQs() {
    return (
        <div className="FAQsDiv1">
            <div className="FAQsDiv1-1">
                <RegSideBar />
            </div>
            <div className="FAQsDiv1-2">
                <div className="FAQsDiv1-2-1">
                    profile
                </div>
                <div className="FAQsDiv1-2-2">
                    FAQs Content
                </div>
                <div className="FAQsDiv1-2-3">
                    contact us
                </div>
            </div>
        </div>
    )
}