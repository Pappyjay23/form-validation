import React from 'react'
import useForm from './useForm'
import formLogic from './formLogic'

const FormSignup = ({checkDone}) => {
    const {handleInputs, handleSubmit, errors} = useForm(formLogic, checkDone);

    return (
        <>
            <form className='form-right' id='sign-up-form' onSubmit={handleSubmit}>
                <h1>Get started with us today! Create your account by filling out the information below.</h1>
                <div className="input-row">
                    <label htmlFor="username">Username</label>
                    <input onChange={handleInputs} type="text" name='username' id='username' placeholder='Enter your username' />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="input-row">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleInputs} type="email" name='email' id='email' placeholder='Enter your email' />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="input-row">
                    <label htmlFor="password1">Password</label>
                    <input onChange={handleInputs} type="password" name='password1' id='password1' placeholder='Enter your password' />
                    {errors.password1 && <p>{errors.password1}</p>}
                </div>
                <div className="input-row">
                    <label htmlFor="password2">Confirm Password</label>
                    <input onChange={handleInputs} type="password" name='password2' id='password2' placeholder='Enter your password' />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button type='submit' className='form-btn'>Sign up</button>
                <span className='login-text'>Already have an account? Log in <a href="#sign-up-">here</a></span>
            </form>
        </>
    )
}

export default FormSignup
