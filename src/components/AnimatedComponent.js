import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from './formElements';

const Main = styled.main`
   display: ${({ removeElement }) => (removeElement ? 'none' : 'block')};
   animation: dropdown-enter linear .7s forwards;
   /* add animation name below by replacing exit */
   animation: ${({ exitAnimation }) => exitAnimation ? 'dropdown-exit .3s linear forwards' : ''};
   overflow: hidden;
   transition: all 0.7s ease-out;
   @keyframes dropdown-enter{
      0%{
         opacity: 0;
         /* transform: translateY(-70px); */
         max-height: 0vh;
      }
      100%{
         opacity: 1;
         /* transform: translateY(0); */
         max-height: 100vh;
      }
   }

   @keyframes dropdown-exit{
      0%{
         opacity: 1;
         /* transform: translateY(0); */
         max-height: 200px;
      }
      100%{
         opacity: 0px;
         /* transform: translateY(-70px); */
         max-height: 0px;
      }
   }
`



const AnimatedComponent = ({ children }) => {

   const [show, setShow] = useState(false)
   const [removeState, setRemoveState] = useState(false);

   const showElement = () => {
      setShow(true);
      setRemoveState(false);
   }

   const removeElement = () => {
      setShow(false);
      setTimeout(() => {
         setRemoveState(true)
      }, 900)
   }
   return (
      <div>
         <Link onClick={() => { show ? removeElement() : showElement() }}>
            {show ? <i className='bx bxs-chevron-down-circle'></i> : <i className='bx bxs-chevron-right-circle' ></i>}
         </Link>
         <Main removeElement={removeState} exitAnimation={!show} className="dropdown content" >
            {children}
         </Main>
      </div>
   )
}

export default AnimatedComponent
