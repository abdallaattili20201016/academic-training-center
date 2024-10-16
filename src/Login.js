// src/Login.js
import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login-container">
            <h2>Login Page</h2>
            <form>
                <div className="form-group">
                    <label>
                        Username:
                        <input type="text" name="username" />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" />
                    </label>
                </div>
                <button type="submit">Login</button>

                {/* Forgot Password and Sign Up buttons */}
                <div className="extra-buttons">
                    <button type="button" className="forgot-password">Forgot Password</button>
                    <button type="button" className="sign-up">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
