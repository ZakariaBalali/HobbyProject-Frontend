import React, { useState } from 'react';
import Header from '../components/Header';
import Section from '../reusables/Section';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { personalInfo, experiences, education, footerLinks } from '../data/data';
import '../styles/styles.css'; // Importing the CSS file

const App = () => {
    const [language, setLanguage] = useState('en'); // State for current language
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

    // Fetch personal information, experiences, education, and footer links based on language
    const info = personalInfo(language);
    const exp = experiences(language);
    const edu = education(language);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="container">
            {!isSidebarOpen && ( // Only show the button if the sidebar is not open
                <button className="menu-btn" onClick={toggleSidebar}>
                    &#9776; {/* Hamburger icon */}
                </button>
            )}
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} onLanguageChange={setLanguage} />
            <Header {...info} />
            <Section title={language === 'en' ? "Summary" : "Samenvatting"}>
                <p>{language === 'en' ? "A passionate front-end developer with experience in building responsive web applications." : "Een gepassioneerde front-end ontwikkelaar met ervaring in het bouwen van responsieve webapplicaties."}</p>
            </Section>
            <SkillsSection language={language} />
            <ExperienceSection experiences={exp} />
            <EducationSection education={edu} />
            <Footer {...footerLinks} />
        </div>
    );
};

export default App;
