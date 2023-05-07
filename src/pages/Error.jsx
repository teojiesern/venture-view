import React from "react";
import { Link } from "react-router-dom";

export function Error(){
    return(
        <div className="page404">
            <div>
                <h1 className="bluetext" style={{textShadow: "1px 1px blue"}}>404</h1>
                <h1>Oops! You weren't supposed to see this</h1>
                <p className="greytext">The page you look for no longer exist</p>
                <p className="greytext">Return to the <Link to="/" className="greytext">home page</Link> and remember: you haven't see anything</p>
            </div>
            <img src="/assets/404.jpg"/>
        </div>
    )
}