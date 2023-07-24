import React, { useState, useEffect } from "react";
import ShowDetail from "./ShowDetail";
import ErrorAlert from "../layout/ErrorAlert";

function ShowsList(){
    const [shows, setShows] = useState([]);
    const [showsError, setShowsError] = useState()

    useEffect(()=>{
        const abortController = new AbortController();
        fetch("https://api.tvmaze.com/shows/", abortController.signal)
        .then(response => response.json())
        .then(data=> setShows(data))
        .catch(setShowsError)
        return()=> abortController.abort()
          
    },[])

return(
    <div>
        <ErrorAlert error={showsError} />
        <h2>TV Shows On Demand</h2>
        {shows.map((show)=>(<ShowDetail show={show}/>
    ))}
    </div>
)
}

export default ShowsList;