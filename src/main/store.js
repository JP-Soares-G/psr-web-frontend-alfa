import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import authReducer from "../reducers/authSlice";
import registrationReducer from "../reducers/registrationSlice"

export default configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        registration: registrationReducer
    }
})