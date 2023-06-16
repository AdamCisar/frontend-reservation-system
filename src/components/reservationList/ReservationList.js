import React, { useEffect, useState } from "react";
import './ReservationList.css'; 
import { getAllReservation, deleteReservation } from "../service/ReservationService";
import Admin from "../adminActions/Admin";
import User from "../userActions/User";
import jwt_decode from 'jwt-decode';


const ReservationList = () => {
  const {data, isPending} = getAllReservation();
  const [reservations, setReservations] = useState([]);
  const role = jwt_decode(localStorage.getItem("token")).roles;
  
  useEffect(() => {
    setReservations(data);
  }, [data]);

    return ( 
    <div className = "reservation-container">
      {isPending && <div>Loading...</div>}
      <table className ="table table-dark">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
        {reservations && reservations.map((data, index) => (
          
                <tr key={index}>
                  <td>{data.date}</td>
                  <td>{data.time}</td>
                  <td>
                  {
                    role === "ROLE_ADMIN" ? <Admin/> : <User/>
                  }
                  </td>
                </tr>
          ))}
          </tbody>
      </table>
  </div>
  );
}
 
export default ReservationList;