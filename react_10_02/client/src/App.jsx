import React, { useState } from 'react';
import PostsList from './components/PostsList';
import PostDetails from './components/PostDetails';

export default function App() {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <div style={{ display: 'flex', gap: '2rem', padding: '1rem' }}>
            <PostsList onSelect={setSelectedPost} />
            {selectedPost && <PostDetails postId={selectedPost} />}
        </div>
    );
}
