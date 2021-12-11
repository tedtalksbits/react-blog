import styled from "styled-components";

export const EditorApp = styled.div`
      padding: 0 1rem;
`

export const EditImageContainer = styled.div`
   display: flex;
   flex-direction: column;
   background: ${props => props.theme.accent};
   border-radius: 10px;
   overflow: hidden;

`
export const EditImage = styled.img`
   object-fit: cover;

`
export const EditImageGrid = styled.div`
  
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
   grid-gap: 1rem;
  
`

export const InputItem = styled.div`

   display: flex;
  
   /* align-items: center; */
`

export const Label = styled.label`
   background: ${props => props.theme.primary}aa;
   padding: 12px;
   border: 1px solid ${props => props.theme.primary}aa;
   border-radius: 10px 0 0 10px;
   min-width: 5ch;
   width: 8ch;
   font-weight: light;
   display: flex;
   justify-content: center;
   align-items: center;
   text-transform: capitalize;
   color: ${props => props.theme.textalpha}
`