import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createReservation } from "../service/ReservationService";

const ReservationPicker = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = () => {
    const reservationDate = selectedDate.toLocaleDateString("en-CA");
    
    const reservationTime = selectedTime.toLocaleTimeString("en-CA", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      });
    const reservation = {reservationDate, reservationTime};
    createReservation(reservation);
    setShowModal(false);
    
  };

    return ( 
        <div>
        <Button className="btn btn-success" variant="primary" onClick={() => setShowModal(true)} data-whatever="@mdo">
          Create reservation
        </Button>
  
        <Modal show={showModal} onHide={() => setShowModal(false)} centered id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <Modal.Header closeButton>
            <Modal.Title> Reservation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Date</Form.Label>
                <br />
                <DatePicker selected={selectedDate} onChange={handleDateChange} dateFormat="MMMM d, yyyy" className="form-control" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Time</Form.Label>
                <br />
                <DatePicker 
                selected={selectedTime} 
                onChange={handleTimeChange} 
                showTimeSelect 
                showTimeSelectOnly
                minTime={new Date().setHours(8, 0)}
                maxTime={new Date().setHours(19, 0)} 
                timeIntervals={30} 
                timeCaption="Time" 
                dateFormat="HH:mm"
                timeFormat="HH:mm"
                className="form-control" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
    
}
 
export default ReservationPicker;