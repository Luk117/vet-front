import React from 'react'
import styled from 'styled-components'
import ImgSlider from '../imgSlider'
import MainPage from './GetClient'
import PostClient from './PostClient'


function ClientSite(){
    return (
        <Container>
            <ImgSlider/>
            <PostClient/>
            <MainPage/>
        </Container>
    )
}

export default ClientSite

const Container = styled.main`
    min-height: calc(100vh - 70 px);
    padding: 0 calc(3.5vw + 5px);
    overflow: hidden;
    
`