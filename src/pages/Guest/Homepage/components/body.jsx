import React from "react"

export default function Body() {
    return (
        <div className="bodyDiv">
            <div className="bodyContent">
                <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1719822537/pexels-zen-chung-5538343_1_ams907.png" alt="" />
                <div className="bodyContentDescription">
                    <h2>Discover Scholarships</h2>
                    <p>Beneficiaries of this program may be eligible for transfer to a higher category within the program if they meet and fulfill the program's qualification requirements.</p>
                    <button>Find Scholarships</button>
                </div>
            </div>
            <div className="bodyContent">
                <div className="bodyContentDescription">
                    <h2>About Scholarship Program</h2>
                    <p>Continuing with the scholarship program, participants in the program will be referred to as “MALOLENYO ISSKOLAR”.</p>
                    <button className="seeMoreBtn">See More</button>
                </div>
                <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1719822579/pexels-zen-chung-5538343_2_slr136.png" alt="" />
            </div>
            <div className="bodyContent">
                <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1719822580/pexels-zen-chung-5538343_3_nbc9mn.png" alt="" />
                <div className="bodyContentDescription">
                    <h2>Dakila ang Bayan na may Malasakit sa Mamamayan</h2>
                    <p>Explore scholarships tailored to your field of study and personal interests. Seek out financial assistance options to support your educational goals.</p>
                </div>
            </div>
        </div>
    )
}