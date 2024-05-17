import React from "react";
import Bug from "../model/bug";

const SolvedBug = (b: Bug) => {
    return (
        <div className="bug-container bug-solved" >
            <div className="bug-information">
                <h3>#{b.id}</h3>
                <p>{b.description}</p>
                <p><i>Solved</i> 😎</p>
            </div>

            <button className="emoji-btn">🚮</button>
        </div>
    )
}

export default SolvedBug