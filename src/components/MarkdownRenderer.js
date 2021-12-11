import React, { useState } from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
const Wrapper = styled.div`
   h1,h2,h3,h4{
      margin: 2.25rem 0 1.2rem;
   }
   p{
      color: ${props => props.theme.text};
      margin: 0 0 1.2rem;
   }
   pre{
      overflow-x: auto;
      margin: .5rem 0;
   }
   hr{
      border: 1px ${props => props.theme.accent} solid;
   }
   code{
      color: ${props => props.theme.textalpha};
      background: ${props => props.theme.accent};
      border: 1px ${props => props.theme.accent} solid;
      line-height: 1.62;
   }
   blockquote{
      border-left: ${props => props.theme.accent} solid 8px;
      padding-left: 12px;
      min-height: 5rem;
      display: flex;
      align-items: center;
      p{

         color: ${props => props.theme.textalpha};
      }

   }

`
const MarkdownRenderer = ({ children }) => {

   return (
      <>
         <Wrapper className="markdown-view" >
            <ReactMarkdown>
               {children}
            </ReactMarkdown>
         </Wrapper>


      </>
   )
}

export default MarkdownRenderer