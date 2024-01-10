import Nav from "./Nav"
import Home from './Home';
import React from "react";
import Why_choose from "./Why_choose";
import Course from "./Course";
import About from "../About";
import Employe from "./Employe";
import Contact from "./Contact";
import Footer from "./Footer";
import Buttontop from "./Buttontop";
import Login from "./Login";

export default function Font(){
    return(
       <React.Fragment>
         <Nav />
        <Home/>
        <Why_choose/>
        <Course />
        <About />
        <Employe />
        <Contact />
        <Footer />
        {/* <Buttontop /> */}
        {/* Log in Nav.js  */}
       </React.Fragment>
    )
}