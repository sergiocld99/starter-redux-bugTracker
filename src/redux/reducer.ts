import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";
import Bug from "../model/bug";

const initialState: Bug[] = []
let lastId = 0

export const reducer = createReducer(initialState, (builder) => {
    builder.addCase(actions.addBug, (state, action) => [
        ...state, {
            id: ++lastId,
            description: action.payload,
            solved: false
        }
    ]).addCase(actions.removeBug, (state, action) => state.filter(
        bug => bug.id != action.payload
    )).addCase(actions.solveBug, (state, action) => state.map(
        bug => bug.id === action.payload ? {...bug, solved: true} : bug
    ))
})
