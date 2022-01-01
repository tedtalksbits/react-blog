import styled from 'styled-components'

export const BigHeading = styled.h1`
   font-size: ${({ hero }) => hero ? 'clamp(3.95rem, 8vw, 15rem)' : 'clamp(1.65rem, 8vw, 3rem)'};
   font-weight: 800;
   margin: 4.5rem 0;
   text-transform: capitalize;
   transition: all ease .5s;
   animation: heading .7s ease forwards .15s;
   animation-fill-mode: both;



   @keyframes heading {
      0%{
         letter-spacing: 10px;
         opacity: 0;
         transform: translateY(-10px);
      };
      20%{
         opacity: 0;
      }
      100%{
         letter-spacing: 0;
         opacity: 1;
         transform: translateY(0);
      };
   }
`