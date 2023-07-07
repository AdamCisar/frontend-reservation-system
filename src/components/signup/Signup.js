import React, { useState } from 'react';
import './Signup.css';
import { signUp } from '../service/UserService';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {

  const navigate = useNavigate();
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const user = { firstName, lastName, email, password };
    signUp(user);
    navigate("/");
  };

  return (
    <div className="register-form">
      <form onSubmit= { handleSubmit }>
          <h3 id='head'>Sign Up</h3>
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required 
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-dark">
              Sign Up
            </button>
          </div>
          <p className="badge badge-light">
            Already registered <Link className='signup' to="/login">sign in?</Link>
          </p>
        </form>
      </div>
  );
}

export default Signup;