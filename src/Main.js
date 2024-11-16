import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './Pages/App';
import GitHubProjects from './Pages/GithubProjects'; // Adjust the path to your GitHub projects component
import Playground from './Pages/Playground';
const Main = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/github-projects" element={<GitHubProjects />} />
                <Route path="/playground" element={<Playground />} />
            </Routes>
        </Router>
    );
};

export default Main;
