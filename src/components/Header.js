import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
      <Nav>
  
          <NavMenu>
  
              <a>
                  <span>Home</span>
              </a>
              <a>
                  <span>Search</span>
              </a>
              <a>
                  <span>WatchList</span>
              </a>
              <a>
                  <span>Originals</span>
              </a>
              <a>
                  <span>Movies</span>
              </a>
              <a>
                  <span>Series</span>
              </a>
  
          </NavMenu>
  
          <UserImg src="https://i.pinimg.com/736x/eb/e5/51/ebe551fd04f7bc87fd710644a1dbfd83.jpg"/>
  
          
  
      </Nav>
    )
  }
  
  export default Header
  
  const Nav= styled.nav`
      height: 70px;
      background: #090b13;
      display: flex;
      align-items: center;
      padding: 0 15px;
      overflow-x: hidden;
  
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
