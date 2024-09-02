import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle click outside the navbar to close the menu
  const handleClickOutside = (event) => {
    if (!event.target.closest('.nav-container')) {
      setIsMenuOpen(false);
    }
  };

  // Handle link click to close the menu
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Add event listeners on component mount
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`bg-white text-black ${isMenuOpen ? 'fixed  top-0 left-0 w-full z-50 transition duration-300 ease-in-out' : ''}`}>
      <div className="container mx-auto px-4 py-2 nav-container font-light">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* <a href="/" className="text-xl font-bold">Your Logo</a> */}
            <img src="/img/inf2.png" alt="" className='w-28'/>
          </div>
          <div className="hidden md:flex items-center">
            <NavLink to="/" style={({isActive})=>{
              return isActive ? {color: "blue"} : {}
            }} className="mr-12 text-black hover:text-blue-600 font-medium" onClick={handleLinkClick}>Home</NavLink>
            <NavLink to="/services" style={({isActive})=>{
              return isActive ? {color: "blue"} : {}
            }} className="mr-12 block text-black hover:text-blue-600 font-medium" onClick={handleLinkClick}>Services</NavLink>
            <NavLink to="/blog" style={({isActive})=>{
              return isActive ? {color: "blue"} : {}
            }} className="mr-12 text-black hover:text-blue-600 font-medium" onClick={handleLinkClick}>Blog</NavLink>
            <NavLink to="/team" style={({isActive})=>{
              return isActive ? {color: "blue"} : {}
            }} className="mr-12 text-black hover:text-blue-600 font-medium" onClick={handleLinkClick}>Team</NavLink>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-blue-900 font-bold transition duration-700 ease-in">
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-8'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"></path>
</svg>
            </button>
          </div>
        </div>
        <div className={isMenuOpen ? 'block md:hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'hidden '}>
          <div className='flex justify-center'>
            <div className="m-4 text-center">
              <NavLink to="/" style={({isActive})=>{
              return isActive ? {color: "blue"} : {}
            }}  className="mr-4 p-3 block text-white hover:text-blue-500" onClick={handleLinkClick}>Home</NavLink>
              <NavLink to="/services" style={({isActive})=>{
              return isActive ? {color: "blue"} : {}
            }}  className="mr-4 p-3 block text-white hover:text-blue-600" onClick={handleLinkClick}>Services</NavLink>
              <NavLink to="/blog" style={({isActive})=>{
              return isActive ? {color: "blue"} : {}
            }}  className="mr-4 p-3 block text-white hover:text-blue-600" onClick={handleLinkClick}>Blog</NavLink>
              <NavLink to="/team" style={({isActive})=>{
              return isActive ? {color: "blue"} : {}
            }}  className="mr-4 p-3  text-white hover:text-blue-600 " onClick={handleLinkClick}>Team</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;