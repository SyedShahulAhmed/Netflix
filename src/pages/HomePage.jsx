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
        <Cards title={"Now Playing"} Cat={'now_playing'}/>
        <Cards title={"Top Rated"} Cat={'top_rated'}/>
        <Cards title={"Upcoming"} Cat={'upcoming'}/>
        <Cards title={"Popular"} Cat={"popular"}/>
        <Footer/>
    </div>
  )
}

export default HomePage