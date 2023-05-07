import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { Signup } from "./pages/Signup";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { CompanyDetails } from "./pages/CompanyDetail";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<Signup />}/>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path=":name" element={<CompanyDetails />}/>
          <Route path="about" element={<About />}/>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}