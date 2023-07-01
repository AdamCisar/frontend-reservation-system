import React, { useEffect, useState } from "react";
import './ReservationList.css'; 
import { getMyReservation } from "../service/ReservationService";

const MyReservations = () => {
  const {data, isPending, err} = getMyReservation();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    setReservations(data);
  }, [data]);
  
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric"}
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
    return ( 
    <div className = "reservation-container">
      <table className ="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
        {reservations && reservations.map((data, index) => (
                <tr key={index}>
                  <td>{formatDate(data.reservationDate)}</td>
                  <td>{`${data.reservationTime[0]}:${data.reservationTime[1].toString().padStart(2, '0')}`}</td>
                  <td>
                   <p>UnAssign</p>
                  </td>
                </tr>
          ))}
          </tbody>
      </table>
      {isPending && <div>Loading...</div>}
      {err && <div><p>{err}</p></div>}
  </div>
  );
}

export default MyReservations;