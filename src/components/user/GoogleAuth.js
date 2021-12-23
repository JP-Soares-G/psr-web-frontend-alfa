import React from 'react'
import './optionalsAuth.css'
import {GoogleLogin} from 'react-google-login' 
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import { login } from '../../reducers/userSlice'

export default props => {
    const dispatch = useDispatch()
    const history = useHistory()

    const onSuccess = (res) => {
        const prof = res.profileObj || res.getBasicProfile()
        const id_token = res.getAuthResponse().id_token
        dispatch(login(prof))
        history.push('/dashboard')
    }
    
    const onFailure = (res) => {
        console.log('[Login Failed] res:', res)
    }

    return (   
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={renderProps => (
                <button className='ggl' onClick={renderProps.onClick} disabled={renderProps.disabled}><img alt="google icon" className="icon icon--google" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" /></button>
            )}

            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
        />     
    )
}