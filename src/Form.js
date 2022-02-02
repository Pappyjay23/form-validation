import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import "./Form.css"

const Form = () => {
    const [submit, setSubmit] = useState(false)
    const submitReady= () =>{
        setSubmit(true)
    }

    const returnToSignUp = () =>{
        setSubmit(false)
    }
    
    return (
        <div className="form">
            <div className="form-left">
                <img src="images/img-2.svg" alt="" />
            </div>               
            {submit ? 
                <FormSuccess returnToSignUp={returnToSignUp} />                
                :
                <FormSignup checkDone={submitReady} />
            }
        </div>
    )
}

export default Form
