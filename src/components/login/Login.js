import React, { useState } from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";
import { login } from "../service/UserService";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.error('Error while logging in:', error);
    }
  };

    return (
      <div className="login-form">
        <form onSubmit = {handleSubmit}>
            <h3 id="login" >LOGIN</h3>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="  email"
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="  password"
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-dark">
                <span>LOG IN</span>
              </button>
            </div>
          </form>
        </div>
    );
  }
  
  export default Login;