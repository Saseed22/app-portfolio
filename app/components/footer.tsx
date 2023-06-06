import React from 'react'
import { AiFillLinkedin, AiFillTwitterCircle, AiOutlineMail, AiFillInstagram } from 'react-icons/ai'

type FooterProps = {
  contactMeLinks:string[]
}

const Footer = ({contactMeLinks}:FooterProps) => {
  return (
    <footer className='w-full bg-white shadow-footer mt-12 py-4 fixed bottom-0 '>
      <div className='flex items-center justify-center gap-1'>
        <a href={contactMeLinks[0]} aria-label='Email'>
          <AiOutlineMail className='icons_contact_me'/>
          </a>
        <a href={contactMeLinks[1]} aria-label='Twitter'>
          <AiFillTwitterCircle className='icons_contact_me'/>
          </a>
        <a href={contactMeLinks[2]} aria-label='Linkdin'>
          <AiFillLinkedin className='icons_contact_me'/>
          </a>
        <a href={contactMeLinks[3]} aria-label='Instagram'>
          <AiFillInstagram className='icons_contact_me'/>
          </a>
      </div>
    </footer>
  )
}

export default Footer