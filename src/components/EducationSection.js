import React from 'react';
import { motion } from 'framer-motion';
import Section from "../reusables/Section";
import {fadeIn} from "../constants/constants";

const EducationSection = ({ education }) => {
    return (
        <Section title="Education">
            {education.map((edu, index) => (
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
                    <h3>{edu.degree} - {edu.institution}</h3>
                    <p style={{ fontStyle: 'italic' }}>{edu.location} | {edu.period}</p>
                </motion.div>
            ))}
        </Section>
    );
};

export default EducationSection;
