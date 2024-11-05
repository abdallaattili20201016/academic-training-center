// src/pages/TraineeDashboard.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Styles.css';
import Navbar from '../../components/Navbar';

const TraineeDashboard = () => {
    const [drawerOpen, setDrawerOpen] = useState(false); /*copy these three lines for the drawer in every page*/ 
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen); 
    };
    
    const navigate = useNavigate(); // Initialize navigate function
    const traineeName = "Abdallah"; // Replace with actual trainee data

    const handleLogout = () => {
        localStorage.clear(); // Clear stored data
        navigate('/'); // Redirect to login page
    };


    
    return (
        <>
                    <div>
            <Navbar />
            </div>
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

        </>
    );
};

export default TraineeDashboard;
