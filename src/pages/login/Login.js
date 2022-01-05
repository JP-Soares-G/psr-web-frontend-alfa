import React from 'react'

import LoginForm from './components/LoginForm'
import bgImage from '../../assets/bg-grade.png'
import './login.css'

export default (props) => {
    
    return (
        <div className="page--login">
            <div className="wrapper">
                <img className="bg__image" src={bgImage} alt=""/>
                <LoginForm />
            </div>
        </div>
    )
}