import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';

// Import the global CSS from the styles folder
import './styles/index.css'; // Adjust the path if needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);
