import { reducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

// createStore(reducer) from redux is deprecated
// use @reduxjs/toolkit instead
export const store = configureStore({reducer})