import { useEffect, useState } from "react";

export const getAllReservation = () => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8000/reservation-list")
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
    fetch("http://localhost:8000/reservation-list/" + id,{
        method: 'DELETE'
    })
}