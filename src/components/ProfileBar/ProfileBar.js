import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import './ProfileBar.css';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import ShareIcon from '@mui/icons-material/Share';

function ProfileBar() {
    const fileInputRef = useRef(null);
    const [profileImage, setProfileImage] = useState("/images/1.jpeg"); // Initial image URL

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const imageURL = URL.createObjectURL(file);
            setProfileImage(imageURL);
        } else {
            alert("Please select a valid image file.");
        }
    };

    return (
        <div className={"P-bar"}>
            <div className={"P-bar-container"}>
                <div className={"P-bar-item"}>
                    <img src={profileImage} alt="profile" className={"P-bar-profile"} />
                </div>
                <div className="icon-container">
                    <EditIcon
                        sx={{ fontSize: 27 }}
                        className="upload-icon"
                        onClick={handleUploadClick}
                    />
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    accept="image/*" // Accept only image files
                    onChange={handleFileChange}
                />
            </div>
            <div className="P-bar-center">
                {/* Link to Settings component */}
                <Link to="/Profile" className="sidebarListItem">
                    <SettingsIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">Settings</span>
                </Link>
                {/* Link to MyPosts component */}
                <Link to="/myposts" className="sidebarListItem">
                    <ShareIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">My Posts</span>
                </Link>
            </div>
        </div>
    );
}

export default ProfileBar;
