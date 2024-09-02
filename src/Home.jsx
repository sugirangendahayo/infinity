import { useEffect } from 'react';
import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';


 

const Home = () => {
  useEffect(() => {
    // Initialize Animate on Scroll here if needed
    Aos.init({duration: 1200})
  }, []);
  return(
    <div className='max-w-wrap-width  py-4 font-light'>
      <div className='grid md:grid-cols-2 px-5 items-center'>
     <div className='order-2 md:order-1 text-center md:text-left px-4 md:px-0'>
     <h1 className='text-3xl pb-4 md:text-4xl md:pb-10 text-blue-950 font-semibold bg-gradient-to-r from-indigo-950 to-purple-400 text-transparent bg-clip-text'>INFINITY</h1>
      <p className='text-medium md:text-2xl text-gray-600 pb-5 leading-9'>
    Welcome on our website, Let's work together to empower the development and improve this infinite technologogy.
    </p>
    <p className='text-2xl text-gray-600 md:pb-10'>#Let's build a world technology</p> 
    <button  className=' text-white rounded-full px-10 py-2 shadow-black shadow-2xl mt-6 hover:bg-white hover:text-white transition ease-in duration-300 hover:border-basic-border border-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 '><Link to="/blog">About us</Link></button>
    
    </div>
    <div className=' overflow-hidden order-1  md:order-2 max-w-medium-max m-auto'>
      <img src="/static/img/Image1.png" alt="" className=' animate-bounce-slow max-full h-full' />
      </div>
      </div>
      <br />
      <br />
      <br />
      
    </div>
  )
  
}

export default Home