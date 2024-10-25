// src/routes.js
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import TraineeDashboard from './pages/TraineeDashboard';

const routes = [
  { path: '/', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/dashboard', element: <TraineeDashboard /> },
];

export default routes;
