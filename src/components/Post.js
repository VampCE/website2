import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import './Post.css';
import {Link} from "react-router-dom";

const Post = ({ status,name, image, profileImage, userProfileUrl }) => {
    let statusText = "";
    let borderColor = "";
    let textColor = "";

    switch (status) {
        case "LOST":
            statusText = "LOST";
            borderColor = "#a20404"; // Red
            textColor = "#a20404"; // Red
            break;
        case "FOUND":
            statusText = "FOUND";
            borderColor = "#ffc107"; // Yellow
            textColor = "#ffc107"; // Yellow
            break;
        case "DELIVERED":
            statusText = "DELIVERED";
            borderColor = "#28a745"; // Green
            textColor = "#28a745"; // Green
            break;
        default:
            statusText = "";
            borderColor = "";
            textColor = "";
            break;
    }

    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="postTop">
                    <div className="image-container" onClick={() => window.location.href = "/userInfo"}>
                        <a href={userProfileUrl}>
                            {profileImage ? (
                                <img className="profile-img" src={profileImage} alt="Profile Image"/>
                            ) : (
                                <img className="profile-img" src={"/images/profile.png"} alt="Default Profile Image"/>
                            )}
                        </a>
                        {image ? (
                            <img className="post-img" src={image} alt="Post Image"/>
                        ) : (
                            <img className="post-img" src={"/images/default.jpeg"} alt="Default Profile Image"/>
                        )}
                    </div>

                    {/* Use the image prop here */}
                    <div className="box">
                        <span className="status-text" style={{
                            borderColor: borderColor,
                            color: textColor,
                            borderWidth: '3px',
                            borderStyle: 'solid',
                            marginLeft: '2px',
                            marginRight: '2px',
                        }}>{statusText}</span>
                    </div>
                </div>

                <div className="post-bottom">
                    <h1 className="post-title"> {name}</h1>
                    <LocationOnIcon className="post-icon"/>
                    <span className="post-location">A Block</span>
                    <div>
                        <DateRangeIcon className="post-icon"/>
                        <span className="post-date">23.04.2024 </span>
                    </div>

                    <div className="post-bottom-right">
                        <Link to="/details" className="details-button ">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
