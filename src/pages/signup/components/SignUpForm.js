import React, { useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import './signupForm.css'
import SubmitBtn from '../../../components/SubmitBtn'
import InputArea from '../../../components/InputArea'
import { clearStates, signup } from '../../../reducers/registrationSlice'
// import { toast } from 'react-toastify'

export default props => {
    const dispatch = useDispatch()
    const {isPending, isSuccess} = useSelector(state => state.registration)

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory();

    

    const submitLogin = (event) => {
        event.preventDefault();
        dispatch(signup({username, email, password}))
    }



    useEffect(() => {
        if(isSuccess) {
            setUsername("")
            setEmail("")
            setPassword("")
            dispatch(clearStates())
            history.push('/signin')
        } 
    }, [isSuccess])


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