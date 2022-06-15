import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../views/Home';
import Tours from "../views/Tours";
import About from "../views/About";
import Contact from "../views/Contact-us"
import Homelayout from "../component/homelayout";
const index = () => {
    return(
        <Homelayout>
    <Routes>
    <Route exact path="/Home" element={<Home/>}></Route>
    <Route exact path="/Tours" element={<Tours/>}></Route>
    <Route exact path="/About" element={<About/>}></Route>
    <Route exact path="/Contact-us" element={<Contact/>}></Route>
    </Routes>
    </Homelayout>
    );
}
export default index;
