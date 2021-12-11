import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Anime, { anime } from 'react-anime'
const Grid = styled.div`
   
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   grid-gap: 1rem;
   
   img {
      width: 100%;
      height: 250px;
      object-fit:cover;
      border-radius: 10px;
   }

`
const ArticleCard = styled.div`
   
   /* padding: 1rem 12px; */
   margin: 2rem auto;
   max-width: 500px;

   .light{
      margin: .45rem 0;
      font-size: .875rem;
      color: ${({ theme }) => theme.textalpha2};
   }
   .author-date{
      display: flex;
      align-items: center;
      justify-content: space-between;
   }


`
const ShowArticles = ({ articles, setData }) => {

   // const API = `http://localhost:5020/articles/`;

   // const deleteArticle = async (id) => {
   //    const res = await fetch(API + id, {
   //       method: 'DELETE'
   //    })

   //    const result = await res.json()
   //    setData(result)
   // }
   return (
      <Grid>
         <Anime easing="easeOutElastic"
            delay={anime.stagger(100)} scale={[0.97, 1]}
         >
            {articles.map((article, key) => (

               <Link to={`/article/${article._id}`} key={key}>
                  <ArticleCard>
                     <div className="img">
                        <img src={article.img} alt={`${article.img}`} />
                     </div>

                     <div className="author-date">

                        <p className='light'>{new Date(article.created_at).toLocaleDateString()}</p>
                        <p className='light'>{article.author}</p>
                     </div>
                     <h1>{article.title}</h1>
                     {/* <p>{article.content.substring(0, 150)}...</p> */}
                  </ArticleCard>
               </Link>

            ))}
         </Anime>
      </Grid>
   )
}

export default ShowArticles
