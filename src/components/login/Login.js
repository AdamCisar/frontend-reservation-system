import React, { useState } from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";
import { login } from "../service/UserService";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    const user = { email, password };
    login(user);
    navigate("/");
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