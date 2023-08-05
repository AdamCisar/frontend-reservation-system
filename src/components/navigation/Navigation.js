import React, { useState } from "react";
import './Navigation.css';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import ReservationPicker from '../adminActions/ReservationPicker';
import CreateReservations from "../adminActions/CreateReservations";

const Navigation = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const role = localStorage.getItem("token") !== null ? jwt_decode(localStorage.getItem("token")).roles : undefined;

    const handleSubmit = () => {
        localStorage.removeItem('token');
        useNavigate("/");
    }

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    }

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" onClick={handleDropdownToggle} >HOME</Link>
                <button className="navbar-toggler" type="button" onClick={handleDropdownToggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse${showDropdown ? " show" : ""}`} id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        {role === undefined && <li className="nav-item login"><Link className="nav-link" to="/signup" onClick={handleDropdownToggle}>SIGNUP</Link></li>}
                        {role === undefined && <li className="nav-item signup"> <Link className="nav-link" to="/login" onClick={handleDropdownToggle}>LOGIN</Link> </li>}
                        {role !== undefined && <li className="nav-item"> <Link className="nav-link" to="/reservations" onClick={handleDropdownToggle}>RESERVATIONS</Link></li>}
                        {role !== undefined && role.includes("ROLE_USER") && <li className="nav-item"> <Link className="nav-link" to="/my-reservations" onClick={handleDropdownToggle}>MY RESERVATIONS</Link></li>}
                        {role !== undefined && <li className="nav-item logout"><Link className="nav-link logout" to="/" onClick={handleSubmit} >LOGOUT</Link></li>}
                    {
                        role !== undefined && role.includes("ROLE_ADMIN") && <li className="nav-item"> <CreateReservations /> </li>
                    
                    }
                    {
                        role !== undefined && role.includes("ROLE_ADMIN") && <li className="nav-item"> <ReservationPicker /> </li>
                    }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
