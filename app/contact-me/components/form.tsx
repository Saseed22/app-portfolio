'use client'
import React,{useState} from 'react'

const Form = () => {
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [inputs,setInputs ] = useState('');

  async function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.currentTarget;
    const name = target.elements.namedItem('name') as HTMLInputElement;
    const company = target.elements.namedItem('company') as HTMLInputElement;
    const email = target.elements.namedItem('email') as HTMLInputElement;
    const message = target.elements.namedItem('message') as HTMLInputElement;
    
    const data = {
      name:name.value,
      company:company.value,
      email:email.value,
      message:message.value,
    }
    
    try {
      const response = await fetch('/api/contact', {
        method:"POST",
        body: JSON.stringify(data),
        headers: {
        "Content-Type":"application/json"
      }
      })
      if (!response.ok) {
        throw new Error("HTTP error! status:" + response.status);
      }

      setMessageSent(true);
      const responseData = await response.json();
      
      console.log(responseData)
      setInputs('')
    } catch (error:any) {
      console.log("there is a problem"+error.message)
    }
  }




  return (
    <>
    
    <form onSubmit={handleSubmit} className='p-10 '>
      <div className='mb-4'>
        <label htmlFor="name" className='label_form'>Name</label>
        <input id='name'type="text" name='name' className='input_form' required minLength={3} maxLength={20}/>
      </div>
      <div className='mb-4'>
        <label htmlFor="company" className='label_form'>Company</label>
        <input id='company'type="text" name='company' className='input_form'/>
      </div>
      <div className='mb-4'>
        <label htmlFor="email" className='label_form'>Email</label>
        <input id='email'type="text" name='email' className='input_form' required minLength={3} maxLength={20}/>
      </div>
      <div className='mb-4'>
        <label htmlFor="message" className='label_form'>Message</label>
        <textarea id='message' name='message' className='input_form'
        required minLength={10} maxLength={2000}/>
      </div>
      <button type='submit' className='bg-blue rounded-lg text-white hover:text-blue hover:bg-white min-w-100 px-5 py-2 hover:border-2 hover:border-blue'>
        Send Message
      </button>
      </form>
      {messageSent && <p>Message has been sent</p> }
    </>
  )
}

export default Form