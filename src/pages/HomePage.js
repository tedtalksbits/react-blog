
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import AnimatedAlert from '../components/AnimatedAlert'
import { BigHeading } from '../components/bigHeading'
import { Container } from '../components/commentElements'
import { Form, InputItem, Link, TextArea, TextInput } from '../components/formElements'
import ShowArticles from '../components/ShowArticles'

const Page = styled.div`
   height: 100vh;
   display: grid;
   place-items: center;
   text-align: center;

`
const HomePost = styled.div`
   display: grid;
   grid-template-columns: .3fr .7fr;
   
   height: 100vh;
   &#home-post{
      grid-column: 1 / 4;
   }
`
const GradientSection = styled.section`
   background: linear-gradient(140deg, #03001e 0%, #7303c0 33%, #ec38bc 66%, #03001e 100%);
   display: grid;
   place-content: center;
   text-align: center;
   h1{
      color: white;
   }
`
const Hero = styled(Page)`
   background: url(${props => props.theme.hero}) center center;
   background-repeat: no-repeat;
   width: 100%;
   background-size: cover;

`
const FormContainer = styled(Container)`
   padding: 4.25rem 3.50rem;
   border-radius: 0;
   margin: 0;
   display: flex;
   align-items: center;
`
const HomePage = () => {
   const [postedArticle, setPostedArticle] = useState([])
   const [newPost, setNewPost] = useState({
      author: "",
      author_link: "",
      img: "",
      additional_img: [],
      title: "",
      content: "",
      content_link: ""
   })

   const postData = async () => {

      const res = await fetch('http://localhost:5020/articles', {
         method: 'POST',
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(newPost)
      })

      const result = await res.json();
      setPostedArticle([result])
   }




   return (
      <>
         <Hero className='container-padding full-bleed' >
            <div className="center-home-div" style={{ marginBottom: '10rem' }}>
               <BigHeading hero={true} style={{ margin: '0' }}>Bloggio</BigHeading>
               <h2 style={{ marginTop: '1.4rem' }}>Welcome To The Web Dev Blog!</h2>
               <Link width='content' href="#home-post">Post An Article</Link>
            </div>
         </Hero>


         <HomePost
            id="home-post"
            className="home-post"

         >
            <GradientSection className="gradient-section">

               <BigHeading>Post an Article</BigHeading>
            </GradientSection>

            <FormContainer className="form-container">
               <Form style={{ width: '100%', maxWidth: '100%', margin: 0 }}>
                  <InputItem className="input-item">

                     <label htmlFor="author">Author</label>
                     <TextInput
                        name="author"
                        id="author"
                        onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                        value={newPost.author}
                     />
                  </InputItem>
                  <InputItem className="input-item">

                     <label htmlFor="url">Image URL</label>
                     <TextInput
                        id="url"
                        name="url"
                        onChange={(e) => setNewPost({ ...newPost, img: e.target.value })}
                        value={newPost.img}
                     />
                  </InputItem>
                  <InputItem className="input-item">

                     <label htmlFor="title">Title</label>
                     <TextInput
                        id="title"
                        name="title"
                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                        value={newPost.title}
                     />
                  </InputItem>
                  <InputItem className="input-item">

                     <label htmlFor="content">Content</label>
                     <TextArea
                        id="content"
                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                        value={newPost.content}
                        rows="12"
                     />
                  </InputItem>
                  <InputItem className="input-item">

                     <Link width="content" onClick={postData} >Post</Link>
                  </InputItem>
               </Form>
            </FormContainer>
            {!postedArticle.length == 0 &&
               <AnimatedAlert>
                  <h1>Article posted</h1>
                  <ShowArticles articles={postedArticle} />
               </AnimatedAlert>
            }

         </HomePost>

      </>
   )
}

export default HomePage
