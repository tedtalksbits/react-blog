import React from 'react'
import { BigHeading } from '../components/bigHeading'
import styled from 'styled-components'

const AboutTheme = styled.div`
   
   h2{
      margin: 1.4rem 0;
   }
   h3{
      margin: .4rem 0;
   }


`
const About = () => {
   return (
      <AboutTheme className='container-padding' style={{ fontSize: '1.4rem' }}>
         <BigHeading>About</BigHeading>

         <h1>Using react to create a full stack blogging site</h1>

         <h2>Technologies Used:</h2>
         <ul>

            <li><h3>✧React</h3></li>
            <ul>
               <li>UseState</li>
               <li>UseEffect</li>
            </ul>
            <li><h3>✧JS</h3></li>
            <ul>
               <li>Fetch</li>
               <li>ES6</li>
            </ul>
            <li><h3>✧Node & Express</h3></li>
            <li><h3>✧MongoDB</h3></li>
            <ul>
               <li>Mongoose</li>
            </ul>

         </ul>
      </AboutTheme>
   )
}

export default About
