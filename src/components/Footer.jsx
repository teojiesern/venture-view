import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsTelephone } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { ImFacebook2 } from "react-icons/im";
import { MdOutlineFax } from "react-icons/md";

export function Footer(){
    return(
        <div className="footer">
            <div className="footer-top">
                <img src="/assets/footerLogo.png" />
                <div className="followUs">
                    <h1>Follow Us</h1>
                    <div className="smedia">
                        <ImFacebook2 />
                        <BsInstagram />
                        <FiTwitter />
                    </div>
                </div>
                <div className="support">
                    <h1>Support</h1>
                    <Link 
                        to="/help" 
                        className="supports" 
                        style={{display: "block"}}>
                        Help
                    </Link>
                    <Link 
                        to="/faq" 
                        className="supports">
                            FAQs
                    </Link>
                </div>
                <div className="contact">
                    <h1>Contact Us</h1>
                    <p className="phoneNum"><BsTelephone />+60 165006994</p>
                    <p className="phoneNum"><MdOutlineFax />+60 165006994</p>
                </div>
            </div>
            <div className="footer-bottom">
                <Link >Terms and Conditions</Link> |
                <Link >@2023 VentureView All rights reserved</Link> |
                <Link >Privacy Policy</Link>
            </div>
        </div>
    )
}