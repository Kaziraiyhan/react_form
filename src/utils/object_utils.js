

export const DeapClon = (state) =>{
    const object = JSON.parse(JSON.stringify(state))
    return object;
}

export  const stateToValues = (object, key) => {
  const data = Object.keys(object).reduce((acc, curr) =>{
     acc[curr]= object[curr][key]
     return acc
   }, {})
   return data
 }
 
 export const valueToState = (data) =>{

  const formData = Object.keys(data).reduce((acc, curr) => {

    acc[curr] = {
      value: data[curr],
      touched: false,
      focused: false,
      error: "",
      
    }
  
    return acc
  }, {})
  
  return formData
 }