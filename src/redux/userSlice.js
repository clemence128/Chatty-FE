import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    error: "",
    currentUser: null,
    isLoading: false,
    isLoggedIn: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})

export default userSlice.reducer;