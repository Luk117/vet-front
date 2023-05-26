import React from 'react'
import styled from 'styled-components';

const PageSelector = () => {
    const handleBannerClic = () => {
        alert("SE SUPONE QUE AQUI LUKAS DEBE IMPLEMENTAR ALGO PARA QUE CUANDO ALGUIEN LE DE CLIC AL BANNER LE MANDE A OTRO LUGAR.")
    }
    return (
    <BannersContainer>
        <BannerContainer onClick={() => handleBannerClic()}>
            <BannerImage src='/images/perro.jpg' alt='Banner image'/>
            <h3>REGISTRA A TU MASCOTA</h3>
        </BannerContainer>
        <BannerContainer onClick={() => handleBannerClic()}>
            <BannerImage src='/images/perro.jpg' alt='Banner image'/>
            <h3>AGENDA UN HORARIO</h3>
        </BannerContainer>
        <BannerContainer onClick={() => handleBannerClic()}>
            <BannerImage src='/images/perro.jpg' alt='Banner image'/>
            <h3>MIRA TUS RESERVAS</h3>
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
background-color: #672A2A;
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
