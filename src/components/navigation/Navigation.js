import React from "react";
import './Navigation.css'
import { Link } from 'react-router-dom';
import ReservationPicker from "../adminActions/ReservationPicker";
import jwt_decode from 'jwt-decode';

const Navigation = () => {

    const role = jwt_decode(localStorage.getItem("token")).roles;

    return ( 
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
            <Link className="navbar-brand" to="/">Home</Link>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
            <li className="nav-item">
                {role === undefined && <Link className="nav-link" to="/signup">Signup</Link>}
            </li>
            <li className="nav-item">
                {role === undefined && <Link className="nav-link" to="/login">Login</Link>}
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/reservations">Reservations</Link>
            </li>
            <li className="nav-item">
                {role !== undefined && <Link className="nav-link" to="/logout">Logout</Link>}
            </li>
        </ul>
        </div>
        <div className="d-flex justify-content-end">
            {
                role.includes("ROLE_ADMIN") && <ReservationPicker/>
            }
        </div>
    </div>
    </nav>
     );
}
 
export default Navigation;