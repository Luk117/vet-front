import React from 'react'
import styled from 'styled-components'
import ImgSlider from '../imgSlider'
import PostReservation from './PostReservation'
import GetReservations from './GetReservation'
import SendReservation from './SendReservation'


function ReservationSite(){
    return (
        <Container>
            <ImgSlider/>
            <PostReservation/>
            <GetReservations/>
            <SendReservation/>
        </Container>
    )
}

export default ReservationSite

const Container = styled.main`
    min-height: calc(100vh - 70 px);
    padding: 0 calc(3.5vw + 5px);
    overflow: hidden;
    
`