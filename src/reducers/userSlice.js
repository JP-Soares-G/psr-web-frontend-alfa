import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

import authService from "../services/auth";
import registrationService from "../services/registration";

const user = JSON.parse(authService.getUser())

export const login = createAsyncThunk(
    'user/login',
    async ({email, password}, thunkAPI) => {
        try {
            const data = await authService.login(email, password)
            return {user: data}
        } catch (err) {
            return thunkAPI.rejectWithValue()
        }
    }
)

export const logout = createAsyncThunk(
    "user/logout",
    async () => {
        await authService.logout()
    }
)

export const signup = createAsyncThunk(
    'user/signup',
    async ({username, email, password}, thunkAPI) => {
        try {
            const data = await registrationService(username, email, password)
            return {user: data}
        } catch (err) {
            return thunkAPI.rejectWithValue()
        }
    }
)


const initialState = user 
? {
    user,
    isLogged: true,
    isSuccess: false,
    isPending: false,
    isError: false
}

: {
    user: null,
    isLogged: false,
    isSuccess: false,
    isPending: false,
    isError: false
}

export const useSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: {
        [login.fulfilled]: (state, {payload}) => {
            state.user = payload.user
            state.isSuccess = true
            state.isError = false
            state.isPending = false
            state.isLogged = true

        },
        [login.pending]: (state) => {
            state.isSuccess = false
            state.isError = false
            state.isPending = true
            state.isLogged = false
        },
        [login.rejected]: (state) => {
            state.isPending = false
            state.isSuccess = false
            state.isError = true
            state.isLogged = false
        },
        [logout.fulfilled]: (state) => {
            state.isLogged = false
            state.user = null
            state.isPending = false
            state.isSuccess = false
            state.isError = false
        }
    },
    
})

// export const {logout} = useSlice.actions

export default useSlice.reducer