// src/pages/TraineeDashboard.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Styles.css'; // Updated import path

const TraineeDashboard = () => {
    const navigate = useNavigate(); // Initialize navigate function
    const traineeName = "Abdallah"; // Replace with actual trainee data

    const handleLogout = () => {
        localStorage.clear(); // Clear stored data
        navigate('/'); // Redirect to login page
    };

    return (
        <>
            <header className="dashboard-header">
                <div class="headerContent">
                    <h1>Academic Training Center</h1>
                    <div className="header-buttons">
                        <button className="view-profile-btn" onClick={() => navigate('/profile')}>
                            View Profile
                        </button>
                        <button className="logout-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </header>


            {/* Welcome Section */}
            <div class="ViewPage">
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
                        <Link to="/courses" className="dashboard-link">
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
