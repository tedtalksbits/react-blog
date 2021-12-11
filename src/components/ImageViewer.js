import React, { useEffect } from 'react'
import { useState } from 'react'
import Anime from 'react-anime'
import styled from 'styled-components'
import Chevron from './Chevron'

const ArticlesImgsSection = styled.section`
   margin: 16rem 0;
`
const NoImageText = styled.p`
   margin: 1rem 0;
   color: ${({ theme }) => theme.textalpha};
`
const Controls = styled.i`
   color: ${({ theme }) => theme.textalpha2};
   background: ${({ theme }) => theme.white};
   margin:  0 1rem;
   padding: 5px;
   height: 3rem;
   width: 3rem;
   border-radius: 6px;
   cursor: pointer;
   transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) .2s;
   font-size: 2rem;
   
   :active{
      color: white;
      width: 3.2rem;
      height: 3.2rem;
   }
   &.active{
      color: ${({ theme }) => theme.primary};
      border: 1px solid ${({ theme }) => theme.primary}aa;
   box-shadow: 2px 4px 10px 3px ${({ theme }) => theme.primary}21;
   }

`
const ImagesContainer = styled.div`
   img.left{
      animation: left .5s ease forwards;
   }

   @keyframes left {
      0%{opacity: 0};
      100%{opacity: 1};
   }
`
const ImageViewer = ({ images }) => {

   const [imgListView, setImgListView] = useState(false)
   const [count, setCount] = useState(0);

   const handleIncr = () => {
      if (count !== images.length - 1) {
         setCount(count + 1);
      }
   }
   const handleDecr = () => {
      if (count > 0) {
         setCount(count - 1)
      }
   }


   if (images.length === 0) {
      return <NoImageText>no images</NoImageText>
   }
   return (
      <ArticlesImgsSection className="articles-imgs-section">
         <div className="view-controls">
            <Controls
               className={`bx bxs-card img-view-control ${imgListView && 'active'}`}
               onClick={() => setImgListView(true)}
            />

            <Controls
               className={`bx bxs-dock-right img-view-control ${!imgListView && 'active'}`}
               onClick={() => setImgListView(false)}
            />
         </div>

         {imgListView || images.length === 1 ?

            <div className="article-imgs" >
               <Anime opacity={[0, 1]} translateY={['0', '1em']} delay={(e, i) => i * 100}>

                  {images.map((artImg, key) => (
                     <img key={key} src={artImg} alt="article" />
                  ))}
               </Anime>
            </div>

            :

            <div className="article-imgs img-slide-show">
               <div className="chevron-container">
                  <Chevron clickFunction={() => handleDecr()} />
                  <Chevron clickFunction={() => handleIncr()} opposite={true} />
               </div>

               <p style={{ textAlign: 'center' }}>{count + 1}/{images.length}</p>
               <ImagesContainer className="article-imgs-container" >
                  <img className='slide-img' key='1' src={images[count]} alt="article" />
               </ImagesContainer>
            </div>
         }
      </ArticlesImgsSection>
   )
}

export default ImageViewer
