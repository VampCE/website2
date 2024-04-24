import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/pages/Home.js'
import BasicExample from "./components/BasicExample";
import Application from "./components/pages/Application";
import Login from "./components/pages/Login";

export const Routeres = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<><BasicExample /><Home /></>} />
                <Route path="/login"  element={<><BasicExample /><Login /></>} />
                <Route path= "/LocateLost" element={<Application />} />
            </Routes>
        </Router>
    );
}