// src/Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            if (formData.password !== formData.confirmPassword) {
                setMessage('Passwords do not match!');
            } else {
                setMessage('All fields are required!');
            }
        } else {
            setMessage('Sign-up successful!');
        }
    };

    const validateForm = () => {
        const { name, username, email, password, confirmPassword } = formData;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !username || !email || !password || !confirmPassword) {
            return false;
        }
        if (!emailRegex.test(email)) {
            setMessage('Please enter a valid email address!');
            return false;
        }
        if (password !== confirmPassword) {
            return false;
        }
        return true;
    };

    return (
        <div className="container">
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                <div className="admin-contact">
                    Are you a Trainer? <a href="/admin-contact">Contact an admin</a>
                </div>
                <button type="submit" id="verify-button">Verify</button>
            </form>
            {message && <p>{message}</p>}
            <p>
                Already have an account? <Link to="/">Login</Link> {/* Use Link for navigation */}
            </p>
        </div>
    );
};

export default Signup;
