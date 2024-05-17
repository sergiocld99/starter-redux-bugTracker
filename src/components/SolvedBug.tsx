import React from "react";
import Bug from "../model/bug";

const SolvedBug = (b: Bug) => {
    return (
        <div className="bug-container bug-solved" >
            <h3>#{b.id}</h3>
            <p>{b.description}</p>
            <i>Resuelto 😎</i>
        </div>
    )
}

export default SolvedBug