import React, { useState } from 'react'
import { Avatar, AvatarBg, CommentInfo, Container, Heading, UserComment } from './commentElements'
import { Form, Link, TextArea, TextInput } from './formElements'
import FlipMove from 'react-flip-move';


const Comment = ({ comments, id, setData }) => {

   const API = `http://localhost:5020/articles/${id}/comment`;

   const [commentData, setCommentData] = useState({
      username: "",
      comment: ""
   })

   const clearForm = () => {
      setCommentData({
         username: "",
         comment: ""
      })
   }
   const postComment = async () => {
      if (commentData.username && commentData.comment) {

         try {
            const res = await fetch(API, {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify(commentData)
            })
            const result = await res.json()
            // console.log(result);
            setData(result)
            clearForm();

         } catch (error) {
            console.log(error);
         }
      }
      else {
         alert('Please enter your username and comment.')
      }

   }


   if (!comments) {
      return <p>no comment</p>
   }
   return (
      <Container className='comment-container'>
         <Heading className='comment-heading'>Comments</Heading>


         {comments.map((comment, key) => (
            <CommentInfo className='comment-info' key={key}>
               <AvatarBg>
                  <Avatar className='comment-user-avatar' src={comment.avatar} />
               </AvatarBg>
               <UserComment className='comment-user-comment-container'>
                  <h4 className='comment-user-username'>{comment.username}</h4>
                  <p className='comment-user-comment'>{comment.comment}</p>
               </UserComment>

            </CommentInfo>
         ))}

         <Form className='comment-form'>
            <TextInput
               type='text'
               placeholder='username'
               className='input username-input'
               onChange={e => setCommentData({ ...commentData, username: e.target.value })}
               value={commentData.username}
            />
            <TextArea
               placeholder='comment'
               onChange={e => setCommentData({ ...commentData, comment: e.target.value })}
               value={commentData.comment}
            />
            <Link placement="right" onClick={() => { postComment() }} >Comment</Link>
         </Form>

      </Container>
   )
}

export default Comment
