import React from 'react';
import { motion } from 'framer-motion';
import {fadeIn} from "../constants/constants";

const Footer = ({ linkedin, github }) => {
    return (
        <motion.footer
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
            <p>
                LinkedIn: <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a> |
                GitHub: <a href={github} target="_blank" rel="noopener noreferrer">{github}</a>
            </p>
        </motion.footer>
    );
};

export default Footer;
