import React from 'react'
import styled from 'styled-components'
import PostPet from './PostPet'
import GetPets from './getPets'

function PetSite(){
    return (
        <Container>
            <PostPet/>
            <GetPets/>
        </Container>
    )
}

export default PetSite

const Container = styled.main`
    min-height: calc(100vh - 70 px);
    padding: 0 calc(3.5vw + 5px);
    overflow: hidden;
    
`