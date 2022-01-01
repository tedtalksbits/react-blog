import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import parse from 'html-react-parser'
import { Form, InputItem, Link, TextInput } from '../components/formElements';
import Box from '../components/Box';
import { BigHeading } from '../components/bigHeading';

const Post = () => {
   const [postedArticle, setPostedArticle] = useState([])
   const [postSuccess, setPostSuccess] = useState(false)
   const [showWarning, setShowWarning] = useState(false)

   const resetForm = () => {
      setPost({
         author: "",
         img: "",
         title: "",
         content: "",
      })
   }
   const [post, setPost] = useState({
      author: '',
      title: '',
      content: '',
      img: ''
   })

   const postData = async () => {

      if (post.author && post.content && post.title) {

         try {
            const res = await fetch('http://localhost:5020/articles', {
               method: 'POST',
               headers: {
                  "Content-Type": "application/json"
               },
               body: JSON.stringify(post)
            })

            const result = await res.json();
            setPostedArticle([result])
            setShowWarning(false)
            setPostSuccess(true)
            resetForm()

            setTimeout(() => {
               setPostSuccess(false)
            }, 3000);

         } catch (error) {
            console.log(error);
         }
      }
      else {

         setShowWarning(true)
         setTimeout(() => {
            setShowWarning(false)
         }, 3000);
         return
      }

   }
   return (
      <div className='container-padding'>
         <BigHeading>Post</BigHeading>

         <Form style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }} id='homeForm'>
            {showWarning &&
               <Box type="warning" message='warning!'>
                  <>Articles must include:
                     <span className='bold'> author, </span>
                     <span className='bold'>title, </span>
                     <span className='bold'>and content.</span>
                  </>
               </Box>
            }
            <InputItem className="input-item">

               <label htmlFor="author">Author</label>
               <TextInput
                  name="author"
                  id="author"
                  onChange={(e) => setPost({ ...post, author: e.target.value })}
                  value={post.author}
               />
            </InputItem>
            <InputItem className="input-item">

               <label htmlFor="url">Image URL</label>
               <TextInput
                  id="url"
                  name="url"
                  onChange={(e) => setPost({ ...post, img: e.target.value })}
                  value={post.img}
               />
            </InputItem>
            <InputItem className="input-item">

               <label htmlFor="title">Title</label>
               <TextInput
                  required
                  id="title"
                  name="title"
                  onChange={(e) => setPost({ ...post, title: e.target.value })}
                  value={post.title}
               />
            </InputItem>

            <div className="div" style={{ color: 'black' }}>
               <CKEditor
                  // config={{ plugins: [Markdown] }}
                  editor={ClassicEditor}
                  initData={post.content}
                  onChange={(event, editor) => {
                     const data = editor.getData();
                     setPost({ ...post, content: data })
                  }}
               />

            </div>

            <InputItem className="input-item">
               <Link width="content" onClick={postData} >Post</Link>
            </InputItem>

         </Form>

         <div className="parsed">
            {parse(post.content.toString())}
            <div className="dangerous" dangerouslySetInnerHTML={{ __html: post.content }}></div>
         </div>

         {/* <SmartBlock
            extensions={Extensions}
            html={'<h2>Hello World</h2><p>hello</p>'}
            onChange={({ json, html }) => { console.log(json, html); }}
         /> */}
      </div>
   )
}

export default Post
