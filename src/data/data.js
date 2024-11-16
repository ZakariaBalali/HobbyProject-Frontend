// data.js

const personalInfo = (language) => ({
    name: "Zakaria Balali",
    jobTitle: language === 'en' ? "Software Engineer" : "Software Ingenieur",
    location: language === 'en' ? "Hilversum, Netherlands" : "Hilversum, Nederland",
    email: "Zakariabalali_7@hotmail.com",
    phone: "(+31) 0659117141",
});

const experiences = (language) => [
    {
        title: language === 'en' ? "Software Engineer" : "Software Engineer",
        company: "Steltix B.V.",
        location: language === 'en' ? "Utrecht, Netherlands" : "Utrecht, Nederland",
        period: language === 'en' ? "Feb 2023 - Present" : "Februari 2023 - Heden",
        responsibilities: [
            language === 'en' ? "Developed custom software based on client needs." : "Op basis van klantbehoefte heb ik op maat gemaakte software ontwikkeld.",
            language === 'en' ? "Developed front-end web applications using React.js." : "Front-end webapplicaties ontwikkeld door middel van React.js.",
            language === 'en' ? "Maintained customer contacts." : "Klantcontact onderhouden.",
        ],
    },
    {
        title: language === 'en' ? "Graduation Intern" : "Afstudeer Stagiair",
        company: "Steltix B.V.",
        location: language === 'en' ? "Utrecht, Netherlands" : "Utrecht, Nederland",
        period: language === 'en' ? "Sep 2022 - Feb 2023" : "September 2022 - Februari 2023",
        responsibilities: [
            language === 'en' ? "Independently solved problems and researched front-end solutions for the Appshare platform." : "Zelfstandig problemen opgelost en onderzoek gedaan naar front-end oplossingen voor Appshare-platform.",
            language === 'en' ? "Developed front-end web applications in React.js." : "Front-end webapplicaties ontwikkeld in React.js.",
            language === 'en' ? "Worked with the Oracle Fusion ERP system." : "Gewerkt met het Oracle Fusion ERP-systeem.",
        ],
    },
    {
        title: language === 'en' ? "Intern" : "Stagiair",
        company: "Albert Heijn",
        location: language === 'en' ? "Zaandam, Netherlands" : "Zaandam, Nederland",
        period: language === 'en' ? "Feb 2021 - Jul 2021" : "Februari 2021 - Juli 2021",
        responsibilities: [
            language === 'en' ? "Implemented innovative ideas by developing front-end web applications in React.js and Svelte." : "Innovatieve ideeën gerealiseerd door middel van het ontwikkelen van front-end webapplicaties in React.Js en Svelte.",
            language === 'en' ? "Collaborated with front-end developers to create seamless user experiences." : "Samengewerkt met frontendontwikkelaars om naadloze gebruikerservaringen te creëren.",
        ],
    },
];

const education = (language) => [
    {
        degree: language === 'en' ? "Bachelor's in Computer Science" : "Bachelor Informatica",
        institution: "Inholland University",
        location: language === 'en' ? "Haarlem, Netherlands" : "Haarlem, Nederland",
        period: language === 'en' ? "Aug 2018 - Feb 2023" : "Augustus 2018 - Februari 2023",
        details: [
            language === 'en' ? "Development of Windows applications using C#." : "Ontwikkeling van windows applicaties door middel van C#.",
            language === 'en' ? "Designing and building web applications using HTML/CSS/JavaScript." : "Ontwerpen en bouwen van web applicaties met behulp van HTML/CSS/Javascript.",
            language === 'en' ? "Building REST APIs using Java." : "Bouwen van REST APIs met gebruik van Java.",
            language === 'en' ? "Mobile development for Android and iOS (Kotlin and Swift)." : "Mobile development voor Android en iOS (Kotlin en Swift).",
            language === 'en' ? "UI/UX design (Figma)." : "UI/UX design (Figma).",
            language === 'en' ? "Big data & AI (Python)." : "Big data & AI (Python).",
        ],
    },
];

const footerLinks = {
    linkedin: "https://www.linkedin.com/in/zakariabalali/",
    github: "https://github.com/zakariabalali",
};

const skills = (language) => [
    language === 'en' ? "Eager to learn" : "Leergierig",
    language === 'en' ? "Flexible" : "Flexibel",
    language === 'en' ? "Problem-solving skills" : "Probleemoplossend vermogen",
    language === 'en' ? "Stress-resistant" : "Stressbestendig",
    language === 'en' ? "Motivated" : "Gemotiveerd",
];

export { personalInfo, experiences, education, footerLinks, skills };
