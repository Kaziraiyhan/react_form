import styled from "styled-components";


const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props ? "#11e4e5" : "white"};
  color: ${props => props.primary ? "white" : "#111111"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #6ef5f5;
  border-radius: 3px;
`;



export default Button