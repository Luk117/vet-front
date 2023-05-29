import React from 'react'
import styled from 'styled-components'
import ImgSlider from '../imgSlider'
import MainPage from '../Client/GetClient'
import GetPets from '../Pets/getPets'
import PageSelector from './PageSelector'
import GetReservations from '../Reservation/GetReservation'
import PostClient from '../Client/PostClient'
import PostPet from '../Pets/PostPet'
import PostReservation from '../Reservation/PostReservation'
import TextBody from './TextBody'

function Home(){
    return (
        <Container>
            <ImgSlider/>
            <PageSelector/>
            <TextBody/>
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70 px);
    padding: 0 calc(3.5vw + 5px);
    overflow: hidden;
    
`