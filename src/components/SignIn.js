import React from 'react'
import styled from 'styled-components'
import Box, { Container } from './Box'
import { Link } from './formElements'

const SignInBox = styled.div`
   margin: 2rem;
   display: grid;
   grid-template-columns: 1fr min(99ch, 100%) 1fr;
   grid-template-rows: 1fr 1fr 1fr 1fr;

   
   & > *{
   grid-column: 2;
   }
   .full-bleed {
   width:100%;
   grid-column: 1 / 4;
   }
  
`
const Content = styled(Container)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   grid-row: 2/4;
   /* min-block-size: 60%;
   min-inline-size: 70%; */
`

const SignIn = () => {
   return (

      <SignInBox className="signin-centered">
         <Content >

            <h1>Sign In</h1>
            <i className="bx bxs-user" style={{ fontSize: '3rem' }}></i>

            <Link
               style={{
                  display: 'flex', alignItems: 'center', textAlign: 'center'
               }}
               className='custom-button'
            >
               <img style={{ height: '20px' }} src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" />
               sign in with google
            </Link>
         </Content>

      </SignInBox >
   )
}

export default SignIn
