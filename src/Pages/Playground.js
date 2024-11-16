// Playground.js
import React, { useEffect, useState } from 'react';
import '../styles/Sidebar.css'; // Import the CSS for styling the sidebar
import Sidebar from '../components/Sidebar'; // Import the Sidebar component
import PlaygroundSection from '../components/PlaygroundSection'; // You might want to create a new section component

const Playground = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the sidebar
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Function to fetch the weather data
    const fetchWeatherData = async () => {
        try {
            const response = await fetch('https://localhost:7266/WeatherForecast');
            const data = await response.json();
            setWeatherData(data);
            console.log(data);  // Log the result from the API
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchWeatherData();
    }, []);

    return (
        <div className="container">
            <button className="menu-btn" onClick={toggleSidebar}>
                &#9776;
            </button>
            <Sidebar isOpen={isOpen} onClose={toggleSidebar} onLanguageChange={() => {}} />
            <PlaygroundSection data={weatherData} /> {/* Pass the weather data to your new section component */}
        </div>
    );
};

export default Playground;
