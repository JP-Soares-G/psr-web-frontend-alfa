import React from 'react'
import SignUpForm from './components/SignUpForm'
import bgImage from '../../assets/bg-grade.png'

import './signUp.css'

export default props => {
    return (
        <div className="page--signup">
           <div className="wrapper">
                <img className="bg__image" src={bgImage} alt=""/>
                <SignUpForm />
            </div>
        </div>
    )
}