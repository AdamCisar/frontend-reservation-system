import React from "react";
// import { deleteReservation } from "../service/ReservationService";

const Admin = () => {                  

    // const handleDelete = (id) => {
    //     deleteReservation(id);
    //     const updatedReservations = reservations.filter((reservation) => reservation.id !== id);
    //     setReservations(updatedReservations);
    // }onClick={() => handleDelete(data.id)
    return (
    <div>
        <button type="button" className="btn btn-primary">edit</button>
        <button  type="button" className="btn btn-danger">delete</button>
    </div>
    )
}

export default Admin;