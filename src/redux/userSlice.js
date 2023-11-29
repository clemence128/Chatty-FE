import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AuthService from "./../services/auth.api"
import UserService from "./../services/user.api"

const initialState = {
    error: "",
    currentUser: null,
    isLoading: false,
    isLoggedIn: false
}

export const signup = createAsyncThunk('user/signup', async(values, {rejectWithValue}) => {
    try {
        const data = await AuthService.signup({...values})
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})

export const login = createAsyncThunk('user/login', async(values, {rejectWithValue}) => {
    try {
        const data = await AuthService.signin({...values})
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})

export const getCurrentUser = createAsyncThunk('user/getCurrentUser', async(values, {rejectWithValue}) =>{
    try {
        const data = await UserService.getCurrentUser();

        return data;
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state, action){
            state.error = null;
            state.isLoggedIn = false;
            state.currentUser = null;
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
        }
    },
    extraReducers(builder) {
        builder.addCase(signup.pending, (state, action) =>{
            state.error = null;
            state.isLoading = true;
        })
        .addCase(signup.fulfilled, (state, action) => {
            const {user, token} = action.payload.data;
            const {accessToken, refreshToken} = token;
            localStorage.setItem('access_token', accessToken)
            localStorage.setItem('refresh_token', refreshToken)
            state.currentUser = user;
            state.isLoading = false;
            state.error = null;
            state.isLoggedIn = true;
        })
        .addCase(signup.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        })
        .addCase(getCurrentUser.pending, (state, action) => {
            state.isLoading = true;
            state.error = null
        })
        .addCase(getCurrentUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.currentUser = action.payload.data;
            state.isLoggedIn = true
        })
        .addCase(getCurrentUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(login.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(login.fulfilled, (state, action) => {
            const {user, token} = action.payload.data;
            const {accessToken, refreshToken} = token;
            localStorage.setItem('access_token', accessToken)
            localStorage.setItem('refresh_token', refreshToken)
            state.currentUser = user;
            state.isLoading = false;
            state.error = null;
            state.isLoggedIn = true;
        })
        .addCase(login.rejected, (state, action) => {
            console.log(action)
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export const {logout} = userSlice.actions; 

export default userSlice.reducer;