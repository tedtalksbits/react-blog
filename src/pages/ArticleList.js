import React, { useEffect, useState } from 'react'
import { BigHeading } from '../components/bigHeading'
import ShowArticles from '../components/ShowArticles'

const ArticleList = () => {

   const API = 'http://localhost:5020/articles';

   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const fetchArticles = async () => {
      const res = await fetch(API, {
         method: 'GET'
      })
      const req = await res.json()
      console.log(req);
      setData(req)
      setIsLoading(false)
   }

   useEffect(() => {
      fetchArticles()
   }, [])
   if (isLoading) {
      return <h1>...loading</h1>
   }
   return (

      <div className='container-padding'>
         <BigHeading>Article List</BigHeading>
         <ShowArticles articles={data} />
      </div>
   )
}

export default ArticleList
