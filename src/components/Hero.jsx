import React from 'react'
import { images } from './index.js'
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
const Hero = () => {
  return (
    <div>
        <img src={images.HeroBanner} alt="" className='w-[100%] h-screen object-cover relative z-0'/>
        <div className='absolute md:top-0 left-0 pl-6 md:pl-12 bottom-0 md:mt-[250px] text-white z-10 w-full '>
            <img src={images.Hero} alt="" className='w-[90%] max-w-[420px] mb-[30px] '/>
            <p className='max-w-[700px]  md:text-lg font-semibold '> When a plane mysteriously lands years after takeoff, the people onboard return to a world that has moved on without them and face strange new realities.</p>
            <div className='flex justify-start items-center gap-4 mt-[20px]'>
                <button className='py-3 px-6 flex justify-center items-center bg-white rounded max-w-[150px] text-lg text-black font-bold gap-3 hover:bg-[#ffffffbf]'><FaPlay size={20} className='text-black'/>Play</button>
                <button className='flex justify-center items-center bg-[#566057] font-bold py-3 px-6 rounded max-w-[200px] text-lg gap-3 hover:bg-[#6d6d6e66]'><IoMdInformationCircleOutline size={30} className=''/>More Info</button>
            </div>
        </div>
    </div>
  )
}

export default Hero