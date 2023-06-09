import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';

export const getAllReservation = () => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [err, setErr] = useState();
    
    const token = localStorage.getItem("token");
    
    useEffect(() => {
        fetch("http://localhost:8080/api/reservation", {
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
    }, [])
    return {data, isPending, err};
    
}

export const deleteReservation = (id) => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8080/api/reservation/admin/"+id, {
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

    fetch(`http://localhost:8080/api/reservation/${reservationId}/update-user/${userId}`, {
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

    fetch(`http://localhost:8080/api/reservation/${id}/delete-user/${userId}`, {
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
    
    fetch("http://localhost:8080/api/reservation/admin", {
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

export const createReservations = (data) => {
    const token = localStorage.getItem("token");
    
    fetch("http://localhost:8080/api/reservation/admin/create-reservations", {
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
    
    useEffect(() => {
        fetch(`http://localhost:8080/api/reservation/user-reservations/${userId}`, {
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
    }, [])
    return {data, isPending, err};
}