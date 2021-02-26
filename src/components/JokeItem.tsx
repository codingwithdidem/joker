import React from 'react'
import { CardWrapper, CardTop, CardBottom, Setup, Delivery } from "./styled/Card"

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
    delivery?: string,
    setup?: string,
    joke?: string,
    lang: string,
    safe: boolean,
    flags: Flag,
    type: "single" | "twopart"

}

interface JokeItemProps {
    joke: Joke
}


const JokeItem: React.FC<JokeItemProps> = ({ joke }) => {
    //@ts-ignore
    const flags = Object.keys(joke.flags).filter((key) => joke.flags[key]).join(' , ')
    return (
        <CardWrapper>
            <CardTop>
                {
                    joke.type === "single" ? (
                        <p>{joke.joke}</p>
                    ) : (
                            <>
                                <Setup>
                                    {joke.setup}
                                </Setup>

                                <Delivery>
                                    {joke.delivery}
                                </Delivery>
                            </>

                        )
                }
            </CardTop>

            <CardBottom>
                <p>{joke.category}</p>
                <div>
                    {flags}
                </div>
            </CardBottom>
        </CardWrapper>
    )
}

export default JokeItem
