import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../service/UserService";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    login(user);
   navigate("/");
  };

    return (
      <div className="register-form">
        <form onSubmit = {handleSubmit}>
            <h3>Login</h3>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="forgot-password text-right">
              Don't have an account <Link to="/signup">sign up?</Link>
            </p>
          </form>
        </div>
    );
  }
  
  export default Login;