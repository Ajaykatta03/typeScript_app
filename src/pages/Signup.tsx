import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Signup: React.FC = () => {
  const auth = useContext(AuthContext)!;
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    auth.signup(name, email, password);
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      
    <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="col-md-4">
        <form onSubmit={handleSubmit}  className="p-4 border rounded shadow">
        <h2 className='text-center mb-4'>Signup</h2>
        <input className="form-control mb-2" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="form-control mb-2" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="form-control mb-2" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="btn btn-primary w-100 mt-3">Signup</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Signup;
