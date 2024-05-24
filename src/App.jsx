import Button from "../Ui/Button";
import InputGroup from "./components/form/InputGroup";
import useForm from "./hooks/useForm";
import { checkValidity } from "./utils/sarvices";

const data = {
  fullName: "Kazi raihan", email: "", password: "", number: "", radio: "", checkbox: "", img: ""
}

const App = () => {
  const {
    formState,
    handleSubmit,
    HandaleChange,
    handleBlur,
    handleFouch, } = useForm({ data, checkValidity })


  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit} style={{width:"450px", margin:"auto"}} >

        <InputGroup
          value={formState.fullName.value}
          handleFouch={handleFouch}
          handleBlur={handleBlur}
          error={formState.fullName.error}
          name="fullName"
          label="Full Name"
          HandleChange={HandaleChange}
        />
        <InputGroup
          value={formState.email.value}
          handleFouch={handleFouch}
          handleBlur={handleBlur}
          error={formState.email.error}
          name="email"
          label="Enter your email"
          HandleChange={HandaleChange}
        />
        <InputGroup
          value={formState.password.value}
          handleFouch={handleFouch}
          handleBlur={handleBlur}
          error={formState.password.error}
          name="password"
          label="Enter your password"
          HandleChange={HandaleChange}
          type={"password"}
        />
        <InputGroup
          value={'one'}
          name="radio"
          label="radio One"
          HandleChange={HandaleChange}
          type="radio"
        />
        <InputGroup
          value={'two'}
          name="radio"
          label="radio tow"
          HandleChange={HandaleChange}
          type="radio"
        />
        <InputGroup
          value={formState.checkbox.value}
          checked={formState.checkbox.value}
          name="checkbox"
          label="Cheackbox One"
          HandleChange={HandaleChange}
          type="checkbox"
        />
        <InputGroup
          value={formState.img.value}
          name="img"
          label="Uplode image"
          HandleChange={HandaleChange}
          type="file"
        />
  
        {console.log(formState)}

        <Button onSubmit={handleSubmit}> Submit</Button>
      </form>
      <div>
        <img src={formState.img.value} alt="" />
      </div>

    </>
  )

}
export default App