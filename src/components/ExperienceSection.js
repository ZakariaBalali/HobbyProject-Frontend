import React from 'react';
import { motion } from 'framer-motion';
import Section from "../reusables/Section";
import {fadeIn} from "../constants/constants";

const ExperienceSection = ({ experiences }) => {
    return (
        <Section title="Experience">
            {experiences.map((experience, index) => (
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    transition={{duration: 0.5}}
                    style={{
                        padding: '20px',
                        background: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <h3>{experience.title} - {experience.company}</h3>
                    <p style={{ fontStyle: 'italic' }}>{experience.location} | {experience.period}</p>
                    <ul>
                        {experience.responsibilities.map((responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </Section>
    );
};

export default ExperienceSection;
