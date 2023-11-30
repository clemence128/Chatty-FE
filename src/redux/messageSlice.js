import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import MessageService from "./../services/message.api"

const initialState = {
    messages: [],
    files: [],
    isLoading: false
}

export const getMessagesByConservation = createAsyncThunk("message/getMessages", async(values, {rejectWithValue}) => {
    try {
        return await MessageService.getMessageByConservation(values);
    } catch (error) {
        return rejectWithValue(error);
    }
})

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(getMessagesByConservation.pending, (state, action) => {
            state.isLoading = true
        }),
        builder.addCase(getMessagesByConservation.fulfilled, (state, action) => {
            state.isLoading = false
            state.messages = action.payload.data;
        })
    }
})

export default messageSlice.reducer;