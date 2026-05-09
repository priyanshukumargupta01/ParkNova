import React from 'react'
import Logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <>
    <nav >
      <div
      className='h-16 flex items-center justify-between px-4'>
      <img className='h-20 ' src={Logo} alt="Logo" srcset="" />
      <div className='flex space-x-4'>
        <a href="/Home">Home</a>
        <a href="/About">About</a>
        <a href="/Contact">Contact</a>
      </div>
      </div>

      
    </nav>
    
    </>
  )
}

export default Navbar