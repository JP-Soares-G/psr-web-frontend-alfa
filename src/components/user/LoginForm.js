import React, { useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'

import OptionalsAuth from './OptionalsAuth'
import './loginForm.css'
import SubmitBtn from '../SubmitBtn'
import InputArea from './InputArea'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../reducers/userSlice'
import axios from 'axios'

export default props => { 
    const [email, setEmail] = useState("haru")
    const [password, setPassword] = useState("haru123")

    const dispatch = useDispatch()
    const {isSuccess} = useSelector((state) => state.user)
    const history = useHistory();

    const submitLogin = (event) => {
          event.preventDefault();
          dispatch(login({email, password}))
          
    }

    useEffect(() => {
        if(isSuccess){
            history.push('/')
        }
    }, [isSuccess])


    return (
        <form className="form--login user--form" onSubmit={submitLogin}>
            <h1>Login</h1>

            <InputArea value={email} onChange={e => setEmail(e.target.value)} title="E-mail"/>
            <InputArea value={password} onChange={e => setPassword(e.target.value)} title="Password"/>
            <SubmitBtn title="Entrar" />

            <p className="commom--text">Ou continue com</p>

            <OptionalsAuth />

            <p>Ainda não possui uma conta? <Link className="toSignUp" to="/signup">Cadastre-se</Link></p>
        </form>
    )
}