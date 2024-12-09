import React from 'react'
import { FaGithub,FaLinkedin,FaInstagram   } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full bg-gray-900 text-white'>
    
    <div className='max-w-[1340px] mx-auto px-7 py-5 flex flex-col md:flex-row justify-between items-center'>
        <h1 className='font-semibold text-lg'>Developed by <span className='text-red-600'>Shahul Ahmed</span></h1>
        <ul className='flex justify-center items-center gap-5 mt-3 md:mt-0'>
            <Link to={'https://github.com/SyedShahulAhmed'}><li><FaGithub size={25} className='text-red-600 hover:text-red-900'/></li></Link>
            <Link to={'https://www.linkedin.com/in/shahul-ahmed'}><li><FaLinkedin size={25} className='text-red-600 hover:text-red-900'/></li></Link>
            <Link to={'https://x.com/ShahulAhmed17'}><li><FaSquareXTwitter size={25} className='text-red-600 hover:text-red-900'/></li></Link>
            <Link to={'https://www.instagram.com/vincenzo_773/'}><li><FaInstagram size={25} className='text-red-600 hover:text-red-900'/></li></Link>
        </ul>
    </div>

    </div>
  )
}

export default Footer