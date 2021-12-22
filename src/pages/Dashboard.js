import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {GoogleLogout} from 'react-google-login'
// import { useHistory } from 'react-router'

import {logout} from '../reducers/userSlice'

export default (props) => {
    const dispatch = useDispatch()
    // const history = useHistory()

    const { user, isLogged } = useSelector(state => state.user)
    
    const onSuccess = res => {
        // history.push('/')
        dispatch(logout())
    }

    const styles = {
        height: '100vh', 
        backgroundColor: '#37679c', 
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center'
    }

    const LogoutBtn = () => {
        return (
            isLogged ?
            (<button onClick={onSuccess}>
                Logout
            </button>)
            : 
            (<GoogleLogout 
                clientId="635251423801-664on2let5hoo18mv0hc1q3bg5rnt9no.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</button>
                )}
            />)
        )
    }
    
    return (
        <div style={styles}>
            <h1 style={{color: '#54A9E1'}}>You're logged in, {user?.email}!</h1>
            <LogoutBtn />
        </div>
    )
}