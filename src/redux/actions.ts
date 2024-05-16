import { createAction } from "@reduxjs/toolkit";
import * as types from "./actionTypes";

export const addBug = createAction<string>(types.ADD_BUG)
export const removeBug = createAction<number>(types.REMOVE_BUG)
export const solveBug = createAction<number>(types.SOLVE_BUG)