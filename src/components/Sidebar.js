// components/Sidebar.js

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../styles/Sidebar.css'; // Import the CSS for styling the sidebar
import LanguageSwitcher from '../util/LanguageSwitcher'; // Adjust the import path if necessary

const Sidebar = ({ isOpen, onClose, onLanguageChange }) => {
    const navigate = useNavigate(); // Initialize the navigate function

    // Function to handle navigation to the GitHub projects page
    const handleGitHubProjectsClick = () => {
        navigate('/github-projects'); // Redirect to the GitHub projects page
        onClose(); // Close the sidebar when navigating
    };

    // Function to handle navigation to the Playground page
    const handlePlaygroundClick = () => {
        navigate('/playground'); // Redirect to the Playground page
        onClose(); // Close the sidebar when navigating
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={onClose}>×</button>
            <h2>Menu</h2>
            <ul>
                <li>
                    <span onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
                        Home
                    </span>
                </li>
                <li>
                    <span onClick={handleGitHubProjectsClick} style={{cursor: 'pointer'}}>
                        GitHub Projects
                    </span>
                </li>
                <li>
                    <span onClick={handlePlaygroundClick} style={{cursor: 'pointer'}}>
                        Playground
                    </span>
                </li>
            </ul>
            <div className="language-switcher">
                <LanguageSwitcher onLanguageChange={onLanguageChange} />
            </div>
        </div>
    );
};

export default Sidebar; // Ensure this line is included
