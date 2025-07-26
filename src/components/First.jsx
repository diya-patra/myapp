import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
    color: red
`;

const Paragraph = styled.p`
    color: green
`

function First() {
    return(
        <>
            <Heading>Hello H1</Heading>
            <Paragraph>Hello paragraph</Paragraph>
            <Hi />
            <Hello />
            <Bonjour />
            <Hola />
        </>
    )
}

function Hi() {
    return(
        <>
            <h1 style={{color: '#B12C00', backgroundColor: '#d6c2c2ff'}}>Hello world</h1>
        </>
    )
}

function Hello() {
    return(
        <>
            <h1>Koala2</h1>
        </>
    )
}

function Bonjour() {
    return(
        <>
            <h1>Koala3</h1>
        </>
    )
}

function Hola() {
    return(
        <>
            <h1>koala4</h1>
        </>
    )
}

export default First