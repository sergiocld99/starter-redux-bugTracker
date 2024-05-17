import React from "react"
import Form from "./Form"
import Dashboard from "./Dashboard"

const App = () => {
    return (
        <div className="main-container" >
            <h1>Bug Tracker</h1>
            <Form/>
            <h2>Dashboard</h2>
            <Dashboard/>
        </div>
    )
}

export default App