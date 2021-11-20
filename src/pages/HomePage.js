
import React from 'react'
import styled from 'styled-components'
import { BigHeading } from '../components/bigHeading'
import DropDown from '../components/DropDown'
import { Button, Form, TextArea, TextInput } from '../components/formElements'

const Page = styled.div`
   height: 100vh;
   display: grid;
   place-items: center;
   text-align: center;
   

`
const HomePage = () => {

   return (
      <>
         <Page className='container-padding' >
            <div className="center-home-div" style={{ marginBottom: '10rem' }}>
               <BigHeading style={{ margin: '0' }}>Bloggio</BigHeading>
               <h2 style={{ marginTop: '1.4rem' }}>Welcome To The Web Dev Blog!</h2>
               <Button width='content' href="#home-post">Post An Article</Button>
            </div>
         </Page>

         {/* add psot functionality */}
         <Page id="home-post">
            <Form>
               <BigHeading>Post an Article</BigHeading>
               <TextInput placeholder='author' />
               <TextInput placeholder='img url' />
               <DropDown >
                  <TextInput style={{ width: '100%' }} />
                  <TextInput style={{ width: '100%' }} />
                  <TextInput style={{ width: '100%' }} />

               </DropDown>
               <TextInput placeholder='title' />
               <TextArea placeholder='content' />
               <Button placement="right" >Post</Button>
            </Form>
         </Page>

      </>
   )
}

export default HomePage
