import React from 'react';
import { motion } from 'framer-motion';
import Section from "../reusables/Section"; // Adjust the import path if necessary
import { fadeIn } from "../constants/constants"; // Adjust the import path if necessary
import { Chip } from '@mui/material'; // Import Material-UI Chip

const languageColors = {
    JavaScript: '#f7df1e',
    Python: '#3776AB',
    Java: '#007396',
    CSharp: '#68217A',
    PHP: '#4F5B93',
    Ruby: '#CC342D',
    Go: '#00ADD8',
    Swift: '#F05138',
    TypeScript: '#007ACC',
    Kotlin: '#F18E33',
    // Add more languages and their associated colors as needed
};

const GitHubProjectsSection = ({ projects }) => {
    return (
        <Section title="GitHub Projects">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.5 }}
                    style={{
                        background: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                        marginBottom: '15px',
                        width: '100%',
                        maxWidth: '100%', // Ensure it stays within the parent container's width
                        padding: '20px',
                        boxSizing: 'border-box', // Make padding included in width calculation
                        overflow: 'hidden', // Prevent content overflow
                    }}
                >
                    <h3>
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#333' }}>
                            {project.name}
                        </a>
                    </h3>
                    <p style={{ fontStyle: 'italic', margin: '5px 0' }}>{project.description || 'No description available.'}</p>
                    <p>
                        {project.language ? (
                            <Chip
                                label={project.language}
                                style={{
                                    marginLeft: '10px',
                                    backgroundColor: languageColors[project.language] || '#e0e0e0', // Fallback color
                                    color: '#fff',
                                }}
                            />
                        ) : (
                            ' Not specified'
                        )}
                    </p>
                    <p>
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>
                            View Project
                        </a>
                    </p>
                </motion.div>
            ))}
        </Section>
    );
};

export default GitHubProjectsSection;
