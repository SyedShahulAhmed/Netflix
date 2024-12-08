import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
const HomePage = () => {
  return (
    <div className='bg-black'>
        <NavBar/>
        <Hero/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default HomePage