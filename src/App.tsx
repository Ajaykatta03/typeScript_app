import React, { useContext } from 'react';
import { AuthProvider, AuthContext } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import './styles/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <AuthProvider>
            {isAuthenticated && <Navbar />}
            <AppRoutes />
        </AuthProvider>
    );
};

export default App;
