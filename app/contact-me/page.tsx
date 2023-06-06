import React from 'react'
import { contactMeText } from '../data/data'
import Form from './components/form'

const ContactMePage = () => {
  return (
    <div className='flex flex-col w-11/12 content-center m-auto mt-10'>
      <h2>CONTACT ME</h2>
      <div className='flex sm:flex-row flex-col w-9/12 content-center m-auto bg-grey p-20 gap-20'>
        <div className='flex flex-col w-2/4'>
          <h3 className='text-2xl mb-10 font-bold italic'>{ contactMeText.title}</h3>
          <p>{ contactMeText.body}</p>
        </div>
        <div className='w-2/4'>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default ContactMePage