import React from 'react'
import styled from 'styled-components'
import Box from './Box'

const Container = styled.div`
   position: fixed;
   overflow: hidden;
   right: 2rem;
   top: 8rem;
   z-index: 2000;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`
const Toast = ({ message, toggle, children, type }) => {

   return (
      <Container className={`toast animate__animated animate__faster ${toggle ? 'animate__slideInRight' : 'animate__slideOutRight'} `}>
         <Box type={type} message={message}>
            {children}
         </Box>

      </Container>
   )
}

export default Toast
