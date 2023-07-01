import React from "react";
import './Navigation.css'
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import ReservationPicker from '../adminActions/ReservationPicker';
import CreateReservations from "../adminActions/CreateReservations";

const Navigation = () => {

    const role = localStorage.getItem("token") !== null ? jwt_decode(localStorage.getItem("token")).roles : undefined;

    const handleSubmit = () => {
        localStorage.removeItem('token');
        useNavigate("/");
    }

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
                {role !== undefined && <Link className="nav-link" to="/reservations">Reservations</Link>}
            </li>
            <li className="nav-item">
                {role !== undefined && role.includes("ROLE_USER") && <Link className="nav-link" to="/my-reservations">My reservations</Link>}
            </li>
            <li className="nav-item">
                {role !== undefined && <Link className="nav-link logout" to="/" onClick={handleSubmit} >Logout</Link>}
            </li>
        </ul>
        </div>
        <div className="d-flex justify-content-end">
            {
                role !== undefined && role.includes("ROLE_ADMIN") && <CreateReservations/>
            }
        </div>
        <div className="d-flex justify-content-end">
            {
                role !== undefined && role.includes("ROLE_ADMIN") && <ReservationPicker/>
            }
        </div>
    </div>
    </nav>
     );
}
 
export default Navigation;