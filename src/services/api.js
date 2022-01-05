import axios from "axios"
import authService from './auth'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

api.interceptors.request.use(async config => {
    const user = JSON.parse(authService.getUser()) 
    
    if(user) {
        const token = user.token
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

export default api