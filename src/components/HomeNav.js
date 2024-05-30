
import React from "react";

import './HomeNav.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Search, Person, Home} from "@mui/icons-material";
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";
export default function HomeNav() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Navbar.Brand className="candal-regular"  style={{ color: "#6d5b53" }}>
                    LocateLost&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faUserSecret} style={{ color:"#6d5b53"  }} />
                </Navbar.Brand>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input
                        placeholder="Search for the items you lost"
                        className="searchInput"
                    />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <div className="topbarLink">
                        <Home sx={{ fontSize: 27,color:"#6d5b53" }} />
                        <Link className="topbarText" to="/LocateLost" >Homepage</Link>
                        <Person sx={{fontSize: 27, color:"#6d5b53" }}/>
                        <Link className="topbarText" to="/Profile">Profile</Link>
                    </div>

                </div>

                <img src="/images/Konu.png" alt="" className="topbarImg"/>
            </div>
        </div>
    );
}