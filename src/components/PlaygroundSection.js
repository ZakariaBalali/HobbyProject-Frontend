// PlaygroundSection.js
import React from 'react';

const PlaygroundSection = ({ data }) => {
    return (
        <div className="playground-section">
            <h2>Weather Forecast</h2>
            <ul>
                {data.map((forecast, index) => (
                    <li key={index}>
                        <p><strong>Date:</strong> {forecast.date}</p>
                        <p><strong>Temperature:</strong> {forecast.temperatureC}°C</p>
                        <p><strong>Summary:</strong> {forecast.summary}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlaygroundSection;
