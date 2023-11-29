import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    conservations: [],
    currentConservation: null,
    messages: [],
    isLoading: false
}


const conservationSlice = createSlice({
    name: 'conservation',
    initialState,
    reducers: {

    }
})

export default conservationSlice.reducer;