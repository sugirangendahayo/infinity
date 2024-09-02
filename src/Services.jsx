import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Services = () => {
  useEffect(()=>{
    Aos.init({duration: 1200})
})
  return (
    <div>
     <div className=' pb-4'>
        <h2 className='text-center text-xl font-medium p-2 '>Our Services</h2>
        <hr className='w-small-width m-auto pb-1 bg-gray-600 rounded-full' />         
        </div>
        <div>
          <div className='px-4 md:pb-5 md:pt-2 text-center md:text-left md:pl-14'>
          <p className='text-xl py-2'>We design and build software with the user experience in mind. Our goal is to create intuitive, engaging, and effective applications that exceed your expectations.</p>
          <p className='py-2' data-aos="fade-right"><span className='text-gray-600 '>@Let us turn your vision into a functional and user-friendly product.</span></p>
          </div>
       <div className='flex justify-center'>
            <div className='md:grid grid-cols-2 justify-between w-auto-width '>
            <div className="services" data-aos="fade-up">
                        <img src="/static/img/webss.jpg" alt="" className='' />
                        <div className="p-2 m-2 relative">
                            <span className="font-semibold text-xl">Creation of websites</span>
                            <span className="block text-gray-500 ">We specialize in crafting innovative and user-friendly websites that drive results.Our streamlined   ensures timely delivery of high-quality software.</span>
                            <div className='pt-3 flex justify-end'>
                            <button className='request-btn'><Link to="https://wa.me/+243907167367">Request</Link></button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="services" data-aos="fade-up">
                        <img src="/static/img/trainingweb.jpg" alt="" className='' />
                        <div className="p-2 m-2 relative">
                            <span className="font-semibold text-xl">Web Training</span>
                            <span className="block text-gray-500 ">Master the fundamentals of web development through our hands-on training programs, covering HTML, CSS, JavaScript, and popular frameworks.</span>
                            <div className='pt-3 flex justify-end'>
                            <button className='request-btn'><Link to="https://wa.me/+243907167367">Request</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="services" data-aos="fade-up">
                        <img src="/static/img/design.jpg" alt="" className='' />
                        <div className="p-2 m-2 relative">
                            <span className="font-semibold text-xl">Graphism and Design</span>
                            <span className="block text-gray-500 ">We specialize in creating visually stunning and impactful designs that elevate your brand and engage your audience.We offer comprehensive graphic and design services.</span>
                            <div className='pt-3 flex justify-end'>
                            <button className='request-btn'><Link to="https://wa.me/+243907167367">Request</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="services" data-aos="fade-up">
                        <img src="/static/img/writer.jpg" alt="" className='' />
                        <div className="p-2 m-2 relative">
                            <span className="font-semibold text-xl">Technical Writer</span>
                            <span className="block text-gray-500 "> we specialize in creating clear, concise, and informative technical documentation that empowers your users and enhances your product's value. delivering documentation that is easy to understand.</span>
                            <div className='pt-3 flex justify-end items-end'>
                            <button className='request-btn'><Link to="https://wa.me/+243907167367">Request</Link></button>
                            </div>
                        </div>
                    </div>
            </div>
               
       </div>
        </div>
    </div>
  )
}

export default Services