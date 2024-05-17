import React from "react";
import Bug from "../model/bug";

const BugCard = (b: Bug) => {
    return (
        <div className={`bug-container bug-${b.solved ? 'solved' : 'unsolved'}`} >
            <h3>#{b.id}</h3>
            <p>{b.description}</p>
            <i>{b.solved ? 'Resuelto' : 'Pendiente'}</i>
        </div>
    )
}

export default BugCard