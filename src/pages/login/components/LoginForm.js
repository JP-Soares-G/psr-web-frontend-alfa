import React, { useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'

import OptionalsAuth from './OptionalsAuth'
import './loginForm.css'
import { useDispatch, useSelector } from 'react-redux'

import SubmitBtn from '../../../components/SubmitBtn'
import InputArea from '../../../components/InputArea'
import { login } from '../../../reducers/authSlice'

export default props => { 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const {isSuccess, isPending} = useSelector((state) => state.auth)
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

            <InputArea value={email} onChange={e => setEmail(e.target.value)} title="Username"/>
            <InputArea value={password} onChange={e => setPassword(e.target.value)} title="Password"/>
            <SubmitBtn pending={isPending} title="Entrar" />

            <p className="commom--text">Ou continue com</p>

            <OptionalsAuth />

            <p>Ainda não possui uma conta? <Link className="toSignUp" to="/signup">Cadastre-se</Link></p>
        </form>
    )
}