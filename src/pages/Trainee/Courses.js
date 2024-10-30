// src/pages/Courses.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Styles.css';

const Courses = () => {
    const navigate = useNavigate();

    // Mock Data for enrolled and available courses
    const enrolledCourses = [
        { id: 1, title: 'React Basics', description: 'Learn the basics of React.' },
        { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JS concepts.' },
    ];

    const availableCourses = [
        { id: 3, title: 'Node.js Fundamentals', description: 'Introduction to Node.js.' },
        { id: 4, title: 'Database Management', description: 'Learn SQL and NoSQL.' },
        { id: 5, title: 'UI/UX Design', description: 'Design engaging interfaces.' },
    ];

    const handleBack = () => navigate('/dashboard'); // Navigate back to dashboard

    return (
        <>
            <header className="dashboard-header">
                <div className="headerContent">
                    <h1>Academic Training Center</h1>
                    <button className="logout-btn" onClick={() => navigate('/')}>
                        Logout
                    </button>
                </div>
            </header>

            <div className="ViewPage">
                <h2>Courses</h2>

                <div className="dashboard-container">
                    {/* Enrolled Courses Section */}
                    <div className="welcome-section">
                        <h3>Already Enrolled Courses</h3>
                        <div className="dashboard-card">
                            {enrolledCourses.map((course) => (
                                <div key={course.id} className="dashboard-card">
                                    <h4>{course.title}</h4>
                                    <p>{course.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Available Courses Section */}
                    <div className="welcome-section">
                        <h3>Available Courses</h3>
                        <div className="dashboard-card">
                            {availableCourses.map((course) => (
                                <div key={course.id} className="dashboard-card">
                                    <h4>{course.title}</h4>
                                    <p>{course.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/*note : we need to make a class in styles that looks like welcome-section*/}

                <div className="actions">
                    <button className="dashboard-link" onClick={handleBack}>
                        Back to Dashboard
                    </button>
                </div>
            </div>

            <footer className="dashboard-footer">
                <Link to="/about-us">About Us</Link> | <Link to="/contact-us">Contact Us</Link>
            </footer>
        </>
    );
};

export default Courses;
