import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../constants/constants';
import profileImage from '../../public/images/mark.jpg'; // Adjust the path to your image

const Header = ({ name, jobTitle, location, email, phone }) => {
    return (
        <motion.header
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            style={{
                padding: '20px',
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
            }}
        >
            <img
                src={profileImage}
                alt="Profile"
                style={{
                    width: '100px',  // Adjust the size as needed
                    borderRadius: '50%',
                    marginBottom: '10px',
                }}
            />
            <h1>{name}</h1>
            <p style={{ fontSize: '1.2em', color: '#333' }}>{jobTitle} | {location}</p>
            <p>Email: {email} | Phone: {phone}</p>
        </motion.header>
    );
};

export default Header;
