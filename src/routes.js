// src/routes.js
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import TraineeDashboard from './pages/Trainee/TraineeDashboard';
import ViewProfile from './pages/Trainee/ViewProfile';
import Courses from './pages/Trainee/Courses'; // Import the Courses page
import Certificates from './pages/Trainee/Certificates';

const routes = [
  { path: '/', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/dashboard', element: <TraineeDashboard /> },
  { path: '/ViewProfile', element:<ViewProfile/>},
  { path: '/courses', element: <Courses /> }, 
  { path: '/Certificates', element: <Certificates /> }, 
];

export default routes;
