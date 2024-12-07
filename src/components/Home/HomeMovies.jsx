import React from 'react'
import { Trending, OnlyNetflix, Reasons} from '../index.js'
import ReasonBox from './ReasonBox.jsx'
const HomeMovies = () => {
  return (
    <div className='max-w-[1340px] mx-auto my-[100px]  px-5 '>
        <h1  className='text-white font-bold text-3xl mb-7'>Trending now</h1>
      <div className='flex  overflow-auto gap-4 '>
      {Trending.map((item,key) => (
            <div key={key} className='flex justify-center mb-[50px] '>
                <img src={item.image}  alt="" className='max-w-[200px] object-cover rounded-xl hover:scale-105 transition-all duration-300'/>
            </div>
        ))}
      </div>
        <h1  className='text-white font-bold text-3xl  mb-7'>Only on Netflix</h1>
      <div className='flex  overflow-auto gap-4 '>
      {OnlyNetflix.map((item,key) => (
            <div key={key} className='flex justify-center mb-[50px] '>
                <img src={item.image}  alt="" className='max-w-[200px] object-cover rounded-xl hover:scale-105 transition-all duration-300'/>
            </div>
        ))}
      </div>
      <h1  className='text-white font-bold text-3xl mb-7'>More reasons to join</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
        {Reasons.map((item,key) => (
            <ReasonBox key={key} text={item.text} img={item.image}/>
        ))}
      </div>
    </div>
  )
}

export default HomeMovies