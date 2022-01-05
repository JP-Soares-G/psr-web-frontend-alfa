import axios from 'axios'

export const TOKEN_KEY = 'user'
const API_URL = process.env.REACT_APP_API_URL

const login = (username, password) => {

    return axios.post(API_URL + "signin", {username, password})
        .then(res => {
            if(res.data.token){
                localStorage.setItem(TOKEN_KEY, JSON.stringify(res.data))
            }

            return res.data
        })
}

const googleLogin = (tokenId) => {
    // console.log(tokenId)
    return axios.post(API_URL + "tokensignin", {id_token: tokenId})
        .then(res => console.log(res))
}

const logout = () => {
    localStorage.removeItem(TOKEN_KEY)
}

const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) != null


const getUser = () => localStorage.getItem(TOKEN_KEY);


const authService = {
    login,
    googleLogin,
    logout,
    isAuthenticated,
    getUser
}

export default authService