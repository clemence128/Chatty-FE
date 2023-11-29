import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import conservationSlice from "./conservationSlice";

const rootReducer = combineReducers({
    user: userSlice,
    conservation: conservationSlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store;