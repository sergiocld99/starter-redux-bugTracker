// configurado para ejecutar servidor y actualizarlo ante cada cambio!
// npx webpack-dev-server

import { addBug, removeBug, solveBug } from "./redux/actions"
import { store } from "./redux/store"

console.log("Hola Mundo!")

const unsuscribe = store.subscribe(() => {
    console.log("Change detected in Store", store.getState())
})

store.dispatch(addBug("Mi primer bug"))
store.dispatch(addBug("Un segundo bug"))
store.dispatch(removeBug(1))
store.dispatch(addBug("Un tercer bug"))
store.dispatch(solveBug(2))

unsuscribe();