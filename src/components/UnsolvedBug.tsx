import React from "react";
import Bug from "../model/bug";

const UnsolvedBug = (b: Bug) => {
    return (
        <div className='bug-container bug-unsolved' >
            <h3>#{b.id}</h3>
            <p>{b.description}</p>
            <i>Pendiente</i>
        </div>
    )
}

export default UnsolvedBug