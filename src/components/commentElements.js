import styled from 'styled-components'

export const Container = styled.div`
   margin: 1rem 0;
`
export const Heading = styled.h4`
   border-bottom: 1px ${({ theme }) => theme.textalpha} solid;
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
   
   
`

export const CommentInfo = styled.div`
   display: flex;
   align-items: center;
   margin-top: 1.2rem;
`
export const UserComment = styled.div`
   p{
      font-size: 14px;
      color: ${({ theme }) => theme.textalpha};
   }
`
