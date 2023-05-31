// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 2%;
    border: 2px solid black;
    border-radius: 10px;
`

const StyledCharacter = styled.h3`
    border: 2px dotted black;
    text-align: left;
    padding: 1%;
    border-radius: 10px;
`

export default function Characters(props) {
    const { data } = props;
    return (
        <StyledDiv>
            { data.map((char) => {
                return (
                    <StyledCharacter>{char.name}</StyledCharacter>
                )
            })}
        </StyledDiv>
    )
}