import React from 'react'
import Logo from '../assets/logo1.jpg'
//Import Link
import { Link, Element } from 'react-scroll';

const Header = () => {
  return (
    <header className='bg-black/95 py-1'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          { }
          <a href="#">
            <img className='logo' src={Logo} alt="" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header