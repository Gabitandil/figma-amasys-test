import React from 'react'
import '../Assets/header.css'
import Logo from '../img/logo-default-slim-dark 1.png'
import Fb from '../img/fb.png'
import Ig from '../img/ig.png'
function Header() {
  return (
    <div className='container'>
    
        <img className='logo' src={Logo} alt="not found"  />
        <div className='redes-container'>
        <img src={Fb} alt="not found" />
        <img src={Ig} alt="not found" />
        </div>
        <p className='msg'>ENVIANOS UN WHATSAPP</p>
        
    </div>
  )
}

export default Header