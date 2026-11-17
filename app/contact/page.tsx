import React from 'react'
import Container from '@/components/Container'
import Form from '@/components/Form'
const page = () => {
  return (
      <Container className='min-h-screen'>
      <div className='mt-10'>
        <div className='space-y-2'>
          <h1 className='text-2xl font-heading italic text-center'>Contact Chithraksha</h1>
          <p className='text-sm text-center font-sans'>Have a project in mind or just want to connect? Let’s start a conversation and turn your ideas into something meaningful.</p>
        </div>

        <div className=''>
          <div>
            email
          </div>
          <div>
            phone
          </div>
          <div>
            location
          </div>
        </div>

       <Form/>
      </div>
      </Container>
  )
}

export default page
