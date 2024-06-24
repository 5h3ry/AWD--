import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    // Check if user is already logged in
    if (localStorage.getItem('token')) {
        navigate('/'); // Redirect to home page if logged in
        return null; // Return null to prevent rendering the login form
    }

    const handleLogin = () => {
        axios.post('http://localhost:3000/login', { username, password })
            .then(result => {
                const token = result.data.token;
                localStorage.setItem('token', token);
                setMessage('Login successful!');
                setUsername('');
                setPassword('');
                navigate('/');  // Redirect to home page
            })
            .catch(err => {
                setMessage(err.response.data.message);
            });
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
            />
            <button type="button" onClick={handleLogin} className="login-button">
                Login
            </button>
            {message && <p className="message">{message}</p>}
            <p className="register-link">
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
}

export default Login;
