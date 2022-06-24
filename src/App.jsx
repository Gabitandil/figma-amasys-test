import { useState } from 'react'

import './Assets/app.css'
import Header from './components/header'
import Options from './components/options'
import Contact from './components/contact'
import Footer from './components/footer'
function App() {
  

  return (
  <div className='container'>
    <Header/>
    
    <Options/>

    <Contact/>
   
   <Footer/>
  </div>
  )
}

export default App
