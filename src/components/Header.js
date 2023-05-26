import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
      <Nav>
          <Logo src="/images/logo.png" />  
          <NavMenu>
  
              <a>
                  <img src="/images/search.png"/>
                  <span>Buscar Cliente</span>
              </a>
              <a>
                  <img src="/images/search.png"/>
                  <span>Buscar Mascota</span>
              </a>
              <a>
                  <img src="/images/search.png"/>
                  <span>Buscar Reserva</span>
              </a>
  
          </NavMenu>
          
          <UserImg src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"/>
  
          
  
      </Nav>
    )
  }
  
  export default Header
  
  const Nav= styled.nav`
      height: 70px;
      background: #E1C16E;
      display: flex;
      align-items: center;
      padding: 0 15px;
      overflow: hidden;
  
  `
  const Logo = styled.img`
      width: 80px;
  `
  const NavMenu = styled.div`
      display: flex;
      flex: 1;
      margin-left: 20px;
  
      a {
          display: flex;
          align-items: center;
          padding: 0 20px;
          cursor: pointer;
          align-items: center;
          
          img {
              height 20px;
          }
  
          span {
              font-size: 13px;
              letter-spacing: 1.42px;
              position: relative;
  
              &:after { 
                  content: "";
                  height: 2px;
                  background: white;
                  position : absolute;
                  left:0;
                  right:0;
                  bottom: -6px;
                  opacity: 0;
                  transform-origin: left center;
                  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                  transform: scaleX(0.5);
              }
          }
  
          &:hover{
              span:after {
                  transform: scaleX(1);
                  opacity: 1;
              }
          }
      }
  `
  
  
  
  
  const UserImg= styled.img`
      width 40px;
      height 40px;
      border-radius 50%;
      cursor: pointer;
  `
