import styled from "styled-components";
 


const Title = styled.h3`
  font-size: 14px;
 color: ${props => props.$error ? "#e54545" : "#212121"};
 padding-top: 5px;
 position: absolute;
 bottom: 3px;

`;
export default Title