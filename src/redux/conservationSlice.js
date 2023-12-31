import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import ConservationService from "./../services/conservation.api"

const initialState = {
    conservations: [],
    currentConservation: null,
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

export const openConservation = createAsyncThunk('conservation/open', async(values, {rejectWithValue}) => {
    try {
        const data = await ConservationService.openConservation(values);

        return data;
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

const conservationSlice = createSlice({
    name: 'conservation',
    initialState,
    reducers: {
        selectConservation(state, action){
            state.currentConservation = action.payload
        },
        updateLatestMessage(state, action){
            const latestMessage = action.payload;
            state.conservations = state.conservations.map(el => {
                if(el._id === latestMessage.conservation){
                    el.latestMessage = latestMessage;
                    el.updatedAt = latestMessage.updatedAt
                }

                return el;
            }).sort((a, b) => b.updatedAt - a.updatedAt)
        },
        addConservation(state, action){
            const ids = []
            const finalConservations = [];
            [...state.conservations, action.payload].forEach(el => {
                if(!ids.includes(el._id)){
                    ids.push(el._id);
                    finalConservations.push(el);
                }
            })
            
            state.conservations = finalConservations;
        }
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
        .addCase(openConservation.pending, (state, action) => {
            state.isLoading = true
        })
        .addCase(openConservation.fulfilled, (state, action) => {
            state.isLoading = false;

            const existingConservation = state.conservations.find(el => el._id === action.payload.data._id)
            if(!existingConservation){
                state.conservations = [...state.conservations, action.payload.data]
            }

            state.error = null;
            state.currentConservation = action.payload.data;
        })
        .addCase(openConservation.rejected, (state, action) => {
            state.isLoading = false
            state.error =action.payload
        })
    }
})

export const {selectConservation, updateLatestMessage, addConservation} = conservationSlice.actions;

export default conservationSlice.reducer;