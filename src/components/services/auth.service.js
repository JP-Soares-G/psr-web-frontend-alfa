import axios from 'axios'

const API_URL = process.env.REACT_API_URL

const login = (username, password) => {
    return axios.post(API_URL + "signin", {username, password})
        .then(res => {
            if(res.data.token){
                localStorage.setItem("user", JSON.stringify(res.data))
            }

            return res.data
        })
}

const logout = () => {
    localStorage.removeItem("user")
}

const authService = {
    login,
    logout
}

export default authService