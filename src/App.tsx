import React from 'react'
import Joke from "./components/Joke";
import JokeSearcher from "./components/JokeSearcher";
import face from "./images/laugh.svg";
import Wrapper from "./components/styled/Wrapper";
import Header from "./components/styled/Header";
import Image from "./components/styled/Image";
import Row from "./components/styled/Row";


interface IProps {

}

const App: React.FC<IProps> = () => {
  return (
    <div >
      <Wrapper>
        <Row>
          <Header>Joker</Header>
          <Image src={face} alt="Laughing Face" />
        </Row>
      </Wrapper>
    </div>
  )
}

export default App
