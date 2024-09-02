import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({blogs, title, error}) => {
    useEffect(()=>{
        Aos.init({duration: 1200})
    })
  return (
    <div className='blog-list '>
        <div className=' pb-4'>
        <h2 className='text-center text-xl font-medium p-2 'data-aos="fade-down">{ title }</h2>
        <hr className='w-small-width m-auto pb-1 bg-gray-600 rounded-full' />         
        </div>
        { error }
        <div className='md:flex flex-wrap justify-center'>
      
        {
            blogs.map((blog) => (

                <div className='blog-preview bg-white rounded-xl shadow-lg cursor-pointer px-2 md:w-1/3 m-2  py-3 text-center ' data-aos="fade-up" key={blog.id} >
                    <Link to={`/blogs/${blog.id}`}>
                        <h2 className='text-xl font-medium text-violet-950'>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                   
                </div>
            ))}
         </div>
        
    </div>
  )
}

export default BlogList