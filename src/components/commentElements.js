import styled from 'styled-components'

export const Container = styled.div`
   margin: 1rem 0;
   background: ${props => props.theme.accent};
   padding: 1rem;
   border-radius: 20px;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`
export const Heading = styled.h3`
   border-bottom: 1px ${({ theme }) => theme.accent} solid;
   padding-bottom: 1rem;
`
export const AvatarBg = styled.div`
   background: blueviolet;
   display: grid;
   place-items: center;
   height: 45px;
   width: 45px;
   border-radius: 5px;
   margin-right: 1rem;
  
`
export const Avatar = styled.img`
   height: 40px;
   object-fit: contain;
   border-radius: 10px;
   transition: all ease .25s;
   
`

export const CommentInfo = styled.div`
   display: flex;
   align-items: center;
   margin-top: 1.2rem;
   transition: all ease .25s;
`
export const UserComment = styled.div`
   p{
      font-size: 14px;
      color: ${({ theme }) => theme.textalpha};
   }
`
