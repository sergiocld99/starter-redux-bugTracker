import React from "react"
import ReactDOM from "react-dom/client"
import App from "./src/components/App"

const container = document.getElementById('root') as Element
if (!container) throw new Error("Root Element not found")

const root = ReactDOM.createRoot(container);
root.render(<App/>);

// npx webpack --watch
// live-server

import { addBug, removeBug, solveBug } from "./src/redux/actions"
import { store } from "./src/redux/store"

console.log("Hola Mundo!")

const unsuscribe = store.subscribe(() => {
    console.log("Change detected in Store", store.getState())
})

store.dispatch(addBug("Mi primer bug"))
store.dispatch(addBug("Un segundo bug"))
store.dispatch(removeBug(1))
store.dispatch(addBug("Un tercer bug"))
store.dispatch(solveBug(2))

//unsuscribe();