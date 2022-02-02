import React from 'react'
import {FaTimes} from "react-icons/fa"

const FormSuccess = ({returnToSignUp}) => {
    return (
        <>
            <div className="form-right-2">
                <div className="icon-container">
                    <FaTimes className='form-icon' onClick={returnToSignUp} />
                </div>
                <h1>Your request has been recieved! <br /> Will respond to you shortly.</h1> 
                <figure>
                    <img src="images/img-3.svg" alt="" />
                </figure>
            </div>
        </>
    )
}

export default FormSuccess
