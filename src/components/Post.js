import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import './Post.css';

const Post = (
) => {
  return (
    <div className="post">
        <div className="post-wrapper">
            <div className="post-top">
                <img className="post-img" src="/images/1.jpeg" alt=""/>
            </div>

            <div className="post-bottom">
                <h1 className="post-title">LOST UMBRELLA</h1>
                <LocationOnIcon className="post-icon"/>
                <span className="post-location">A Block</span>
                <div>
                    <DateRangeIcon className="post-icon"/>
                    <span className="post-date">23.04.2024 </span>
                </div>

                <div className={"post-bottom-right"}>
                    <button className="details-button">Details</button>
                </div>
            </div>


        </div>

    </div>
  );
}
export default Post;