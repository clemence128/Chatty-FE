import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import ConservationService from "./../services/conservation.api"

const initialState = {
    conservations: [],
    currentConservation: null,
    messages: [],
    isLoading: false,
    error: null
}

export const getConservations = createAsyncThunk('conservation/getAll', async(values, {rejectWithValue}) => {
    try {
        const data = await ConservationService.getConservations();

        return data;
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

const conservationSlice = createSlice({
    name: 'conservation',
    initialState,
    reducers: {

    },
    extraReducers(builders){
        builders.addCase(getConservations.pending, (state, action) => {
            state.isLoading = true;
            state.error = null
        })
        .addCase(getConservations.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.conservations = action.payload.data
        })
        .addCase(getConservations.rejected, (state, action) => {    
            state.isLoading = false;
            state.error = null;
        })
    }
})

export default conservationSlice.reducer;