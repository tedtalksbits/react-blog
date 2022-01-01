import React, { useState } from 'react'
import { Link, TextArea, TextInput } from './formElements'
import styled, { css } from 'styled-components'
import { EditImage, EditImageContainer, EditImageGrid, EditorApp, Label, InputItem } from './editorComponents'
import { post } from '../api/article'
import Toast from './Toast'

export const formItemMargin = css`
   margin: .5rem 0;
`

const FormItem = styled(InputItem)`
    ${formItemMargin}
    `
const Input = styled(TextInput)`
   margin: 0;
   border-radius: ${({ imgInput }) => imgInput && "0 0 10px 10px"};
   
   
   `
const FormTextArea = styled(TextArea)`
   width: 100%;
   ${formItemMargin}
   `
const FormInput = styled(TextInput)`
   margin: 0;
   border-radius: 0 10px 10px 0;
   width: 100%;
   
   
   `
export const fieldShadow = css`

${FormInput}, ${FormTextArea}{
      box-shadow: rgb(0 0 0 / 10%) 0px 0px 5px 0px, rgb(0 0 0 / 10%) 0px 0px 1px 0px;
     
   }
`

const Editor = ({ article, images, setData }) => {

   const [editArticle, setEditArticle] = useState({
      ...article
   })
   const [editSuccess, setEditSuccess] = useState(false)
   const save = async () => {
      const { _id } = article;
      const update = await post(editArticle, `http://localhost:5020/articles/${_id}`)
      setData(update);
      setEditSuccess(true)
      setTimeout(() => {

         setEditSuccess(false)
      }, 3000);

   }


   return (
      <EditorApp className="editor">

         <div className="notification" style={{ overflow: 'hidden' }}>

            {editSuccess &&
               <Toast
                  type="success"
                  toggle={editSuccess}
                  message={"success"} >
                  <h3>Saved Changes</h3>
               </Toast>}

         </div>
         <h1>Editor</h1>
         <div className="editor-inputs">
            <FormItem className="input-item">
               <Label htmlFor="author"><i className='bx bxs-user'></i> Author</Label>
               <FormInput type="text"
                  autoFocus
                  name="author"
                  id="author"
                  value={editArticle.author}
                  onChange={(e) => setEditArticle({ ...editArticle, author: e.target.value })}
               />
            </FormItem>
            <FormItem className="input-item">
               <Label htmlFor="author_link"><i className='bx bx-link'></i> Link</Label>
               <FormInput type="text"
                  name="author_link"
                  id="author_link"
                  value={editArticle.author_link}
                  onChange={(e) => setEditArticle({ ...editArticle, author_link: e.target.value })}
               />
            </FormItem>
            <FormItem className="input-item">
               <Label htmlFor="title"><i className='bx bx-text'></i> Title</Label>
               <FormInput type="text"
                  name="title"
                  id="title"
                  value={editArticle.title}
                  onChange={(e) => setEditArticle({ ...editArticle, title: e.target.value })}
               />
            </FormItem>

            <FormItem className="input-item">
               <Label htmlFor="content_link"><i className='bx bx-link'></i> Link</Label>
               <FormInput type="text"
                  name="content_link"
                  id="content_link"
                  value={editArticle.content_link}
                  onChange={(e) => setEditArticle({ ...editArticle, content_link: e.target.value })}
               />
            </FormItem>
            <FormItem className="input-item">
               <Label htmlFor="img"><i className='bx bxs-image' ></i> Image</Label>
               <FormInput type="text"
                  name="img"
                  id="img"
                  value={editArticle.img}
                  onChange={(e) => setEditArticle({ ...editArticle, img: e.target.value })}
               />
            </FormItem>
            <div className="input-item">
               {/* <Label htmlFor="content">content</Label> */}
               <FormTextArea type="text"
                  name="content"
                  id="content"
                  value={editArticle.content}
                  onChange={(e) => setEditArticle({ ...editArticle, content: e.target.value })}
                  rows='30'
               />
            </div>
            <div className="save-edit">
               <Link onClick={save}>Save</Link>
            </div>
         </div>
         <EditImageGrid className="imgs">

            {images.map((el, key) => (
               <EditImageContainer className="img-edit" key={key}>
                  <EditImage className="imgs" key={key} src={el} />
                  {/* <Input type="text" value={el} imgInput={true} onChange={(e) => setEditArticle({ ...editArticle, additional_img: e.target.value })} /> */}
               </EditImageContainer>

            ))}

         </EditImageGrid>



      </EditorApp>
   )
}

export default Editor
