import React from 'react'
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

interface ContainerProps {
  theme: DefaultTheme
}

const Container = styled.div<ContainerProps>`
   display: flex;
   max-width: 80rem;
   height: 100vh;
   padding: 20px;
   margin: 0 auto;
   background: ${({ theme }) => theme.colors.white};
   border-radius: 5px;
   box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .5);
   opacity: 0.5;
   filter: invert(1);
`;


interface IProps {

}

const App: React.FC<IProps> = () => {
  return (
    <div >
      <Container>
        <h1>Joker</h1>
      </Container>
    </div>
  )
}

export default App
