// src/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../styles/Login.css';  // Adjust path to point to styles folder


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize navigate function

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in:', { username, password });

        // Simulate login success and redirect to dashboard
        navigate('/dashboard');
    };

    return (
        <>

            {/* Login form */}
            <div className="login-container">
                {/* Header with logo and text */}
                <div class="logo-text-container ">
                    <img src="/logoo.jpg" alt="Logo" class="logo-image" />
                    <span class="header-text">Academic Training Center</span>
                </div>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                required
                            />
                        </label>
                        <label>
                            Password:
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                        </label>
                    </div>
                    <button type="submit">Login</button>

                    {/* Additional links */}
                    <div className="extra-buttons">
                        <Link to="/forgot-password" className="forgot-password">
                            Forgot Password?
                        </Link>
                        <Link to="/signup" className="sign-up">
                            Sign Up
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;



