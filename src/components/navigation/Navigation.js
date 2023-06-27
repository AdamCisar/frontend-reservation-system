import React from "react";
import './Navigation.css'
import { Link } from 'react-router-dom';

const Navigation = () => {

    return ( 
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
            <Link className="navbar-brand" to="/">Home</Link>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
            <li class="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
            </li>
            <li class="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li class="nav-item">
                <Link className="nav-link" to="/reservations">Reservations</Link>
            </li>
        </ul>
        </div>
    </div>
    </nav>
     );
}
 
export default Navigation;