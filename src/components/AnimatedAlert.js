import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from './formElements';

const Alert = styled.main`
   display: ${({ removeElement }) => (removeElement ? 'none' : 'block')};
   border:  ${props => props.theme.success} 1px solid;
   background: ${props => props.theme.accent};
   padding: 1em;
   border-radius: .675rem;
   color: white;
   transition: all ease .3s;
   animation: enter cubic-bezier(0.175, 0.885, 0.32, 1.275) .5s forwards;
   /* add animation name below by replacing exit */
   animation: ${({ exitAnimation }) => exitAnimation ? 'exit .5s ease forwards' : ''};
   margin: 1rem 0;

   @keyframes exit{
  0% {
     opacity: 1;
     transform: translateY(0);
  }
  25% {
     /* transform: translateX(10px); */
     opacity: 1;
  }
  75% {
     /* transform: translateX(-200%); */
     opacity: 0;
  }
  100% {
     opacity: 0;
     transform: translateY(-100%);

  }
}

@keyframes enter{
  0%{
     opacity: 0;
     transform: translateY(-100%);
  }
  100%{
     opacity: 1;
     transform: translateY(0);
     
  }
}

`



const AnimatedAlert = ({ children, showAlert }) => {

   const [show, setShow] = useState(true)
   const [removeState, setRemoveState] = useState(false);

   // const showElement = () => {
   //    setShow(true);
   //    setRemoveState(false);
   // }

   const removeElement = () => {
      if (showAlert === false) {

         setShow(false);
         setTimeout(() => {
            setRemoveState(true)
         }, 400)
      }
   }
   return (
      <div>
         {/* <button className="alert-button" onClick={showElement} style={{ display: 'inline-block' }}>Open Alert</button> */}
         <Alert removeElement={removeState} exitAnimation={!show} className="alert" >
            {children}
            <Link smallPadding={true} width="content" placement="right" className="alert-button" onClick={removeElement}>close</Link>
         </Alert>
      </div>
   )
}

export default AnimatedAlert
