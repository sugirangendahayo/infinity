import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const {data:blog, error} = useFetch("http://localhost:8000/blogs/" + id)
  return (
    <div className='blog-details'>
       {error && <div>{ error }</div> }
       {blog && (
        <article className='px-4'>
            <div className='text-center md:text-left'>
            <h2 className='text-2xl py-4 font-medium'>{ blog.title }</h2>
            <p className='text-sm py-2 text-violet-900 '>Written by { blog.author }</p>
            </div>
            <div className='text-center md:text-left py-3 px-2'>
                {blog.body}
            </div>
            <div className='pb-5'>
                <button className='float-end bg-violet-700 p-2 rounded text-white'>Dowload PDF</button>
            </div>
        </article>
       )}
    </div>
  )
}

export default BlogDetails