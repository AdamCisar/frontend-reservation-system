import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createReservations } from "../service/ReservationService";
import './styles.css';

const CreateReservations = () => {

    const [showModal, setShowModal] = useState(false);
    
    const [selectedDateFrom, setSelectedDateFrom] = useState(null);
    const [selectedDateTo, setSelectedDateTo] = useState(null);

  const handleDateChangeFrom = (date) => {
    setSelectedDateFrom(date);
  };

  const handleDateChangeTo = (date) => {
    setSelectedDateTo(date);
  };

  const handleSubmit = () => {
    const reservationFrom = selectedDateFrom.toLocaleDateString("en-CA");
    const reservationTo = selectedDateTo.toLocaleDateString("en-CA");
    
    
    const reservation = {reservationFrom, reservationTo};
    createReservations(reservation);
    setShowModal(false);
    
  };

    return ( 
        <div>
        <Button className="btn btn-success" variant="primary" onClick={() => setShowModal(true)} data-whatever="@mdo">
          Create reservations
        </Button>
  
        <Modal show={showModal} onHide={() => setShowModal(false)} centered id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <Modal.Header closeButton>
            <Modal.Title> Reservations </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label className = "label">Date from</Form.Label>
                <br />
                <DatePicker selected={selectedDateFrom} onChange={handleDateChangeFrom} dateFormat="MMMM d, yyyy" className="form-control" />
              </Form.Group>
              <Form.Group>
                <Form.Label className = "label">Date to</Form.Label>
                <br />
                <DatePicker selected={selectedDateTo} onChange={handleDateChangeTo} dateFormat="MMMM d, yyyy" className="form-control" />
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
 
export default CreateReservations;