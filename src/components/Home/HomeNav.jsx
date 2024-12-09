import React from 'react'
import {images} from '../index.js'
import { useNavigate } from 'react-router-dom';
const HomeNav = () => {

  const navigate = useNavigate();

  return (
    <div className='md:px-14 px-7 py-5 flex justify-between items-center'>
        <img src={images.logo} alt="" className='md:w-[200px] w-[100px]'/>
        <button className='py-2 px-4 font-bold text-black rounded-full md:text-xl bg-white'  onClick={() => navigate('login')}>Signin</button>
    </div>
  )
}

export default HomeNav