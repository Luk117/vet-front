import React from 'react'
import styled from 'styled-components';

const PageSelector = () => {
    const handleBannerClientClick = () => {
        window.location.href = 'http://localhost:3000/ClientSite';
      };

    const handleBannerPetClick = () => {
        window.location.href = 'http://localhost:3000/PetSite';
      };
    
      const handleBannerReservationClick = () => {
        window.location.href = 'http://localhost:3000/ReservationSite';
      };

    return (
    <BannersContainer>
        <BannerContainer onClick={handleBannerClientClick}>
            <BannerImage src='/images/perro.jpg' alt='Banner image'/>
            <h3>REGISTRO DE CLIENTES</h3>
        </BannerContainer>
        <BannerContainer onClick={handleBannerPetClick}>
            <BannerImage src='/images/perro.jpg' alt='Banner image'/>
            <h3>RESGISTRO DE MASCOTAS</h3>
        </BannerContainer>
        <BannerContainer onClick={handleBannerReservationClick}>
            <BannerImage src='/images/perro.jpg' alt='Banner image'/>
            <h3>REGISTRO DE RESERVAS</h3>
        </BannerContainer>
    </BannersContainer>
    )
}

export default PageSelector;

const BannersContainer = styled.div`
width: 100%;
height: 400px;
margin-top: 40px;
display: flex;
flex-direction: row;
padding: 15px;
align-items: center;
justify-content: center;
gap: 20px;
`
const BannerContainer = styled.div`
background-color: #1F3D44;
height: 300px;
width: 300px;
border-radius: 15px;
overflow: hidden;
cursor: pointer;
transition: 0.5s;
position: relative;
display: flex;
align-items: center;
justify-content: flex-start;
box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.3);
flex-direction: column;
color: #f2f2f2;


&:hover{
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
}
`
const BannerImage = styled.img`
width: 100%;
height: 100%;
box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
`
