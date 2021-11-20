
import { useParams } from "react-router";
import styled from 'styled-components';
import { BigHeading } from "../components/bigHeading";
import { useEffect, useState } from "react";
import Comment from "../components/Comment";
import ShowArticles from "../components/ShowArticles";
import Anime from "react-anime";
import Chevron from "../components/Chevron";

const FullBleed = styled.div`

   width: 100%;
   position: absolute;
   
   img{
      object-fit: cover;
      width: 100%;
      height: 20rem;
      opacity: .5;
      mix-blend-mode: soft-light;
   }

   ::after{
      content: '';
      width: 100%;
      height: 9rem;
      background: linear-gradient(0deg, ${({ theme }) => theme.background} 0%, transparent 100%);
      position: absolute;
      bottom: 0;
      left: 0;
      
   }

`
const ArticleContainer = styled.div`
  
  p.content{
     margin: 7rem 0 2rem;
     font-size: 1.5rem;
  }
  p.author{
     margin: 1.2rem 0 3rem;
  }
  span{
     padding: 6px 12px;
     border-radius: 20px;
     background: ${({ theme }) => theme.primary};
     color: ${({ theme }) => theme.background};
     margin: 0 1rem 1rem 0;
  }
  .tags{
     margin-bottom: 1rem;
     display: flex;
     flex-wrap: wrap;
  }
  .container{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 1rem;
      margin: 3rem 0;
   }
   .view-controls{
      width: 100%;
      /* background: red; */
      text-align: center;
      &>i{
         color: ${({ theme }) => theme.primary};
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
      }
   }
   .chevron-container{
      display: flex;
      justify-content: space-between;
   }
   img {
      width: 100%;
      height: 100%;
      object-fit:contain;
      transition: all ease .9s;
      margin: 3rem 0;
      animation: fade linear .5s forwards;

      @keyframes fade {
         0%{opacity: 0};
         100%{opacity: 1}
      }
   }
`

const ArticlesImgsSection = styled.section`
   margin: 16rem 0;
`
const Article = () => {
   let { id } = useParams();
   const API = `http://localhost:5020/articles/${id}`
   const [data, setData] = useState([])
   const [articleImages, setArticleImages] = useState([]);
   const [allArticles, setAllArticles] = useState([])
   const [imgListView, setImgListView] = useState(false)
   const fetchArticle = async () => {

      try {
         const res = await fetch(API, {
            method: 'GET'
         })
         const req = await res.json()
         setData(req)
         setArticleImages(req.additional_img)

      } catch (error) {
         console.log(error)
      }

   }

   const fetchAllArticles = async () => {
      try {

         const res = await fetch('http://localhost:5020/articles', {
            method: 'GET'
         })
         const req = await res.json()
         setAllArticles(req);
         // console.log(req);

      } catch (error) {
         console.log(error);
      }
   }


   const filteredData = (arrays, id) => {
      return arrays.filter(array => array._id !== id)
   }

   useEffect(() => {
      fetchArticle();
      fetchAllArticles();

   }, [id])

   const [count, setCount] = useState(0);

   const handleIncr = () => {
      count !== articleImages.length - 1 && setCount(count + 1);
      console.log(articleImages.length);
   }
   const handleDecr = () => {
      count > 0 && setCount(count - 1);
   }




   return (
      <>
         <FullBleed className='full-bleed article-image' >
            <img src={data.img} alt='article' />
         </FullBleed>

         <ArticleContainer className='container-padding article-container'>
            <Anime
               opacity={[0, 1]}
               translateY={['0', '1em']}
               delay={(e, i) => i * 100}
            >
               <BigHeading>{data.title}</BigHeading>
               <p className='content'>{data.content}</p>
               <p className='author'>{data.author}</p>
            </Anime>

            <ArticlesImgsSection className="articles-imgs-section">

               <div className="view-controls">
                  <i class='bx bxs-card' onClick={() => setImgListView(true)}></i>
                  <i className='bx bxs-dock-right' onClick={() => setImgListView(false)}></i>
               </div>

               {imgListView ?


                  <div className="article-imgs" >
                     <Anime opacity={[0, 1]} translateY={['0', '1em']} delay={(e, i) => i * 1000}>

                        {articleImages.map((artImg, key) => (
                           <img key={key} src={artImg} alt="article" />
                        ))}
                     </Anime>
                  </div>

                  :
                  <>
                     <div className="chevron-container">
                        <Chevron clickFunction={handleDecr} />
                        <Chevron clickFunction={handleIncr} opposite={true} />
                     </div>

                     <p style={{ textAlign: 'center' }}>{count + 1}/{articleImages.length}</p>
                     <div className="container">
                        <img key='1' src={articleImages[count]} alt="article" />
                     </div>
                  </>
               }
            </ArticlesImgsSection>


         </ArticleContainer>
         <div className="container-padding">

            <Comment comments={data.comments} id={data._id} setData={setData} />
            <h1>Other Articles</h1>
            <ShowArticles articles={filteredData(allArticles, id)} />
         </div>

      </>
   )
}

export default Article
