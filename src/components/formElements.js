import styled from "styled-components";

export const TextArea = styled.textarea`

   margin: 0;
   padding: .75rem 1rem;
   border: none;
   resize: vertical;
   font-size: 1em;
   min-height: 8rem;
   max-height: 24rem;
   border-radius: 0.28571429rem;
   transition: all ease .2s;
   font-family: Arial, Helvetica, sans-serif;
   background: ${({ theme }) => theme.white};
   color: ${({ theme }) => theme.text};

   :focus{
      border: 1px ${({ theme }) => theme.primary} solid;
      outline: 1px ${({ theme }) => theme.primary} solid;
   }

`
export const TextInput = styled.input`
   margin: 0;
   padding: .75rem 1rem;
   border: none;
   border-radius: 0.28571429rem;
   transition: all ease .2s;
   font-family: Arial, Helvetica, sans-serif;
   font-size: 1em;
   margin-bottom: 10px;
   background: ${({ theme }) => theme.white};
   color: ${({ theme }) => theme.text};

   :focus{
      border: 1px ${({ theme }) => theme.primary} solid;
      outline: 1px ${({ theme }) => theme.primary} solid;
   }
`


export const Button = styled.a`
   color: ${({ theme }) => theme.primary || `${props => props.hoverBg}`};
   background: ${({ theme }) => theme.white || `${props => props.bg}`};
   border: 1px ${({ theme }) => theme.whitealpha} solid;
   padding: ${({ smallPadding }) => smallPadding ? '.45em 1.2em' : '.875em 2.2em'};
   font-size: 1em;
   cursor: pointer;
   border-radius: ${({ paginator }) => paginator ? '' : '20px'};
   margin: 2rem 0;
   margin:  ${({ placement }) => placement === 'right' && '2rem 0 0 auto' || placement === 'left' && '2rem auto 0 0'};
   display: ${({ smallPadding }) => smallPadding ? 'block' : 'inline-block'};
   transition: .3s all ease;
   text-align: center;
   width: ${({ width }) => width === 'fullWidth' && '' || width === 'content' && 'max-content'};


   &.active{
      background: ${({ theme }) => theme.primary || `${props => props.hoverBg}`};
      color: ${({ theme }) => theme.background || `${props => props.hoverColor}`};

   }
   &.active.first{
      border-radius: 20px 0 0 20px;
   }
   &.active.last{
      border-radius: 0 20px 20px 0;
   }

   :hover{
      background: ${({ theme }) => theme.primary || `${props => props.hoverBg}`};
      color: ${({ theme }) => theme.background || `${props => props.hoverColor}`};
      
   }

`
export const Form = styled.form`
   display: flex;
   flex-direction:column;
   max-width: 500px;
   margin: 2rem 0;
`