import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PostDetails({ postId }) {
    const [post, setPost] = useState(null);
    const [comment, setComment] = useState('');

    const fetchPost = () => {
        axios.get(`http://localhost:4000/posts/${postId}`).then(res => {
            setPost(res.data);
        });
    };

    useEffect(() => {
        fetchPost();
    }, [postId]);

    const addComment = () => {
        if (comment.trim() === '') return;
        axios
            .post(`http://localhost:4000/posts/${postId}/comments`, { text: comment })
            .then(() => {
                setComment('');
                fetchPost();
            });
    };

    if (!post) return <div>Wczytywanie...</div>;

    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>

            <h4>Komentarze</h4>
            <ul>
                {post.comments.map(c => (
                    <li key={c.id}>{c.text}</li>
                ))}
            </ul>

            <input
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder="Nowy komentarz"
            />
            <button onClick={addComment}>Dodaj komentarz</button>
        </div>
    );
}
