import React from 'react'
import './submitBtn.css'

export default props => {
    
    return (
        <button className="btn--submit" type="submit">{props.title}</button>
    )
}