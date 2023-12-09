import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import MessageService from "./../services/message.api"

const initialState = {
    messages: [],
    files: [],
    currentIndexFile: 0,
    isLoading: false,
    error: null
}

export const getMessagesByConservation = createAsyncThunk("message/getMessages", async(values, {rejectWithValue}) => {
    try {
        return await MessageService.getMessageByConservation(values);
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const createMessage = createAsyncThunk("message/createMessage", async(values, {rejectWithValue}) => {
    try {
        return await MessageService.createMessage(values)
    } catch (error) {
        return rejectWithValue(error);
    }
})

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addMessage(state, action){
            state.messages = [...state.messages, action.payload];
        },
        addFile(state, action){
            state.files = [...state.files, action.payload]
        },
        removeAllFile(state, action){
            state.files = []
        }
    },
    extraReducers(builder){
        builder.addCase(getMessagesByConservation.pending, (state, action) => {
            state.isLoading = true
        })
        .addCase(getMessagesByConservation.fulfilled, (state, action) => {
            state.isLoading = false
            state.messages = action.payload.data;
        })
        .addCase(createMessage.pending, (state, action) => {
            state.isLoading = true
        })
        .addCase(createMessage.fulfilled, (state, action) => {
            state.isLoading = false;
            state.messages = [...state.messages, action.payload.data]
        })
        .addCase(createMessage.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export const {addMessage, addFile, removeAllFile} = messageSlice.actions;

export default messageSlice.reducer;