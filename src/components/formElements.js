import styled from "styled-components";

export const TextArea = styled.textarea`

   margin: 0;
   padding: .75rem 1rem;
   resize: vertical;
   font-size: 1.2em;
   min-height: 8rem;
   border-radius: 10px;
   transition: all ease .2s;
   font-family: Arial, Helvetica, sans-serif;
   background: ${({ theme }) => theme.white};
   color: ${({ theme }) => theme.text};
   border: 1px ${({ theme }) => theme.white} solid;
   width: 100%;

`
export const TextInput = styled.input`
   margin: 0;
   padding: .75rem 1rem;
   border-radius: 10px;
   transition: all ease .2s;
   font-family: Arial, Helvetica, sans-serif;
   font-size: 1.2em;
   /* margin-bottom: 10px; */
   background: ${({ theme }) => theme.white};
   color: ${({ theme }) => theme.text};
   border: 1px ${({ theme }) => theme.white} solid;
   width: 100%;
`

export const Link = styled.a`
   color:${props => props.hoverBg || props.theme.primary};
   background: ${props => props.Bg || props.theme.white};
   border: 1px ${({ theme }) => theme.textalpha2} solid;
   padding: ${({ smallPadding }) => smallPadding ? '.45em 1.2em' : '.875em 2.2em'};
   font-size: 1em;
   cursor: pointer;
   border-radius: ${({ paginator }) => paginator ? '' : '20px'};
   margin: 2rem 0;
   margin:  ${({ placement }) => placement === 'right' ? '2rem 0 2rem auto' : placement === 'left' ? '2rem auto 2rem 0' : ''};
   /* display: ${({ smallPadding }) => smallPadding ? 'block' : 'inline-block'}; */
   display: inline-block;
   transition: .3s all ease;
   text-align: center;
   width: ${({ width }) => width === 'fullWidth' ? '' : width === 'content' ? 'max-content' : ''};
   /* box-shadow: ${({ warning }) => warning ? props => `${props.theme.danger}21 0px 2px 10px 1px` : props => `${props.theme.primary}21 0px 2px 10px 2px`}; */

   &.active{
      background: ${props => props.hoverBg || props.theme.primary};
      color: ${props => props.hoverColor || props.theme.background};

   }
   &.active.first{
      border-radius: 20px 0 0 20px;
   }
   &.active.last{
      border-radius: 0 20px 20px 0;
   }

   :hover{
      background: ${props => props.hoverBg || props.theme.primary};
      color: ${props => props.hoverColor || props.theme.background};
      
   }

`
export const Form = styled.form`
   display: flex;
   flex-direction: column;
   max-width: 500px;
   margin: 2rem auto;
   gap: .75rem;

   ${TextArea}, ${TextInput}{
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

      ::placeholder{
         color: ${({ theme }) => theme.textalpha};
      }
      :focus{
         /* border: 1px ${({ theme }) => theme.primary} solid; */
         outline: 1px ${({ theme }) => theme.primary} solid;
      }
   }
`

export const InputItem = styled.div`
   display: grid;
   gap: 0.5rem;
   label{
      color: ${props => props.theme.textalpha};
      font-size: 1.2rem;
   }
`

export const Label = styled.label`

`