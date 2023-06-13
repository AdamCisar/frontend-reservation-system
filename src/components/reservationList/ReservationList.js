import React, { useEffect, useState } from "react";
import './ReservationList.css'; 
import { getAllReservation, deleteReservation } from "../service/ReservationService";


const ReservationList = () => {
  const {data, isPending} = getAllReservation();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    setReservations(data);
  }, [data]);

  const handleDelete = (id) => {
    deleteReservation(id);
    const updatedReservations = reservations.filter((reservation) => reservation.id !== id);
    setReservations(updatedReservations);
  }
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
                  <button type="button" className="btn btn-primary">edit</button>
                  <button onClick={() => handleDelete(data.id)} type="button" className="btn btn-danger">delete</button>
                  </td>
                </tr>
          ))}
          </tbody>
      </table>
  </div>
  );
}
 
export default ReservationList;