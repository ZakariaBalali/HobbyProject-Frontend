// components/SkillsSection.js

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/constants';

const SkillsSection = ({ language }) => {
    const skills = language === 'en' ? [
        "JavaScript (ES6+)",
        "React & Redux",
        "HTML & CSS (Sass)",
        "Responsive Web Design"
    ] : [
        "JavaScript (ES6+)",
        "React & Redux",
        "HTML & CSS (Sass)",
        "Responsief Webdesign"
    ];

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            style={{
                padding: '20px',
                background: '#f9f9f9',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px',
            }}
        >
            <h2>{language === 'en' ? "Skills" : "Vaardigheden"}</h2>
            <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </motion.section>
    );
};

export default SkillsSection;
