import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/pages/Home.js'
import BasicExample from "./components/BasicExample";
import Application from "./components/pages/Application";
import Login from "./components/pages/Login";
import FormPage from "./components/pages/FormPage";
import HomeNav from "./components/HomeNav";
import Profile from "./components/pages/Profile";
import MyPosts from "./components/MyPosts/MyPosts";
import Settings from "./components/Settings/Settings";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";

export const Routeres = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<><BasicExample /><Home /></>} />
                <Route path="/login"  element={<><BasicExample /><Login /></>} />
                <Route path= "/LocateLost" element={<Application />} />
                <Route path= "/LostForm" element={<><HomeNav/>< FormPage/> </>} />
                <Route path= "/Profile" element={<><HomeNav/>< Profile/> <Settings /> </>} />
                <Route path= "/myposts" element={<><HomeNav/>< Profile/> <MyPosts /> </>} />
                <Route path= "/AboutUs" element={<><BasicExample/>< AboutUs/>  </>} />
                <Route path= "/ContactUs" element={<><BasicExample/>< ContactUs/>  </>} />
                



            </Routes>
        </Router>
    );
}