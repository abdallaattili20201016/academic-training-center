// src/pages/TraineeDashboard.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Styles.css';

const TraineeDashboard = () => {
    const [drawerOpen, setDrawerOpen] = useState(false); // State to handle drawer
    const navigate = useNavigate(); // Initialize navigate function
    const traineeName = "Abdallah"; // Replace with actual trainee data

    const handleLogout = () => {
        localStorage.clear(); // Clear stored data
        navigate('/'); // Redirect to login page
    };

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen); // Toggle drawer state
    };
    
    return (
        <>
        {/* Drawer Section */}
            <header className="dashboard-header">
                <div className="headerContent">
                <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
                <Link to="/personal-info">Profile Settings</Link>
                <Link to="/messages">Messages</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/certificates">Certificates</Link>
                <Link to="/feedback">Feedback</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/contact-us">Contact Us</Link>
            </div>
                    <button className="drawer-toggle-btn" onClick={toggleDrawer}>
                        ☰
                    </button>
                    <h1>Academic Training Center</h1>
                    
                        <button className="view-profile-btn" onClick={() => navigate('/ViewProfile')}>
                            View Profile
                        </button>

                        <button className="logout-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    
                </div>
            </header>

            {/*the drawer was here*/}


            {/* Welcome Section */}
            <div className="ViewPage">
                <section className="welcome-section">
                    <h2>Welcome, {traineeName}!</h2>
                </section>

                {/* Information Section */}
                <section className="info-section">
                    <div className="info-box">
                        <h3>Personal Info</h3>
                        <p>Email: abd20201016@std.psut.edu.jo</p>
                        <p>Enrolled Courses: 5</p>
                    </div>
                    <div className="info-box">
                        <h3>Progress</h3>
                        <p>Completed Courses: 2</p>
                        <p>Pending Certificates: 1</p>
                    </div>
                </section>

                {/* Cards Section */}
                <div className="dashboard-container">
                    <div className="dashboard-card">
                        <h2>Courses</h2>
                        <p>Browse or enroll in available courses.</p>
                        <Link to="/Courses" className="dashboard-link">
                            View Courses
                        </Link>
                    </div>

                    <div className="dashboard-card">
                        <h2>Certificates</h2>
                        <p>Download certificates for completed courses.</p>
                        <Link to="/certificates" className="dashboard-link">
                            View Certificates
                        </Link>
                    </div>

                    <div className="dashboard-card">
                        <h2>Feedback</h2>
                        <p>Provide feedback on your completed courses.</p>
                        <Link to="/feedback" className="dashboard-link">
                            Give Feedback
                        </Link>
                    </div>

                    <div className="dashboard-card">
                        <h2>Profile Settings</h2>
                        <p>Update your personal information.</p>
                        <Link to="/personal-info" className="dashboard-link">
                            Edit Profile
                        </Link>
                    </div>
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

export default TraineeDashboard;
