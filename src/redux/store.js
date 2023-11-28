import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const rootReducer = combineReducers({userSlice})

const store = configureStore({
    reducer: rootReducer
})

export default store;