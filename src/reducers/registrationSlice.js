import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
// import axios from "axios"
import registrationService from "../services/registration"

export const signup = createAsyncThunk(
    'registration/signup',
    async ({username, email, password}, thunkAPI) => {
        try {
            await registrationService.registerUser(username, email, password)
            // const results = await axios.get(process.env.REACT_APP_API_URL + "users")
            // console.log(results)
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
            toast.success("Cadastrado com sucesso!");
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
            toast.error("Algo deu errado!");
            // console.log("[Registration]: Error")
        }
    }
})

export const {clearStates} = registrationSlice.actions

export default registrationSlice.reducer