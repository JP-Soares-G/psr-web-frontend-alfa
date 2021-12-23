import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

const login = (username, password) => {

    return axios.post(API_URL + "signin", {username, password})
        .then(res => {
            if(res.data.token){
                localStorage.setItem("user", JSON.stringify(res.data))
            }

            return res.data
        })
        .catch(err => console.log("[Login]:", err, API_URL))
}

const logout = () => {
    localStorage.removeItem("user")
}

const authService = {
    login,
    logout
}

export default authService