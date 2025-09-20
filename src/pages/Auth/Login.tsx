import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login: React.FC = () => {
  const auth = useContext(AuthContext)!;
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    auth.login(email, password);
    navigate('/home');
  };

  return (
    <div className="container mt-5">
    <div className="row justify-content-center align-items-center vh-100">
      <div className="col-md-4">
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
        <h3 className="text-center mb-4">Login</h3>
        <div className="form-group mb-3">
          <input
            className="form-control"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            className="form-control"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="text-danger mb-3">{error}</div>}
        <button className="btn btn-primary w-100 mb-3">Login</button>
        <div className="text-center">
          <a href="/signup" className="text-decoration-none">
            Don't have an account? Sign up
          </a>
        </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;

