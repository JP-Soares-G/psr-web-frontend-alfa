import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import authService from "../services/auth";

const user = JSON.parse(authService.getUser())

export const login = createAsyncThunk(
    'auth/login',
    async ({email, password}, thunkAPI) => {
        try {
            const data = await authService.login(email, password)
            return {user: data}
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        await authService.logout()
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

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearStates: (state) => {
            state.isSuccess = false
            state.isError = false
            state.isPending = false
        }
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
            toast.error("Algo deu errado!");
            console.log("[Auth]: Error")
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

export default authSlice.reducer