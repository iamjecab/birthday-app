import React, { useState } from "react";
import styled from "styled-components";

import data from "./data";

const Wrapper = styled.article`
    background-color: white;
    padding: 4vh;
    box-shadow: 2px 2px 5px 2px grey;
`;

const Heading = styled.h1`
    font-size: 1.7rem;
    padding: 0 10vw 0 2vh;
`;

const ListWrapper = styled.div``;

const ListItem = styled.div`
    display: flex;
`;

const Img = styled.img`
    height: 90px;
    width: 90px;
    border-radius: 50%;
    margin: 2vh;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Name = styled.h3`
    margin: 3.5vh 0 0.2vw 0;
`;

const Age = styled.p`
    color: #617d98;
`;

const Btn = styled.button`
    width: 100%;
    padding: 0.5rem;
    background-color: yellow;
    border: none;
    outline: none;
    margin-top: 2vh;
    font-size: 1rem;
`;

const List = () => {
    const [persons, setpersons] = useState(data);
    return (
        <>
            <Wrapper>
                <Heading>{persons.length} Birthday Today</Heading>
                <ListWrapper>
                    {persons.map((person) => {
                        const { name, id, age, image } = person;
                        return (
                            <ListItem id={id}>
                                <Img src={image}></Img>
                                <TextContainer>
                                    <Name>{name}</Name>
                                    <Age>{age}</Age>
                                </TextContainer>
                            </ListItem>
                        );
                    })}
                </ListWrapper>
                <Btn onClick={() => setpersons([])}>Remove</Btn>
            </Wrapper>
        </>
    );
};

export default List;
