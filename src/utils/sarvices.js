import validator from 'validator';

export const checkValidity = (values) =>{
    const currError = {}
   const  {fullName, email, password} = values;
    if(!fullName){
      currError.fullName = "please enter valid taitle"
    }
    
    if(!email){
      currError.email = "please enter valid email"
    }else if(!validator.isEmail(email)){
      currError.email = `${email} is invalid`
    }else{
      currError.email = ""
    }
    
    if(!password){
      currError.password = "please enter valid password"
    }else if(password.length < 5){
      currError.password = "pasword must be more then 6 laters"
    } 
    else{
      currError.password = ""
    }

    return {
      currError, 
      isValid: Object.keys(currError).length == 0,
    }

  }
  