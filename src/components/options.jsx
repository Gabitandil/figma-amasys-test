import React from 'react'
import '../Assets/options.css'
import Web from '../img/web.png'
import Sistemas from '../img/sistemas.png'
import Stock from '../img/stock.png'
import Cursos from '../img/cursos.png'
import Reservas from '../img/reservas.png'
import Pasajes from '../img/pasajes.png'
function Options() {
  return (
    <div className='opt-container'>
        <div className='element-container'>
        <img  className='test'   src={Web} alt="" />
        <p>DISEÑO WEB</p>
        </div>
        <div className='element-container'>
        <img    src={Sistemas} alt="" />
        <p>SISTEMAS</p>
        </div>
        <div className='element-container'>
        <img    src={Stock} alt="" />
        <p>SISTEMA DE FACTURACION Y STOCK</p>
        </div>
        <div className='element-container'>
        <img    src={Cursos} alt="" />
        <p>SISTEMAS CURSOS</p>
        </div>
        <div className='element-container'>
        <img    src={Reservas} alt="" />
        <p>SISTEMAS DE RESERVA</p>
        </div>
        <div className='element-container'>
        <img    src={Pasajes} alt="" />
        <p>SISTEMAS DE PASAJE</p>
        </div>
          
        
          
      
        
    </div>
  )
}

export default Options