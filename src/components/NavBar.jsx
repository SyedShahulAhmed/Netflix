import React, { useState } from 'react'
import {images} from './index'
const NavBar = () => {

    const [Out,setOut] = useState(false)
        const Display = () => {
            setOut(!Out)
        }
  return (
    <div className='w-full fixed top-0 right-0 left-0 z-20 bg-transparent text-white flex justify-between items-center md:px-12 px-4 py-6'>
        <div className='flex justify-center gap-12 items-center'>
            <img src={images.logo} alt="" className='w-32'/>
            <ul className=' hidden md:flex justify-center items-center gap-5 '>
                <li className='hover:text-gray-400 transition-all duration-300 cursor-pointer'>Home</li>
                <li className='hover:text-gray-400 transition-all duration-300 cursor-pointer'>Tv Shows</li>
                <li className='hover:text-gray-400 transition-all duration-300 cursor-pointer'>Movies</li>
                <li className='hover:text-gray-400 transition-all duration-300 cursor-pointer'>News & Popular</li>
                <li className='hover:text-gray-400 transition-all duration-300 cursor-pointer'>My List </li>
                <li className='hover:text-gray-400 transition-all duration-300 cursor-pointer'>Browse by Languages</li>
            </ul>
        </div>
        <div className='flex justify-center items-center '>
            <img src={images.search} alt="" className='w-6 invert mr-4 md:mr-7 cursor-pointer'/>
            <img src={images.Bell} alt="" className='w-6 invert mr-4 md:mr-7 cursor-pointer'/>
            <img src={images.Profile} alt="" className='w-10 rounded-lg mr-1  cursor-pointer' onClick={Display} />
            <img src={images.Darrow} alt="" className='w-4 invert relative cursor-pointer' onClick={Display} />
        </div>
        {Out ? <div className='absolute right-8 md:right-16 top-20 '>
            <a href='#' className='py-1.5 px-3 bg-gray-600'>Sign out of Netflix</a>
        </div> : ""}
    </div>
  )
}

export default NavBar