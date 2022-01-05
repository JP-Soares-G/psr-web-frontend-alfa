import axios from 'axios'

const registerUser = (username, email, password) => {
    return axios.post(process.env.REACT_APP_API_URL + "signup", {username, email, password})
    .then(res => {
        return res.data
    })
}


const registrationService = {
    registerUser
}

export default registrationService