import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Cards from '../components/Cards'

const HomePage = () => {
  return (
    <div className='bg-black'>
        <NavBar/>
        <Hero/>
        <Cards/>
    </div>
  )
}

export default HomePage