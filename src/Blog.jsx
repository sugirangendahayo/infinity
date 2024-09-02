import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import BlogList from './BlogList'
import useFetch from './useFetch'
import Form from './Form'



const Blog = () => {
  const {data:blogs, error} = useFetch('http://localhost:8000/blogs')

  useEffect(()=>{
    Aos.init({duration: 1200})
})
  return (
    <div className='w-full overflow-hidden'>
      <div className=''>
          <div className='bg-gray-50 text-center md:text-left px-5 py-3'>
            <h1 className='text-3xl py-2 bg-gradient-to-r from-black to-purple-800 text-transparent bg-clip-text'>Let's discover more and dive into an infinite brain technologogy</h1>
            <p className='pt-2'>Hello, Here is <span>Salomon Elisha</span>, An enthusiast fullstack developper to empower world technology.</p>
            <button className='bg-white text-violet-800 rounded-full px-3 py-2  shadow-violet-600  shadow-sm hover:bg-violet-900 hover: mt-6 hover:text-white transition ease-in duration-300 '>Let's connect</button>
          </div>
          <div className='grid md:grid-cols-2 p-3 items-center'>
            <div className='bg-green-500 max-w-medium-max m-auto' data-aos="fade-up">
              <img src="/static/img/ref.jpg" alt="" className='w-full h-full ' />
            </div>
            <div className='text-center md:text-left px-4 py-3' data-aos="fade-up">
              <h1 className='text-3xl pb-4 bg-gradient-to-r from-black to-purple-700 text-transparent bg-clip-text font-semibold'>About me!</h1>
              <p className=''><span><b>Salomon Elisha - CEO of INFINITY</b>,</span> is a dedicated frontend developer with a growing passion for backend development. With a strong foundation in <b> React, NodeJS, PHP , Tailwindcss , HTML5, CSS3, and JavaScript </b>, Salomon is committed to crafting intuitive and visually appealing user interfaces. As he expands his skills into backend development, he is eager to contribute to full-stack projects and explore the intricacies of server-side programming. Salomon's enthusiasm for learning and problem-solving drives his pursuit of excellence in the field of web development.</p>
            </div>
          </div>
          <div className='blogs-list'>
           {blogs && <BlogList blogs={blogs} error={error} title="Current blogs"/>}
          </div>
          <div className=''>
           
          <div className=' pb-4 bg-gray-50'>
        <h2 className='text-center text-xl font-medium p-2 'data-aos="fade-down">Testimonials</h2>
        <hr className='w-small-width m-auto pb-1 bg-gray-600 rounded-full' />         
        </div>
            <div className='md:grid grid-cols-3 p-2 gap-4 bg-gray-50'>
              <div className='mb-2 text-center md:text-left bg-white px-5 py-3 shadow-md' data-aos="fade-right">
                <span>Solomon is a talented and dedicated software developer. His ability to understand complex technical requirements and translate them into efficient code is impressive.</span>
              <span className='block font-medium text-right'>#Eden Mario -Full stack dev</span>
              </div>
              <div className='mb-2 text-center md:text-left bg-white px-5 py-3 shadow-md' data-aos="fade-left">
               <span> Solomon has a knack for finding innovative solutions and delivering results that exceed expectations. </span>
               <span className='block text-right mt-11 font-medium'>#Shema - Data analyst</span>
               </div>
              <div className='mb-2 text-center md:text-left bg-white px-5 py-3 shadow-md' data-aos="fade-right">
                <span> Solomon is always eager to learn and improve his skills, making him a valuable and versatile developer."</span>
                <span className='block text-right mt-11 font-medium'>#Dr.Jay -DevOps Engineer</span>
              </div>
            </div>
            <div className='form'>
                <Form />
            </div>

            {/*  */}
          </div>


      </div>
    </div>
  )
}

export default Blog