import axios from 'axios';
import React from 'react'
import {Link, useHistory} from 'react-router-dom'

import './signupForm.css'
import SubmitBtn from '../SubmitBtn';
import InputArea from './InputArea';

export default props => {
    // const [user, setUser] = React.useState("")
    
    const history = useHistory();

    const submitLogin = (event) => {
          event.preventDefault();
          history.push('/')
    }

    

    return (
        <form className="form--signup user--form" onSubmit={submitLogin}>
            <h1 className="form__title">Registre-se</h1>
                
            <InputArea title="Nome" />
            <InputArea title="Sobrenome" />
            <InputArea title="E-mail" />
            <InputArea title="Password" />
            <SubmitBtn title="Registrar" />
            
            <p>Já possui uma conta? faça <Link className="toLogin" to="/">Login</Link></p>
        </form>
    )
}