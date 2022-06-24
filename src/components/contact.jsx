import React from 'react'
import '../Assets/contact.css'
import Form from './form'
import Logo from '../img/logo-default-slim-dark 1.png'
function Contact() {
  return (
    <div className='contact-container'>
      <Form/>  
      <div className='contact-info'>
        <img className='contact-logo' src={Logo} alt="not found" />
        <h1>ESCRIBINOS A:</h1>
        <p>info@amasys.com.ar</p>
        <h1>WHATSAPP </h1>
        <p>(+54) 9 11 66241227</p>
      </div>
    </div>
  )
}

export default Contact