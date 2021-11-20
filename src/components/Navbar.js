import React, { useReducer } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi'


const NavbarLink = styled(NavLink)`
   color: ${({ theme }) => theme.text};
   &.active{
      color: ${({ theme }) => theme.primary};
   }
`
const Nav = styled.nav`
   display: flex;
   align-items: center;
   justify-content: space-around;
   background: ${({ theme }) => theme.white};
   height: 4rem;
   backdrop-filter: blur(25px) saturate(2);

   @media screen and (max-width: 640px){
      justify-content: space-between;
      padding: 0 1rem;
   }
`

const LogoContainer = styled.div``
const Logo = styled.div`

   h1.logo{
      margin: 0;
   }
`
const LinksContainer = styled.div`
  display: flex;
  align-items: center;

`
const Links = styled.ul`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 300px;
   margin-right: 1rem;
   @media screen and (max-width: 640px){
      display: none;
   }
`
const LinkItem = styled.li``
const ControlsContainer = styled.div`
   display: flex;
   align-items: center;
   
`
const Mobile = styled.div`
   display: none;

   .mobile-nav-icon{
      font-size: 2rem;
      
   }

   @media screen and (max-width: 640px){
      display: block;
      margin: 0 0 0 1.5rem; 
      cursor: pointer;
      user-select: none;
   }

`
const MobileMenu = styled.div`
   display: none;
   background: ${({ theme }) => theme.white};
   border-top: 1px ${({ theme }) => theme.white} dotted;
   border-bottom: 1px ${({ theme }) => theme.white} dotted;
   padding: 1rem;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;


&>*{
   font-size: 2rem;
   margin-bottom: 2rem;

}
   @media screen and (max-width: 640px){
      display: ${({ toggle }) => toggle ? 'flex' : 'none'};
      height: 100%;
      justify-items: center;
      flex-direction: column;
      align-items: center;
      padding: 3rem 0;
   }
`
const Navbar = ({ toggler }) => {

   const [toggle, handleToggle] = useReducer(
      (toggle => !toggle),
      false
   )
   return (
      <>
         <Nav>
            <LogoContainer className="nav__logo-container left">
               <Logo className="nav__logo">
                  <h1 className="logo">Bloggio</h1>
               </Logo>
            </LogoContainer>
            <LinksContainer className="nav__link-container center">
               <Links className="nav__links">
                  <LinkItem className="nav__link">
                     <NavbarLink to="/" activeclassname='active'>Home</NavbarLink>
                  </LinkItem>
                  <LinkItem className="nav__link">
                     <NavbarLink to="/article-list" activeclassname='active'>Articles</NavbarLink>
                  </LinkItem>
                  <LinkItem className="nav__link">
                     <NavbarLink to="/about" activeclassname='active'>About</NavbarLink>
                  </LinkItem>
               </Links>
            </LinksContainer>
            <ControlsContainer className="nav__controlls right">
               {toggler}
               <Mobile onClick={handleToggle}>
                  <FiMenu className="mobile-nav-icon" />
               </Mobile>
            </ControlsContainer>
         </Nav>
         <MobileMenu className="mobile-menu" toggle={toggle} onClick={handleToggle}>
            <LinkItem className="nav__link">
               <NavbarLink to="/" activeclassname='active'>Home</NavbarLink>
            </LinkItem>
            <LinkItem className="nav__link">
               <NavbarLink to="/article-list" activeclassname='active'>Articles</NavbarLink>
            </LinkItem>
            <LinkItem className="nav__link">
               <NavbarLink to="/about" activeclassname='active'>About</NavbarLink>
            </LinkItem>
         </MobileMenu>
      </>
   )
}

export default Navbar
