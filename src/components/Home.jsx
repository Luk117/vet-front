import React from 'react'
import styled from 'styled-components'
import ImgSlider from './imgSlider'
import MainPage from './GetClient'
import GetPets from './getPets'
import PageSelector from './PageSelector'

function Home(){
    return (
        <Container>
            <ImgSlider/>
            <PageSelector/>
            <MainPage/>
            <GetPets/>
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70 px);
    padding: 0 calc(3.5vw + 5px);
    overflow: hidden;
    
`