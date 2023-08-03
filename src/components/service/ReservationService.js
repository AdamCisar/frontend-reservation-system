import jwt_decode from 'jwt-decode';
import axios from 'axios';
import React, {  useState } from "react";

// const API_URL = 'http://localhost:8080/api/reservation';
const API_URL = 'https://backend-reservation-31b4.onrender.com/api/reservation';

const token = localStorage.getItem("token");

export const getNotOccupiedReservations = async () => {
         try {
           const response = await axios.get(API_URL, {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  });

              return response.data;

         } catch (error) {
           console.error('Error fetching data:', error);
           return [];
         }
       };

export const deleteReservation = (id) => {
    const token = localStorage.getItem("token");
    fetch(`${API_URL}/admin/`+id, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": 'application/json'
            }
            })
            .catch(err => {
                console.log(err.message);
            })
}

export const assignToReservation = (reservationId) => {
    const token = localStorage.getItem("token");
    const userId = jwt_decode(token).id;

    fetch(`${API_URL}/${reservationId}/update-user/${userId}`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": 'application/json'
            }
            })
            .catch(err => {
                console.log(err.message);
            })
}

export const unAssignFromReservation = (id) => {
    const token = localStorage.getItem("token");
    const userId = jwt_decode(token).id;

    fetch(`${API_URL}/${id}/delete-user/${userId}`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": 'application/json'
            }
            })
            .catch(err => {
                console.log(err.message);
            })    
}

export const createReservation = (data) => {
    const token = localStorage.getItem("token");
    
    fetch(`${API_URL}/admin`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }) 
    .then(response => {
      if (!response.ok) {
        console.log(response);
      }
    })
    .catch(error => {
      console.log(error.response);
    });
}

export const createReservations = (data) => {
    const token = localStorage.getItem("token");
    
    fetch(`${API_URL}/admin/create-reservations`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }) 
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to create reservation");
      }
    })
    .catch(error => {
      console.log("Error creating reservation:", error);
    });
}

export const getMyReservation = () => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [err, setErr] = useState();
    
    const token = localStorage.getItem("token");
    const userId = jwt_decode(token).id;
    
        fetch(`${API_URL}/user-reservations/${userId}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": 'application/json'
            }
            })
            .then(res => {
                if(!res.ok){
                    throw Error("Couldn't fetch the data!");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
            })
            .catch(err => {
                setErr(err.message);
                setIsPending(false);
            })
    return {data, isPending, err};
}