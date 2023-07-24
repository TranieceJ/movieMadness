import React from "react";

function ShowDetail(show){
    return (
        <div>
            <img src={show.image.medium} alt="show poster"/>
            <h3>{show.name}</h3>
        </div>
    )
}

export default ShowDetail;