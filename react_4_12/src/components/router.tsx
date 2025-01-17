import React from 'react';
import { Link } from 'react-router-dom';

const Routerr: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/1">1</Link></li>
                <li><Link to="/2">2</Link></li>
                <li><Link to="/3">3</Link></li>
            </ul>
        </nav>
    );
};

export default Routerr;
