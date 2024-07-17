import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/logou.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <img src={logo} alt="Logo" className='h-20 md:h-24 filter brightness-200' />
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>ADM.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'><Link to="/">Home</Link></li>
        <li className='p-4'><Link to="/gallery">Gallery</Link></li>
        <li className='p-4'><Link to="/contact">Contact</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <img src={logo} alt="Logo" className='h-16 m-4' />
        <li className='p-4 border-b border-gray-600'><Link to="/" onClick={handleNav}>Home</Link></li>
        <li className='p-4 border-b border-gray-600'><Link to="/gallery" onClick={handleNav}>Gallery</Link></li>
        <li className='p-4 border-b border-gray-600'><Link to="/contact" onClick={handleNav}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;


