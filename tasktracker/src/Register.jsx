import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.css';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = () => {
        axios.post('http://localhost:3000/register', { username, password })
            .then(result => {
                setMessage('Registration successful!');
                setUsername('');
                setPassword('');
            })
            .catch(err => {
                setMessage(err.response.data.message);
            });
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
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
            <button type="button" onClick={handleRegister} className="login-button">
                Register
            </button>
            {message && <p className="message">{message}</p>}
            <p className="register-link">
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
    );
}

export default Register;
