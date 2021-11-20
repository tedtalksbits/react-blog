import React, { useState } from 'react'
import { Avatar, AvatarBg, CommentInfo, Container, Heading, UserComment } from './commentElements'
import { Button, Form, TextArea, TextInput } from './formElements'
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
            const req = await res.json()
            console.log(req);
            setData(req)
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
         <FlipMove>

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
         </FlipMove>
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
            <Button placement="right" onClick={() => { postComment() }} >Comment</Button>
         </Form>

      </Container>
   )
}

export default Comment
