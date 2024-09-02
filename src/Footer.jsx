import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
const Footer = () => {

    useEffect(()=>{
        Aos.init({duration: 1200})
    })

  return (
    <div className='font-light '>
    <div className='flex  justify-around py-3 px-3'>
        <div className='text-center' data-aos="fade-right">
            <h1 className='text-medium font-semibold text-gray-900 pb-3'>Infinity Tech</h1>
            <span className='text-gray-500'>#Who are we?</span>
            <span className='block text-gray-500'>#Blog</span>
        </div>
        <div className='text-center' data-aos="fade-right">
            <h1 className='text-medium font-semibold pb-3'>Timeliness</h1>
            <span className='block text-gray-500'>#Recruitement</span>
            <span className='block text-gray-500'>#Work with us</span>
        </div>
        <div className='text-center' data-aos="fade-right">
            <h1 className='text-medium font-semibold pb-3'>Social</h1>
            <p className='text-gray-500'>Github</p>
<p className='text-gray-500'>LinkedIn</p>
<p className='text-gray-500'>Instagram</p>
<p className='text-gray-500'>Whatsapp</p>

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