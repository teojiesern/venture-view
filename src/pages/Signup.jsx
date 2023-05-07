import React from "react"
import axios from "axios"
import { Link } from "react-router-dom";

export function Signup(){
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data)
        axios.post('http://127.0.0.1:8000/users/', data)
            .then(response => {
            console.log(response.data);
            })
            .catch(error => {
            console.log(error);
            });
    };

    return (
        <div className="signup">
            <div className="signupL">
                <div className="signupL-content">
                    <Link to="/"><img src="/assets/blackWhiteLogo.png" /></Link>
                    <h1 style={{letterSpacing: ".5rem", textShadow: "2px 3px black"}}>A few clicks away from creating your own Venture View Account</h1>
                </div>
            </div>
            <form className="signup-form">
                <div>
                    <h1>Register</h1>
                    <p>Searching for startups efficiently</p>
                    <h3 className="login-text">Email</h3>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Email" 
                        className="inputs"/>
                    <h3 className="login-text">Username</h3>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        className="inputs"/>
                    <h3 className="login-text">Password</h3>
                    <input 
                        type="text" 
                        name="password" 
                        placeholder="Password" 
                        className="inputs"/>
                    <h3 className="login-text">Confirm Password</h3>
                    <input 
                        type="text" 
                        name="password" 
                        placeholder="Confirm Password" 
                        className="inputs"/>
                    <div className="tnc-container">
                        <input
                            type="checkbox"
                            id="tnc"
                        />
                        <label htmlFor="tnc">I agree to all the terms and conditions</label>
                    </div>
                    <p>Already have an account? <Link to="/login" className="blacktext">Log In</Link></p>
                </div>
                <button type="submit" className="submit-btn">Signup</button>
            </form>
        </div>
    )
}