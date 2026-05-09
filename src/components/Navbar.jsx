import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <>
      <nav >
        <div
          className='h-20 flex items-center justify-between px-4 bg-gray-800 text-white'>
          <div className='flex items-center gap-2'> 
            <img className='h-18 ml-2' src={Logo} alt="Logo" srcset="" />
            <h3 className='text-xl text-white font-bold'>ParkNova</h3>
          </div>
          <div className='flex space-x-4 m-4 justify-evenly'>
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