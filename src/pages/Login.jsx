import React from "react";
import { Link } from "react-router-dom";

export function Login(){
    return (
        <div className="login">
            <div className="loginSegment">
                <div className="navLogo login-logo">
                    <Link to="/" className="navTopicLogo noTextDeco">
                        <span style={{color: "#9E7F7F"}}>V</span>enture <span style={{color: "#C35D5D"}}>V</span>iew
                    </Link>
                </div>
                <form className="login-form">
                    <div>
                        <h1>Welcome Back!</h1>
                        <h3 className="login-text">Username:</h3>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Username" 
                            className="inputs"/>
                        <h3 className="login-text">Password:</h3>
                        <input 
                            type="text" 
                            name="password" 
                            placeholder="Password" 
                            className="inputs"/>
                    </div>
                    <p>Don't have an account? <Link to="/signup" className="blacktext">Sign Up</Link></p>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    )
}