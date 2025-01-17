import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/_categories.scss';

const Categories: React.FC = () => {
    return (
        <div className="categories">
            <h1>Categories</h1>
            <ul>
                <li><Link to="/post/1">Category 1</Link></li>
                <li><Link to="/post/2">Category 2</Link></li>
                <li><Link to="/post/3">Category 3</Link></li>
            </ul>
        </div>
    );
};

export default Categories;
