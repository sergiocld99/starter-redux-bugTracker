import { createAction } from "@reduxjs/toolkit";
import * as types from "./actionTypes";

export const addBug = createAction(types.ADD_BUG)
export const removeBug = createAction(types.REMOVE_BUG)
export const solveBug = createAction(types.SOLVE_BUG)