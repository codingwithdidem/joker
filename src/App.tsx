import React, { useState, useEffect } from 'react'
import axios from "axios";
import JokeItem from "./components/JokeItem";
import face from "./images/laugh.svg";
import Wrapper from "./components/styled/Wrapper";
import Header from "./components/styled/Header";
import Image from "./components/styled/Image";
import Row from "./components/styled/Row";
import Form from "./components/styled/Form"
import Search from "./components/styled/Search"
import Button from "./components/styled/Button"

const BASE_URL = 'https://v2.jokeapi.dev/joke/Any';

enum Category { Any, Misc, Programming, Dark, Pun, Spooky, Christmas };

type Flag = {
  explicit: boolean,
  nsfw: boolean,
  political: boolean,
  rasist: boolean,
  religious: boolean,
  sexist: boolean,
}

type Joke = {
  id: number,
  category: Category,
  delivery: string,
  setup: string,
  lang: string,
  safe: boolean,
  flags: Flag,
  type: "single" | "twopart"

}
interface IProps {

}

const App: React.FC<IProps> = () => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState<Joke[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const getJokes = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    const ENDPOINT = `${BASE_URL}?contains=${search}&amount=10`

    const { data } = await axios.get(ENDPOINT);
    if (data.error) {
      setError(true)
      setJokes([]);
    } else {
      setError(false)
      setJokes(data.jokes)
    }

    setSearch('');

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

        {/* Jokes */}
        <div>
          {error && (
            <p>Sorry, no jokes found.</p>
          )}
          {jokes.length > 0 && jokes.map(joke => (
            <JokeItem key={joke.id} joke={joke} />
          ))}
        </div>
      </Wrapper>
    </div>
  )
}

export default App
