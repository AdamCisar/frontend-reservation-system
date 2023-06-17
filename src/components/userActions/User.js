import React from "react";
import { assignToReservation } from "../service/ReservationService";

const User = (props) => {                  

    const { id , reservations, setReservations } = props;

    const handleAssign = (id) => {
        assignToReservation(id);
        const updatedReservations = reservations.filter((reservation) => reservation.id !== id);
        setReservations(updatedReservations);
    }

    return (
        <button onClick={() => handleAssign(id)} type="button" className="btn btn-success">assign</button>
    )
    
}
export default User;