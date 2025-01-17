import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './strony/PostList';
import PostDetail from './strony/PostDetail';
import './styles/main.scss';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PostList />} />
                <Route path="/post/:id" element={<PostDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
