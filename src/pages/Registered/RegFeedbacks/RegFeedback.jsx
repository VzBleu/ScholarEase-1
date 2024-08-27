import React from "react"

import RegSideBar from "../common/regsidebar/RegSidebar"
import "./RegFeedbacks.css"
export default function RegFeedbacks() {
    return (
        <div className="FeedbacksDiv1">
            <div className="FeedbacksDiv1-1">
                <RegSideBar />
            </div>
            <div className="FeedbacksDiv1-2">
                <div className="FeedbacksDiv1-2-1">
                    profile
                </div>
                <div className="FeedbacksDiv1-2-2">
                    Feedbacks
                </div>
            </div>
        </div>
    )
}