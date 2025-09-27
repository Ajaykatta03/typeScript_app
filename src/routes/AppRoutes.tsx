import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import CategoryPage from '../components/pages/CategoryPages/CategoryPage';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import Notification from '../components/pages/Notification/Notification';
import About from '../components/pages/About/About';
import Report from '../components/pages/Report/Report';
import ItemView from '../components/pages/ItemView/ItemView';
import Wishlist from '../components/pages/Wishlist/Wishlist';
import Cart from '../components/pages/Cart/Cart';

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
            <Route 
            path="/wishlist" 
            element={<Wishlist />} 
            />
            <Route 
            path="/cart" 
            element={<Cart />} 
            />
        </Routes>
    </Router>
);

export default AppRoutes;
