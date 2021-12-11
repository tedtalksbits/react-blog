import React, { useEffect, useState } from 'react'
import { BigHeading } from '../components/bigHeading'
import ShowArticles from '../components/ShowArticles'

const ArticleList = () => {

   const API = 'http://localhost:5020/articles';

   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const fetchArticles = async () => {
      try {
         const res = await fetch(API, {
            method: 'GET'
         })
         const result = await res.json()
         // console.log(result);
         setData(result)
         setIsLoading(false)
      } catch (error) {
         console.log(error);
      }

   }



   useEffect(() => {
      fetchArticles()
   }, [])
   if (isLoading) {
      return <h1>...loading</h1>
   }
   if (data == false) {
      return <h1>no data</h1>
   }
   return (

      <div className='container-padding'>
         <BigHeading>Article List</BigHeading>
         <ShowArticles articles={data} setData={setData} />
      </div>
   )
}

export default ArticleList
