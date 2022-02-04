import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import authService from "../services/auth";
import { setMessage } from "./messageSlice";

const user = JSON.parse(authService.getUser())

// const validateEmail = (email) => {
//     const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return EMAIL_REGEX.test(String(email).toLowerCase());
// }

const validateLogin = (values, thunkAPI) => {
    if(values.username !== undefined && values.username.trim() === '') return thunkAPI.dispatch(setMessage({message: "Username não pode ser vazio", type: "error"}))
    if(values.email !== undefined && values.email.trim() === '') return thunkAPI.dispatch(setMessage({message: "Email não pode ser vazio", type: "error"}))
    if(values.password.trim() === '') return thunkAPI.dispatch(setMessage({message: "Password não pode ser vazio", type: "error"}))
    return true
}

export const login = createAsyncThunk(
    'auth/login',
    async ({username, password}, thunkAPI) => {
        try {
            const data = await authService.login(username, password)
            return {user: data}
        } catch (err) {
            validateLogin({username, password}, thunkAPI)
            // thunkAPI.dispatch(setMessage({message: "Dados informados invalidos", type: "error"}))
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