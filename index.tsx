import React from "react"
import ReactDOM from "react-dom/client"
import App from "./src/components/App"

const container = document.getElementById('root') as Element
if (!container) throw new Error("Root Element not found")

const root = ReactDOM.createRoot(container);
root.render(<App/>);