import Post from "./Post.js";

import "./Feed.css";


export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>

        </div>
    );
}
