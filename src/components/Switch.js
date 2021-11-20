import React, { useReducer } from 'react'
import styled from 'styled-components'
import { MdLightMode, MdNightlightRound } from 'react-icons/md'
const Groove = styled.div`
   background: ${({ theme }) => theme.primary};
   width: 40px;
   border-radius: 20px;
   height: 1.4rem;
   position: relative;
   display: flex;
   align-items: center;
   transition: linear .3s;
   cursor: pointer;
`

const Mover = styled.div`
   background: ${({ theme }) => theme.background};
   border-radius: 50%;
   width: 25px;
   height: 25px;
   border: 1px #21212121 solid;
   position: absolute;
   right: ${({ toggled }) => toggled ? '0' : ''};
   display: grid;
   place-items: center;


   
`
const Switch = ({ handleCLick, toggleState }) => {
   const [toggle, handleToggle] = useReducer(
      ((toggle) => !toggle),
      false
   )
   return (
      <Groove className="switch__groove" onClick={() => { handleCLick(); handleToggle() }}>
         <Mover className="switch__circle move" toggled={toggleState}>{toggleState ? <MdNightlightRound /> : <MdLightMode />}</Mover>
      </Groove>
   )
}

export default Switch
