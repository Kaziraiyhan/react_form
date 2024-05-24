import { useState } from "react";
import Container from "../Ui/Container";
import Title from "../Ui/Title";
import InputGroup from "./components/form/InputGroup";
import { DeapClon, stateToValues } from "./utils/object_utils";
import { valueToState } from "./utils/object_utils";
import { checkValidity } from "./utils/sarvices";
Title
const data = {
  fullName: "Kazi raihan", email: "", password: "", number: "",
}

const formData = valueToState(data);



const App = () => {
  const [state, setState] = useState(formData)

  const HandaleChange = (e) => {
    const { value, name } = e.target

    const copyState = DeapClon(state) //Clone state object
    copyState[name].value = value //update state value

    setState(copyState)
  }
  const handleFouch = (e) => {
    const { name } = e.target
    const stateCopy = DeapClon(state)

    stateCopy[name].touched = true
    stateCopy[name].focused = true

    setState(stateCopy)

  }
  const handleBlur = (e) => {
    const { name } = e.target
    const stateCopy = DeapClon(state)
    stateCopy[name].focused = false;

    const values = stateToValues(stateCopy, "value")

    const { isValid, currError } = checkValidity(values)
    if (isValid) {
      console.log(values);
    } else {


      Object.keys(currError).forEach((key) => {
        stateCopy[key].error = currError[key];

      })
      console.log(stateCopy);
      setState(stateCopy)
    }
   
  }


  const handleSubmit = (e) => {
    const clondata = DeapClon(state)
    const values = stateToValues(clondata, "value")

    const { isValid, currError } = checkValidity(values)
    if (isValid) {
      console.log(values);
      
    } else {

      Object.keys(currError).forEach((key) => {
        clondata[key].error = currError[key];

      })
    }
    setState(clondata)
    e.preventDefault()
  }
  return (
    <Container>
      <h1>react form</h1>
      <form onSubmit={handleSubmit}>

        <Title $error >
          This is my title
        </Title>
        <InputGroup
          value={state.fullName.value}
          handleBlur={handleBlur}
          handleFouch={handleFouch}
          error={state.fullName.error}
          name="fullName"
          label="Full Name"
          HandleChange={HandaleChange}
        />

        <InputGroup
          value={state.email.value}
          handleFouch={handleFouch}
          handleBlur={handleBlur}
          error={state.email.error}
          name="email"
          label="Enter your email"
          HandleChange={HandaleChange}
        />
        <InputGroup
          value={state.password.value}
          handleFouch={handleFouch}
          handleBlur={handleBlur}
          error={state.password.error}
          name="password"
          label="Enter your Password"
          HandleChange={HandaleChange}
          password="password"
        />

<InputGroup
          value={state.password.value}
          handleFouch={handleFouch}
          handleBlur={handleBlur}
          error={state.password.error}
          name="password"
          label="Enter your Password"
          HandleChange={HandaleChange}
          password="password"
        />

        

        <button onSubmit={handleSubmit}>Submit</button>

      </form>
    </Container>

  )
}

export default App