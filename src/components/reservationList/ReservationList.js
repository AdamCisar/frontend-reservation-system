import React, { useState } from "react";
import './ReservationList.css'; 
import { getAllReservation } from "../service/ReservationService";
import jwt_decode from 'jwt-decode';
import ModalDay from "./ModalDay";

const ReservationList = () => {

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const [showModal, setShowModal] = useState(false);

  const {data, isPending, err} = getAllReservation();
  const [reservations, setReservations] = useState([]);
  const role = jwt_decode(localStorage.getItem("token")).roles;

    return ( 

      <div className="body">
        {days.map((day, index) => (
          <div className="container" key={index}>
            <div className="card">
              <div className="face face1" onClick={() => setShowModal(index)}>
                <div className="content">
                  <h3>{day}</h3>
                </div>
              </div>
              {showModal === index && (
                <div className="modal">
                  <ModalDay 
                    day={day}
                    data={data}
                    isPending={isPending}
                    err={err}
                    reservations={reservations}
                    role={role}
                    setReservations={setReservations}/>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    
  );
}

export default ReservationList;