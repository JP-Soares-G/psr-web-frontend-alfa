import React from 'react';
import { useSelector } from 'react-redux';
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
    const {isLogged} = useSelector(state => state.user)

    return (
        <Route {...rest} render={props => (
            isLogged 
            ? <Component {...props} />
            : <Redirect to="/signin" />
        )} />
    )
}

export default PrivateRoute