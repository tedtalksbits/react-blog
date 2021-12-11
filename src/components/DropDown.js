import React, { useReducer } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { Link } from './formElements'


const Content = styled.div`
   /* transition: all .5s cubic-bezier(0.55, 0.085, 0.68, 0.53);

   &.dropdown-open{
      animation: openup linear .2s;

   }
   @keyframes openup {
      0%{
         transform: translateY(-20px);
        
      }
      100%{
  
         transform: translateY(0)}
      } */

`
const DropDown = ({ children }) => {

   const [open, handleOpen] = useReducer(
      ((open) => !open)
      ,
      false
   )
   return (
      <div className='dropdown'>
         <Link onClick={handleOpen}>Additional Images</Link>


         <CSSTransition
            in={open}
            timeout={300}
            classNames="dropdown"
            unmountOnExit

         >

            <Content className="dropdown-content dropdown-open">
               {children}
            </Content>
         </CSSTransition>


      </div>
   )
}

export default DropDown
