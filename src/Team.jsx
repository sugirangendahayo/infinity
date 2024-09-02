
import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Team = () => {
  useEffect(()=>{
    Aos.init({duration: 1200})
})
 
  return (
   
    <div className=''>
    <div className=' pb-6'>
        <h2 className='text-center text-xl font-medium p-2 '>Our Team</h2>
        <hr className='w-small-width m-auto pb-1 bg-gray-600 rounded-full' />         
        </div>
        <div>
          <div className=' px-4 pb-5 text-medium md:pl-10 text-center'>
            <p>Below are personal and talented-dev workers behind this project, We contributed for the success and the greatness of infinity technology. Each of our workers has his(her) own specific domain in which he(she) intervenue for the success and improvment of infinity technology.  </p>
          </div>
          <div className=' w-pixel-basic-width pt-3 rounded shadow-md m-auto mb-3 mt-2' data-aos="fade-up">
          <div className=' w-1/2 h-36 m-auto rounded-full flex cursor-pointer'>
          <img src="img/avatar.jpg" alt="" className='rounded-full hover:scale-105 duration-500'  />
          </div>
           
            <div className='px-2 py-4 text-center'>
            <p className='text-medium font-medium'>Salomon Elisha</p>
            <p className=''><span className='text-sm text-violet-400'>CEO - INFINITY TECH</span></p>
            </div>
          </div>
          <div className='md:grid grid-cols-2 gap-2'>
          <div className=' w-pixel-basic-width pt-3 rounded shadow-md m-auto mb-3' data-aos="fade-up">
          <div className=' w-1/2 h-36 m-auto rounded-full flex cursor-pointer'>
          <img src="img/avatar.jpg" alt="" className='rounded-full hover:scale-105 duration-500'  />
          </div>
           
            <div className='px-2 py-4 text-center'>
            <p className='text-medium font-medium'>Hirwa Ngen</p>
            <p className=''><span className='text-sm text-violet-400'>PROJECT MANAGER</span></p>
            </div>
          </div>
          <div className=' w-pixel-basic-width pt-3 rounded shadow-md m-auto mb-3' data-aos="fade-up">
          <div className=' w-1/2 h-36 m-auto rounded-full flex cursor-pointer'>
          <img src="img/avatar.jpg" alt="" className='rounded-full hover:scale-105 duration-500'  />
          </div>
           
            <div className='px-2 py-4 text-center'>
            <p className='text-medium font-medium'>Amélie</p>
            <p className=''><span className='text-sm text-violet-400'>SYSTEMS ARCHITECT</span></p>
            </div>
          </div>
          <div className=' w-pixel-basic-width pt-3 rounded shadow-md m-auto mb-3' data-aos="fade-up">
          <div className=' w-1/2 h-36 m-auto rounded-full flex cursor-pointer'>
          <img src="img/avatar.jpg" alt="" className='rounded-full hover:scale-105 duration-500'  />
          </div>
           
            <div className='px-2 py-4 text-center'>
            <p className='text-medium font-medium'>Rémi</p>
            <p className=''><span className='text-sm text-violet-400'>GRAPHIST</span></p>
            </div>
          </div>
          <div className=' w-pixel-basic-width pt-3 rounded shadow-md m-auto mb-3' data-aos="fade-up">
          <div className=' w-1/2 h-36 m-auto rounded-full flex cursor-pointer'>
          <img src="img/avatar.jpg" alt="" className='rounded-full hover:scale-105 duration-500'  />
          </div>
           
            <div className='px-2 py-4 text-center'>
            <p className='text-medium font-medium'>Raphael amani</p>
            <p className=''><span className='text-sm text-violet-400'>TECHNICAL WRITER</span></p>
            </div>
          </div>
            
          </div>
          <div className='bg-gray-50 pt-2 pb-4' data-aos="fade-up">
          <h2 className='text-center text-xl font-medium p-2 '>Order and reach out with us via whatsapp! for faster communication. </h2>
          <div className='flex justify-center'>
          <button className='bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500  px-3 py-1 rounded text-white '><Link to="https://wa.me/+243907167367">Whatsapp</Link></button>
          </div>
          </div>
        </div>
    </div>
  
  )
}

export default Team