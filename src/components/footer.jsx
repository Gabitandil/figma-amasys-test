import React from 'react'
import '../Assets/header.css'
import Logo from '../img/logo-default-slim-dark 1.png'
import Fb from '../img/fb-footer.png'
import Ig from '../img/ig-footer.png'
import '../Assets/footer.css'
function Footer() {
  return (
    <div className='footer-container'>
    
        <img className='logo' src={Logo} alt="not found"  />
        <div className='redes-container-footer'>
        <img src={Fb} alt="not found" />
        <img  src={Ig} alt="not found" />
        </div>
        <p className='msg-footer'>ENVIANOS UN WHATSAPP</p>
        
    </div>
  )
}

export default Footer