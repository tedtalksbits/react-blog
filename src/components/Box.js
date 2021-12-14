import React from 'react'
import styled from 'styled-components'

const Container = styled.article`

   background: ${props => props.theme.accent};
   padding: 1rem;
   border-radius: 10px;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
   border: ${props => props.theme.accent} 1px solid;
   backdrop-filter: blur(20px);
   &.success{
      border: ${props => props.theme.success} 1px solid; 
      background: ${props => props.theme.success};
      
   }
   &.warning{
      border: ${props => props.theme.warning} 1px solid; 
      background: ${props => props.theme.warning};
   }
   &.danger{
      border: ${props => props.theme.danger} 1px solid; 
      background: ${props => props.theme.danger};

   }
   .message{
      padding-bottom: .4rem;
      border-bottom: 1px solid ${props => props.theme.white};
      margin-bottom: 5px;
      color: ${({ theme }) => theme.textalpha};
   }
`
const Box = ({ children, message, type }) => {
   return (
      <Container className={type} >
         <div className="message">
            <i className='bx bxs-error' /> {message}
         </div>
         {children}
      </Container>
   )
}

export default Box
