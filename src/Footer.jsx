import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { Link } from 'react-router-dom';
const Footer = () => {

    useEffect(()=>{
        Aos.init({duration: 1200})
    })

  return (
    <div className='font-light '>
    <div className='flex  justify-around py-3 px-3'>
        <div className='text-center' data-aos="fade-right">
            <h1 className='text-medium font-semibold text-gray-900 pb-3'>Infinity Tech</h1>
            <span className='text-gray-500'><Link to="/blog">#Who are we?</Link></span>
            <span className='block text-gray-500'><Link to="/blog">#Blog</Link></span>
        </div>
        <div className='text-center' data-aos="fade-right">
            <h1 className='text-medium font-semibold pb-3'>Timeliness</h1>
            <span className='block text-gray-500'><Link to="/blog">#Blog</Link></span>
            <span className='block text-gray-500'><Link to="/blog">#Work with us</Link></span>
        </div>
        <div className='text-center' data-aos="fade-right">
            <h1 className='text-medium font-semibold pb-3'>Social</h1>
            <p className='text-gray-500'><Link to="https://github.com/sugirangendahayo">Github</Link></p>
<p className='text-gray-500'><Link to="https://www.linkedin.com/in/SalomonElisha">LinkedIn</Link></p> 
<p className='text-gray-500'><Link to="https://www.instagram.com/yourinstagramhandle">Instagram</Link></p>
<p className='text-gray-500'><Link to="https://wa.me/+243907167367">Whatsapp</Link></p>

        </div>
    </div>
    <div>
        <hr className='w-1/2  h-0 m-auto'/>
        <div className='flex justify-around pt-6'>
            <div className=' w-1/3 text-center border-r-2 border-gray-400'><span>Conditions of use</span></div>
            <div className=' w-1/3 text-center border-r-2 border-gray-400'><span>Confidentislites privacy</span></div>
            <div className=' w-1/3 text-center'><span>Cookies privacy</span></div>
        </div>
        <div className='text-center pt-2 pb-12'><span>@Copyright 2024 - INFINITY TECH</span></div>
    </div>
    </div>
  )
}

export default Footer