import React, { useState } from 'react';
import './Signup.css';
import { signUp } from '../service/UserService';
import { useNavigate } from 'react-router-dom';

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
          <h3 id='head'>SIGN UP</h3>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="  first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="  last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required 
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="  email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="  password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-dark">
              <span> CREATE AN ACCOUNT </span>
            </button>
          </div>
        </form>
      </div>
  );
}

export default Signup;