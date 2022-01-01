
import { useParams } from "react-router";
import styled from 'styled-components';
import { BigHeading } from "../components/bigHeading";
import { useEffect, useState } from "react";
import Comment from "../components/Comment";
import ShowArticles from "../components/ShowArticles";
import { Link } from "../components/formElements";
import ImageViewer from "../components/ImageViewer";
import AnimatedAlert from "../components/AnimatedAlert";
import MarkdownRenderer from "../components/MarkdownRenderer";
import Editor from "../components/Editor";
import Toast from "../components/Toast";
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
      transition: all ease 3.25s;
      animation: smoothImage 2s ease forwards .15s;
      animation-fill-mode: both;
      @keyframes smoothImage {
         from{opacity: 0};
         to{opacity: .5};
      }
   }

   ::after{
      content: '';
      width: 100%;
      height: 9rem;
      background: linear-gradient(0deg, ${({ theme }) => theme.background} 0%, transparent 100%);
      position: absolute;
      bottom: 0;
      left: 0;
      transition: all .25s ease;
      
   }

`
const ArticleTextContent = styled.article`
   min-height: 50vh;
`
const ArticleContainer = styled.div`
   transition: all .25s ease;
   z-index: 1;

   p.author{
      margin: 1.2rem 0 3rem;
      color: ${({ theme }) => theme.textalpha2};
      text-decoration: underline;
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
      text-align: center;
      
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

const ArticleCoverImg = styled.img`
   &.article-cover{height: 350px;}
   
`
const ArticleButtons = styled.div`
   display: flex;
   justify-content: space-between;
`


const Article = () => {
   let { id } = useParams();
   const API = `http://localhost:5020/articles/${id}`
   const [data, setData] = useState([])
   const [articleImages, setArticleImages] = useState([]);
   const [allArticles, setAllArticles] = useState([])
   const [deleteMsg, setDeleteMsg] = useState("");
   const [showEditor, setShowEditor] = useState(false);
   const [deleteSuccess, setDeleteSuccess] = useState(false);

   const fetchArticle = async () => {
      try {
         const res = await fetch(API, {
            method: 'GET'
         })
         const result = await res.json()
         setData(result)
         setArticleImages(result.additional_img)
         // console.log(result.additional_img);

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

   const deleteArticle = async () => {

      const confirmed = window.confirm("are your sure?");

      if (confirmed) {

         try {
            await fetch(API, {
               method: 'DELETE'
            })

            setData('')
            setDeleteMsg("Article Deleted Successfully!")
            setDeleteSuccess(true)
            setTimeout(() => {
               setDeleteSuccess(false)
            }, 3000);
         } catch (error) {
            console.log(error);
         }
      }
      else return
   }

   const filteredData = (arrays, id) => {
      return arrays.filter(array => array._id !== id)
   }

   useEffect(() => {
      fetchArticle();
      fetchAllArticles();

   }, [id])

   //editor
   const closeEditor = () => {
      setShowEditor(false)
   }
   const openEditor = () => {
      setShowEditor(true)
   }

   if (!data) {
      return (
         <>
            <Toast
               message="Success"
               type="success"
               toggle={deleteSuccess}

            >
               <p>{deleteMsg}</p>
            </Toast>
            <h1>Other Articles</h1>
            <ShowArticles articles={filteredData(allArticles, id)} />
         </>
      )
   }
   if (showEditor) {
      return (
         <>
            <div
               style={{ borderRadius: '1000px', fontSize: '3rem', marginLeft: 'auto', cursor: 'pointer' }}
               onClick={closeEditor}>
               <i className="bx bx-x"></i>
            </div>
            <Editor setData={setData} article={data} images={articleImages} />
         </>

      )
   }
   else
      return (
         <>
            {data.img &&
               <FullBleed className='full-bleed article-image' >
                  <img src={data.img} alt='article' />
               </FullBleed>
            }
            <ArticleContainer className='container-padding article-container' id="article-top">
               <ArticleTextContent className="article-content">
                  <ArticleCoverImg className="article-cover" src={data.img} alt="article" />
                  <h1 style={{ textAlign: 'center', fontSize: '2.2rem' }}>{data.title}</h1>
                  <MarkdownRenderer>
                     {data.content}
                  </MarkdownRenderer>
                  <a href={data.author_link}><p className="author">{data.author}</p></a>
               </ArticleTextContent>
               <ArticleButtons className="article-buttons">

                  <Link
                     className="delete button"
                     placement="left"
                     smallPadding={true}
                     hoverBg="#f73a64"
                     warning={true}
                     onClick={() => deleteArticle()}
                     style={{ border: 'none' }}
                  >
                     <i className='bx bxs-trash'></i> Delete
                  </Link>
                  <Link
                     className="edit button"
                     placement="right"
                     smallPadding={true}
                     onClick={openEditor}
                     style={{ border: 'none' }}
                  >
                     <i className='bx bxs-pencil'></i> Edit
                  </Link>
               </ArticleButtons>

               <ImageViewer images={articleImages} />
            </ArticleContainer>
            <div className="container-padding">
               <Comment comments={data.comments} id={data._id} setData={setData} />
               <h1>Other Articles</h1>
               <ShowArticles articles={filteredData(allArticles, id)} />
               <a href="#article-top" className="article-scroll-up">
                  <Chevron up={true} />

               </a>
            </div>

         </>
      )
}

export default Article
