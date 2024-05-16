import { createAction } from "@reduxjs/toolkit";
import * as actions from "./actionTypes";

export const addBug = createAction(actions.ADD_BUG)
export const removeBug = createAction(actions.REMOVE_BUG)
export const solveBug = createAction(actions.SOLVE_BUG)