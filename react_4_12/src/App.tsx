import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Routerr from './components/router';
import S1 from './strony/1';
import S2 from './strony/2';
import S3 from './strony/3';

const App: React.FC = () => {
    return (
        <Router>
            <Routerr />
            <Routes>
                <Route path="/1" element={<S1 />} />
                <Route path="/2" element={<S2 />} />
                <Route path="/3" element={<S3 />} />
            </Routes>
        </Router>
    );
};

export default App;
