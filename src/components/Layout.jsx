import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";


export function Layout(){
    return(
        <div>
            <Header />
            <Outlet className="content"/>
            <Footer />
        </div>
    )
}