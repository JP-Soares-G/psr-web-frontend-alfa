import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import axios from "axios"
import registrationService from "../services/registration"
import { setMessage } from "./messageSlice"

const validateEmail = (email) => {
    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return EMAIL_REGEX.test(String(email).toLowerCase());
}

const validateSignup = (values, thunkAPI) => { // Make a new function with message, type and thunkApi as parameter and throwing an exception at the end may be good idea to make this one shorter
    if(values.username.trim() === '') {
        thunkAPI.dispatch(setMessage({message: "Username não pode ser vazio", type: "error"}))
        throw 'Validation Failed';
    } 
    
    if(values.username.length < 4) {
        thunkAPI.dispatch(setMessage({message: "Username deve conter mais de 3 caracteres", type: "error"}))
        throw 'Validation Failed';
    }

    if(values.email.trim() === '') {
        thunkAPI.dispatch(setMessage({message: "Email não pode ser vazio", type: "error"}))
        throw 'Validation Failed';
    }
    if(validateEmail(values.email)) {
        thunkAPI.dispatch(setMessage({message: "Formato invalido de Email", type: "error"}))
        throw 'Validation Failed';
    }

    // add conditional to check wheter the emails are from ufs domain

    if(values.password.trim() === '') {
        thunkAPI.dispatch(setMessage({message: "Password não pode ser vazio", type: "error"}))
        throw 'Validation Failed';
    }

    if(values.password.length < 6) {
        thunkAPI.dispatch(setMessage({message: "Password deve conter pelo menos 6 caracteres", type: "error"}))
        throw 'Validation Failed';
    }
}

export const signup = createAsyncThunk(
    'registration/signup',
    async ({username, email, password}, thunkAPI) => {    
        
        try {
            validateSignup({username, email, password}, thunkAPI) // check if the parameters are correct, otherwise throw exception.

            await registrationService.registerUser(username, email, password)
            thunkAPI.dispatch(setMessage({message: "Usuário cadastrado com sucesso", type: "success"}))
            
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }

    }
)

export const registrationSlice = createSlice({
    name: "registration",
    initialState: {
        isSuccess: false,
        isPending: false,
        isError: false
    },
    reducers: {
        clearStates: (state) => {
            state.isSuccess = false
            state.isError = false
            state.isPending = false
        }
    },
    extraReducers: {
        [signup.fulfilled]: (state) => {
            state.isSuccess = true
            state.isPending = false
            state.isError = false
        },
        [signup.pending]: (state) => {
            state.isSuccess = false
            state.isPending = true
            state.isError = false
        },
        [signup.rejected]: (state) => {
            state.isSuccess = false
            state.isPending = false
            state.isError = true
        }
    }
})

export const {clearStates} = registrationSlice.actions

export default registrationSlice.reducer