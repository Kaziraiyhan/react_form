import { useState } from "react";
import Title from "../Ui/Title";
import Container from "../Ui/Container";
import InputGroup from "./components/form/InputGroup";
import { DeapClon } from "./utils/object_utils";
import { stateToValues } from "./utils/object_utils";
Title
const data = {
  fullName : "Kazi raihan", email : "", password: "", number: "",
}


  const newData = Object.keys(data).reduce((acc, curr) =>{

  acc[curr] = {
    value:data[curr],
    touched: false,
    focused: false,
    error: ""
  }
  return  acc
},{})


const App = ()=>{
    const [state, setState] = useState(newData)

    const HandaleChange = (e) =>{
      const {value, name} = e.target
        
      const oldData = JSON.parse(JSON.stringify(state))
      oldData[name].value =  value

        setState(oldData)
        }
        const clondata = DeapClon(state)
        

        // const StateToValues = (object, key) => {
        //   //  object = JSON.parse(JSON.stringify(state))
        //  const data = Object.keys(object).reduce((acc, curr) =>{
        //     acc[curr]= object[curr][key]
        //     return acc
        //   }, {})
        //   return data
        // }
       const values = stateToValues(clondata, "value")
       
     

        const checkValidity = (values) =>{
          const currError = {}
         const  {fullName, email, password} = values;
          if(!fullName){
            currError.fullName = "please enter valid taitle"
          }
          const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
          if(!email){
            currError.email = "please enter valid email"
          }else if(!email.match(re)){
            currError.email = `${email} is invalid`
          }
          
          
          if(!password){
            currError.password = "please enter valid password"
          }

          return {
            currError, 
            isValid: Object.keys(currError).length == 0,
          }

        }
        

          
        

        const handleSubmit = (e) =>{

          const {isValid, currError} = checkValidity(values)
          if(isValid){
            console.log(values);
          }else{
            console.log(currError);
          const  formData = JSON.parse(JSON.stringify(state))

       Object.keys(currError).forEach((key) =>{
          formData[key].error = currError[key];

         })
         setState(formData)
        

            

          }
          e.preventDefault()
        }
  return (
    <Container>
<h1>react form</h1>
<form onSubmit={handleSubmit}>

    <Title $error >
        This is my title
    </Title>
  <InputGroup value ={state.fullName.value } error={state.fullName.error} name="fullName" label="Full Name" HandleChange={HandaleChange}/> 
  <InputGroup value ={state.email.value } error={state.email.error} name="email" label="Enter your email" HandleChange={HandaleChange}/> 

  <button>Submit</button>

</form>
    </Container>

  )
}

export default App