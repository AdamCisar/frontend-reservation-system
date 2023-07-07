import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Admin from "../adminActions/Admin";
import User from "../userActions/User";

const ModalDay = (props) => {

    const { isPending, reservations, err, role, setReservations, day } = props;
    const [showModal, setShowModal] = useState(true);

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric"}
        return new Date(dateString).toLocaleDateString(undefined, options)
      }

    function getToday(reservations) {
      const reservation = reservations.find((reservation) => {
        const reservationDay = new Date(reservation.date).toLocaleDateString("en-US", { weekday: "long" });
        return reservationDay === day;
      })
      return reservation !== undefined ? formatDate(reservation.date) : " - No reservations!";
    }
    const today = getToday(reservations);
    
    return ( 
        <div>
        <Modal show={showModal} onHide={() => setShowModal(false)} centered id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <Modal.Header closeButton>
            <Modal.Title> {day} {today}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className = "reservation-container">
                <table className ="table table-dark table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {reservations && reservations.filter((reservation) => {
                            const reservationDay = new Date(reservation.date).toLocaleDateString("en-US", { weekday: "long" });
                            return reservationDay === day;
                        })
                        .map((data, index) => (
                            <tr key={index}>
                            <td>{`${data.time[0]}:${data.time[1].toString().padStart(2, '0')}`}</td>
                            <td>
                            {
                               role !== undefined && role.includes("ROLE_ADMIN") ? <Admin id={data.id} reservations={reservations} setReservations={setReservations}/> 
                                : <User id={data.id} reservations={reservations} setReservations={setReservations}/>
                            }
                            </td>
                            </tr>
                    ))}
                    </tbody>
                </table>
                {isPending && <div>Loading...</div>}
                {err && <div><p>{err}</p></div>}
            </div>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    );
    
}
 
export default ModalDay;