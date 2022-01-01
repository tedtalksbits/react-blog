import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   border-radius: 20px;
   border: 1px ${({ theme }) => theme.white} solid;
   padding: 1em;
   background: ${({ theme }) => theme.white};
   width: 4rem;
   height: 4rem;
   margin-bottom: 1.1rem;
   display: block;
   place-items: center;
   transition: all ease-in-out .2s;
   position: relative;
   display: grid;
   place-items: center;
   cursor: pointer;

   :hover{
      i{

         color: ${({ theme }) => theme.primary}
      }
   }

   i{
      font-size: 2rem;
   }



`
const Chevron = ({ left, clickFunction, up, right, down }) => {
   return (
      <Container onClick={clickFunction}>
         {up && <i className='bx bxs-chevron-up'></i>}
         {right && <i className='bx bxs-chevron-right'></i>}
         {left && <i className='bx bxs-chevron-left' ></i>}
         {down && <i className='bx bxs-chevron-down' ></i>}




      </Container>
   )
}

export default Chevron
