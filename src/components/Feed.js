import Post from "./Post.js";

import "./Feed.css";

import Sidebar from "./Siderbar/Sidebar.js";

function Feed({ situation }) {
    // Assume posts is an array of post objects
    const posts = [
        {
            id: 1,
            status: "LOST",
            image: "/images/icard.jpeg",
            name: "Istanbul Card",
            profileImage: "/images/profile.png"
        },
        {
            id: 2,
            status: "FOUND",
            name: "Keys",
            image: "/images/default.jpeg"
        },
        {
            id: 3,
            name: "Red scarf",
            status: "DELIVERED",
            profileImage: "/images/asya.jpg"
        },
        {
            id: 4,
            name: "School Card",
            image: "/images/scard.jpeg",
            status: "LOST"
        },
        {
            id: 5,
            status: "FOUND",
            name: "Lost Airpods",
            image: "/images/headphone.jpeg",
            profileImage: "/images/asya.jpg",
        },
        {
            id: 6,
            name: "School Card",
            status: "DELIVERED",
            image: "/images/scard.jpeg",
        },
        {
            id: 7,
            status: "LOST",
            name: "Lost Airpods",
            image: "/images/headphone.jpeg",
        },
        {
            id: 8,
            status: "FOUND",
            name: "Istanbul Card",
            image: "/images/icard.jpeg",
        },
        {
            id: 9,
            status: "DELIVERED",
            name: "Umbrella",
            profileImage: "/images/asya.jpg"
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

