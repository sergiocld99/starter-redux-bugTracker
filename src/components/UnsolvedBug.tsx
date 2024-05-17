import React from "react";
import Bug from "../model/bug";
import { store } from "../redux/store";
import { solveBug } from "../redux/actions";

const UnsolvedBug = (b: Bug) => {
    return (
        <div className='bug-container bug-unsolved' >
            <div className="bug-information">
                <h3>#{b.id}</h3>
                <p>{b.description}</p>
                <i>Pending</i>
            </div>

            <button className="emoji-btn" onClick={e => {
                store.dispatch(solveBug(b.id))
            }}>✅</button>
        </div>
    )
}

export default UnsolvedBug