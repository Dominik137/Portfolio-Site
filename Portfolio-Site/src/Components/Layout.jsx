import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Layout(){

    return(
        <>
        
        
        <Navbar /> 

          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>

    

        </>
    )
}

export default Layout