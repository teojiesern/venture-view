import React from "react";
import { Link, NavLink } from "react-router-dom";

export function Header(){
    let selected = {
        fontWeight: "bold",
        textDecoration: "underline"
    }

    return(
        <div className="navigation">
            <div className="navLogo">
                <Link to="/" className="navTopicLogo noTextDeco">
                    <span style={{color: "#9E7F7F"}}>V</span>enture <span style={{color: "#C35D5D"}}>V</span>iew
                </Link>
            </div>
            
            <div className="subNavigation">
                <NavLink 
                    to="/about" 
                    className="noTextDeco blacktext paddingL navs" 
                    style={({isActive}) => isActive ? selected : null}>
                    About
                </NavLink>
                {/* <NavLink 
                    to="/map" 
                    className="noTextDeco blacktext paddingL" 
                    style={({isActive}) => isActive ? selected : null}>
                    Map
                </NavLink> */}
                <NavLink 
                    to="/login" 
                    className="noTextDeco blacktext paddingL navs" 
                    style={({isActive}) => isActive ? selected : null}>
                    Login
                </NavLink>
                <NavLink 
                    to="/signup" 
                    className="noTextDeco blacktext paddingL navs"
                    style={({isActive}) => isActive ? selected : null}>
                    Signup
                </NavLink>
            </div>
        </div>
    )
}