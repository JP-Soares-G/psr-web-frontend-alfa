import React, { useState } from 'react'
import './inputArea.css'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'

export default props => {
    const [showPassword, setShowPassword] = useState(false)
    // const [value, setValue] = useState("")
    const changeShowPassword = () => setShowPassword(!showPassword)

    if(props.title === "Password") {
        return (
                <div className="input-wrapper">
                    <input 
                        id={props.title}
                        className="input--password" 
                        placeholder="&nbsp;"
                        // placeholder="Password" 
                        {...props}
                        type={showPassword ? "text" : "password" }
                    />
                    <label htmlFor={props.title} className="placeholder">{props.title}</label>
                    
                    {showPassword 
                        ? <AiFillEye onClick={changeShowPassword} className="eye" />
                        : <AiFillEyeInvisible onClick={changeShowPassword} className="eye" />
                    }

                </div>
        )
    }
    // placeholder={props.title}
    return (
        <div className="input-wrapper">

            <input   
                type="text" 
                placeholder="&nbsp;"
                {...props}
                id={props.title}
            />
            <label htmlFor={props.title} className="placeholder">{props.title}</label>
        </div>
    )
}