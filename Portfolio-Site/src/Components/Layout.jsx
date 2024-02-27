import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import ProjectPage from "./ProjectPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Layout(){

    return(
        <>
        
        
        <Navbar /> 

          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/projectPage/:projectName" element={<ProjectPage />} />
          </Routes>

    

        </>
    )
}

export default Layout