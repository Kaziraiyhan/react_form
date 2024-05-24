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
padding-bottom: 20px;
`
const InputGroup = ({
    label,
    type,
    value,
    name,
    placeholder,
    error,
    HandleChange,
    handleFouch,
    handleBlur
}) => {

    return (
        <>
            <Wrapper>

                <Label htmlFor={name}> {label}</Label>
                <Input onFocus=
                    {handleFouch}
                    type={type}
                    onBlur={handleBlur}
                    name={name}
                    $error={error}
                    value={value}
                    onChange={HandleChange}
                    placeholder={placeholder ?? ""} />
                <Title $error> {error} </Title>

            </Wrapper>


        </>
    )

}

// PropTypes validation
InputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]).isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    
    placeholder: PropTypes.string,
    HandleChange: PropTypes.func,
    handleFouch: PropTypes.func,
    handleBlur: PropTypes.func,
    error: PropTypes.string,
};
export default InputGroup