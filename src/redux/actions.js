import * as actions from "./actionTypes";

export const addBug = (description) => ({
    type: actions.ADD_BUG,
    payload: { description }
})

export const removeBug = (id) => ({
    type: actions.REMOVE_BUG,
    payload: { id }
})

export const solveBug = (id) => ({
    type: actions.SOLVE_BUG,
    payload: { id }
})