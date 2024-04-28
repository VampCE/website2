import Post from "./Post.js";

import "./Feed.css";

import Sidebar from "./Siderbar/Sidebar.js";

function Feed({ situation }) {
    // Assume posts is an array of post objects
    const posts = [
        {
            id: 1,
            status: "LOST",
            image: "/images/1.jpeg",
            profileImage: "/images/profile.png"
        },
        {
            id: 2,
            status: "FOUND",
            image: "/images/default.jpeg"
        },
        {
            id: 3,
            status: "DELIVERED",
            profileImage: "/images/1.jpeg"
        },
        {
            id: 4,
            status: "LOST"
        },
        {
            id: 5,
            status: "FOUND",
            image: "/images/1.jpeg"
        },
        {
            id: 6,
            status: "DELIVERED",
            image: "/images/1.jpeg"
        },
        {
            id: 7,
            status: "LOST",
            image: "/images/1.jpeg"
        },
        {
            id: 8,
            status: "FOUND",
            image: "/images/1.jpeg"
        },
        {
            id: 9,
            status: "DELIVERED"
        }
    ];


    const filteredPosts = posts.filter(post => situation === '' || post.status === situation);

    return (


            <div className="feed">
                <div className="feedWrapper">
                    {filteredPosts.map(post => (
                    <Post key={post.id} {...post} />
                    ))}
                    </div>
                </div>


    );
}

export default Feed;

