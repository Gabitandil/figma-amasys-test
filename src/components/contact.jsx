import React from 'react'
import '../Assets/contact.css'
import Form from './form'
import Logo from '../img/logo-default-slim-dark 1.png'
import cuadrado from '../img/cuadrado.png'
import relleno from '../img/relleno-cuadrado.png'
import wsp from '../img/wsp.png'
function Contact() {
  return (
    <div className='contact-container'>
      <Form/>  
      <div className='contact-info'>

      
        <img className='contact-logo' src={Logo} alt="not found" />
        <div className='redes-contacto'>

      <img src={cuadrado} alt="not found" />
      <img className='img-filler' src={relleno} alt="not found" />
        <h1 className='email-title'>ESCRIBINOS A:</h1>
        <p className='email-text'>info@amasys.com.ar</p>
        </div>
        <div className='redes-contacto'>
          <img src={wsp} alt="not found" />
        <h1 className='wsp-title'>WHATSAPP </h1>
        <p className='wsp-text' >(+54) 9 11 66241227</p>
        </div>
      </div>
    </div>
  )
}

export default Contact