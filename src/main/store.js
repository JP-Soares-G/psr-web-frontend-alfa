import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import authReducer from "../reducers/authSlice";
import registrationReducer from "../reducers/registrationSlice"
import messageReducer from "../reducers/messageSlice"


export default configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        registration: registrationReducer,
        message: messageReducer
    }
})