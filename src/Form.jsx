import React from 'react'

import { useEffect, useState } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import emailjs from 'emailjs-com'; // Install emailjs-com using npm: npm install emailjs-com
import Swal from 'sweetalert2';
  

const Form = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace 'your_service_id' with your actual service ID from emailjs.com
    // Replace 'your_template_id' with your actual template ID from emailjs.com
    // Replace 'your_user_id' with your actual user ID from emailjs.com
    emailjs.sendForm('service_wp7pi6q', 'template_494qsjb', e.target, '55MnX0tnb86u15W99')
      .then((result) => {
        console.log(result.text);
        // Handle successful submission (e.g., show a success message)
        Swal.fire({
            title: "Succes!",
            text: "Your message has been sent successfully.",
            icon: "success"
        })
      })
      .catch((error) => {
        console.error(error.text);
        // Handle error (e.g., show an error message)
        Swal.fire({
            title: "Error!",
            text: "Try to connect on network.",
            icon: "error"
        })
      });
  };
    useEffect(()=>{
        Aos.init({duration: 1200})
    })
  return (
    <div className='md:grid grid-cols-2 items-center gap-2 py-2 '>
        <div className='px-3 py-3 md:px-3 md:py-0 text-center md:text-left' data-aos="fade-right">
            <h1 className='text-xl font-medium py-2 text-violet-900'>Let's connect and share more ideas about us!</h1>
            <p>With a passion for technology and a strong problem-solving mindset, I deliver custom software solutions that exceed client expectations.</p>
        </div>
        <div className='px-2' data-aos="fade-left">
        <form className='border-basic-border shadow-md' onSubmit={handleSubmit}>
            <div className='text-center md:text-left pl-3 py-3'>
                <h1 className='text-xl font-medium'>Get In Touch</h1> 
            </div>
            <div className=' px-2 mb-1'>
                <input type="text" className='w-full px-3 h-10 border-basic-border' placeholder='name'name='name' value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className=' px-2 mb-1'>
                <input type="email" className='w-full px-3 h-10 border-basic-border' placeholder='email'  name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className=' px-2 mb-1'>
                <textarea className='resize-none w-full px-3 h-20 border-basic-border' placeholder='message...' name='message' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            </div>
            <div className='px-2 mb-1'>
                <button className='text-white rounded w-full  px-2 py-2 shadow-black shadow-2xl mt-6 hover:bg-white hover:text-white transition ease-in duration-300 hover:border-basic-border border-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 ' type='submit'>Reach Out</button>
            </div>
        </form>
           
        </div>
    </div>
  )
}

export default Form