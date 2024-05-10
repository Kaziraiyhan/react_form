import styled from "styled-components";


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  
  border: none;
  font-size: 55px
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "blue" : "#BF4F74"};

`;

const App = ()=>{

  
  return (
    <div>
<h1>react form</h1>

    <Title $primary>
        This is my title
    </Title>
    <Title>
        This is my title
    </Title>
    <Title>
        This is my title
    </Title>
    </div>

  )
}

export default App