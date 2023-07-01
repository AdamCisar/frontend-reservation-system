import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from "./components/navigation/Navigation";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import ReservationList from "./components/reservationList/ReservationList";
import Home from "./components/home/Home";
import MyReservations from "./components/reservationList/MyReservations";

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login"  element={<Login />} />
          <Route path="reservations"  element={<ReservationList />} />
          <Route path="my-reservations"  element={<MyReservations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
