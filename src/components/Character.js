import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledH2 = styled.h2`
    border: solid black 3px;
    padding: 10px 5px;
    text-align: center;
    color: black;
    background-color: #EEF3BB;
    
`;
function Character(props) {
    return (
        <StyledDiv>
            <div>{props.characters.map(char => {
                return <StyledH2 key={char.name}>{char.name} : {char.gender} : {char.status}</StyledH2>
            })}
            </div>
        </StyledDiv>
    )
}

export default Character; 