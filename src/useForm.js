import { useEffect, useState } from 'react'


const useForm = (formLogic,  checkDone) => {

    const [input, setInput] = useState({
        username: "",
        email: "",
        password1: "",
        password2: ""
    })

    const [errors, setErrors] = useState({})
    const [submitting, setIsSubmitting] = useState(false)

    const handleInputs = (e) =>{
        setInput({...input, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && submitting ){
            checkDone();
        }
    }, [errors])

    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(formLogic(input))
        setIsSubmitting(true)
    }

    return (
        {handleInputs, handleSubmit, errors}
    )
}

export default useForm
