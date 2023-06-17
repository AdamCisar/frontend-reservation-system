import React from "react";
import { deleteReservation } from "../service/ReservationService";

const Admin = (props) => {                  
    const { id , reservations, setReservations } = props;

    const handleDelete = (id) => {
        deleteReservation(id);
        const updatedReservations = reservations.filter((reservation) => reservation.id !== id);
        setReservations(updatedReservations);
    }

    return (
    <div>
        <button type="button" className="btn btn-primary">edit</button>
        <button onClick={() => handleDelete(id)} type="button" className="btn btn-danger">delete</button>
    </div>
    )
}

export default Admin;