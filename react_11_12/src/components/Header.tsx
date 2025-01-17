import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/_header.scss';

const Header: React.FC = () => {
    return (
        <header className="header">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/categories">Categories</Link>
            </nav>
        </header>
    );
};

export default Header;
