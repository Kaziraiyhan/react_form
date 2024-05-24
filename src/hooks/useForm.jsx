
import PropTypes from "prop-types";
import { useState } from "react";
import { DeapClon, stateToValues, valueToState } from "../utils/object_utils";


/**
 * Custom hook for form management.
 * @param {Object} params - The parameters for the hook.
 * @param {Object} params.data - The initial form data.
 * @param {function(Object): {isValid: boolean, currError: Object.<string, string>}} params.checkValidity 
 * @throws {Error} Throws an error if checkValidity is not a function.
 */


const useForm = ({ data, checkValidity }) => {

    if (typeof checkValidity !== 'function') {
        throw new Error('checkValidity must be a function');
    }

    const formData = valueToState(data);
    const [state, setState] = useState(formData);

    const HandaleChange = (e) => {
        const { value, name, type, checked } = e.target
        console.log(e.target.files);


        const copyState = DeapClon(state) //Clone state object;
        if (type == "checkbox") {
            copyState[name].value = checked
        } else {
            copyState[name].value = value //update state value
        }

        const values = stateToValues(copyState, "value");
        const { currError } = checkValidity(values);

        if (copyState[name].touched && currError[name]) {
            copyState[name].error = currError[name];
        } else {
            copyState[name].error = "";
        }
        if (copyState[name].focused) {
            copyState[name].error = "";
        }

        setState(copyState)
    }

    const getErrors = () => {

        const copyState = DeapClon(state)
        const values = stateToValues(copyState, "value");
        const { currError, isValid } = checkValidity(values);
        return { currError, isValid, values }
    }

    const handleFouch = (e) => {
        const { name } = e.target
        const stateCopy = DeapClon(state);
        stateCopy[name].touched = true
        stateCopy[name].focused = true
        setState(stateCopy)

    }
    const handleBlur = (e) => {
        const { name } = e.target

        const stateCopy = DeapClon(state)
        stateCopy[name].focused = false;
       
        // const values = stateToValues(stateCopy, "value")
        // const { isValid, currError } = checkValidity(values)
        const { currError, isValid, values } = getErrors()
        if (isValid) {
            console.log(values);
        } else {
            Object.keys(currError).forEach((key) => {
                if (stateCopy[key].touched) {
                    stateCopy[key].error = currError[key];
                }
            })

            setState(stateCopy)
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const stateCopy = DeapClon(state)

        // const values = stateToValues(stateCopy, "value")
        // const { isValid, currError } = checkValidity(values)
        const { currError, isValid, values } = getErrors()
        if (isValid) {
            console.log(values);
        } else {
            Object.keys(currError).forEach((key) => {

                stateCopy[key].error = currError[key];

            })

            setState(stateCopy)
        }

    }

    return {
        formState: state,
        handleSubmit,
        HandaleChange,
        handleBlur,
        handleFouch
    }



}

useForm.propTypes = {

    checkValidity: PropTypes.func.isRequired,
};




export default useForm;