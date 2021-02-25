import React, { useState, useEffect } from 'react'
import axios from "axios";
import Joke from "./components/Joke";
import face from "./images/laugh.svg";
import Wrapper from "./components/styled/Wrapper";
import Header from "./components/styled/Header";
import Image from "./components/styled/Image";
import Row from "./components/styled/Row";
import Form from "./components/styled/Form"
import Search from "./components/styled/Search"
import Button from "./components/styled/Button"

const JOKE_ENDPOINT = 'https://v2.jokeapi.dev/joke/Programming';


interface IProps {

}

const App: React.FC<IProps> = () => {
  const [search, setSearch] = useState('');
  const [jokes, setJokes] = useState([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const getJokes = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { data } = await axios.get(JOKE_ENDPOINT);
    setJokes(data.jokes)
  }

  return (
    <div >
      <Wrapper>
        <Row>
          <Header>Joker</Header>
          <Image src={face} alt="Laughing Face" />
        </Row>
        <Form onSubmit={getJokes}>
          <Search type="text" placeholder="Search.." value={search} onChange={handleChange} />
          <Button type="submit">Submit</Button>
        </Form>
      </Wrapper>
    </div>
  )
}

export default App
