import React, { useState } from "react"
import { store } from "../redux/store"
import { addBug } from "../redux/actions"

const Form = () => {
    // el hook useState retorna un arreglo, no objeto
    const [description, setDescription] = useState("")

    return (
        <div className="form-container">
            <input className="text-input" onChange={e => {
                setDescription(e.target.value)
            }}></input>
            <input className="add-btn" type="button" value="Add" onClick={e => {
                if (description?.trim().length >= 10){
                    store.dispatch(addBug(description.trim()))

                } else {
                    alert("La descripción debe contener al menos 10 caracteres")
                }
                
            }} />
        </div>
    )
}

export default Form