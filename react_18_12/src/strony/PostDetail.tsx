import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPostById } from '../api/postsApi';
import { Post, User } from '../api/postsApi';
import '../styles/PostDetail.scss';

const PostDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getPost = async () => {
            try {
                if (id) {
                    const { post, user } = await fetchPostById(id);
                    setPost(post);
                    setUser(user);
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getPost();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="post-detail">
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
            <p>
                <strong>Author:</strong> {user?.name} ({user?.email})
            </p>
            <Link to="/">Back to Posts</Link>
        </div>
    );
};

export default PostDetail;
