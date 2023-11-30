import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import conservationSlice from "./conservationSlice";
import messageSlice from "./messageSlice";

const rootReducer = combineReducers({
    user: userSlice,
    conservation: conservationSlice,
    message: messageSlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store;