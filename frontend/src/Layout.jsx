import React from "react";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";

export default function Layout(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}