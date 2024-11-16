// GitHubProjects.js
import React, { useEffect, useState } from 'react';
import '../styles/Sidebar.css'; // Import the CSS for styling the sidebar
import Sidebar from '../components/Sidebar'; // Make sure to import your Sidebar component
import GitHubProjectsSection from '../components/GitHubProjectsSection'; // Import the new section component

const GitHubProjects = () => {
    const [repositories, setRepositories] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const fetchRepositories = async () => {
        const response = await fetch('https://api.github.com/users/ZakariaBalali/repos');
        const data = await response.json();
        setRepositories(data);
    };

    useEffect(() => {
        fetchRepositories();
    }, []);

    return (
        <div className="container">
            <button className="menu-btn" onClick={toggleSidebar}>
                &#9776;
            </button>
            <Sidebar isOpen={isOpen} onClose={toggleSidebar} onLanguageChange={() => {}} />
                <GitHubProjectsSection projects={repositories} />
        </div>
    );
};

export default GitHubProjects;
