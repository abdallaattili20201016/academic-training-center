// src/pages/ViewProfile.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Styles.css';

const ViewProfile = () => {
    
    const navigate = useNavigate(); // Initialize navigate function

    const handleLogout = () => {
        localStorage.clear(); // Clear stored data
        navigate('/'); // Redirect to login page
    };
    const handleBack = ()=>{
        navigate('/dashboard'); // Navigate back to the dashboard
    };
    



    return (
        <>
            <header className="dashboard-header">
                <div className="headerContent">

                    <h1>Academic Training Center</h1>

                    <button className="logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </header>

            <div className="ViewPage">
                <h2>Profile Details</h2>
                <div className="info-box">
                    <h3>Personal Info</h3>
                    <p>Name: Abdallah</p>
                    <p>Email: abd20201016@std.psut.edu.jo</p>
                    <p>Enrolled Courses: 5</p>
                </div>
                <div className="dashboard-container">
                    <button className="dashboard-link" onClick={handleBack}>
                        Back to Dashboard
                    </button>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="dashboard-footer">
                <Link to="/about-us">About Us</Link> |
                <Link to="/contact-us">Contact Us</Link>
            </footer>
        </>
    );
};

export default ViewProfile;
