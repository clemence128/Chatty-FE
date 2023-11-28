import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AuthService from "./../services/auth.api"

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

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state, action){
            state = initialState;
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
            state.isLoggedIn = true;
        })
        .addCase(signup.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        })
    }
})

export const {logout} = userSlice.actions;

export default userSlice.reducer;