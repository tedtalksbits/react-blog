import styled from 'styled-components'

export const BigHeading = styled.h1`
   font-size: ${({ hero }) => hero ? 'clamp(3.95rem, 8vw, 15rem)' : 'clamp(1.65rem, 8vw, 3rem)'};
   font-weight: 800;
   margin: 4.5rem 0;
   text-transform: capitalize;
`