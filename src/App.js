import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import ReservationList from "./components/reservationList/ReservationList";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login"  element={<Login />} />
          <Route path="reservations"  element={<ReservationList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
