import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import CategoryPage from '../pages/CategoryPage';
import ProtectedRoute from '../components/ProtectedRoute';
import Notification from '../pages/Notification';
import About from '../pages/About';
import Report from '../pages/Report';

const AppRoutes: React.FC = () => (
    <Router>
        <Routes>
            <Route 
                path="/home" 
                element={
                    // <ProtectedRoute>
                        <Home />
                    // </ProtectedRoute>
                } 
            />
            <Route 
                path="/report" 
                element={
                    // <ProtectedRoute>
                        <Report />
                    // </ProtectedRoute>
                } 
            />
            <Route 
                path="/about" 
                element={
                    // <ProtectedRoute>
                        <About />
                    // </ProtectedRoute>
                } 
            />
            <Route 
                path="/notification" 
                element={
                    // <ProtectedRoute>
                        <Notification />
                    // </ProtectedRoute>
                } 
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route 
                path="/category/:name" 
                element={
                    // <ProtectedRoute>
                        <CategoryPage />
                    // </ProtectedRoute>
                } 
            />
        </Routes>
    </Router>
);

export default AppRoutes;
