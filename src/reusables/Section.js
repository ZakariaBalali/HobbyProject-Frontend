import React from 'react';
import { motion } from 'framer-motion';
import {fadeIn} from "../constants/constants";

const Section = ({ title, children }) => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{duration: 0.5}}
            style={{
                margin: '30px 0',
                padding: '20px',
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
            }}
        >
            <h2 style={{ color: '#007BFF', borderBottom: '2px solid #007BFF', paddingBottom: '5px' }}>{title}</h2>
            {children}
        </motion.section>
    );
};

export default Section;
