import { useEffect, useState } from "react";

export const getAllReservation = () => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
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
                console.log(err.message);
            })
    }, [])
    return {data, isPending};
    
}

export const deleteReservation = (id) => {
    fetch("http://localhost:8080/reservation-list/" + id,{
        method: 'DELETE'
    })
}