import React, { useState } from 'react'
import Logo from '../../assets/levi.png'


const Navbar = () => {

  return (
    <header className='top-0 bg-black w-full  px-4 lg:px-0 relative'>
      <div className=' max-w-7xl mx-auto flex h-14 items-center'>
        <div className='md:mr-4 flex justify-between w-full'>
          <a href="#" className='mr-6 flex items-center space-x-2 font-italian text-4xl text-purple-500'>
            iPlanning
          </a>
          <nav className='md:flex hidden items-center space-x-6 text-lg '>
            <a href="#about" className=' text-white'>About</a>
            <a href="#overview" className=' text-white'>Overview</a>
            <a href="#testimonials" className=' text-white'>Testimonials</a>
            <a href="#contact" className=' text-white'>Contact</a>
          </nav>
        </div>

      </div>

    </header>
  )
}

export default Navbar