import React, { useContext } from 'react';
import { AuthProvider, AuthContext } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/NavBar/Navbar';
import './styles/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <AuthProvider>
          <Navbar />
          <AppRoutes />
        </AuthProvider>
    );
};

export default App;
