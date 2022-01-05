import React, { useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import './signupForm.css'
import SubmitBtn from '../../../components/SubmitBtn'
import InputArea from '../../../components/InputArea'
import { signup } from '../../../reducers/registrationSlice'
// import { toast } from 'react-toastify'

export default props => {
    const dispatch = useDispatch()
    const {isPending, isSuccess, isError} = useSelector(state => state.registration)

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory();

    // useEffect(() => {
    //     if(isSuccess === true) toast.success("Cadastrado com sucesso!"); 
    //     if(isError === true) toast.error("Algo deu errado!");
    // }, [isSuccess, isError])

    const submitLogin = (event) => {
        console.log(isPending, isSuccess, isError)
        event.preventDefault();
        dispatch(signup({username, email, password}))
    
        //   history.push('/')
    }

    return (
        <form className="form--signup user--form" onSubmit={submitLogin}>
            <h1 className="form__title">Registre-se</h1>
                
            <InputArea value={username} onChange={e => setUsername(e.target.value)}  title="Username" />
            <InputArea value={email} onChange={e => setEmail(e.target.value)} title="E-mail" />
            <InputArea value={password} onChange={e => setPassword(e.target.value)} title="Password" />

            <SubmitBtn pending={isPending} title="Registrar" />
            
            <p>Já possui uma conta? faça <Link className="toLogin" to="/">Login</Link></p>
        </form>
    )
}