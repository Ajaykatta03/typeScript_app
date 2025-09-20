import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import CategoryPage from '../pages/CategoryPages/CategoryPage';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import Notification from '../pages/Notification/Notification';
import About from '../pages/About/About';
import Report from '../pages/Report/Report';
import ItemView from '../pages/ItemView/ItemView';

const AppRoutes: React.FC = () => (
    <Router>
        <Routes>
            {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
            <Route 
            path="/home" 
            element={<Home />} 
            />
            <Route 
            path="/report" 
            element={<Report />} 
            />
            <Route 
            path="/about" 
            element={<About />} 
            />
            <Route 
            path="/notification" 
            element={<Notification />} 
            />
            <Route 
            path="/category/:name" 
            element={<CategoryPage />} 
            />
            <Route 
            path="/ItemView/:name/:id" 
            element={<ItemView />} 
            />
        </Routes>
    </Router>
);

export default AppRoutes;
