import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PostsList({ onSelect }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/posts').then(res => setPosts(res.data));
    }, []);

    return (
        <div>
            <h2>Posty</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id} onClick={() => onSelect(post.id)} style={{ cursor: 'pointer' }}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
