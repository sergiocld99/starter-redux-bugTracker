import React from "react";
import Bug from "../model/bug";

const UnsolvedBug = (b: Bug) => {
    return (
        <div className='bug-container bug-unsolved' >
            <div className="bug-information">
                <h3>#{b.id}</h3>
                <p>{b.description}</p>
                <i>Pending</i>
            </div>

            <button className="emoji-btn">✅</button>
        </div>
    )
}

export default UnsolvedBug