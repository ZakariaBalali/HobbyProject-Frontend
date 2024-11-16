import React, {useEffect, useState} from 'react';
import {
    TextField,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Divider,
    Avatar,
    ListItemAvatar
} from '@mui/material';
import '../styles/Sidebar.css'; // Import the CSS for styling the sidebar
import Sidebar from '../components/Sidebar'; // Import the Sidebar component

const Playground = () => {
    const [groceries, setGroceries] = useState([]);
    const [itemList, setItemList] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [error, setError] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [isRegistering, setIsRegistering] = useState(false); // Track if user is on register form
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [itemInfo, setItemInfo] = useState({});
    // Function to toggle the sidebar
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Function to check if user is logged in (based on token)
    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/supermarkt/checkjebon/main/data/supermarkets.json')
            .then(response => response.json())
            .then(data => setItemList(data))
            .catch(error => setError(`Failed to load groceries, ${error}`));
        console.log(itemList)
    }, []);

    const handleSearchChange = (e) => {
        setItemInfo({});
        const query = e.target.value;
        setNewItem(query);
        setSearchQuery(query);

        // Filter suggestions based on search query
        if (query) {
            const suggestionsMap = {}; // To group items by supermarket

            itemList.forEach(item => {
                item.d.forEach(product => {
                    if (product.n.toLowerCase().includes(query.toLowerCase())) {
                        if (!suggestionsMap[item.c]) {
                            suggestionsMap[item.c] = []; // Create a new array for the supermarket if not exists
                        }
                        suggestionsMap[item.c].push({productName: product.n, supermarket: item.c, price: product.p});
                    }
                });
            });

            // Convert suggestionsMap to an array and limit to a maximum of 10 suggestions
            const suggestions = Object.keys(suggestionsMap).map(supermarket => {
                const products = suggestionsMap[supermarket];
                return {supermarket, productName: products[0].productName, price: products[0].price}; // Only show one product per supermarket
            });

            setFilteredSuggestions(suggestions.slice(0, 10)); // Limit the number of suggestions
        } else {
            setFilteredSuggestions([]); // Clear suggestions when search query is empty
        }
    };


    // Function to handle suggestion click
    const handleSuggestionClick = (productName) => {
        setItemInfo(productName);
        setSearchQuery(productName.productName); // Prefill the text field with the clicked product name
        setFilteredSuggestions([]); // Hide suggestions after selection
    };


    const handleLogout = () => {
        setFilteredSuggestions([]);
        localStorage.removeItem('access_token'); // Remove the token
        setIsLoggedIn(false); // Update the login state
        setGroceries([]); // Clear the groceries list
        setError(''); // Clear any existing error message
    };

    // Function to handle login
    const handleLogin = async () => {
        setFilteredSuggestions([]);
        setSearchQuery("");
        if (!username || !password) {
            setLoginError('Please enter both username and password.');
            return;
        }

        try {
            const response = await fetch('https://localhost:7102/api/auth/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, password}),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('access_token', data.token); // Store the token
                setIsLoggedIn(true);
                setLoginError('');
            } else {
                const errorData = await response.json();
                setLoginError(errorData.message || 'Login failed.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setLoginError('Error during login. Please try again.');
        }
    };

    // Function to handle registration
    const handleRegister = async () => {
        if (!registerUsername || !registerPassword) {
            setRegisterError('Please enter both username and password.');
            return;
        }

        try {
            const response = await fetch('https://localhost:7102/api/register/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username: registerUsername, password: registerPassword}),
            });

            if (response.ok) {
                setRegisterError('');
                setIsRegistering(false); // Close the register form after success
            } else {
                const errorData = await response.json();
                setRegisterError(errorData.message || 'Registration failed.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setRegisterError('Error during registration. Please try again.');
        }
    };

    // Function to fetch grocery items
    const fetchGroceries = async () => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            setError('Please log in to view groceries.');
            return;
        }

        try {
            const response = await fetch('https://localhost:7102/groceries', {
                headers: {Authorization: `Bearer ${token}`},
            });

            if (response.ok) {
                const data = await response.json();
                setGroceries(data);
            } else {
                setGroceries([]);
            }
        } catch (error) {
            console.error('Error fetching groceries:', error);
            setGroceries([]);
        }
    };

    // Function to handle adding a new grocery item
    const addGrocery = async () => {
        setFilteredSuggestions([]);
        console.log(itemList, itemInfo)
        if (!newItem) return;

        let newGrocery = {};
        if (itemInfo && Object.keys(itemInfo).length > 0) {
            newGrocery = {name: itemInfo.productName, Price: itemInfo.price, Supermarket: itemInfo.supermarket};

        } else {
            newGrocery = {name: newItem};
        }
        const token = localStorage.getItem('access_token');

        try {
            const response = await fetch('https://localhost:7102/groceries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(newGrocery),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.log(response);
                setError(errorData.message || 'Error adding item.');
            } else {
                setError('');
                setNewItem('');
                setSearchQuery('');
                fetchGroceries(); // Refresh the list after successful addition
            }
        } catch (error) {
            console.error('Error adding grocery:', error);
            setError('Failed to add item.');
        }
    };

    // Function to handle deleting a grocery item
    const deleteGrocery = async (name) => {
        const token = localStorage.getItem('access_token');
        try {
            const response = await fetch(`https://localhost:7102/groceries?name=${name}`, {
                method: 'DELETE',
                headers: {Authorization: `Bearer ${token}`},
            });

            if (response.ok) {
                fetchGroceries(); // Refresh the list after deletion
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error deleting item.');
            }
        } catch (error) {
            console.error('Error deleting grocery:', error);
            setError('Failed to delete item.');
        }
    };

    // Fetch grocery items when the component mounts
    useEffect(() => {
        if (isLoggedIn) fetchGroceries();
    }, [isLoggedIn]);

    // Assuming groceries have 'supermarket' and 'price' properties
    const groupBySupermarket = (groceries) => {
        return groceries.reduce((acc, grocery) => {
            if (!acc[grocery.supermarket]) {
                acc[grocery.supermarket] = [];
            }
            acc[grocery.supermarket].push(grocery);
            return acc;
        }, {});
    };

    const calculateTotalPrice = (items) => {
        return items.reduce((total, item) => total + parseFloat(item.price), 0);
    };

    return (
        <div className="container">
            <button className="menu-btn" onClick={toggleSidebar}>
                &#9776;
            </button>
            <Sidebar isOpen={isOpen} onClose={toggleSidebar} onLanguageChange={() => {
            }}/>

            {/* Show login or register screen based on the current state */}
            {!isLoggedIn && !isRegistering ? (
                <div className="login-screen">
                    <h1>Login</h1>
                    {loginError && <div className="error-message">{loginError}</div>}
                    <TextField
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        style={{marginTop: '10px'}}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                        style={{marginTop: '10px'}}
                    >
                        Login
                    </Button>
                    <Button
                        variant="text"
                        color="primary"
                        onClick={() => setIsRegistering(true)} // Switch to register form
                        style={{marginTop: '10px'}}
                    >
                        Register
                    </Button>
                </div>
            ) : isRegistering ? (
                <div className="register-screen">
                    <h1>Register</h1>
                    {registerError && <div className="error-message">{registerError}</div>}
                    <TextField
                        label="Username"
                        variant="outlined"
                        value={registerUsername}
                        onChange={(e) => setRegisterUsername(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        fullWidth
                        style={{marginTop: '10px'}}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleRegister}
                        style={{marginTop: '10px'}}
                    >
                        Register
                    </Button>
                    <Button
                        variant="text"
                        color="primary"
                        onClick={() => setIsRegistering(false)} // Switch back to login form
                        style={{marginTop: '10px'}}
                    >
                        Back to Login
                    </Button>
                </div>
            ) : (
                <div className="playground-section">
                    <h1>Groceries</h1>

                    <TextField
                        label="Search Products"
                        variant="outlined"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        fullWidth
                    />

                    {/* Display filtered suggestions */}
                    {filteredSuggestions.length > 0 && (
                        <List>
                            {filteredSuggestions.map((suggestion, index) => (
                                <ListItem key={index} button onClick={() => handleSuggestionClick(suggestion)}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={suggestion.supermarket}
                                            src={`/images/${suggestion.supermarket}.png`}
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: 0, // Remove the circular clipping
                                            }}                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={suggestion.productName}
                                        secondary={`${suggestion.supermarket} ${suggestion.price}`}
                                    />
                                </ListItem>
                            ))}
                        </List>

                    )}

                    {error && <div className="error-message" style={{color: 'red'}}>{error}</div>}

                    {groceries.length === 0 ? (
                        <p>Add items to list</p>
                    ) : (
                        <>
                            {Object.keys(groupBySupermarket(groceries)).map((supermarket) => {
                                const items = groupBySupermarket(groceries)[supermarket];
                                const totalPrice = calculateTotalPrice(items);
                                return (
                                    <>
                                        <div key={supermarket}>
                                            <h2>{supermarket}</h2>
                                            <List>
                                                {items.map((grocery) => (
                                                    <ListItem key={grocery.id}>
                                                        <ListItemText primary={grocery.name}
                                                                      secondary={`${grocery.supermarket} ${grocery.price}`}/>
                                                        <ListItemSecondaryAction>
                                                            <Button
                                                                onClick={() => deleteGrocery(grocery.name)}
                                                                color="secondary"
                                                            >
                                                                Delete
                                                            </Button>
                                                        </ListItemSecondaryAction>
                                                    </ListItem>
                                                ))}
                                            </List>
                                            <h3>Total
                                                Price: {totalPrice.toFixed(2)}</h3> {/* Show total price for this supermarket */}
                                        </div>
                                        <Divider/>
                                    </>
                                );
                            })}
                        </>
                    )}

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={addGrocery}
                        style={{marginTop: '10px'}}
                    >
                        Add Item
                    </Button>

                    {/* Logout button */}
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleLogout}
                        style={{marginTop: '10px'}}
                    >
                        Logout
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Playground;
