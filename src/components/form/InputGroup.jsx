import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../../../Ui/Title';
import Input from "./Inputs";
import Label from "./Label";
const Wrapper = styled.div`
width :100%;
display : flex;
flex-direction: column;
row-gap: 10px;
position: relative;
padding-bottom: 30px;


`



const InputGroup = ({ label, value, name, placeholder, error, HandleChange }) => {

    return (
        <>
            <Wrapper>

                <Label htmlFor={name}> {label}</Label>
                <Input name={name} $error={error} value={value} onChange={HandleChange} placeholder={placeholder ?? ""} />
                <Title $error> {error} </Title>


            </Wrapper>


        </>
    )

}

// PropTypes validation
InputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    HandleChange: PropTypes.func,
    error: PropTypes.string,
};
export default InputGroup