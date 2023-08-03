import React, { useEffect , useState } from "react";
import './ReservationList.css'; 
import { getNotOccupiedReservations } from "../service/ReservationService";
import jwt_decode from 'jwt-decode';
import ModalDay from "./ModalDay";

const ReservationList = () => {

  const [days, setDays] = useState({});
  const [showModal, setShowModal] = useState(false);
  const role = jwt_decode(localStorage.getItem("token")).roles;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataFromAPI = await getNotOccupiedReservations();
      setData(dataFromAPI);
    };
    fetchData();
  }, []);

  useEffect(() => {
      fillDaysArray();
  }, [data]);


  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric"}
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  
  const fillDaysArray = () => {
    const days = {
      "Monday": [], 
      "Tuesday": [], 
      "Wednesday": [], 
      "Thursday": [], 
      "Friday": []
    };
    data.forEach((reservation) => {
      const reservationDay = new Date(reservation.date).toLocaleDateString("en-US", { weekday: "long" });
      days[reservationDay].push(reservation);
    });

    setDays(days);
  };

  return (
    <div className="body">
    {Object.keys(days).map((day, index) => (
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
                reservations={days[day]}
                role={role}
                />
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
  );
};


export default ReservationList;