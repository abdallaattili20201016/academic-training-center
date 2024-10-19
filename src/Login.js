// src/Login.js
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in:', { username, password });
        // Add your login logic here (e.g., API call)
    };

    return (
        <><h3>
          <div className="header-logo">
    <img src="./logo.png" alt="Logo" className="logo-image" />
    <span className="header-text">Academic Training Center</span>
</div>
        </h3>

                <div className="login-container">
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
                                    required />
                            </label>
                            <label>
                                Password:
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required />
                            </label>
                        </div>
                        <button type="submit">Login</button>

                        <div className="extra-buttons">
                            <button
                                type="button"
                                className="forgot-password"
                                onClick={() => alert('Redirecting to password recovery...')}
                            >
                                Forgot Password
                            </button>
                            <button
                                type="button"
                                className="sign-up"
                                onClick={() => alert('Redirecting to sign-up page...')}
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </>
    );
};

export default Login;
