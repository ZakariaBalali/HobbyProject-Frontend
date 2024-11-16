import React, { useState } from 'react';
import ukFlag from '../../public/images/uk-flag.png'; // Replace with your UK flag image path
import dutchFlag from '../../public/images/dutch-flag.png'; // Replace with your Dutch flag image path

const LanguageSwitcher = ({ onLanguageChange }) => {
    const [language, setLanguage] = useState('en'); // Default language is English

    const handleLanguageChange = () => {
        const newLanguage = language === 'en' ? 'nl' : 'en';
        setLanguage(newLanguage);
        onLanguageChange(newLanguage);
    };

    return (
        <button onClick={handleLanguageChange} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            {language === 'en' ? (
                <img src={dutchFlag} alt="Dutch Flag" style={{ width: '30px', height: '20px' }} />
            ) : (
                <img src={ukFlag} alt="UK Flag" style={{ width: '30px', height: '20px' }} />
            )}
        </button>
    );
};

export default LanguageSwitcher;