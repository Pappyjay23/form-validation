export default function formLogic(input){
    let errors = {}
    if (!input.username.trim()) {
        errors.username = "Please fill in a valid username"
    }

    if (!input.email) {
        errors.email = "Please fill in a valid email"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input.email)){
        errors.email = "Email address is invalid"
    }else if(input.email[0].includes(input.email[0].toUpperCase())){
        errors.email = "Email address is invalid"
    }

    if (!input.password1) {
        errors.password1 = "Please fill in a valid password"
    }else if(input.password1.length < 6){
        errors.password1 = "Please fill in a password with 6 characters or more."
    }
    
    if (!input.password2) {
        errors.password2 = "Please fill in a valid password"
    }else if(!input.password2 === input.password1){
        errors.password2 = "The password you filled does not match"
    }

    return errors;
    
}