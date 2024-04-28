import React from 'react';
import './MyPosts.css';

const MyPosts = () => {
    // Sample data for demonstration
    const posts = [
        { id: 1, title: "Green Keys", status: "LOST" },
        { id: 2, title: "Black Wallet", status: "LOST" },
        { id: 3, title: "Red Scarf", status: "DELIVERED" }
    ];

    return (
        <div className={"my-posts"}>
            <table>
                <thead>
                <tr>
                    <th>Post ID</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Details</th>
                </tr>
                </thead>
                <tbody>
                {posts.map(post => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.status}</td>
                        <td>
                            <button >Details</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyPosts;
