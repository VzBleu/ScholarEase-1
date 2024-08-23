import React from "react"
import { Link } from "react-router-dom"

export default function PopUp() {
    return (
        <div className="popUpDiv">
            <img src="https://res.cloudinary.com/ddiyjqv0u/image/upload/v1719735599/Ph_seal_bulacan_malolos_400x400_nkfoxm.png" alt="" />
            <form>
                <div>
                    <p className="p1">Welcome!</p>
                    <p className="p2">Sign up For An Account</p>
                </div>
                <div className="formContent">
                    <div className="fnlnDiv">
                        <div className="d1">
                            <label htmlFor="signUpFirstName">First Name</label>
                            <input type="text" name="signUpFirstName" id="signUpFirstName" />
                        </div>
                        <div className="d2">
                            <label htmlFor="signUpLastName">Last Name</label>
                            <input type="text" name="signUpLastName" id="signUpLastName" />
                        </div>
                    </div>
                    <div className="emailDiv">
                        <label htmlFor="signUpEmailAd">Email Address</label>
                        <input type="text" name="signUpEmailAd" id="signUpEmailAd" />
                    </div>
                    <div className="passDiv">
                        <div className="d1-1">
                            <label htmlFor="signUpPassword">Password</label>
                            <input type="text" name="signUpPassword" id="signUpPassword" />
                        </div>
                        <div className="d2">
                            <label htmlFor="signUpConfirmPass">Confirm Password</label>
                            <input type="text" name="signUpConfirmPass" id="signUpConfirmPass" />
                        </div>
                    </div>
                    <div className="termsDiv">
                        <input type="checkbox" name="agree" id="agree" />
                        <label htmlFor="agree">I agree to the <a href="">Terms and Conditions</a></label><br />
                    </div>
                    <button className="submit" name="submit" id="submit"><Link className="removeDeco" to="/login">Submit</Link></button>
                </div>
                <p className="signInP">Already have an account ? <Link className="removeDeco" to="/login">Login</Link></p>
            </form>
        </div>
    )
}   