import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './strony/Home';
import Post from './strony/Post';
import Categories from './strony/Categories';
import './styles/main.scss';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post/:id" element={<Post />} />
                    <Route path="/categories" element={<Categories />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
