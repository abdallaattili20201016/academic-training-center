// src/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in:', { username, password });
    };

    return (
        <>
            <div className="header-logo">
                <img src="/logo2.png" alt="Logo" className="logo-image" />
                <span className="header-text">Academic Training Center</span>
            </div>

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

                    <div className="extra-buttons">
                    <Link to="/forgot-password" className="forgot-password">
                            Forgot Password?
                        </Link>
                        <Link to="/signup" className="sign-up">Sign Up</Link> {/* Use Link for navigation */}
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;

/*
         

                    <div className="extra-buttons">
                        <Link to="/forgot-password" className="forgot-password">
                            Forgot Password?
                        </Link>
                        <Link to="/signup" className="sign-up">Sign Up</Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
 */