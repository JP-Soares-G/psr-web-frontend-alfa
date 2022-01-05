import React from 'react'
import { useSelector } from 'react-redux'
import './submitBtn.css'
import Loader from "react-loader-spinner"
export default props => {
    // const {isPending} = useSelector((state) => state.auth)
    return (
        <button className="btn--submit" type="submit">
            { !props.pending
                ? props.title
                : <Loader
                    type="ThreeDots"
                    color="royalblue"
                    height={14.5}
                    width={40}
                />
            }
        </button>
    )
}