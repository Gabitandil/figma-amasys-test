import React from 'react'
import '../Assets/form.css'
function Form() {
  return (
    <div className='form-container'>
      
     <div className='input-container'>
     <input className='input' type="text" placeholder='Nombre' />
        <input className='input' type="text" placeholder='Apellido'  />
     </div>
     <div className='input-container'>
     <input className='input' type="text" placeholder='Empresa' />
        <input className='input' type="text" placeholder='Motivo de la consulta'  />
     </div>
     <div className='input-container'>
     <input className='input' type="text" placeholder='Email' />
        <input className='input' type="text" placeholder='Telefono' />
     </div>
        <div >
            <input className='big-input' type="text" placeholder='Consulta...' />
            </div>
        
        <button>Enviar</button>
       
    </div>
  )
}

export default Form