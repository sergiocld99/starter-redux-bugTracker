import React from "react";
import Bug from "../model/bug";
import { store } from "../redux/store";
import { removeBug } from "../redux/actions";

const SolvedBug = (b: Bug) => {
    return (
        <div className="bug-container bug-solved" >
            <div className="bug-information">
                <h3>#{b.id}</h3>
                <p>{b.description}</p>
                <p><i>Solved</i> 😎</p>
            </div>

            <button className="emoji-btn" onClick={e => {
                store.dispatch(removeBug(b.id))
            }}>🚮</button>
        </div>
    )
}

export default SolvedBug