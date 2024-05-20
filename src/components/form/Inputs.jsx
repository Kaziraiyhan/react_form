import styled from "styled-components";

const Inputs = styled.input`
background-color: #ffffff;
color: ${props => props.$error ? "#FF5555" : "#212121"};
border-radius:5px;
padding: 10px 10px;
outline: none;
border:solid 1px ;

`

export default Inputs