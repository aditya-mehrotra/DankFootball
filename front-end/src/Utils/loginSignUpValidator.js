import validator from 'validator'

export const validateLoginForm = (form)=>{
    let email = {error:false,msg:''};
    let submit = true;
    if(validator.isEmpty(form.email,{ignore_whitespace:true})||!validator.isEmail(form.email)){
        email.error = true;
        email.msg = "Please enter a valid email address"
        submit = false;
    }
    else{
        email.error = false;
        email.msg = "";
    }
    let password={error:false,msg:''};
    if(validator.isEmpty(form.password)){
        password.error = true;
        password.msg = "Please enter the password";
        submit = false;
    }
    else{
        password.error = false;
        password.msg = "";
    }

    return {submit:submit,email:email,password:password};
}

export const validateSignUpForm = (form)=>{
    let submit = true;
    let firstName={error:false,msg:''};
    if(validator.isEmpty(form.firstName,{ignore_whitespace:true})){
        firstName.error = true;
        firstName.msg = "Please enter a valid first name"
        submit = false;
    }
    else if(!validator.isAlpha(form.firstName)){
        firstName.error = true;
        firstName.msg = "Only aphabets are allowed in this field";
        submit = false;
    }
    else{
        firstName.error = false;
        firstName.msg = "";
    }
    let lastName={error:false,msg:''};
    if(validator.isEmpty(form.lastName,{ignore_whitespace:true})){
        lastName.error = true;
        lastName.msg = "Please enter a valid last name"
        submit = false;
    }
    else if(!validator.isAlpha(form.lastName)){
        lastName.error = true;
        lastName.msg = "Only aphabets are allowed in this field";
        submit = false;
    }
    else{
        lastName.error = false;
        lastName.msg = "";
    }
    let email={error:false,msg:''};
    if(validator.isEmpty(form.email,{ignore_whitespace:true})||!validator.isEmail(form.email)){
        email.error = true;
        email.msg = "Please enter a valid email address"
        submit = false;
    }
    else{
        email.error = false;
        email.msg = "";
    }
    let password={error:false,msg:''};
    if(validator.isEmpty(form.password)){
        password.error = true;
        password.msg = "Please enter the password";
        submit = false;
    }
    else{
        password.error = false;
        password.msg = "";
    }

    return {submit:submit,firstName:firstName,lastName:lastName,email:email,password:password};
}