import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/_home.scss';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to the Blog</h1>
            <p>Explore our latest articles and insights.</p>
            <div className="home-links">
                <Link to="/categories" className="btn">View Categories</Link>
                <Link to="/post/1" className="btn">Read a Post</Link>
            </div>
        </div>
    );
};

export default Home;
